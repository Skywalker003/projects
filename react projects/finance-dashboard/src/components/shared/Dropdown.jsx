import { useState, useRef, useEffect } from 'react';

const ChevronIcon = ({ open }) => (
  <svg
    width="12" height="12" viewBox="0 0 24 24"
    fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"
    style={{ transition: 'transform 150ms ease', transform: open ? 'rotate(180deg)' : 'rotate(0deg)', flexShrink: 0 }}
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

/**
 * Custom styled dropdown — replaces native <select> in FilterBar.
 * @param {string}   value       - currently selected value
 * @param {Function} onChange    - called with the new value string
 * @param {Array}    options     - [{ label, value }]
 * @param {string}   placeholder - label shown when value is ''
 */
export default function Dropdown({ value, onChange, options, placeholder = 'All' }) {
  const [open, setOpen] = useState(false);
  const ref = useRef(null);

  // Close on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close on Escape
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

  return (
    <div ref={ref} style={{ position: 'relative', flexShrink: 0 }}>
      {/* Trigger button */}
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

      {/* Options panel */}
      {open && (
        <div className="dropdown-panel" role="listbox">
          {/* "All" / reset option */}
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

const CheckIcon = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);
