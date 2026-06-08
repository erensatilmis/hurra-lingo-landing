export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignClass =
    align === 'left' ? 'text-left' : align === 'right' ? 'text-right' : 'text-center'

  return (
    <div className={`${alignClass} ${className}`}>
      {eyebrow && (
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
          {eyebrow}
        </p>
      )}
      {title && (
        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          {title}
        </h2>
      )}
      {subtitle && (
        <p className="mx-auto mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
          {subtitle}
        </p>
      )}
    </div>
  )
}
