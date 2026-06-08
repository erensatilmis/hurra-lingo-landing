import { Building2, MapPin, User } from 'lucide-react'
import Field from '../ui/Field'

export default function BillingFields({ invoiceType, onInvoiceTypeChange }) {
  return (
    <div className="mt-8 border-t border-slate-100 pt-6">
      <div className="flex items-center gap-2 text-slate-900">
        <h2 className="text-lg font-bold">Fatura Bilgileri</h2>
      </div>

      <div className="mt-4 inline-flex rounded-full border border-slate-200 bg-slate-50 p-1">
        {[
          { id: 'individual', label: 'Bireysel' },
          { id: 'corporate', label: 'Kurumsal' },
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
            label="T.C. Kimlik No"
            placeholder="11 haneli kimlik numarası"
            inputMode="numeric"
            icon={User}
          />
        ) : (
          <>
            <Field
              id="companyName"
              label="Firma Ünvanı"
              placeholder="Şirket adı"
              autoComplete="organization"
              icon={Building2}
            />
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              <Field
                id="taxOffice"
                label="Vergi Dairesi"
                placeholder="Vergi dairesi"
              />
              <Field
                id="taxNumber"
                label="Vergi No"
                placeholder="Vergi numarası"
                inputMode="numeric"
              />
            </div>
          </>
        )}

        <Field
          id="billingAddress"
          label="Adres"
          placeholder="Mahalle, cadde, sokak, no"
          autoComplete="street-address"
          icon={MapPin}
        />
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <Field id="billingCity" label="İl" placeholder="İl" autoComplete="address-level1" />
          <Field
            id="billingDistrict"
            label="İlçe"
            placeholder="İlçe"
            autoComplete="address-level2"
          />
          <Field
            id="billingZip"
            label="Posta Kodu"
            placeholder="06000"
            autoComplete="postal-code"
            inputMode="numeric"
            required={false}
          />
        </div>
      </div>
    </div>
  )
}
