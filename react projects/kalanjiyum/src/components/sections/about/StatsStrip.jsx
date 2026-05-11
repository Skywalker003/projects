import './StatsStrip.css'
import { useState, useEffect, useRef } from 'react'
import { aboutStats as fallback } from '../../../data/about'
import { getAboutStats } from '../../../api/about'
import { useApi } from '../../../hooks/useApi'

export default function StatsStrip() {
    const liveStats  = useApi(getAboutStats, fallback)
    const statsRef   = useRef(fallback)
    const [counts, setCounts]   = useState(fallback.map(() => 0))
    const [started, setStarted] = useState(false)
    const ref = useRef(null)

    useEffect(() => { statsRef.current = liveStats }, [liveStats])

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
            const eased = 1 - Math.pow(1 - t, 3)
            setCounts(statsRef.current.map(s => Math.round(s.end * eased)))
            if (t < 1) raf = requestAnimationFrame(tick)
        }
        raf = requestAnimationFrame(tick)
        return () => cancelAnimationFrame(raf)
    }, [started])

    return (
        <div className="stats-strip" ref={ref} aria-label="Company statistics">
            <div className="container">
                <div className="stats-strip_grid">
                    {liveStats.map((s, i) => (
                        <div className="stats-strip_item" key={s.label}>
                            <span className="stats-strip_value">{counts[i]}{s.suffix}</span>
                            <span className="stats-strip_label">{s.label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
