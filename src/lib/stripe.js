import { loadStripe } from '@stripe/stripe-js'

export const stripePublishableKey =
  import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY ?? ''

export const isStripeConfigured = Boolean(stripePublishableKey)

export const stripePromise = isStripeConfigured
  ? loadStripe(stripePublishableKey)
  : null

export const cardElementOptions = {
  style: {
    base: {
      fontSize: '16px',
      color: '#0f172a',
      fontFamily: 'Nunito, system-ui, sans-serif',
      '::placeholder': {
        color: '#94a3b8',
      },
    },
    invalid: {
      color: '#dc2626',
    },
  },
  hidePostalCode: true,
}
