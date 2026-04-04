import { mockTransactions } from '../data/mockTransactions';

const savedTransactions = (() => {
  try {
    const stored = localStorage.getItem('fd_transactions');
    return stored ? JSON.parse(stored) : null;
  } catch {
    return null;
  }
})();

const savedRole = localStorage.getItem('fd_role') || 'viewer';
const savedTheme = localStorage.getItem('fd_theme') || 'light';

export const initialState = {
  transactions: savedTransactions ?? mockTransactions,
  role: savedRole,
  theme: savedTheme,
  currentPage: 'dashboard',
  filters: {
    search: '',
    type: '',
    category: '',
    month: '',
  },
  sortConfig: {
    column: 'date',
    direction: 'desc',
  },
  modalState: {
    isOpen: false,
    mode: 'add',
    editId: null,
  },
  toast: null,
  lastDeleted: null,
  dashboardRange: 6,
};