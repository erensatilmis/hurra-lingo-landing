import { useEffect } from 'react'
import { X } from 'lucide-react'
import ImageSlot from './ImageSlot'

export default function Lightbox({ image, label, onClose }) {
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
      aria-label={label || 'Görsel'}
    >
      <button
        type="button"
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        aria-label="Kapat"
        onClick={onClose}
      />
      <div className="animate-fade-in relative z-10 w-full max-w-3xl overflow-hidden rounded-2xl bg-white shadow-2xl">
        <button
          type="button"
          onClick={onClose}
          className="absolute right-3 top-3 z-20 rounded-full bg-black/60 p-2 text-white transition-colors hover:bg-black/80"
          aria-label="Kapat"
        >
          <X className="h-5 w-5" />
        </button>
        <div className="aspect-[4/3]">
          <ImageSlot src={image} label={label} aspect="aspect-[4/3]" />
        </div>
        {label && (
          <p className="border-t border-slate-100 px-5 py-4 text-sm font-medium text-slate-700">
            {label}
          </p>
        )}
      </div>
    </div>
  )
}
