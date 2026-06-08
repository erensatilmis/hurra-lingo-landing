import { Phone } from 'lucide-react'
import Container from '../ui/Container'
import { socialBrandStyles, socialIconMap } from '../icons/SocialIcons'
import { contact, socialLinks } from '../../data/content'

export default function TopBar() {
  return (
    <div className="border-b border-slate-200/80 bg-white/90">
      <Container>
        <div className="flex flex-wrap items-center justify-center gap-4 py-2 sm:justify-between">
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600">
            <a
              href={`tel:${contact.mobile.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-primary-700"
            >
              <Phone className="h-4 w-4 text-primary-600" />
              {contact.mobile}
            </a>
            <span className="hidden h-4 w-px bg-slate-200 sm:block" />
            <a
              href={`tel:${contact.landline.replace(/\s/g, '')}`}
              className="inline-flex items-center gap-2 transition-colors hover:text-primary-700"
            >
              <Phone className="h-4 w-4 text-primary-600" />
              {contact.landline}
            </a>
          </div>

          <div className="flex items-center gap-1.5">
            {socialLinks.map((item) => {
              const Icon = socialIconMap[item.id]

              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={item.label}
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
                    socialBrandStyles[item.id] ??
                    'text-slate-500 hover:bg-slate-100'
                  }`}
                >
                  {Icon ? <Icon /> : null}
                </a>
              )
            })}
          </div>
        </div>
      </Container>
    </div>
  )
}
