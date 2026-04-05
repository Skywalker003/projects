// Pure analytics functions — no React, no hooks, no side effects.

/**
 * Returns monthly income + expense totals for the last N months,
 * ordered oldest → newest (for chart display).
 */
export function getMonthlyTotals(transactions, monthCount = 6) {
  const months = [];
  const now = new Date();

  for (let i = monthCount - 1; i >= 0; i--) {
    const d = new Date(now.getFullYear(), now.getMonth() - i, 1);
    const key = d.toISOString().slice(0, 7); // "YYYY-MM"
    const label = d.toLocaleDateString('en-IN', { month: 'short' }); // "Jan"

    const txs = transactions.filter(tx => tx.date.startsWith(key));
    const income  = txs.filter(t => t.type === 'income' ).reduce((a, t) => a + t.amount, 0);
    const expense = txs.filter(t => t.type === 'expense').reduce((a, t) => a + t.amount, 0);
    const savings = income - expense;

    months.push({ key, label, income, expense, savings });
  }

  return months;
}

/**
 * Returns expense totals by category, sorted descending by total.
 * Includes a `pct` field (percentage of total expense).
 */
export function getCategoryBreakdown(transactions) {
  const expenseTxs = transactions.filter(tx => tx.type === 'expense');
  const totalExpense = expenseTxs.reduce((a, tx) => a + tx.amount, 0);

  const map = {};
  for (const tx of expenseTxs) {
    map[tx.category] = (map[tx.category] ?? 0) + tx.amount;
  }

  return Object.entries(map)
    .map(([category, total]) => ({
      category,
      total,
      pct: totalExpense > 0 ? Math.round((total / totalExpense) * 100) : 0,
    }))
    .sort((a, b) => b.total - a.total);
}

/**
 * Returns daily running-balance data points from the start of the range to today.
 * Starting balance = sum of all transactions BEFORE the range window.
 */
export function getBalanceTrend(transactions, monthCount) {
  const now = new Date();
  const rangeStart = new Date(now.getFullYear(), now.getMonth() - monthCount + 1, 1);
  const rangeStartStr = rangeStart.toISOString().slice(0, 10);
  const todayStr = now.toISOString().slice(0, 10);

  // Balance accumulated before the window
  let running = transactions
    .filter(tx => tx.date < rangeStartStr)
    .reduce((acc, tx) => acc + (tx.type === 'income' ? tx.amount : -tx.amount), 0);

  // Walk day-by-day through the range
  const points = [];
  const cur = new Date(rangeStart);

  while (cur.toISOString().slice(0, 10) <= todayStr) {
    const dateStr = cur.toISOString().slice(0, 10);

    for (const tx of transactions.filter(t => t.date === dateStr)) {
      running += tx.type === 'income' ? tx.amount : -tx.amount;
    }

    points.push({
      date: dateStr,
      balance: running,
      label: cur.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' }),
    });

    cur.setDate(cur.getDate() + 1);
  }

  return points;
}

/**
 * Derives unique month strings ("YYYY-MM") from a transaction array,
 * sorted newest first. Used to populate the month filter dropdown.
 */
export function getUniqueMonths(transactions) {
  const months = [...new Set(transactions.map(tx => tx.date.slice(0, 7)))];
  return months.sort((a, b) => (a < b ? 1 : -1));
}

/**
 * Derives unique category strings from a transaction array, sorted A-Z.
 */
export function getUniqueCategories(transactions) {
  return [...new Set(transactions.map(tx => tx.category))].sort();
}
