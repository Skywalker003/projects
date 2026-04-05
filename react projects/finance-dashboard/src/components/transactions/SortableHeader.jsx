import { useAppContext } from '../../hooks/useAppContext';

const AscIcon = () => (
  <svg className="sort-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="18 15 12 9 6 15" />
  </svg>
);

const DescIcon = () => (
  <svg className="sort-arrow" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function SortableHeader({ column, label, className = '' }) {
  const { state, dispatch } = useAppContext();
  const { sortConfig } = state;

  const isActive = sortConfig.column === column;

  function handleClick() {
    dispatch({ type: 'SET_SORT', payload: column });
  }

  return (
    <th
      className={`sortable${isActive ? ' sort-active' : ''} ${className}`}
      onClick={handleClick}
    >
      {label}
      {isActive
        ? sortConfig.direction === 'asc' ? <AscIcon /> : <DescIcon />
        : <span className="sort-arrow sort-arrow--inactive"><DescIcon /></span>
      }
    </th>
  );
}
