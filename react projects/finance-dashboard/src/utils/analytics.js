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
