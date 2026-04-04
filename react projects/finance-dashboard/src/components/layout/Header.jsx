import { useAppContext } from '../../hooks/useAppContext';
import { formatDate } from '../../utils/formatters';

const PAGE_TITLES = {
  dashboard:    'Dashboard',
  transactions: 'Transactions',
  insights:     'Insights',
};

const HamburgerIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <line x1="3" y1="6"  x2="21" y2="6"  />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const PlusIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5"  y1="12" x2="19" y2="12" />
  </svg>
);

export default function Header({ onMenuClick }) {
  const { state, dispatch } = useAppContext();
  const { currentPage, role } = state;

  const today = formatDate(new Date().toISOString().slice(0, 10));

  function openAddModal() {
    dispatch({ type: 'OPEN_MODAL', payload: { mode: 'add' } });
  }

  return (
    <header className="header">
      <div className="header__left">
        <button className="header__hamburger" onClick={onMenuClick} aria-label="Open menu">
          <HamburgerIcon />
        </button>
        <h1 className="header__title">{PAGE_TITLES[currentPage] ?? 'Dashboard'}</h1>
      </div>

      <div className="header__right">
        <span className="header__date">{today}</span>

        {role === 'admin' && (
          <button className="btn btn--primary btn--sm" onClick={openAddModal}>
            <PlusIcon />
            Add Transaction
          </button>
        )}
      </div>
    </header>
  );
}
