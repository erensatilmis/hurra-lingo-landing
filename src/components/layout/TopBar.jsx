import Container from '../ui/Container'
import { socialBrandStyles, socialIconMap, WhatsAppIcon } from '../icons/SocialIcons'
import { socialLinks, whatsappUrl } from '../../data/content'

export default function TopBar() {
  return (
    <div className="border-b border-slate-200/80 bg-white/90">
      <Container>
        <div className="flex items-center justify-between gap-4 py-2">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label="WhatsApp ile iletişime geç"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white transition-colors hover:bg-[#20BD5A]"
          >
            <WhatsAppIcon className="h-6 w-6" />
          </a>

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
