import { useMemo } from 'react';
import { useAppContext } from './useAppContext';
import { getMonthlyTotals, getCategoryBreakdown, getBalanceTrend } from '../utils/analytics';

const RANGE_LABELS = { 1: 'This month', 3: 'Last 3 months', 6: 'Last 6 months', 12: 'Last 12 months' };

export function useAnalytics() {
  const { state } = useAppContext();
  const { transactions, dashboardRange } = state;

  return useMemo(() => {
    const now = new Date();
    const currentMonth = now.toISOString().slice(0, 7); // "YYYY-MM"

    const prevDate = new Date(now.getFullYear(), now.getMonth() - 1, 1);
    const prevMonth = prevDate.toISOString().slice(0, 7);

    // Current month transactions (for summary cards)
    const curTxs = transactions.filter(tx => tx.date.startsWith(currentMonth));
    const prevTxs = transactions.filter(tx => tx.date.startsWith(prevMonth));

    // Range transactions (for charts & pie)
    const rangeStart = new Date(now.getFullYear(), now.getMonth() - dashboardRange + 1, 1);
    const rangeStartKey = rangeStart.toISOString().slice(0, 7);
    const rangeTxs = transactions.filter(tx => tx.date >= rangeStartKey);

    const sum = (txs, type) =>
      txs.filter(tx => tx.type === type).reduce((acc, tx) => acc + tx.amount, 0);

    const curIncome = sum(curTxs, 'income');
    const curExpense = sum(curTxs, 'expense');
    const prevIncome = sum(prevTxs, 'income');
    const prevExpense = sum(prevTxs, 'expense');

    const pctChange = (cur, prev) => {
      if (prev === 0) return cur > 0 ? 100 : 0;
      return Math.round(((cur - prev) / prev) * 100);
    };

    // All-time totals
    const totalIncome = sum(transactions, 'income');
    const totalExpense = sum(transactions, 'expense');
    const totalBalance = totalIncome - totalExpense;

    // Savings rate
    const savingsRate = totalIncome > 0
      ? Math.round(((totalIncome - totalExpense) / totalIncome) * 100)
      : 0;

    // Average transaction value
    const avgTxValue = transactions.length > 0
      ? Math.round(transactions.reduce((a, tx) => a + tx.amount, 0) / transactions.length)
      : 0;

    // Monthly totals (range-driven)
    const monthlyTotals = getMonthlyTotals(transactions, dashboardRange);

    // Daily balance trend (range-driven)
    const balanceTrend = getBalanceTrend(transactions, dashboardRange);

    // Category breakdown (expense only, all-time for Insights)
    const categoryBreakdown = getCategoryBreakdown(transactions);

    // Range category breakdown (for pie chart)
    const curCatBreakdown = getCategoryBreakdown(rangeTxs);
    const topCategory = curCatBreakdown.length > 0 ? curCatBreakdown[0] : null;

    // Observation string
    let observation = '';
    if (topCategory) {
      const prevCatTotal = prevTxs
        .filter(tx => tx.type === 'expense' && tx.category === topCategory.category)
        .reduce((a, tx) => a + tx.amount, 0);

      if (prevCatTotal > 0) {
        const change = pctChange(topCategory.total, prevCatTotal);
        const dir = change >= 0 ? 'up' : 'down';
        observation = `Your ${topCategory.category} spending is ${dir} ${Math.abs(change)}% vs last month.`;
      } else {
        observation = `${topCategory.category} is your top spending category this month.`;
      }
    } else if (transactions.length === 0) {
      observation = 'No transactions yet. Add some to see insights.';
    }

    return {
      // Summary card values
      totalBalance,
      curIncome,
      curExpense,
      prevIncome,
      prevExpense,
      incomePctChange: pctChange(curIncome, prevIncome),
      expensePctChange: pctChange(curExpense, prevExpense),

      // Insights KPIs
      savingsRate,
      avgTxValue,
      topCategory,
      totalTransactions: transactions.length,

      // Charts
      monthlyTotals,
      balanceTrend,
      categoryBreakdown,
      curCatBreakdown,

      observation,
      dashboardRange,
      rangeLabel: RANGE_LABELS[dashboardRange] ?? `Last ${dashboardRange} months`,
    };
  }, [transactions, dashboardRange]);
}
