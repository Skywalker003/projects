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
    <div className="chart-tooltip chart-tooltip--sm">
      <p className="chart-tooltip__name">{name}</p>
      <p className="chart-tooltip__secondary">{formatINR(value)}</p>
      {name !== 'Other' && (
        <p className="chart-tooltip__hint">Click to filter transactions →</p>
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
        <div className="empty-state empty-state--compact">
          <div className="empty-state__icon">📊</div>
          <div className="empty-state__title">No expenses this month</div>
        </div>
      </div>
    );
  }

  const top  = curCatBreakdown.slice(0, 6);
  const rest = curCatBreakdown.slice(6);

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
            <span className="chart-card__subtitle-link">click a slice to filter</span>
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

      <div className="pie-legend">
        {chartData.map((entry, i) => {
          const clickable = entry.category !== 'Other';
          return (
            <div
              key={entry.category}
              className={`pie-legend__item${clickable ? ' pie-legend__item--clickable' : ''}`}
              style={{ '--legend-opacity': activeIndex === null || activeIndex === i ? 1 : 0.45 }}
              onClick={() => clickable && drillDown(entry.category)}
              onMouseEnter={() => setActiveIndex(i)}
              onMouseLeave={() => setActiveIndex(null)}
              title={clickable ? `Filter by ${entry.category}` : undefined}
            >
              <div className="pie-legend__left">
                <div className="pie-legend__dot" style={{ '--dot-color': entry.fill }} />
                <span className="pie-legend__name">{entry.category}</span>
              </div>
              <div className="pie-legend__right">
                <span className="pie-legend__pct">{entry.pct}%</span>
                <span className="pie-legend__amount">{formatINR(entry.total)}</span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
