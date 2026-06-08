import { ChevronDown } from 'lucide-react'

export default function Accordion({ items, openId, onToggle }) {
  return (
    <div className="space-y-3">
      {items.map((item) => {
        const isOpen = openId === item.id

        return (
          <div
            key={item.id}
            className={`overflow-hidden rounded-2xl border transition-colors duration-200 ${
              isOpen
                ? 'border-primary-200 bg-white shadow-md shadow-primary-100/40'
                : 'border-slate-200 bg-white/80 hover:border-primary-100'
            }`}
          >
            <button
              type="button"
              className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left sm:px-6 sm:py-5"
              aria-expanded={isOpen}
              onClick={() => onToggle(item.id)}
            >
              <span className="text-base font-semibold text-slate-900 sm:text-lg">
                {item.title}
              </span>
              <ChevronDown
                className={`h-5 w-5 shrink-0 text-primary-600 transition-transform duration-200 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="px-5 pb-5 text-sm leading-7 text-slate-600 sm:px-6 sm:pb-6 sm:text-base">
                  {item.content}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
