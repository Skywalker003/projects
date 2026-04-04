/**
 * Serialises a transaction array to a CSV file and triggers a browser download.
 * @param {Array} transactions - array of transaction objects
 * @param {string} filename - default "transactions.csv"
 */
export function exportCSV(transactions, filename = 'transactions.csv') {
  const headers = ['Date', 'Description', 'Category', 'Type', 'Amount (INR)'];

  const rows = transactions.map(tx => [
    tx.date,
    `"${tx.desc.replace(/"/g, '""')}"`,
    tx.category,
    tx.type,
    tx.amount,
  ]);

  const csv = [headers.join(','), ...rows.map(r => r.join(','))].join('\n');

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url  = URL.createObjectURL(blob);

  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  link.click();

  URL.revokeObjectURL(url);
}
