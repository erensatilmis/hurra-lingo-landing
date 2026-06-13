import { Link } from 'react-router-dom'
import { useLocalePath } from './useLocalePath'

export default function LocalizedLink({
  to,
  routeKey,
  params,
  href,
  children,
  ...props
}) {
  const { localizedPath } = useLocalePath()

  if (href) {
    const resolved =
      href.startsWith('/#') || href.startsWith('#')
        ? href
        : href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
          ? href
          : localizedPath(routeKey ?? 'home', params)

    if (
      href.startsWith('http') ||
      href.startsWith('mailto:') ||
      href.startsWith('tel:') ||
      href.startsWith('#')
    ) {
      return (
        <a href={href} {...props}>
          {children}
        </a>
      )
    }

    return (
      <Link to={resolved} {...props}>
        {children}
      </Link>
    )
  }

  const path = routeKey ? localizedPath(routeKey, params) : to

  return (
    <Link to={path} {...props}>
      {children}
    </Link>
  )
}
