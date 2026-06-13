import { useTranslation } from "react-i18next";
import { ArrowRight, Sparkles, Star } from "lucide-react";
import Container from "../ui/Container";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import Parallax from "../ui/Parallax";
import { trialRequestUrl } from "../../data/metadata";

export default function CtaBand({ data, id }) {
  const { t } = useTranslation("home");
  const ctaData =
    data ??
    t("ctaBands", { returnObjects: true }).find(
      (band) => band.variant === "primary",
    );
  const [primaryStat] = t("hero.stats", { returnObjects: true });
  const isPrimary = ctaData.variant === "primary";

  const dotPattern = {
    backgroundImage: `radial-gradient(circle, ${
      isPrimary ? "rgba(255,255,255,0.14)" : "rgba(124,58,237,0.10)"
    } 1px, transparent 1px)`,
    backgroundSize: "22px 22px",
  };

  return (
    <section id={id} className="py-16 md:py-20">
      <Container>
        <Reveal
          className={`group relative overflow-hidden rounded-[2.5rem] px-6 py-10 text-center sm:px-10 sm:py-12 ${
            isPrimary
              ? "animate-gradient-pan bg-linear-to-br from-primary-800 via-primary-600 to-primary-500 text-white shadow-2xl shadow-primary-700/30 ring-1 ring-white/15"
              : "border border-primary-100 bg-linear-to-br from-white via-primary-50 to-secondary-400/10 shadow-xl shadow-primary-100/40"
          }`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-60"
            style={dotPattern}
          />

          {isPrimary ? (
            <>
              <Parallax
                speed={0.18}
                className="pointer-events-none absolute -left-16 -top-20 h-64 w-64 rounded-full bg-white/15 blur-3xl"
              />
              <Parallax
                speed={-0.18}
                className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-secondary-400/25 blur-3xl"
              />
              <div className="pointer-events-none absolute left-1/2 top-1/2 h-[120%] w-[60%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-white/5 blur-3xl" />
            </>
          ) : (
            <Parallax
              speed={-0.2}
              className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-primary-200/40 blur-3xl"
            />
          )}

          <div className="relative mx-auto max-w-3xl">
            <span
              className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] ${
                isPrimary
                  ? "bg-white/15 text-white ring-1 ring-white/25 backdrop-blur-sm"
                  : "bg-primary-100 text-primary-700"
              }`}
            >
              <Sparkles className="h-4 w-4" />
              {ctaData.eyebrow}
            </span>

            <h2
              className={`mt-4 text-3xl font-bold tracking-tight sm:text-4xl ${
                isPrimary ? "text-white" : "text-slate-900"
              }`}
            >
              {ctaData.title}
            </h2>

            <p
              className={`mx-auto mt-3 max-w-2xl text-base leading-relaxed ${
                isPrimary ? "text-primary-50" : "text-slate-600"
              }`}
            >
              {ctaData.description}
            </p>

            <div className="mt-7 flex flex-col items-center gap-4">
              <Button
                href={trialRequestUrl}
                variant={isPrimary ? "secondary" : "primary"}
                size="lg"
                className="group/btn gap-2 transition-all hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-2xl"
              >
                {ctaData.cta}
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover/btn:translate-x-1" />
              </Button>

              <div
                className={`flex items-center gap-2 text-sm ${
                  isPrimary ? "text-primary-100" : "text-slate-500"
                }`}
              >
                <span className="flex">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <Star
                      key={index}
                      className={`h-4 w-4 ${
                        isPrimary
                          ? "fill-secondary-400 text-secondary-400"
                          : "fill-secondary-500 text-secondary-500"
                      }`}
                    />
                  ))}
                </span>
                <span className="font-medium">
                  {primaryStat.value} {primaryStat.label.toLowerCase()}
                </span>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
