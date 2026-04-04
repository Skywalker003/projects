import { useMemo } from 'react';
import { useAppContext } from './useAppContext';

export function useTransactions() {
  const { state } = useAppContext();
  const { transactions, filters, sortConfig } = state;

  const filtered = useMemo(() => {
    let result = [...transactions];

    if (filters.search) {
      const q = filters.search.toLowerCase();
      result = result.filter(tx =>
        tx.desc.toLowerCase().includes(q) ||
        tx.category.toLowerCase().includes(q)
      );
    }

    if (filters.type) {
      result = result.filter(tx => tx.type === filters.type);
    }

    if (filters.category) {
      result = result.filter(tx => tx.category === filters.category);
    }

    if (filters.month) {
      result = result.filter(tx => tx.date.startsWith(filters.month));
    }

    // Sort
    result.sort((a, b) => {
      let aVal = a[sortConfig.column];
      let bVal = b[sortConfig.column];

      if (sortConfig.column === 'amount') {
        aVal = Number(aVal);
        bVal = Number(bVal);
      } else {
        aVal = String(aVal).toLowerCase();
        bVal = String(bVal).toLowerCase();
      }

      if (aVal < bVal) return sortConfig.direction === 'asc' ? -1 : 1;
      if (aVal > bVal) return sortConfig.direction === 'asc' ? 1 : -1;
      return 0;
    });

    return result;
  }, [transactions, filters, sortConfig]);

  return { filtered, total: transactions.length };
}
