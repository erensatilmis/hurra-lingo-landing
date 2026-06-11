import { socialBrandColors, socialIconMap } from './SocialIcons'

const iconSizes = {
  md: { button: 'h-7 w-7', icon: 'h-4 w-4' },
  sm: { button: 'h-5 w-5', icon: 'h-3 w-3' },
}

export function SocialIconButton({ item, size = 'md', className = '' }) {
  const Icon = socialIconMap[item.id]
  const sizes = iconSizes[size]

  if (!Icon) return null

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={item.label}
      className={`inline-flex shrink-0 items-center justify-center rounded-full text-white transition-opacity hover:opacity-90 ${sizes.button} ${socialBrandColors[item.id] ?? 'bg-slate-500'} ${className}`}
    >
      <Icon className={`${sizes.icon} shrink-0 scale-110`} />
    </a>
  )
}

export function SocialTextLink({ item, className = '' }) {
  const Icon = socialIconMap[item.id]
  const sizes = iconSizes.sm

  if (!Icon) return null

  return (
    <a
      href={item.href}
      target="_blank"
      rel="noreferrer noopener"
      className={`inline-flex items-center gap-2.5 text-sm text-slate-600 transition-colors hover:text-primary-700 ${className}`}
    >
      <span
        className={`inline-flex shrink-0 items-center justify-center rounded-full text-white ${sizes.button} ${socialBrandColors[item.id] ?? 'bg-slate-500'}`}
        aria-hidden="true"
      >
        <Icon className={`${sizes.icon} shrink-0 scale-110`} />
      </span>
      {item.label}
    </a>
  )
}
