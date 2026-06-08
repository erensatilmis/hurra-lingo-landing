import { useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function TiltCard({
  children,
  className = '',
  max = 8,
  ...props
}) {
  const ref = useRef(null)
  const [transform, setTransform] = useState('')

  const handleMove = (event) => {
    const node = ref.current
    if (!node || prefersReducedMotion()) return

    const rect = node.getBoundingClientRect()
    const px = (event.clientX - rect.left) / rect.width - 0.5
    const py = (event.clientY - rect.top) / rect.height - 0.5
    const rotateY = px * max * 2
    const rotateX = -py * max * 2
    setTransform(
      `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale(1.02)`,
    )
  }

  const handleLeave = () => setTransform('')

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ transform, transition: 'transform 0.25s ease-out' }}
      className={className}
      {...props}
    >
      {children}
    </div>
  )
}
