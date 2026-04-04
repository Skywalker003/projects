import { useAppContext } from '../../hooks/useAppContext';
import { useTransactions } from '../../hooks/useTransactions';
import SortableHeader from './SortableHeader';
import TransactionRow from './TransactionRow';
import EmptyState from '../shared/EmptyState';

export default function TransactionTable() {
  const { state } = useAppContext();
  const { filtered } = useTransactions();
  const isAdmin = state.role === 'admin';

  if (filtered.length === 0) {
    return (
      <div className="table-wrapper">
        <EmptyState
          icon="🔍"
          title="No transactions found"
          desc="Try adjusting your filters or search term."
        />
      </div>
    );
  }

  return (
    <div className="table-wrapper">
      <table className="table">
        <thead>
          <tr>
            <SortableHeader column="date"     label="Date"        />
            <SortableHeader column="desc"     label="Description" />
            <SortableHeader column="category" label="Category"    className="col-hide-md" />
            <SortableHeader column="type"     label="Type"        className="col-hide-sm" />
            <SortableHeader column="amount"   label="Amount"      style={{ textAlign: 'center' }} />
            {isAdmin && (
              <th style={{ width: 100, textAlign: 'center' }}>Actions</th>
            )}
          </tr>
        </thead>
        <tbody>
          {filtered.map(tx => (
            <TransactionRow key={tx.id} tx={tx} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
