import { useEffect, useRef, useState } from 'react';

/**
 * Animates a number from 0 → target value on mount.
 * Re-triggers when `value` changes.
 */
export default function CountUpNumber({ value, duration = 900, prefix = '', suffix = '' }) {
  const [display, setDisplay] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    const startValue = 0;
    const endValue = value;

    function step(timestamp) {
      if (!startRef.current) startRef.current = timestamp;
      const elapsed = timestamp - startRef.current;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(startValue + (endValue - startValue) * eased));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      }
    }

    startRef.current = null;
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(step);

    return () => { if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, [value, duration]);

  // Format with Indian locale
  const formatted = new Intl.NumberFormat('en-IN').format(display);

  return (
    <span>
      {prefix}{formatted}{suffix}
    </span>
  );
}
