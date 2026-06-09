import { useEffect } from 'react'
import { Smartphone, X } from 'lucide-react'
import Button from './Button'

export default function AppComingSoonModal({ title, description, cta, onClose }) {
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.addEventListener('keydown', handleKeyDown)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = previousOverflow
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="app-coming-soon-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        aria-label="Kapat"
        onClick={onClose}
      />
      <div className="animate-fade-in relative z-10 w-full max-w-md overflow-hidden rounded-2xl bg-white p-6 shadow-2xl sm:p-8">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 rounded-full p-1.5 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-600"
          aria-label="Kapat"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-100 text-primary-600">
          <Smartphone className="h-7 w-7" />
        </div>

        <h2
          id="app-coming-soon-title"
          className="mt-5 text-center text-xl font-bold text-slate-900"
        >
          {title}
        </h2>
        <p className="mt-3 text-center text-sm leading-7 text-slate-600">
          {description}
        </p>

        <div className="mt-6 flex justify-center">
          <Button size="sm" onClick={onClose}>
            {cta}
          </Button>
        </div>
      </div>
    </div>
  )
}
