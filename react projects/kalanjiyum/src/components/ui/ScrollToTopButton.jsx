import './ScrollToTopButton.css'
import { useState, useEffect } from 'react'
import { ArrowUp } from 'lucide-react'

export default function ScrollToTopButton() {
    const [visible, setVisible] = useState(false)

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > 300)
        window.addEventListener('scroll', onScroll, { passive: true })
        return () => window.removeEventListener('scroll', onScroll)
    }, [])

    if (!visible) return null

    return (
        <button
            className="scroll-top-btn"
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            aria-label="Scroll to top"
        >
            <ArrowUp size={20} aria-hidden="true" />
        </button>
    )
}
