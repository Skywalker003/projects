import Modal from './Modal';

export default function ConfirmDialog({ title, message, onConfirm, onCancel }) {
  return (
    <Modal onClose={onCancel} className="confirm-dialog">
      <div className="modal__header">
        <h2 className="modal__title">{title}</h2>
        <button className="btn--icon" onClick={onCancel} aria-label="Close">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6"  y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </div>
      <p className="confirm-dialog__body">{message}</p>
      <div className="modal__footer">
        <button className="btn btn--ghost" onClick={onCancel}>Cancel</button>
        <button className="btn btn--danger" onClick={onConfirm}>Delete</button>
      </div>
    </Modal>
  );
}
