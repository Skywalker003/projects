import { useAppContext } from '../../hooks/useAppContext';
import { TypeBadge, CategoryBadge } from '../shared/Badge';
import { formatINR, formatDate } from '../../utils/formatters';
import { CATEGORY_EMOJI } from '../../data/categories';

const EditIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);

const TrashIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
    <path d="M10 11v6M14 11v6" />
    <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
  </svg>
);

export default function TransactionRow({ tx }) {
  const { state, dispatch } = useAppContext();
  const isAdmin = state.role === 'admin';

  function handleEdit() {
    dispatch({ type: 'OPEN_MODAL', payload: { mode: 'edit', editId: tx.id } });
  }

  function handleDelete() {
    dispatch({ type: 'DELETE_TRANSACTION', payload: tx.id });
    dispatch({ type: 'SHOW_TOAST', payload: { message: `Deleted "${tx.desc}"`, type: 'success', undoable: true } });
  }

  return (
    <>
      <tr>
        <td className="table__date">{formatDate(tx.date)}</td>

        <td>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <span style={{ fontSize: 16 }}>{CATEGORY_EMOJI[tx.category] ?? '📦'}</span>
            <span className="table__desc">{tx.desc}</span>
          </div>
        </td>

        <td className="col-hide-md">
          <CategoryBadge category={tx.category} />
        </td>

        <td className="col-hide-sm">
          <TypeBadge type={tx.type} />
        </td>

        <td style={{ textAlign: 'center' }}>
          <span className={`table__amount table__amount--${tx.type}`}>
            {formatINR(tx.amount)}
          </span>
        </td>

        {isAdmin && (
          <td>
            <div className="table__actions" style={{ opacity: 1 }}>
              <button
                className="btn--icon"
                onClick={handleEdit}
                title="Edit"
                style={{ color: 'var(--color-brand)' }}
              >
                <EditIcon />
              </button>
              <button
                className="btn--icon"
                onClick={handleDelete}
                title="Delete"
                style={{ color: 'var(--color-red)' }}
              >
                <TrashIcon />
              </button>
            </div>
          </td>
        )}
      </tr>

    </>
  );
}
