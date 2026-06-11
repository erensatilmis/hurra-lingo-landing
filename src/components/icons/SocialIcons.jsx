export function InstagramIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4zm0 2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2H7zm5 3.25a3.75 3.75 0 1 0 0 7.5 3.75 3.75 0 0 0 0-7.5zm0 2a1.75 1.75 0 1 1 0 3.5 1.75 1.75 0 0 1 0-3.5zM17.5 7a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z"
      />
    </svg>
  )
}

export function FacebookIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M15.5 8.5H18V5h-2.75C12.95 5 12 6.45 12 8.05V10H9.5v3H12v9h3.25v-9h2.75l.5-3H15v-1.75c0-.55.45-1 1-1z" />
    </svg>
  )
}

export function YoutubeIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M8 6.2v11.6L19 12 8 6.2z" />
    </svg>
  )
}

export function LinkedinIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M6.75 9.75a1.75 1.75 0 1 1-.001-3.501A1.75 1.75 0 0 1 6.75 9.75zM5.25 20.25h3v-8.75h-3v8.75zM11.25 20.25h3v-4.8c0-1.32.23-2.95 2.13-2.95 1.82 0 1.87 1.71 1.87 2.98v4.77h3v-5.37c0-2.72-1.46-3.99-3.6-3.99-1.67 0-2.42.91-2.8 1.56h-.04v-1.36h-2.56v5.16z" />
    </svg>
  )
}

export function WhatsAppIcon({ className = 'h-5 w-5' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.881 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function TiktokIcon({ className = 'h-4 w-4' }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
    </svg>
  )
}

export const socialIconMap = {
  instagram: InstagramIcon,
  facebook: FacebookIcon,
  youtube: YoutubeIcon,
  linkedin: LinkedinIcon,
  tiktok: TiktokIcon,
}

export const socialBrandColors = {
  instagram: 'bg-[#56C8F0]',
  facebook: 'bg-[#F4B840]',
  youtube: 'bg-[#E8338E]',
  linkedin: 'bg-[#C5E047]',
  tiktok: 'bg-[#010101]',
}
