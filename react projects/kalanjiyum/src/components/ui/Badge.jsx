export default function Badge({children, variant='red', }){
    return (
        <span
            className={`badge badge--${variant}`}
        >
            {children}
        </span>
    )
}