import './TagInput.css'
import { useState, useRef } from 'react'

export default function TagInput({ id, tags, onChange, placeholder }) {
    const [input, setInput] = useState('')
    const inputRef = useRef(null)

    const add = (val) => {
        const trimmed = val.trim().replace(/,+$/, '')
        if (trimmed && !tags.includes(trimmed)) {
            onChange([...tags, trimmed])
        }
        setInput('')
    }

    const remove = (tag) => {
        onChange(tags.filter(t => t !== tag))
    }

    const handleKeyDown = (e) => {
        if ((e.key === 'Enter' || e.key === ',') && input.trim()) {
            e.preventDefault()
            add(input)
        }
        if (e.key === 'Backspace' && !input && tags.length > 0) {
            onChange(tags.slice(0, -1))
        }
    }

    const handleChange = (e) => {
        const val = e.target.value
        if (val.endsWith(',')) {
            add(val)
        } else {
            setInput(val)
        }
    }

    return (
        <div className="tag-input" onClick={() => inputRef.current?.focus()}>
            {tags.map(tag => (
                <span className="tag-input_chip" key={tag}>
                    {tag}
                    <button
                        type="button"
                        className="tag-input_remove"
                        onClick={e => { e.stopPropagation(); remove(tag) }}
                        aria-label={`Remove ${tag}`}
                    >×</button>
                </span>
            ))}
            <input
                id={id}
                ref={inputRef}
                className="tag-input_field"
                type="text"
                value={input}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder={tags.length === 0 ? placeholder : ''}
            />
        </div>
    )
}
