import { useAppContext } from '../../hooks/useAppContext';
import { CATEGORY_EMOJI } from '../../data/categories';
import { formatINR, formatDate } from '../../utils/formatters';

export default function RecentTransactions() {
  const { state, dispatch } = useAppContext();

  const recent = [...state.transactions]
    .sort((a, b) => {
      if (a.date !== b.date) return a.date < b.date ? 1 : -1;
      return 0; // same date: preserve insertion order (newest added = first in array)
    })
    .slice(0, 5);

  function goToTransactions() {
    dispatch({ type: 'SET_PAGE', payload: 'transactions' });
  }

  return (
    <div className="chart-card fade-in-up stagger-6" style={{ gridColumn: '1 / -1' }}>
      <div className="chart-card__header">
        <div>
          <div className="chart-card__title">Recent Transactions</div>
          <div className="chart-card__subtitle">Last 5 activity</div>
        </div>
      </div>

      {recent.length === 0 ? (
        <div className="empty-state" style={{ padding: '1.5rem' }}>
          <div className="empty-state__icon">💸</div>
          <div className="empty-state__title">No transactions yet</div>
          <div className="empty-state__desc">Add your first transaction to get started.</div>
        </div>
      ) : (
        <>
          {recent.map(tx => (
            <div key={tx.id} className="recent-tx__row">
              <div className="recent-tx__left">
                <div className="recent-tx__icon">
                  {CATEGORY_EMOJI[tx.category] ?? '📦'}
                </div>
                <div>
                  <div className="recent-tx__desc">{tx.desc}</div>
                  <div className="recent-tx__cat">{tx.category}</div>
                </div>
              </div>
              <div className="recent-tx__right">
                <div
                  className="recent-tx__amount"
                  style={{ color: tx.type === 'income' ? 'var(--color-green)' : 'var(--color-red)' }}
                >
                  {tx.type === 'income' ? '+' : '−'}{formatINR(tx.amount)}
                </div>
                <div className="recent-tx__date">{formatDate(tx.date)}</div>
              </div>
            </div>
          ))}

          <button className="view-all-link" onClick={goToTransactions}>
            View all transactions
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </button>
        </>
      )}
    </div>
  );
}
