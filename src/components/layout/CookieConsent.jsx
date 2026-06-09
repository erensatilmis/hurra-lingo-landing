import { Cookie, X } from 'lucide-react'
import Button from '../ui/Button'
import { useCookieConsent } from '../../hooks/useCookieConsent'

function Toggle({ checked, disabled, onChange, label, description }) {
  return (
    <label
      className={`flex items-start justify-between gap-4 rounded-xl border border-slate-200 p-4 ${
        disabled ? 'bg-slate-50' : 'bg-white'
      }`}
    >
      <span>
        <span className="block text-sm font-semibold text-slate-900">{label}</span>
        <span className="mt-1 block text-xs leading-5 text-slate-500">
          {description}
        </span>
      </span>
      <input
        type="checkbox"
        checked={checked}
        disabled={disabled}
        onChange={(event) => onChange?.(event.target.checked)}
        className="mt-0.5 h-5 w-5 shrink-0 rounded border-slate-300 text-primary-600 focus:ring-primary-500 disabled:opacity-60"
      />
    </label>
  )
}

export default function CookieConsent() {
  const {
    visible,
    showPreferences,
    preferences,
    setPreferences,
    acceptAll,
    rejectAll,
    savePreferences,
    openPreferences,
    setShowPreferences,
  } = useCookieConsent()

  if (!visible) return null

  return (
    <div
      role="dialog"
      aria-label="Çerez tercihleri"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-slate-200 bg-white/95 p-4 shadow-2xl backdrop-blur-md sm:p-6"
    >
      <div className="mx-auto max-w-5xl">
        {showPreferences ? (
          <div>
            <div className="mb-4 flex items-start justify-between gap-4">
              <div>
                <h2 className="text-lg font-bold text-slate-900">
                  Çerez Tercihleri
                </h2>
                <p className="mt-1 text-sm leading-6 text-slate-600">
                  Hangi çerez kategorilerine izin vermek istediğinizi seçin.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowPreferences(false)}
                aria-label="Tercih panelini kapat"
                className="rounded-lg p-1.5 text-slate-500 transition-colors hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-3">
              <Toggle
                checked
                disabled
                label="Zorunlu Çerezler"
                description="Sitenin temel işlevleri için gereklidir ve kapatılamaz."
              />
              <Toggle
                checked={preferences.analytics}
                onChange={(value) =>
                  setPreferences((current) => ({ ...current, analytics: value }))
                }
                label="Analitik Çerezler"
                description="Ziyaret istatistiklerini anlamamıza ve siteyi geliştirmemize yardımcı olur."
              />
              <Toggle
                checked={preferences.marketing}
                onChange={(value) =>
                  setPreferences((current) => ({ ...current, marketing: value }))
                }
                label="Pazarlama Çerezleri"
                description="Kişiselleştirilmiş içerik ve reklam deneyimi sunmak için kullanılır."
              />
            </div>

            <div className="mt-5 flex flex-wrap gap-3">
              <Button size="sm" onClick={savePreferences}>
                Tercihleri Kaydet
              </Button>
              <Button size="sm" variant="outline" onClick={acceptAll}>
                Tümünü Kabul Et
              </Button>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                <Cookie className="h-5 w-5" />
              </div>
              <div>
                <h2 className="text-base font-bold text-slate-900">
                  Çerez Kullanımı
                </h2>
                <p className="mt-1 max-w-3xl text-sm leading-6 text-slate-600">
                  Deneyiminizi iyileştirmek için çerezler kullanıyoruz. Zorunlu
                  çerezler siteyi çalıştırmak için gereklidir. Analitik ve
                  pazarlama çerezleri için tercihinizi belirleyebilirsiniz.{' '}
                  <a
                    href="#"
                    className="font-medium text-primary-700 underline-offset-2 hover:underline"
                  >
                    Gizlilik Politikası
                  </a>
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 lg:shrink-0">
              <Button size="sm" onClick={acceptAll}>
                Kabul Et
              </Button>
              <Button size="sm" variant="outline" onClick={rejectAll}>
                Reddet
              </Button>
              <Button size="sm" variant="ghost" onClick={openPreferences}>
                Tercihleri Yönet
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
