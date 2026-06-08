import { useEffect, useRef } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function Parallax({
  speed = 0.15,
  className = '',
  children,
  ...props
}) {
  const ref = useRef(null)

  useEffect(() => {
    const node = ref.current
    if (!node || prefersReducedMotion()) return

    let base = 0
    let raf = 0

    const measure = () => {
      node.style.transform = 'translate3d(0, 0, 0)'
      const rect = node.getBoundingClientRect()
      base = window.scrollY + rect.top + node.offsetHeight / 2
    }

    const apply = () => {
      raf = 0
      const viewportCenter = window.scrollY + window.innerHeight / 2
      const delta = base - viewportCenter
      node.style.transform = `translate3d(0, ${(-delta * speed).toFixed(1)}px, 0)`
    }

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(apply)
    }

    const onResize = () => {
      measure()
      apply()
    }

    measure()
    apply()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onResize)

    return () => {
      if (raf) cancelAnimationFrame(raf)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onResize)
      node.style.transform = ''
    }
  }, [speed])

  return (
    <div ref={ref} className={className} style={{ willChange: 'transform' }} {...props}>
      {children}
    </div>
  )
}
