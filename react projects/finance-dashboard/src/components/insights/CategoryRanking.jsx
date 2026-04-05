import { useAnalytics } from '../../hooks/useAnalytics';
import { CATEGORY_HEX, CATEGORY_EMOJI } from '../../data/categories';
import { formatINR } from '../../utils/formatters';

export default function CategoryRanking() {
  const { categoryBreakdown } = useAnalytics();

  const top = categoryBreakdown.slice(0, 7);
  const maxTotal = top[0]?.total ?? 1;

  return (
    <div className="chart-card fade-in-up stagger-6">
      <div className="chart-card__header">
        <div>
          <div className="chart-card__title">Category Breakdown</div>
          <div className="chart-card__subtitle">All-time spending by category</div>
        </div>
      </div>

      {top.length === 0 ? (
        <p className="cat-ranking__empty">No expense data yet.</p>
      ) : (
        <div className="cat-ranking">
          {top.map((item, i) => {
            const hex      = CATEGORY_HEX[item.category]   ?? '#94A3B8';
            const emoji    = CATEGORY_EMOJI[item.category] ?? '📦';
            const widthPct = Math.round((item.total / maxTotal) * 100);

            return (
              <div key={item.category} className={`cat-ranking__item fade-in-up stagger-${i + 1}`}>
                <div className="cat-ranking__top">
                  <div className="cat-ranking__name">
                    <span>{emoji}</span>
                    {item.category}
                    <span className="cat-ranking__pct">{item.pct}%</span>
                  </div>
                  <div className="cat-ranking__amount">{formatINR(item.total)}</div>
                </div>
                <div className="cat-ranking__bar-bg">
                  <div
                    className="cat-ranking__bar-fill bar-grow"
                    style={{ '--bar-width': `${widthPct}%`, '--bar-color': hex }}
                  />
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
