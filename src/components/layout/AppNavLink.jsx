import { Link, useLocation } from 'react-router-dom'

function isNavActive(linkTarget, { pathname, hash }) {  if (!linkTarget) return false

  if (linkTarget.includes('#')) {
    const [path, hashPart] = linkTarget.split('#')
    const expectedHash = hashPart ? `#${hashPart}` : ''
    return pathname === path && hash === expectedHash
  }

  if (linkTarget.startsWith('/') && !linkTarget.includes('#')) {
    return pathname === linkTarget
  }

  return false
}

function getNavLinkClassName(isActive, mobile) {
  if (mobile) {
    return isActive
      ? 'rounded-xl bg-primary-50 px-3 py-3 text-sm font-semibold text-primary-600'
      : 'rounded-xl px-3 py-3 text-sm font-medium text-slate-700 hover:bg-primary-50 hover:text-primary-700'
  }

  return isActive
    ? 'text-sm font-semibold text-primary-600'
    : 'text-sm font-medium text-slate-600 transition-colors hover:text-primary-700'
}

export default function AppNavLink({
  href,
  to,
  className = '',
  onClick,
  children,
  mobile = false,
}) {
  const location = useLocation()
  const linkTarget = to ?? href
  const active = isNavActive(linkTarget, location)
  const isInternalLink = Boolean(to) || href?.startsWith('/')
  const linkClassName = `${getNavLinkClassName(active, mobile)} ${className}`.trim()

  if (isInternalLink) {
    return (
      <Link
        to={linkTarget}
        className={linkClassName}
        onClick={onClick}
        aria-current={active ? 'page' : undefined}
      >
        {children}
      </Link>
    )
  }

  return (
    <a
      href={linkTarget}
      className={linkClassName}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
    >
      {children}
    </a>
  )
}
