import { useAppContext } from '../../hooks/useAppContext';
import { useTransactions } from '../../hooks/useTransactions';
import SortableHeader from './SortableHeader';
import TransactionRow from './TransactionRow';
import TransactionCard from './TransactionCard';
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
      {/* Desktop table */}
      <table className="table table--desktop">
        <thead>
          <tr>
            <SortableHeader column="date"     label="Date"        />
            <SortableHeader column="desc"     label="Description" />
            <SortableHeader column="category" label="Category"    className="col-hide-md" />
            <SortableHeader column="type"     label="Type"        className="col-hide-sm" />
            <SortableHeader column="amount"   label="Amount"      className="table__col-amount" />
            {isAdmin && <th className="table__col-actions">Actions</th>}
          </tr>
        </thead>
        <tbody>
          {filtered.map(tx => (
            <TransactionRow key={tx.id} tx={tx} />
          ))}
        </tbody>
      </table>

      {/* Mobile card list */}
      <div className="tx-card-list">
        {filtered.map(tx => (
          <TransactionCard key={tx.id} tx={tx} />
        ))}
      </div>
    </div>
  );
}
