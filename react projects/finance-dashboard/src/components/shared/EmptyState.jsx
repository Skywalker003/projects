export default function EmptyState({ icon = '🔍', title = 'No results', desc = '' }) {
  return (
    <div className="empty-state">
      <div className="empty-state__icon">{icon}</div>
      <div className="empty-state__title">{title}</div>
      {desc && <div className="empty-state__desc">{desc}</div>}
    </div>
  );
}
