# FinTrack — Personal Finance Dashboard

A clean, interactive finance dashboard built with React. Track income and expenses, explore spending patterns, and manage transactions — all in the browser with no backend required.

---

## Screenshots

> Dashboard (light mode)

![Dashboard](./src/assets/hero.png)

---

## Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev

# 3. Open in browser
# http://localhost:5173
```

```bash
# Production build
npm run build
npm run preview
```

**Requirements:** Node 18+

---

## Features

### Dashboard
- **Summary cards** — Total Balance, Income This Month, Expenses This Month, each with a % change badge vs the previous month
- **Count-up animation** — numbers animate from 0 on page load
- **Income vs Expenses bar chart** — grouped Recharts BarChart across the last 6 months with ₹-formatted tooltip
- **Spending breakdown donut** — current month expenses by category with a custom legend showing % share and ₹ amount
- **Recent transactions** — last 5 entries with emoji icons; "View all →" navigates to Transactions

### Transactions
- **Full transaction table** — Date, Description, Category, Type, Amount columns
- **Text search** — matches description and category simultaneously, live-filtered
- **Filters** — Type (All / Income / Expense), Category, Month dropdowns; all derived from actual data
- **Clear button** — resets all active filters in one click
- **Result count** — "Showing X of Y transactions" updates live
- **Sortable columns** — click any header to sort; click again to toggle asc/desc; active column shows directional arrow
- **Category badges** — colour-coded dot per category
- **Type badges** — green for income, red for expense
- **CSV export** — Admin only; exports the current filtered view

### Insights
- **KPI cards** — Top spending category, Savings rate %, Total transactions, Average transaction value
- **Savings rate badge** — contextual label: "Great job! Above 20%" / "Try to hit 20%" / "Expenses exceed income"
- **Monthly savings chart** — each bar Cell-coloured green (surplus) or red (deficit); ReferenceLine at zero
- **Category ranking** — plain CSS horizontal bars, no chart library; shows emoji, name, % share, ₹ amount
- **Observation card** — 1–3 auto-generated plain-English insights based on your data

### Role-based UI
| Feature | Viewer | Admin |
|---|---|---|
| View dashboard, transactions, insights | ✓ | ✓ |
| Add transaction | — | ✓ |
| Edit transaction | — | ✓ |
| Delete transaction | — | ✓ |
| Export CSV | — | ✓ |

### Other
- **Dark mode** — full theme switch via CSS custom properties; persisted across sessions
- **Responsive** — works on mobile (375px), tablet (768px), and desktop (1280px+); sidebar collapses to a drawer on mobile
- **localStorage persistence** — transactions, role, and theme all survive a page refresh
- **Animations** — `fadeInUp` entrance with staggered delays on cards; `bar-grow` on category ranking bars

---

## Role Switching

The role switcher is in the **bottom-left of the sidebar**.

1. Open the dropdown and select **Admin**
2. The role badge updates immediately: "Admin — full access"
3. The **Add Transaction** button appears in the top-right header
4. **Edit** and **Delete** buttons appear on each transaction row
5. **Export CSV** button appears on the Transactions page

Switch back to **Viewer** at any time to see the read-only experience. The selected role persists across page refreshes.

---

## State Management

All application state lives in a single `AppContext` powered by `useReducer`. There is no Redux, Zustand, or any external state library.

### State shape

```js
{
  transactions: [],      // persisted to localStorage
  role: "viewer",        // "viewer" | "admin" — persisted
  theme: "light",        // "light" | "dark" — persisted
  currentPage: "dashboard",
  filters: { search, type, category, month },
  sortConfig: { column, direction },
  modalState: { isOpen, mode, editId },
  toast: null            // { message, type } | null
}
```

### Derived state via hooks

No computed values are stored in the reducer. Instead:

| Hook | What it computes |
|---|---|
| `useTransactions` | Filtered + sorted transaction list via `useMemo` |
| `useAnalytics` | Monthly totals, category breakdown, savings rate, KPIs — all via `useMemo` |

This means the reducer stays simple (pure data mutations only) and derived values automatically stay in sync without any manual cache invalidation.

### localStorage sync

The reducer directly syncs `transactions`, `role`, and `theme` to localStorage on every relevant action. On first load, `initialState.js` reads from localStorage and falls back to the 50-item mock dataset if nothing is stored.

---

## Project Structure

```
src/
  context/
    AppContext.jsx       createContext + Provider
    reducer.js          all action handlers (12 actions)
    initialState.js     state shape + localStorage seed
  data/
    mockTransactions.js 50 realistic Indian ₹ transactions across 6 months
    categories.js       11 categories with CSS variable + hex colours + emojis
  hooks/
    useAppContext.js     guarded context hook
    useTransactions.js  filtered + sorted list via useMemo
    useAnalytics.js     all computed financial metrics
  utils/
    formatters.js       formatINR, formatDate, formatMonth, formatPct, generateId
    analytics.js        getMonthlyTotals, getCategoryBreakdown, getUniqueMonths
    exportCSV.js        Blob URL CSV download
  components/
    layout/             Layout, Sidebar, Header
    dashboard/          SummaryCards, MonthBarChart, SpendingPieChart,
                        RecentTransactions, CountUpNumber
    transactions/       FilterBar, TransactionTable, TransactionRow,
                        SortableHeader
    insights/           InsightKPIs, SavingsBarChart, CategoryRanking,
                        ObservationCard
    shared/             Modal, TransactionForm, TransactionModal,
                        ConfirmDialog, Badge, EmptyState, Toast
  pages/
    Dashboard.jsx
    Transactions.jsx
    Insights.jsx
  styles/
    index.css           CSS custom properties, reset, dark mode tokens,
                        scrollbars, focus styles
    layout.css          sidebar, header, page grids
    components.css      cards, badges, buttons, table, form, modal, toast
    animations.css      fadeInUp keyframes + stagger delay classes
    responsive.css      breakpoints: 1024px, 768px, 600px
