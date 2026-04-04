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
      <div className={`toast toast--${toast.type}`} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
        <span style={{ fontWeight: 700, fontSize: '15px' }}>{icon}</span>
        <span style={{ flex: 1 }}>{toast.message}</span>
        {toast.undoable && (
          <button
            onClick={handleUndo}
            style={{
              background: 'rgba(255,255,255,0.2)',
              border: '1px solid rgba(255,255,255,0.35)',
              borderRadius: 'var(--radius-sm)',
              color: 'inherit',
              cursor: 'pointer',
              fontSize: '12px',
              fontWeight: 600,
              padding: '3px 10px',
              flexShrink: 0,
            }}
          >
            Undo
          </button>
        )}
      </div>
    </div>
  );
}
