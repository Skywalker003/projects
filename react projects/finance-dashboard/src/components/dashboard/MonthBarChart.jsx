import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from 'recharts';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useAppContext } from '../../hooks/useAppContext';
import { formatINRShort } from '../../utils/formatters';

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  return (
    <div style={{
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 14px',
      boxShadow: 'var(--shadow-md)',
      fontSize: '13px',
    }}>
      <p style={{ fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 6 }}>{label}</p>
      {payload.map(entry => (
        <p key={entry.dataKey} style={{ color: entry.color, marginBottom: 2 }}>
          {entry.name}: <strong>₹{entry.value.toLocaleString('en-IN')}</strong>
        </p>
      ))}
    </div>
  );
}

export default function MonthBarChart() {
  const { monthlyTotals, rangeLabel } = useAnalytics();
  const { dispatch } = useAppContext();

  function drillDown(monthKey) {
    if (!monthKey) return;
    dispatch({ type: 'SET_FILTER', payload: { key: 'month', value: monthKey } });
    dispatch({ type: 'SET_PAGE',   payload: 'transactions' });
  }

  const hasData = monthlyTotals.some(m => m.income > 0 || m.expense > 0);
  if (!hasData) return (
    <div className="chart-card fade-in-up stagger-4">
      <div className="chart-card__header">
        <div><div className="chart-card__title">Income vs Expenses</div><div className="chart-card__subtitle">{rangeLabel}</div></div>
      </div>
      <div className="empty-state" style={{ padding: '3rem 0' }}>
        <div className="empty-state__icon">📈</div>
        <div className="empty-state__title">No data yet</div>
      </div>
    </div>
  );

  return (
    <div className="chart-card fade-in-up stagger-4">
      <div className="chart-card__header">
        <div>
          <div className="chart-card__title">Income vs Expenses</div>
          <div className="chart-card__subtitle">
            {rangeLabel} ·{' '}
            <span style={{ color: 'var(--color-brand)', fontWeight: 500 }}>click a bar to filter</span>
          </div>
        </div>
        <div style={{ display: 'flex', gap: 16, fontSize: '12px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--color-text-secondary)' }}>
            <span style={{ width: 10, height: 10, borderRadius: 2, background: '#059669', display: 'inline-block' }} />
            Income
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--color-text-secondary)' }}>
            <span style={{ width: 10, height: 10, borderRadius: 2, background: '#DC2626', display: 'inline-block' }} />
            Expenses
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={monthlyTotals} barGap={4} barCategoryGap="30%">
          <CartesianGrid vertical={false} stroke="var(--color-border)" strokeDasharray="3 3" />
          <XAxis
            dataKey="label"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 12, fill: 'var(--color-text-muted)' }}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: 'var(--color-text-muted)' }}
            tickFormatter={formatINRShort}
            width={48}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--color-surface-alt)', radius: 4 }} />
          <Bar dataKey="income"  name="Income"   fill="#059669" radius={[4, 4, 0, 0]} style={{ cursor: 'pointer' }} onClick={(data) => drillDown(data?.key)} />
          <Bar dataKey="expense" name="Expenses" fill="#DC2626" radius={[4, 4, 0, 0]} style={{ cursor: 'pointer' }} onClick={(data) => drillDown(data?.key)} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
