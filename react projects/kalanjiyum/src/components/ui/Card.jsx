export default function Card({children, className = '', onClick}) {
    const interactive = Boolean(onClick)
    return (
        <div
            className={['card', interactive ? 'card--clickable' : '', className].filter(Boolean).join(' ')}
            onClick={onClick}
            role={interactive ? 'button' : undefined}
            tabIndex={interactive ? 0 : undefined}
            onKeyDown={interactive ? (e) => { if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); onClick(e) } } : undefined}
        >
            {children}
        </div>
    )
}