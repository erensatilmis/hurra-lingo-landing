export default function Field({
  id,
  label,
  icon: Icon,
  type = 'text',
  required = true,
  error,
  ...props
}) {
  return (
    <div>
      <label
        htmlFor={id}
        className="mb-1.5 block text-sm font-semibold text-slate-700"
      >
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="pointer-events-none absolute left-3.5 top-1/2 h-5 w-5 -translate-y-1/2 text-slate-400" />
        )}
        <input
          id={id}
          name={id}
          type={type}
          required={required}
          aria-invalid={error ? 'true' : undefined}
          className={`w-full rounded-xl border bg-white py-3 pr-4 text-slate-900 outline-none transition-colors placeholder:text-slate-400 focus:ring-2 ${
            Icon ? 'pl-11' : 'pl-4'
          } ${
            error
              ? 'border-red-300 focus:border-red-400 focus:ring-red-100'
              : 'border-slate-200 focus:border-primary-400 focus:ring-primary-100'
          }`}
          {...props}
        />
      </div>
      {error && (
        <p className="mt-1.5 text-sm font-medium text-red-600">{error}</p>
      )}
    </div>
  )
}
