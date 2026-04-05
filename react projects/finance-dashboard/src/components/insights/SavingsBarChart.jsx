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
    <div className="chart-tooltip">
      <p className="chart-tooltip__label">{label}</p>
      <p className={`chart-tooltip__value chart-tooltip__value--${isPositive ? 'positive' : 'negative'}`}>
        {isPositive ? '+' : ''}₹{Math.abs(value).toLocaleString('en-IN')}
      </p>
      <p className="chart-tooltip__sub">{isPositive ? 'Surplus' : 'Deficit'}</p>
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
        <div className="chart-legend chart-legend--sm">
          <span className="chart-legend__item">
            <span className="chart-legend__dot chart-legend__dot--surplus" />
            Surplus
          </span>
          <span className="chart-legend__item">
            <span className="chart-legend__dot chart-legend__dot--deficit" />
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
              <Cell key={entry.key} fill={entry.savings >= 0 ? '#059669' : '#DC2626'} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
