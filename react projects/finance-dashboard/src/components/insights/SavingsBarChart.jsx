import {
  ResponsiveContainer,
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from 'recharts';
import { useAnalytics } from '../../hooks/useAnalytics';
import { formatINRShort } from '../../utils/formatters';

function CustomTooltip({ active, payload, label }) {
  if (!active || !payload?.length) return null;
  const value = payload[0].value;
  const isPositive = value >= 0;
  return (
    <div style={{
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      padding: '10px 14px',
      boxShadow: 'var(--shadow-md)',
      fontSize: '13px',
    }}>
      <p style={{ fontWeight: 600, color: 'var(--color-text-primary)', marginBottom: 4 }}>{label}</p>
      <p style={{ color: isPositive ? 'var(--color-green)' : 'var(--color-red)', fontWeight: 600 }}>
        {isPositive ? '+' : ''}₹{Math.abs(value).toLocaleString('en-IN')}
      </p>
      <p style={{ fontSize: '11.5px', color: 'var(--color-text-muted)', marginTop: 2 }}>
        {isPositive ? 'Surplus' : 'Deficit'}
      </p>
    </div>
  );
}

export default function SavingsBarChart() {
  const { monthlyTotals } = useAnalytics();

  return (
    <div className="chart-card fade-in-up stagger-5">
      <div className="chart-card__header">
        <div>
          <div className="chart-card__title">Monthly Savings</div>
          <div className="chart-card__subtitle">Income minus expenses per month</div>
        </div>
        <div style={{ display: 'flex', gap: 12, fontSize: '12px' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--color-text-secondary)' }}>
            <span style={{ width: 10, height: 10, borderRadius: 2, background: '#059669', display: 'inline-block' }} />
            Surplus
          </span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 5, color: 'var(--color-text-secondary)' }}>
            <span style={{ width: 10, height: 10, borderRadius: 2, background: '#DC2626', display: 'inline-block' }} />
            Deficit
          </span>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={220}>
        <BarChart data={monthlyTotals} barCategoryGap="35%">
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
            tickFormatter={v => formatINRShort(Math.abs(v))}
            width={50}
          />
          <Tooltip content={<CustomTooltip />} cursor={{ fill: 'var(--color-surface-alt)', radius: 4 }} />
          <ReferenceLine y={0} stroke="var(--color-border)" strokeWidth={1.5} />
          <Bar dataKey="savings" radius={[4, 4, 0, 0]}>
            {monthlyTotals.map(entry => (
              <Cell
                key={entry.key}
                fill={entry.savings >= 0 ? '#059669' : '#DC2626'}
              />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
