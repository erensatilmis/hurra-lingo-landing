import { useEffect, useRef, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { useInView } from '../../hooks/useInView'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function CountUp({
  end,
  duration = 1600,
  prefix = '',
  suffix = '',
  className = '',
}) {
  const { i18n } = useTranslation()
  const { ref, inView } = useInView({ threshold: 0.4 })
  const [value, setValue] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!inView || startedRef.current) return
    startedRef.current = true

    if (prefersReducedMotion()) {
      setValue(end)
      return
    }

    let frame
    const start = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(eased * end))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }
    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [inView, end, duration])

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString(i18n.language === 'en' ? 'en-US' : 'tr-TR')}
      {suffix}
    </span>
  )
}