```

---

## Tech Stack

| Tool | Why |
|---|---|
| **React 18 + Vite** | Fast HMR, modern JSX transform, zero config |
| **Plain CSS + Custom Properties** | Full control over dark mode, no runtime overhead, demonstrates CSS depth |
| **Context API + useReducer** | Right-sized for this scope — no Redux boilerplate, still predictable |
| **Recharts** | Declarative SVG charts with good React integration; only used for 3 chart types |
| **localStorage** | Satisfies persistence requirement with ~10 lines of code per slice |

No UI component library. Every component is hand-built. This was a deliberate choice to demonstrate CSS and component composition skills rather than theme-overriding a third-party library.

No routing library. Page switching is handled via `currentPage` in state — clean for a 3-page app and one less dependency.

---

## Design Decisions

**Indian ₹ locale throughout** — all numbers formatted with `Intl.NumberFormat('en-IN')` and `currency: 'INR'`. Mock data uses Swiggy, Zomato, Ola, HDFC SIP etc. for realism.

**Two colour maps per category** — `CATEGORY_COLOR` uses CSS variables (for HTML/CSS contexts like badges), `CATEGORY_HEX` uses hex strings (for Recharts `Cell` fill which renders SVG and can't resolve CSS variables).

**`useAnalytics` as the single source of computed truth** — monthly totals, category breakdowns, savings rate, KPIs, and observation strings are all derived in one `useMemo` block. No risk of components computing the same thing differently.

**Expense-inverted change badges** — on the Expenses card, a % increase is shown in red (bad) and a decrease in green (good). The income and balance cards use the normal convention.

**CSS-only animations** — `fadeInUp` keyframes with stagger delay classes (`stagger-1` through `stagger-8`) give entrance animations without Framer Motion. The stagger is applied via CSS animation-delay, not JavaScript timers.

**`color-scheme: light/dark`** — applied to `:root` and `[data-theme="dark"]` so native browser controls (date picker, select options, number spinners) automatically match the active theme without custom styling every element.

---

## Known Limitations / Assumptions

- **No backend** — data is mock-seeded and stored in localStorage only. Clearing browser storage resets to the 50 mock transactions.
- **No real authentication** — role switching is a UI demo only, not a security boundary.
- **Date capped at today** — the form prevents future-dated transactions (`max={today}` on the date input).
- **Single currency** — hardcoded to Indian Rupees (₹). Adding multi-currency support would require a currency field and conversion logic.
- **No pagination** — 50 transactions render fine in a table; pagination would be needed at ~500+ rows.
- **Chart tooltips use inline styles** — Recharts custom tooltips use inline CSS variables which work because the tooltip renders in the React tree, not the SVG.
