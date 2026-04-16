import './CustomSelect.css'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Check } from 'lucide-react'

export default function CustomSelect({ options, value, onChange, placeholder }) {
    const [open, setOpen] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const selected = options.find(o => o.value === value)

    return (
        <div className={`custom-select ${open ? 'custom-select--open' : ''}`} ref={ref}>
            <button
                type="button"
                className="custom-select_trigger"
                onClick={() => setOpen(!open)}
            >
                <span className={selected ? '' : 'custom-select_placeholder'}>
                    {selected ? selected.label : placeholder}
                </span>
                <ChevronDown size={16} className="custom-select_chevron" />
            </button>

            {open && (
                <ul className="custom-select_menu">
                    {options.map(opt => (
                        <li
                            key={opt.value}
                            className={`custom-select_option ${opt.value === value ? 'custom-select_option--active' : ''}`}
                            onClick={() => { onChange(opt.value); setOpen(false) }}
                        >
                            {opt.label}
                            {opt.value === value && <Check size={14} />}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    )
}
