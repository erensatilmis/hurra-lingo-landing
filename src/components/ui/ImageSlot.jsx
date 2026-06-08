export default function ImageSlot({
  src,
  alt = '',
  label = 'Görsel',
  className = '',
  aspect = 'aspect-video',
  fit = 'cover',
}) {
  const fitClass = fit === 'contain' ? 'object-contain' : 'object-cover'

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`h-full w-full ${fitClass} ${className}`}
      />
    )
  }

  return (
    <div
      className={`flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-100 via-white to-secondary-400/20 ${aspect} ${className}`}
      aria-hidden="true"
    >
      <div className="rounded-xl border border-dashed border-primary-300/60 bg-white/60 px-4 py-3 text-center text-sm font-medium text-primary-700/70 backdrop-blur-sm">
        {label}
      </div>
    </div>
  )
}
