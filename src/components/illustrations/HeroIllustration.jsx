import english from "../../assets/languages/english.svg";
import french from "../../assets/languages/french.svg";
import spanish from "../../assets/languages/spanish.svg";

const bubbles = [
  { text: "Hello!", x: "8%", y: "14%", delay: "0s", rotate: "-8deg" },
  { text: "Bonjour!", x: "72%", y: "10%", delay: "0.8s", rotate: "6deg" },
  { text: "Hola!", x: "78%", y: "58%", delay: "1.4s", rotate: "-4deg" },
  { text: "Merhaba!", x: "6%", y: "62%", delay: "2s", rotate: "5deg" },
];

export default function HeroIllustration() {
  return (
    <div className="relative aspect-4/3 w-full overflow-hidden rounded-3xl bg-linear-to-br from-primary-700 via-primary-600 to-primary-500">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-white/10 blur-2xl" />
        <div className="absolute -bottom-10 -left-10 h-44 w-44 rounded-full bg-secondary-400/25 blur-2xl" />
        <div className="absolute left-1/2 top-1/2 h-56 w-56 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
      </div>

      {bubbles.map((bubble) => (
        <div
          key={bubble.text}
          className="absolute animate-[float_5s_ease-in-out_infinite] rounded-2xl border border-white/20 bg-white/95 px-3 py-2 text-sm font-semibold text-primary-700 shadow-lg backdrop-blur-sm"
          style={{
            left: bubble.x,
            top: bubble.y,
            rotate: bubble.rotate,
            animationDelay: bubble.delay,
          }}
        >
          {bubble.text}
        </div>
      ))}

      <div className="absolute left-1/2 top-1/2 w-[78%] -translate-x-1/2 -translate-y-1/2">
        <div className="overflow-hidden rounded-[1.25rem] border border-white/20 bg-slate-950/90 shadow-2xl backdrop-blur-md">
          <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3">
            <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
            <span className="ml-2 text-xs font-medium text-white/70">
              Canlı Dil Dersi
            </span>
          </div>

          <div className="grid grid-cols-[1.1fr_0.9fr] gap-3 p-4">
            <div className="relative overflow-hidden rounded-xl bg-linear-to-br from-primary-400/30 to-primary-700/40 p-4">
              <div className="absolute right-3 top-3 inline-flex items-center gap-1 rounded-full bg-red-500 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-white">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-80" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
                </span>
                Live
              </div>
              <div className="mx-auto mt-3 flex h-16 w-16 items-center justify-center rounded-full bg-white/20 ring-4 ring-white/10">
                <svg viewBox="0 0 64 64" className="h-10 w-10 fill-white/90">
                  <circle cx="32" cy="24" r="12" />
                  <path d="M12 54c2.5-12 12.5-18 20-18s17.5 6 20 18" />
                </svg>
              </div>
              <p className="mt-3 text-center text-sm font-semibold text-white">
                Öğretmen
              </p>
              <div className="mt-4 space-y-2">
                <div className="h-2 rounded-full bg-white/20" />
                <div className="h-2 w-4/5 rounded-full bg-white/15" />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex-1 rounded-xl bg-white/10 p-3">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-full bg-secondary-400/90" />
                  <div>
                    <p className="text-xs font-semibold text-white">Öğrenci</p>
                    <p className="text-[10px] text-white/60">Aktif katılım</p>
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <p className="text-[10px] font-semibold uppercase tracking-wide text-secondary-400">
                  AI Pratik
                </p>
                <p className="mt-1 text-xs leading-5 text-white/80">
                  Harika gidiyorsun! Tekrar edelim.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-5 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md">
        {[english, french, spanish].map((flag) => (
          <img
            key={flag}
            src={flag}
            alt=""
            className="h-6 w-6 rounded-full border border-white/40 object-cover shadow-sm"
          />
        ))}
        <span className="text-xs font-medium text-white/90">+3 dil</span>
      </div>

      <div className="absolute right-5 top-5 rounded-2xl border border-white/15 bg-white/10 px-3 py-2 backdrop-blur-md">
        <p className="text-[10px] font-semibold uppercase tracking-wide text-white/70">
          Rozet
        </p>
        <p className="text-sm font-bold text-white">Level A2</p>
      </div>
    </div>
  );
}
