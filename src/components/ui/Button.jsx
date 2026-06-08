const variants = {
  primary:
    'bg-primary-600 text-white shadow-lg shadow-primary-600/25 hover:bg-primary-700 focus-visible:ring-primary-500',
  secondary:
    'border-2 border-white/80 bg-transparent text-white hover:bg-white/10 focus-visible:ring-white',
  outline:
    'border-2 border-primary-200 bg-white text-primary-700 hover:border-primary-300 hover:bg-primary-50 focus-visible:ring-primary-500',
  ghost:
    'bg-transparent text-primary-700 hover:bg-primary-50 focus-visible:ring-primary-500',
}

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-base',
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  ...props
}) {
  const classes = `inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${variants[variant]} ${sizes[size]} ${className}`

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {children}
    </button>
  )
}
