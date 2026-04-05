import { useAppContext } from '../hooks/useAppContext';
import SummaryCards from '../components/dashboard/SummaryCards';
import MonthBarChart from '../components/dashboard/MonthBarChart';
import SpendingPieChart from '../components/dashboard/SpendingPieChart';
import RecentTransactions from '../components/dashboard/RecentTransactions';
import RangeSelector from '../components/dashboard/RangeSelector';
import BalanceTrendChart from '../components/dashboard/BalanceTrendChart';

function DashboardEmpty({ isAdmin, onAdd }) {
  return (
    <div className="dashboard-empty fade-in">
      <div className="dashboard-empty__icon">📊</div>
      <h3 className="dashboard-empty__title">No transactions yet</h3>
      <p className="dashboard-empty__desc">
        Add your first transaction to start tracking your finances and see insights here.
      </p>
      {isAdmin && (
        <button className="btn btn--primary" onClick={onAdd}>
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" />
          </svg>
          Add your first transaction
        </button>
      )}
    </div>
  );
}

export default function Dashboard() {
  const { state, dispatch } = useAppContext();
  const isEmpty = state.transactions.length === 0;
  const isAdmin = state.role === 'admin';

  function openAddModal() {
    dispatch({ type: 'OPEN_MODAL', payload: { mode: 'add' } });
  }

  if (isEmpty) {
    return (
      <div className="page-enter">
        <div className="page-header">
          <h2 className="page-header__title">Dashboard</h2>
          <p className="page-header__subtitle">Your financial overview at a glance</p>
        </div>
        <DashboardEmpty isAdmin={isAdmin} onAdd={openAddModal} />
      </div>
    );
  }

  return (
    <div className="page-enter">
      <div className="page-header page-header--row">
        <div>
          <h2 className="page-header__title">Dashboard</h2>
          <p className="page-header__subtitle">Your financial overview at a glance</p>
        </div>
        <RangeSelector />
      </div>

      <SummaryCards />

      <div className="dashboard-grid dashboard-section">
        <BalanceTrendChart />
      </div>

      <div className="dashboard-grid dashboard-section--sm">
        <MonthBarChart />
        <SpendingPieChart />
      </div>

      <div className="dashboard-grid dashboard-section">
        <RecentTransactions />
      </div>
    </div>
  );
}
