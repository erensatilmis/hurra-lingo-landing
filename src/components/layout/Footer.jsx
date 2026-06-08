import Container from '../ui/Container'
import CtaBand from '../sections/CtaBand'
import { assets } from '../../assets'
import { footer, footerCta } from '../../data/content'

export default function Footer() {
  return (
    <footer>
      <CtaBand data={{ ...footerCta, variant: 'primary' }} />

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
                Yeni nesil online dil okulu. Canlı dersler, yapay zekâ destekli
                içerikler ve uzman öğretmenlerle dil öğrenin.
              </p>
            </div>

            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wide text-slate-900">
                Bağlantılar
              </h3>
              <ul className="mt-4 space-y-2">
                {footer.sites.map((site) => (
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
                Sosyal Medya
              </h3>
              <ul className="mt-4 space-y-2">
                {footer.social.map((item) => (
                  <li key={item.label}>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="text-sm text-slate-600 transition-colors hover:text-primary-700"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-center justify-between gap-4 border-t border-slate-200 pt-6 text-sm text-slate-500 sm:flex-row">
            <p>© {new Date().getFullYear()} Hurra Lingo. Tüm hakları saklıdır.</p>
            <div className="flex flex-wrap gap-4">
              {footer.legal.map((item) => (
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
