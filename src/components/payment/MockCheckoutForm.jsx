import { useState } from 'react'
import { ArrowRight, CreditCard, Lock, User } from 'lucide-react'
import Button from '../ui/Button'
import Field from '../ui/Field'
import BillingFields from './BillingFields'

export default function MockCheckoutForm({ onSuccess }) {
  const [invoiceType, setInvoiceType] = useState('individual')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSuccess({ mode: 'mock' })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-600">
        Stripe demo için{' '}
        <span className="font-mono text-slate-800">.env</span> dosyasına{' '}
        <span className="font-mono text-slate-800">
          VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
        </span>{' '}
        ekleyin. Şimdilik mock kart alanları kullanılıyor.
      </div>

      <div className="mt-6 flex items-center gap-2 text-slate-900">
        <CreditCard className="h-5 w-5 text-primary-600" />
        <h2 className="text-lg font-bold">Kart ile Öde</h2>
      </div>

      <div className="mt-6 space-y-5">
        <Field
          id="cardName"
          label="Kart Üzerindeki İsim"
          placeholder="Ad Soyad"
          autoComplete="cc-name"
          icon={User}
        />
        <Field
          id="cardNumber"
          label="Kart Numarası"
          placeholder="0000 0000 0000 0000"
          autoComplete="cc-number"
          inputMode="numeric"
          icon={CreditCard}
        />
        <div className="grid grid-cols-2 gap-5">
          <Field
            id="cardExpiry"
            label="Son Kullanma"
            placeholder="AA / YY"
            autoComplete="cc-exp"
            inputMode="numeric"
          />
          <Field
            id="cardCvc"
            label="CVC"
            placeholder="123"
            autoComplete="cc-csc"
            inputMode="numeric"
            icon={Lock}
          />
        </div>
      </div>

      <BillingFields
        invoiceType={invoiceType}
        onInvoiceTypeChange={setInvoiceType}
      />

      <Button type="submit" size="lg" className="mt-8 w-full">
        Ödemeyi Tamamla
        <ArrowRight className="ml-2 h-5 w-5" />
      </Button>
      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-slate-400">
        <Lock className="h-3.5 w-3.5" />
        Demo mod — gerçek ödeme alınmaz.
      </p>
    </form>
  )
}
