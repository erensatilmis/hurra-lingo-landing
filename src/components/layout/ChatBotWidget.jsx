import { useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Bot, MessageCircle, Send, X } from 'lucide-react'

export default function ChatBotWidget() {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation('chatbot')
  const quickReplies = t('quickReplies', { returnObjects: true })

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">
      {open && (
        <div
          role="dialog"
          aria-label={t('aria.dialog')}
          className="flex w-[calc(100vw-3rem)] max-w-sm flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl shadow-slate-900/10"
        >
          <div className="flex items-center gap-3 bg-linear-to-r from-primary-700 to-primary-600 px-4 py-3 text-white">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
              <Bot className="h-5 w-5" />
            </div>
            <div className="min-w-0 flex-1">
              <p className="text-sm font-semibold">{t('title')}</p>
              <p className="text-xs text-primary-100">{t('status')}</p>
            </div>
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label={t('aria.close')}
              className="rounded-lg p-1.5 transition-colors hover:bg-white/15"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 space-y-4 overflow-y-auto bg-slate-50 p-4">
            <div className="flex gap-2">
              <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary-100 text-primary-700">
                <Bot className="h-4 w-4" />
              </div>
              <div className="max-w-[85%] rounded-2xl rounded-tl-sm bg-white px-4 py-3 text-sm leading-6 text-slate-700 shadow-sm ring-1 ring-slate-200/80">
                {t('greeting')}
              </div>
            </div>

            <div className="flex flex-wrap gap-2 pl-10">
              {quickReplies.map((reply) => (
                <span
                  key={reply}
                  className="rounded-full border border-primary-200 bg-white px-3 py-1.5 text-xs font-medium text-primary-700"
                >
                  {reply}
                </span>
              ))}
            </div>
          </div>

          <div className="border-t border-slate-200 bg-white p-3">
            <div className="flex items-center gap-2 rounded-xl border border-slate-200 bg-slate-50 px-3 py-2">
              <input
                type="text"
                disabled
                placeholder={t('placeholder')}
                className="min-w-0 flex-1 bg-transparent text-sm text-slate-400 outline-none"
              />
              <button
                type="button"
                disabled
                aria-label={t('aria.send')}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-600 text-white opacity-50"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
            <p className="mt-2 text-center text-[11px] text-slate-400">
              {t('comingSoon')}
            </p>
          </div>
        </div>
      )}

      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        aria-label={open ? t('aria.close') : t('aria.open')}
        aria-expanded={open}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-600 text-white shadow-lg shadow-primary-600/30 transition-all duration-300 hover:scale-105 hover:bg-primary-700 hover:shadow-xl hover:shadow-primary-600/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-500 focus-visible:ring-offset-2"
      >
        {open ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </button>
    </div>
  )
}
