import './CustomSelect.css'
import { useState, useRef, useEffect } from 'react'
import { ChevronDown, Check, Search } from 'lucide-react'

export default function CustomSelect({ id, options, value, onChange, placeholder, disabled, searchable }) {
    const [open, setOpen] = useState(false)
    const [query, setQuery] = useState('')
    const ref = useRef(null)
    const searchRef = useRef(null)

    useEffect(() => {
        function handleClickOutside(e) {
            if (ref.current && !ref.current.contains(e.target)) {
                setOpen(false)
                setQuery('')
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    useEffect(() => {
        if (open && searchable && searchRef.current) {
            searchRef.current.focus()
        }
        if (!open) setQuery('')
    }, [open, searchable])

    const selected = options.find(o => o.value === value)

    const filtered = searchable && query
        ? options.filter(o => o.label.toLowerCase().includes(query.toLowerCase()))
        : options

    return (
        <div className={`custom-select ${open ? 'custom-select--open' : ''} ${disabled ? 'custom-select--disabled' : ''}`} ref={ref}>
            <button
                id={id}
                type="button"
                className="custom-select_trigger"
                onClick={() => !disabled && setOpen(!open)}
                disabled={disabled}
                aria-expanded={open}
                aria-haspopup="listbox"
            >
                <span className={selected ? '' : 'custom-select_placeholder'}>
                    {selected ? selected.label : placeholder}
                </span>
                <ChevronDown size={16} className="custom-select_chevron" aria-hidden="true" />
            </button>

            {open && (
                <div className="custom-select_menu">
                    {searchable && (
                        <div className="custom-select_search">
                            <Search size={14} className="custom-select_search-icon" aria-hidden="true" />
                            <input
                                ref={searchRef}
                                className="custom-select_search-input"
                                type="text"
                                aria-label="Search options"
                                placeholder="Search..."
                                value={query}
                                onChange={e => setQuery(e.target.value)}
                                onClick={e => e.stopPropagation()}
                            />
                        </div>
                    )}
                    <ul className="custom-select_list">
                        {filtered.length > 0 ? filtered.map(opt => (
                            <li
                                key={opt.value}
                                className={`custom-select_option ${opt.value === value ? 'custom-select_option--active' : ''}`}
                                onClick={() => { onChange(opt.value); setOpen(false) }}
                            >
                                {opt.label}
                                {opt.value === value && <Check size={14} aria-hidden="true" />}
                            </li>
                        )) : (
                            <li className="custom-select_empty">No results</li>
                        )}
                    </ul>
                </div>
            )}
        </div>
    )
}
