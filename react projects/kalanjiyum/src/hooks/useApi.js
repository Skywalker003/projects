import { useState, useEffect } from 'react'

export function useApi(apiFn, fallback) {
    const [data, setData] = useState(fallback)

    useEffect(() => {
        let cancelled = false
        apiFn()
            .then(d => { if (!cancelled) setData(d ?? fallback) })
            .catch(() => {})
        return () => { cancelled = true }
    }, [])

    return data
}
