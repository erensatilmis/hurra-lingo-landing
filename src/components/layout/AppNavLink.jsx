import { Link, useLocation } from 'react-router-dom'

function isNavActive(href, { pathname, hash }) {
  if (href.startsWith('/#')) {
    return pathname === '/' && hash === href.slice(1)
  }

  if (href.startsWith('/') && !href.includes('#')) {
    return pathname === href
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

export default function AppNavLink({ href, className = '', onClick, children, mobile = false }) {
  const location = useLocation()
  const active = isNavActive(href, location)
  const isRoute = href.startsWith('/') && !href.includes('#')
  const linkClassName = `${getNavLinkClassName(active, mobile)} ${className}`.trim()

  if (isRoute) {
    return (
      <Link to={href} className={linkClassName} onClick={onClick} aria-current={active ? 'page' : undefined}>
        {children}
      </Link>
    )
  }

  return (
    <a
      href={href}
      className={linkClassName}
      onClick={onClick}
      aria-current={active ? 'page' : undefined}
    >
      {children}
    </a>
  )
}
