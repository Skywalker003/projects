// Category definitions.
// `color` = CSS variable (used in HTML/CSS contexts like badges, dots).
// `hex`   = hard-coded hex (used in SVG contexts like Recharts Cell fill).
export const CATEGORIES = [
  { name: 'Food & Dining',    color: 'var(--cat-food)',          hex: '#F97316', emoji: '🍽️', type: 'expense' },
  { name: 'Transport',        color: 'var(--cat-transport)',     hex: '#8B5CF6', emoji: '🚗', type: 'expense' },
  { name: 'Shopping',         color: 'var(--cat-shopping)',      hex: '#EC4899', emoji: '🛍️', type: 'expense' },
  { name: 'Utilities',        color: 'var(--cat-utilities)',     hex: '#14B8A6', emoji: '⚡', type: 'expense' },
  { name: 'Health',           color: 'var(--cat-health)',        hex: '#EF4444', emoji: '🏥', type: 'expense' },
  { name: 'Entertainment',    color: 'var(--cat-entertainment)', hex: '#F59E0B', emoji: '🎬', type: 'expense' },
  { name: 'Rent',             color: 'var(--cat-rent)',          hex: '#6366F1', emoji: '🏠', type: 'expense' },
  { name: 'Salary',           color: 'var(--cat-salary)',        hex: '#22C55E', emoji: '💼', type: 'income'  },
  { name: 'Freelance',        color: 'var(--cat-freelance)',     hex: '#3B82F6', emoji: '💻', type: 'income'  },
  { name: 'Investment',       color: 'var(--cat-investment)',    hex: '#10B981', emoji: '📈', type: 'income'  },
  { name: 'Other',            color: 'var(--cat-other)',         hex: '#94A3B8', emoji: '📦', type: 'expense' },
];

// Fast lookup maps
export const CATEGORY_COLOR = Object.fromEntries(CATEGORIES.map(c => [c.name, c.color]));
export const CATEGORY_HEX   = Object.fromEntries(CATEGORIES.map(c => [c.name, c.hex]));
export const CATEGORY_EMOJI = Object.fromEntries(CATEGORIES.map(c => [c.name, c.emoji]));

export const EXPENSE_CATEGORIES = CATEGORIES.filter(c => c.type === 'expense').map(c => c.name);
export const INCOME_CATEGORIES  = CATEGORIES.filter(c => c.type === 'income' ).map(c => c.name);
