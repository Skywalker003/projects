function syncTransactions(transactions) {
  try {
    localStorage.setItem('fd_transactions', JSON.stringify(transactions));
  } catch {
    // localStorage unavailable — silently ignore
  }
}

export function reducer(state, action) {
  switch (action.type) {

    case 'ADD_TRANSACTION': {
      const updated = [action.payload, ...state.transactions];
      syncTransactions(updated);
      return { ...state, transactions: updated };
    }

    case 'EDIT_TRANSACTION': {
      const updated = state.transactions.map(tx =>
        tx.id === action.payload.id ? { ...tx, ...action.payload } : tx
      );
      syncTransactions(updated);
      return { ...state, transactions: updated };
    }

    case 'DELETE_TRANSACTION': {
      const index = state.transactions.findIndex(tx => tx.id === action.payload);
      const tx = state.transactions[index];
      const updated = state.transactions.filter(t => t.id !== action.payload);
      syncTransactions(updated);
      return { ...state, transactions: updated, lastDeleted: { tx, index } };
    }

    case 'UNDO_DELETE': {
      if (!state.lastDeleted) return state;
      const { tx, index } = state.lastDeleted;
      const restored = [...state.transactions];
      restored.splice(index, 0, tx);
      syncTransactions(restored);
      return { ...state, transactions: restored, lastDeleted: null };
    }

    case 'SET_FILTER':
      return {
        ...state,
        filters: { ...state.filters, [action.payload.key]: action.payload.value },
      };

    case 'CLEAR_FILTERS':
      return {
        ...state,
        filters: { search: '', type: '', category: '', month: '' },
      };

    case 'SET_SORT': {
      const isSameColumn = state.sortConfig.column === action.payload;
      return {
        ...state,
        sortConfig: {
          column: action.payload,
          direction: isSameColumn
            ? state.sortConfig.direction === 'asc' ? 'desc' : 'asc'
            : 'desc',
        },
      };
    }

    case 'SET_PAGE':
      return {
        ...state,
        currentPage: action.payload,
      };

    case 'SET_DASHBOARD_RANGE':
      return { ...state, dashboardRange: action.payload };

    case 'SET_ROLE': {
      try { localStorage.setItem('fd_role', action.payload); } catch { }
      return { ...state, role: action.payload };
    }

    case 'TOGGLE_THEME': {
      const next = state.theme === 'light' ? 'dark' : 'light';
      document.documentElement.setAttribute('data-theme', next);
      try { localStorage.setItem('fd_theme', next); } catch { }
      return { ...state, theme: next };
    }

    case 'OPEN_MODAL':
      return {
        ...state,
        modalState: {
          isOpen: true,
          mode: action.payload.mode,
          editId: action.payload.editId ?? null,
        },
      };

    case 'CLOSE_MODAL':
      return {
        ...state,
        modalState: { isOpen: false, mode: 'add', editId: null },
      };

    case 'SHOW_TOAST':
      return { ...state, toast: action.payload };

    case 'HIDE_TOAST':
      return { ...state, toast: null, lastDeleted: null };

    default:
      return state;
  }
}