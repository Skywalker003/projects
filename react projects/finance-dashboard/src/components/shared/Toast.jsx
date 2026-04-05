import { useEffect } from 'react';
import { useAppContext } from '../../hooks/useAppContext';

export default function Toast() {
  const { state, dispatch } = useAppContext();
  const { toast } = state;

  useEffect(() => {
    if (!toast) return;
    const duration = toast.undoable ? 4000 : 2500;
    const timer = setTimeout(() => dispatch({ type: 'HIDE_TOAST' }), duration);
    return () => clearTimeout(timer);
  }, [toast, dispatch]);

  if (!toast) return null;

  const icon = toast.type === 'success' ? '✓' : '✕';

  function handleUndo() {
    dispatch({ type: 'UNDO_DELETE' });
    dispatch({ type: 'HIDE_TOAST' });
  }

  return (
    <div className="toast-container">
      <div className={`toast toast--${toast.type}`}>
        <div className="toast__inner">
          <span className="toast__icon">{icon}</span>
          <span className="toast__message">{toast.message}</span>
          {toast.undoable && (
            <button className="toast__undo" onClick={handleUndo}>Undo</button>
          )}
        </div>
      </div>
    </div>
  );
}
