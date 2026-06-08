export default function Card({
  children,
  className = '',
  hover = true,
  padded = true,
}) {
  return (
    <div
      className={`rounded-2xl border border-slate-200/80 bg-white shadow-sm ${
        padded ? 'p-6' : ''
      } ${
        hover
          ? 'transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-100/50'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
