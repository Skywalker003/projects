import { useAppContext } from '../../hooks/useAppContext';

const NAV_ITEMS = [
  {
    page: 'dashboard',
    label: 'Dashboard',
    icon: (
      <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1" />
        <rect x="14" y="3" width="7" height="7" rx="1" />
        <rect x="3" y="14" width="7" height="7" rx="1" />
        <rect x="14" y="14" width="7" height="7" rx="1" />
      </svg>
    ),
  },
  {
    page: 'transactions',
    label: 'Transactions',
    icon: (
      <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
        <rect x="9" y="3" width="6" height="4" rx="1" />
        <line x1="9" y1="12" x2="15" y2="12" />
        <line x1="9" y1="16" x2="13" y2="16" />
      </svg>
    ),
  },
  {
    page: 'insights',
    label: 'Insights',
    icon: (
      <svg className="nav-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6"  y1="20" x2="6"  y2="14" />
      </svg>
    ),
  },
];

export default function Sidebar({ isOpen, onClose }) {
  const { state, dispatch } = useAppContext();
  const { currentPage, role } = state;

  function navigate(page) {
    dispatch({ type: 'CLEAR_FILTERS' });
    dispatch({ type: 'SET_PAGE', payload: page });
    onClose?.();
  }

  function toggleRole() {
    dispatch({ type: 'SET_ROLE', payload: role === 'admin' ? 'viewer' : 'admin' });
  }

return (
    <aside className={`sidebar${isOpen ? ' open' : ''}`}>
      {/* Logo */}
      <div className="sidebar__logo">
        <div className="sidebar__logo-icon">F</div>
        <div>
          <div className="sidebar__logo-text">FinTrack</div>
          <div className="sidebar__logo-sub">Personal Finance</div>
        </div>
      </div>

      {/* Navigation */}
      <nav className="sidebar__nav">
        <div className="sidebar__nav-label">Menu</div>
        {NAV_ITEMS.map(item => (
          <button
            key={item.page}
            className={`sidebar__nav-item${currentPage === item.page ? ' active' : ''}`}
            onClick={() => navigate(item.page)}
          >
            {item.icon}
            {item.label}
          </button>
        ))}
      </nav>

      {/* Footer — role switcher + theme toggle */}
      <div className="sidebar__footer">
        {/* Role switcher */}
        <div>
          <div className="role-toggle" onClick={toggleRole}>
            <div className={`role-toggle__thumb role-toggle__thumb--${role}`} />
            <span className={`role-toggle__opt${role === 'viewer' ? ' role-toggle__opt--active' : ''}`}>Viewer</span>
            <span className={`role-toggle__opt${role === 'admin'  ? ' role-toggle__opt--active' : ''}`}>Admin</span>
          </div>
        </div>

        {/* Role badge */}
        <div className={`role-badge role-badge--${role}`}>
          <div className="role-badge__dot" />
          {role === 'admin' ? 'Admin — full access' : 'Viewer — read only'}
        </div>
      </div>
    </aside>
  );
}
