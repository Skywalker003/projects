import { useAnalytics } from '../../hooks/useAnalytics';
import { formatINR } from '../../utils/formatters';
import { CATEGORY_HEX } from '../../data/categories';

function KPICard({ label, value, sub, icon, iconBg, index }) {
  return (
    <div className={`kpi-card fade-in-up stagger-${index}`}>
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 'var(--space-3)' }}>
        <div className="kpi-card__label">{label}</div>
        <div style={{
          width: 34, height: 34, borderRadius: 'var(--radius-md)',
          background: iconBg, display: 'flex', alignItems: 'center',
          justifyContent: 'center', fontSize: 17, flexShrink: 0,
        }}>
          {icon}
        </div>
      </div>
      <div className="kpi-card__value">{value}</div>
      {sub && <div className="kpi-card__sub">{sub}</div>}
    </div>
  );
}

export default function InsightKPIs() {
  const { topCategory, savingsRate, totalTransactions, avgTxValue } = useAnalytics();

  const topCatColor = topCategory ? (CATEGORY_HEX[topCategory.category] ?? '#94A3B8') : '#94A3B8';

  return (
    <div className="insights-kpi-grid">
      <KPICard
        index={1}
        label="Top Spending Category"
        value={topCategory?.category ?? '—'}
        sub={topCategory ? formatINR(topCategory.total) + ' this month' : 'No expenses yet'}
        icon="🏆"
        iconBg="var(--color-amber-light)"
      />
      <KPICard
        index={2}
        label="Savings Rate"
        value={`${savingsRate}%`}
        sub={savingsRate >= 20 ? 'Great job! Above 20%' : savingsRate > 0 ? 'Try to hit 20%' : 'Expenses exceed income'}
        icon="💰"
        iconBg={savingsRate >= 20 ? 'var(--color-green-light)' : savingsRate > 0 ? 'var(--color-amber-light)' : 'var(--color-red-light)'}
      />
      <KPICard
        index={3}
        label="Total Transactions"
        value={totalTransactions}
        sub="All time"
        icon="📋"
        iconBg="var(--color-brand-light)"
      />
      <KPICard
        index={4}
        label="Avg Transaction Value"
        value={formatINR(avgTxValue)}
        sub="Across all transactions"
        icon="📊"
        iconBg="var(--color-surface-alt)"
      />
    </div>
  );
}
