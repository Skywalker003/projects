import { useState, useEffect, useRef } from 'react'
import './StatsBar.css'

const STATS = [
    { end: 2019, suffix: '',  label: 'YEAR FOUNDED', static: true },
    { end: 50,   suffix: '+', label: 'SOLUTIONS OFFERED' },
    { end: 25,   suffix: '+', label: 'BUSINESS DOMAINS' },
    { end: 20,   suffix: '+', label: 'ASSOCIATED PROFESSIONALS' },
]

export default function StatsBar() {
    const [counts, setCounts]   = useState(STATS.map(() => 0))
    const [started, setStarted] = useState(false)
    const ref = useRef(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => { if (entry.isIntersecting) { setStarted(true); observer.disconnect() } },
            { threshold: 0.4 }
        )
        if (ref.current) observer.observe(ref.current)
        return () => observer.disconnect()
    }, [])

    useEffect(() => {
        if (!started) return
        const duration = 1800
        const start = performance.now()
        let raf
        const tick = (now) => {
            const t = Math.min((now - start) / duration, 1)
            const eased = 1 - Math.pow(1 - t, 3) // easeOutCubic
            setCounts(STATS.map(s => Math.round(s.end * eased)))
            if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [started])

    return (
        <section ref={ref} className="stats-bar" aria-label="Company statistics">
            {STATS.map((stat, i) => (
                <div className="stats-bar_item" key={stat.label}>
                    <div className="stats-bar_number">{stat.static ? stat.end : counts[i]}{stat.suffix}</div>
                    <div className="stats-bar_label">{stat.label}</div>
                </div>
            ))}
        </section>
    )
}
