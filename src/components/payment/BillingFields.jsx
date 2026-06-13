import { Building2, MapPin, User } from 'lucide-react'
import { useTranslation } from 'react-i18next'
import Field from '../ui/Field'

export default function BillingFields({ invoiceType, onInvoiceTypeChange }) {
  const { t } = useTranslation('payment')

  return (
    <div className="mt-8 border-t border-slate-100 pt-6">
      <div className="flex items-center gap-2 text-slate-900">
        <h2 className="text-lg font-bold">{t('billing.title')}</h2>
      </div>

      <div className="mt-4 inline-flex rounded-full border border-slate-200 bg-slate-50 p-1">
        {[
          { id: 'individual', label: t('billing.individual') },
          { id: 'corporate', label: t('billing.corporate') },
        ].map((option) => (
          <button
            key={option.id}
            type="button"
            onClick={() => onInvoiceTypeChange(option.id)}
            className={`rounded-full px-5 py-1.5 text-sm font-semibold transition-all ${
              invoiceType === option.id
                ? 'bg-primary-600 text-white shadow'
                : 'text-slate-600 hover:text-primary-700'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      <div className="mt-5 space-y-5">
        {invoiceType === 'individual' ? (
          <Field
            id="identityNumber"
            label={t('billing.identityNumber')}
            placeholder={t('billing.identityPlaceholder')}
            inputMode="numeric"
            icon={User}
          />
        ) : (
          <>
            <Field
              id="companyName"
              label={t('billing.companyName')}
              placeholder={t('billing.companyPlaceholder')}
              autoComplete="organization"
              icon={Building2}
            />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field
                id="taxOffice"
                label={t('billing.taxOffice')}
                placeholder={t('billing.taxOfficePlaceholder')}
              />
              <Field
                id="taxNumber"
                label={t('billing.taxNumber')}
                placeholder={t('billing.taxNumberPlaceholder')}
                inputMode="numeric"
              />
            </div>
          </>
        )}

        <Field
          id="billingAddress"
          label={t('billing.address')}
          placeholder={t('billing.addressPlaceholder')}
          autoComplete="street-address"
          icon={MapPin}
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Field
            id="billingCity"
            label={t('billing.city')}
            placeholder={t('billing.cityPlaceholder')}
            autoComplete="address-level1"
          />
          <Field
            id="billingDistrict"
            label={t('billing.district')}
            placeholder={t('billing.districtPlaceholder')}
            autoComplete="address-level2"
          />
          <Field
            id="billingZip"
            label={t('billing.zip')}
            placeholder={t('billing.zipPlaceholder')}
            autoComplete="postal-code"
            inputMode="numeric"
            required={false}
          />
        </div>
      </div>
    </div>
  )
}
