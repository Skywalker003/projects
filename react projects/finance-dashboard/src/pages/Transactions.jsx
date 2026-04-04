import { useAppContext } from '../hooks/useAppContext';
import { useTransactions } from '../hooks/useTransactions';
import FilterBar from '../components/transactions/FilterBar';
import TransactionTable from '../components/transactions/TransactionTable';
import { exportCSV } from '../utils/exportCSV';

const DownloadIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);

export default function Transactions() {
  const { state } = useAppContext();
  const { filtered } = useTransactions();
  const isAdmin = state.role === 'admin';

  function handleExport() {
    exportCSV(filtered, 'transactions.csv');
  }

  return (
    <div className="page-enter">
      <div className="page-header" style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', flexWrap: 'wrap', gap: 'var(--space-3)' }}>
        <div>
          <h2 className="page-header__title">Transactions</h2>
          <p className="page-header__subtitle">All your financial activity</p>
        </div>

        {isAdmin && (
          <button className="btn btn--ghost btn--sm" onClick={handleExport}>
            <DownloadIcon />
            Export CSV
          </button>
        )}
      </div>

      <FilterBar />
      <TransactionTable />
    </div>
  );
}
