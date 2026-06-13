import { useTranslation } from 'react-i18next'
import Container from '../ui/Container'
import CtaBand from '../sections/CtaBand'
import { SocialTextLink } from '../icons/SocialLink'
import { assets } from '../../assets'
import { socialHrefs } from '../../data/metadata'

export default function Footer() {
  const { t } = useTranslation(['common', 'home'])
  const footerData = t('footer', { returnObjects: true, ns: 'common' })
  const socialLinks = t('socialLinks', { returnObjects: true, ns: 'common' })
  const footerCta = {
    ...t('footerCta', { returnObjects: true, ns: 'common' }),
    variant: 'primary',
  }

  const socialItems = socialLinks.map((item) => ({
    ...item,
    href: socialHrefs[item.id] ?? '#',
  }))

  return (
    <footer>
      <CtaBand data={footerCta} />

      <div className="border-t border-slate-200 bg-white py-12">
        <Container>
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              {assets.logo ? (
                <img
                  src={assets.logo}
                  alt="Hurra Lingo"
                  className="h-11 w-auto"
                />
              ) : (
                <div className="flex items-center gap-2">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-primary-600 to-primary-400 text-sm font-bold text-white">
                    HL
                  </div>
                  <span className="text-lg font-bold text-slate-900">
                    Hurra Lingo
                  </span>
                </div>
              )}
              <p className="mt-4 text-sm leading-7 text-slate-600">
                {footerData.tagline}
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
                {footerData.linksTitle}
              </h3>
              <ul className="mt-4 space-y-2">
                {footerData.sites.map((site) => (
                  <li key={site.label}>
                    <a
                      href={site.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-slate-600 transition-colors hover:text-primary-700"
                    >
                      {site.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
                {footerData.socialTitle}
              </h3>
              <ul className="mt-4 space-y-2">
                {socialItems.map((item) => (
                  <li key={item.id}>
                    <SocialTextLink item={item} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row">
            <p>
              © {new Date().getFullYear()} Hurra Lingo. {footerData.rights}
            </p>
            <div className="flex flex-wrap gap-4">
              {footerData.legal.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="transition-colors hover:text-primary-700"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
        </Container>
      </div>
    </footer>
  )
}
