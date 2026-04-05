import { useState, useRef, useEffect } from 'react';

const ChevronIcon = ({ open }) => (
  <svg
    width="12" height="12" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
    className={`dropdown-chevron${open ? ' dropdown-chevron--open' : ''}`}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

export default function Dropdown({ value, onChange, options, placeholder = 'All', className }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    function handleKey(e) {
      if (e.key === 'Escape') setOpen(false);
    }
    document.addEventListener('keydown', handleKey);
    return () => document.removeEventListener('keydown', handleKey);
  }, []);

  const selected = options.find(o => o.value === value);
  const displayLabel = selected ? selected.label : placeholder;

  function select(val) {
    onChange(val);
    setOpen(false);
  }

  const rootClass = ['dropdown-root', className].filter(Boolean).join(' ');

  return (
    <div ref={ref} className={rootClass}>
      <button
        type="button"
        className="dropdown-trigger"
        onClick={() => setOpen(o => !o)}
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <span className="dropdown-trigger__label">{displayLabel}</span>
        <ChevronIcon open={open} />
      </button>

      {open && (
        <div className="dropdown-panel" role="listbox">
          <button
            type="button"
            role="option"
            aria-selected={value === ''}
            className={`dropdown-option${value === '' ? ' dropdown-option--active' : ''}`}
            onClick={() => select('')}
          >
            {placeholder}
            {value === '' && <CheckIcon />}
          </button>

          {options.map(opt => (
            <button
              key={opt.value}
              type="button"
              role="option"
              aria-selected={value === opt.value}
              className={`dropdown-option${value === opt.value ? ' dropdown-option--active' : ''}`}
              onClick={() => select(opt.value)}
            >
              {opt.label}
              {value === opt.value && <CheckIcon />}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
