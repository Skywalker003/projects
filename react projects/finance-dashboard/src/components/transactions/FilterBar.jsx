import { useAppContext } from '../../hooks/useAppContext';
import { useTransactions } from '../../hooks/useTransactions';
import { getUniqueMonths, getUniqueCategories } from '../../utils/analytics';
import { formatMonth } from '../../utils/formatters';
import Dropdown from '../shared/Dropdown';

const SearchIcon = () => (
  <svg className="filter-bar__search-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);

const TYPE_OPTIONS = [
  { label: 'Income',  value: 'income'  },
  { label: 'Expense', value: 'expense' },
];

export default function FilterBar() {
  const { state, dispatch } = useAppContext();
  const { filtered, total } = useTransactions();
  const { filters, transactions } = state;

  const months     = getUniqueMonths(transactions);
  const categories = getUniqueCategories(transactions);

  const categoryOptions = categories.map(c => ({ label: c, value: c }));
  const monthOptions    = months.map(m => ({ label: formatMonth(m), value: m }));

  const hasFilters = filters.search || filters.type || filters.category || filters.month;

  function set(key, value) {
    dispatch({ type: 'SET_FILTER', payload: { key, value } });
  }

  function clear() {
    dispatch({ type: 'CLEAR_FILTERS' });
  }

  return (
    <div className="filter-bar">
      {/* Text search */}
      <div className="filter-bar__search">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search transactions…"
          value={filters.search}
          onChange={e => set('search', e.target.value)}
        />
      </div>

      {/* Type */}
      <Dropdown
        value={filters.type}
        onChange={v => set('type', v)}
        options={TYPE_OPTIONS}
        placeholder="All types"
      />

      {/* Category */}
      <Dropdown
        value={filters.category}
        onChange={v => set('category', v)}
        options={categoryOptions}
        placeholder="All categories"
      />

      {/* Month */}
      <Dropdown
        value={filters.month}
        onChange={v => set('month', v)}
        options={monthOptions}
        placeholder="All months"
      />

      {/* Clear */}
      {hasFilters && (
        <button className="btn btn--ghost btn--sm" onClick={clear}>
          Clear
        </button>
      )}

      {/* Count */}
      <div className="filter-bar__count">
        Showing <span>{filtered.length}</span> of <span>{total}</span>
      </div>
    </div>
  );
}
