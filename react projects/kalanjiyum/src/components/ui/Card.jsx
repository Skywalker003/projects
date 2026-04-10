export default function Card({children, className = '', onClick}) {
    return (
        <div 
            className={['card', className].filter(Boolean).join(' ')}
            onClick={onClick}
        >
            {children}
        </div>
    )
}