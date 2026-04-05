import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ReferenceLine,
} from 'recharts';
import { useAnalytics } from '../../hooks/useAnalytics';
import { formatINR, formatINRShort } from '../../utils/formatters';

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const { label, balance } = payload[0].payload;
  const positive = balance >= 0;
  return (
    <div className="chart-tooltip">
      <p className="chart-tooltip__date">{label}</p>
      <p className={`chart-tooltip__value chart-tooltip__value--${positive ? 'positive' : 'negative'}`}>
        {formatINR(Math.abs(balance))}
        {!positive && <span className="chart-tooltip__sub"> (deficit)</span>}
      </p>
    </div>
  );
}

function xAxisInterval(count) {
  if (count <= 31)  return Math.floor(count / 5);
  if (count <= 95)  return Math.floor(count / 6);
  if (count <= 185) return Math.floor(count / 6);
  return Math.floor(count / 6);
}

export default function BalanceTrendChart() {
  const { balanceTrend, rangeLabel, dashboardRange } = useAnalytics();

  const hasData = balanceTrend.length > 0;
  const minBalance = hasData ? Math.min(...balanceTrend.map(p => p.balance)) : 0;
  const isPositive = minBalance >= 0;

  const trend = hasData && balanceTrend.length > 1
    ? balanceTrend.at(-1).balance - balanceTrend[0].balance
    : 0;
  const trendUp = trend >= 0;

  const strokeColor = trendUp ? '#059669' : '#DC2626';
  const gradientId  = trendUp ? 'balanceGradientUp' : 'balanceGradientDown';

  const tickFormatter = dashboardRange >= 12
    ? (val) => new Date(val).toLocaleDateString('en-IN', { month: 'short' })
    : (val) => new Date(val).toLocaleDateString('en-IN', { day: 'numeric', month: 'short' });

  const interval = hasData ? xAxisInterval(balanceTrend.length) : 'preserveStartEnd';

  if (!hasData) return (
    <div className="chart-card fade-in-up stagger-3 col-span-full">
      <div className="chart-card__header">
        <div>
          <div className="chart-card__title">Balance Trend</div>
          <div className="chart-card__subtitle">{rangeLabel}</div>
        </div>
      </div>
      <div className="empty-state empty-state--chart">
        <div className="empty-state__icon">📈</div>
        <div className="empty-state__title">No data yet</div>
      </div>
    </div>
  );

  return (
    <div className="chart-card fade-in-up stagger-3 col-span-full">
      <div className="chart-card__header">
        <div>
          <div className="chart-card__title">Balance Trend</div>
          <div className="chart-card__subtitle">{rangeLabel} · day-by-day</div>
        </div>
        <div className={`trend-badge trend-badge--${trendUp ? 'up' : 'down'}`}>
          <span className="trend-badge__arrow">{trendUp ? '↑' : '↓'}</span>
          {formatINR(Math.abs(trend))} {trendUp ? 'gained' : 'lost'}
        </div>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <AreaChart data={balanceTrend} margin={{ top: 8, right: 4, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id={gradientId} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%"   stopColor={strokeColor} stopOpacity={0.18} />
              <stop offset="100%" stopColor={strokeColor} stopOpacity={0.01} />
            </linearGradient>
          </defs>

          <CartesianGrid vertical={false} stroke="var(--color-border)" strokeDasharray="3 3" />
          <XAxis
            dataKey="date"
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: 'var(--color-text-muted)' }}
            tickFormatter={tickFormatter}
            interval={interval}
          />
          <YAxis
            axisLine={false}
            tickLine={false}
            tick={{ fontSize: 11, fill: 'var(--color-text-muted)' }}
            tickFormatter={formatINRShort}
            width={52}
            domain={['auto', 'auto']}
          />
          <Tooltip content={<CustomTooltip />} />
          {!isPositive && (
            <ReferenceLine y={0} stroke="var(--color-text-muted)" strokeDasharray="4 3" strokeWidth={1} />
          )}
          <Area
            type="monotone"
            dataKey="balance"
            stroke={strokeColor}
            strokeWidth={2}
            fill={`url(#${gradientId})`}
            dot={false}
            activeDot={{ r: 4, fill: strokeColor, stroke: 'var(--color-surface)', strokeWidth: 2 }}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
