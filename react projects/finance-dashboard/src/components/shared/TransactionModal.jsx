import { useAppContext } from '../../hooks/useAppContext';
import Modal from './Modal';
import TransactionForm from './TransactionForm';

export default function TransactionModal() {
  const { state, dispatch } = useAppContext();
  const { modalState, transactions, role } = state;

  // Guard: only admin can see the modal
  if (!modalState.isOpen || role !== 'admin') return null;

  const tx = modalState.mode === 'edit'
    ? transactions.find(t => t.id === modalState.editId) ?? null
    : null;

  function handleClose() {
    dispatch({ type: 'CLOSE_MODAL' });
  }

  return (
    <Modal onClose={handleClose}>
      <div className="modal__header">
        <h2 className="modal__title">
          {modalState.mode === 'edit' ? 'Edit Transaction' : 'Add Transaction'}
        </h2>
        <button className="btn--icon" onClick={handleClose} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6"  x2="6"  y2="18" />
            <line x1="6"  y1="6"  x2="18" y2="18" />
          </svg>
        </button>
      </div>

      <TransactionForm tx={tx} onClose={handleClose} />
    </Modal>
  );
}
