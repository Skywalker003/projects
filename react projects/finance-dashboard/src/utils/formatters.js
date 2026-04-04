// Format a number as Indian Rupees (₹1,23,456)
export function formatINR(amount) {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
}

// Format a date string "YYYY-MM-DD" → "14 Mar 2025"
export function formatDate(dateStr) {
  if (!dateStr) return '';
  const [year, month, day] = dateStr.split('-');
  const d = new Date(Number(year), Number(month) - 1, Number(day));
  return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
}

// Format a "YYYY-MM" string → "Mar 2025"
export function formatMonth(yyyyMM) {
  if (!yyyyMM) return '';
  const [year, month] = yyyyMM.split('-');
  const d = new Date(Number(year), Number(month) - 1, 1);
  return d.toLocaleDateString('en-IN', { month: 'short', year: 'numeric' });
}

// Format a percentage with sign: +12% / -5%
export function formatPct(value, showSign = true) {
  const sign = showSign && value > 0 ? '+' : '';
  return `${sign}${value}%`;
}

// Short form of INR for chart tooltips: ₹62K, ₹1.2L
export function formatINRShort(amount) {
  if (amount >= 100000) return `₹${(amount / 100000).toFixed(1)}L`;
  if (amount >= 1000)   return `₹${(amount / 1000).toFixed(1)}K`;
  return `₹${amount}`;
}

// Generate a unique transaction ID
export function generateId() {
  return `tx_${Date.now()}_${Math.random().toString(36).slice(2, 7)}`;
}
