export default function Button({children, variant='primary', size, full, onClick, type='button', disabled, loading}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled || loading}
            className={['btn', `btn--${variant}`, size ? `btn--${size}` : '', full ? 'btn--full' : ''].join(' ').trim()}
        >
            {loading ? 'Loading...' : children}
        </button>
    )
}