import { useState } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer } from 'recharts';
import { useAnalytics } from '../../hooks/useAnalytics';
import { useAppContext } from '../../hooks/useAppContext';
import { CATEGORY_HEX } from '../../data/categories';
import { formatINR } from '../../utils/formatters';

function CustomTooltip({ active, payload }) {
  if (!active || !payload?.length) return null;
  const { name, value } = payload[0];
  return (
    <div style={{
      background: 'var(--color-surface)',
      border: '1px solid var(--color-border)',
      borderRadius: 'var(--radius-md)',
      padding: '8px 12px',
      boxShadow: 'var(--shadow-md)',
      fontSize: '13px',
    }}>
      <p style={{ color: 'var(--color-text-primary)', fontWeight: 600 }}>{name}</p>
      <p style={{ color: 'var(--color-text-secondary)' }}>{formatINR(value)}</p>
      {name !== 'Other' && (
        <p style={{ color: 'var(--color-brand)', fontSize: '11px', marginTop: 4 }}>
          Click to filter transactions →
        </p>
      )}
    </div>
  );
}

export default function SpendingPieChart() {
  const { curCatBreakdown, rangeLabel } = useAnalytics();
  const { dispatch } = useAppContext();
  const [activeIndex, setActiveIndex] = useState(null);

  function drillDown(category) {
    if (!category || category === 'Other') return;
    dispatch({ type: 'SET_FILTER', payload: { key: 'category', value: category } });
    dispatch({ type: 'SET_FILTER', payload: { key: 'type',     value: 'expense'  } });
    dispatch({ type: 'SET_PAGE',   payload: 'transactions' });
  }

  if (!curCatBreakdown.length) {
    return (
      <div className="chart-card fade-in-up stagger-5">
        <div className="chart-card__header">
          <div>
            <div className="chart-card__title">Spending Breakdown</div>
            <div className="chart-card__subtitle">{rangeLabel} · by category</div>
          </div>
        </div>
        <div className="empty-state" style={{ padding: '2rem' }}>
          <div className="empty-state__icon">📊</div>
          <div className="empty-state__title">No expenses this month</div>
        </div>
      </div>
    );
  }

  const top  = curCatBreakdown.slice(0, 6);
  const rest = curCatBreakdown.slice(6);

  // Fill colour lives in the data — no <Cell> needed
  const chartData = [
    ...top.map(item => ({ ...item, fill: CATEGORY_HEX[item.category] ?? '#94A3B8' })),
    ...(rest.length > 0 ? [{
      category: 'Other',
      total: rest.reduce((a, c) => a + c.total, 0),
      pct:   rest.reduce((a, c) => a + c.pct,   0),
      fill:  '#94A3B8',
    }] : []),
  ];

  return (
    <div className="chart-card fade-in-up stagger-5">
      <div className="chart-card__header">
        <div>
          <div className="chart-card__title">Spending Breakdown</div>
          <div className="chart-card__subtitle">
            {rangeLabel} ·{' '}
            <span style={{ color: 'var(--color-brand)', fontWeight: 500 }}>
              click a slice to filter
            </span>
          </div>
        </div>
      </div>

      <ResponsiveContainer width="100%" height={180}>
        <PieChart>
          <Pie
            data={chartData}
            dataKey="total"
            nameKey="category"
            cx="50%"
            cy="50%"
            innerRadius={50}
            outerRadius={80}
            paddingAngle={2}
            style={{ cursor: 'pointer', outline: 'none' }}
            onClick={(data, index) => drillDown(chartData[index]?.category)}
            onMouseEnter={(_, index) => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(null)}
          />
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>

      {/* Clickable legend */}
      <div className="pie-legend">
        {chartData.map((entry, i) => {
          const clickable = entry.category !== 'Other';
          return (
            <div
              key={entry.category}
              className={`pie-legend__item${clickable ? ' pie-legend__item--clickable' : ''}`}
              style={{ opacity: activeIndex === null || activeIndex === i ? 1 : 0.45, transition: 'opacity 150ms' }}
              onClick={() => clickable && drillDown(entry.category)}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              title={clickable ? `Filter by ${entry.category}` : undefined}
            >
              <div className="pie-legend__left">
                <div className="pie-legend__dot" style={{ background: entry.fill }} />
                <span className="pie-legend__name">{entry.category}</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <span style={{ fontSize: '11px', color: 'var(--color-text-muted)' }}>{entry.pct}%</span>
                <span className="pie-legend__amount">{formatINR(entry.total)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}