import { CATEGORY_HEX } from '../../data/categories';

export function TypeBadge({ type }) {
  return (
    <span className={`type-badge type-badge--${type}`}>
      {type === 'income' ? 'Income' : 'Expense'}
    </span>
  );
}

export function CategoryBadge({ category }) {
  const hex = CATEGORY_HEX[category] ?? '#94A3B8';
  return (
    <span className="cat-badge">
      <span className="cat-badge__dot" style={{ background: hex }} />
      {category}
    </span>
  );
}
