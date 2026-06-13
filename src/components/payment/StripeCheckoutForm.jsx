import { useState } from 'react'
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js'
import { ArrowRight, CreditCard, Lock, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Button from '../ui/Button'
import Field from '../ui/Field'
import BillingFields from './BillingFields'
import { cardElementOptions } from '../../lib/stripe'

export default function StripeCheckoutForm({ defaultCardholderName, onSuccess }) {
  const { t } = useTranslation('payment')
  const stripe = useStripe()
  const elements = useElements()
  const [invoiceType, setInvoiceType] = useState('individual')
  const [cardholderName, setCardholderName] = useState(defaultCardholderName)
  const [paymentError, setPaymentError] = useState(null)
  const [processing, setProcessing] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    setPaymentError(null)

    if (!stripe || !elements) {
      setPaymentError(t('checkout.stripeNotLoaded'))
      return
    }

    const cardElement = elements.getElement(CardElement)
    if (!cardElement) {
      setPaymentError(t('checkout.cardFieldMissing'))
      return
    }

    setProcessing(true)

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
      billing_details: {
        name: cardholderName.trim() || undefined,
      },
    })

    setProcessing(false)

    if (error) {
      setPaymentError(error.message ?? t('checkout.cardValidationFailed'))
      return
    }

    onSuccess({ paymentMethodId: paymentMethod.id, mode: 'stripe-demo' })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-8"
    >
      <div className="rounded-2xl border border-amber-200 bg-amber-50 px-4 py-3 text-sm text-amber-900">
        <span className="font-semibold">{t('checkout.stripeNoticeTitle')}</span>{' '}
        {t('checkout.stripeNoticeBody')}{' '}
        <span className="font-mono">{t('checkout.stripeTestCard')}</span>
      </div>

      <div className="mt-6 flex items-center gap-2 text-slate-900">
        <CreditCard className="h-5 w-5 text-primary-600" />
        <h2 className="text-lg font-bold">{t('checkout.cardTitle')}</h2>
      </div>

      <div className="mt-6 space-y-5">
        <Field
          id="cardName"
          label={t('checkout.cardholderName')}
          placeholder={t('checkout.cardholderPlaceholder')}
          autoComplete="cc-name"
          icon={User}
          value={cardholderName}
          onChange={(event) => setCardholderName(event.target.value)}
          required
        />

        <div>
          <label className="mb-1.5 block text-sm font-semibold text-slate-700">
            {t('checkout.cardDetails')}
          </label>
          <div className="rounded-xl border border-slate-200 bg-white px-4 py-3.5 transition-colors focus-within:border-primary-400 focus-within:ring-2 focus-within:ring-primary-100">
            <CardElement options={cardElementOptions} />
          </div>
        </div>
      </div>

      <BillingFields
        invoiceType={invoiceType}
        onInvoiceTypeChange={setInvoiceType}
      />

      {paymentError && (
        <p className="mt-6 rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700">
          {paymentError}
        </p>
      )}

      <Button
        type="submit"
        size="lg"
        className="mt-8 w-full"
        disabled={!stripe || processing}
      >
        {processing ? t('checkout.processing') : t('checkout.pay')}
        {!processing && <ArrowRight className="ml-2 h-5 w-5" />}
      </Button>
      <p className="mt-4 flex items-center justify-center gap-1.5 text-center text-xs text-slate-400">
        <Lock className="h-3.5 w-3.5" />
        {t('checkout.secureStripe')}
      </p>
    </form>
  )
}
