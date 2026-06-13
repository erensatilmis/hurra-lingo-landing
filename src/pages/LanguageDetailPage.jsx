import { Navigate, useParams } from "react-router-dom";
import { ArrowRight, CheckCircle2, Sparkles } from "lucide-react";
import { useMemo } from "react";
import { useTranslation } from "react-i18next";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import LocalizedLink from "../routing/LocalizedLink";
import { useLocalePath } from "../routing/useLocalePath";
import { languageFlags, languagePageOrder, trialRequestUrl } from "../data/metadata";
import { assets } from "../assets";

const flagIndexByKey = {
  turkish: 0,
  english: 1,
  german: 2,
  french: 3,
  spanish: 4,
  russian: 5,
  chinese: 6,
};

function getLanguageFlag(langId) {
  const key = languageFlags[langId];
  return assets.languageFlags[flagIndexByKey[key]];
}

export default function LanguageDetailPage() {
  const { langId } = useParams();
  const { t } = useTranslation("languagePages");
  const { localizedPath } = useLocalePath();
  const language = useMemo(
    () => t(`pages.${langId}`, { returnObjects: true, defaultValue: null }),
    [t, langId],
  );

  if (!language || typeof language !== "object" || !language.id) {
    return <Navigate to={localizedPath("home")} replace />;
  }

  const otherLanguages = languagePageOrder
    .filter((id) => id !== language.id)
    .map((id) => t(`pages.${id}`, { returnObjects: true }));

  return (
    <main>
      <section className="relative overflow-hidden bg-surface-accent py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary-300/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary-400/20 blur-3xl" />
        </div>
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <LocalizedLink
                routeKey="home"
                className="text-sm font-medium text-primary-600 transition-colors hover:text-primary-700"
              >
                {t("ui.backToHome")}
              </LocalizedLink>
              <div className="mt-5 flex items-center gap-4">
                <div className="h-16 w-16 overflow-hidden rounded-full border-2 border-primary-100 ring-4 ring-primary-50">
                  <img
                    src={getLanguageFlag(language.id)}
                    alt={t("ui.flagAlt", { name: language.name })}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
                    {language.hero.eyebrow}
                  </p>
                  <p className="text-lg font-semibold text-slate-900">
                    {language.name}{" "}
                    <span className="font-normal text-slate-500">
                      · {language.nativeName}
                    </span>
                  </p>
                </div>
              </div>
              <h1 className="mt-6 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                {language.hero.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {language.hero.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button href={trialRequestUrl} size="lg">
                  {t("ui.trialCta")}
                </Button>
                <Button
                  to={localizedPath("lessons")}
                  variant="outline"
                  size="lg"
                >
                  {t("ui.lessonsCta")}
                </Button>
              </div>
            </div>

            <Card
              hover={false}
              className="bg-linear-to-br from-white via-primary-50 to-secondary-400/10 p-8"
            >
              <div className="grid grid-cols-3 gap-4 text-center">
                {language.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-primary-700 sm:text-3xl">
                      {stat.value}
                    </p>
                    <p className="mt-2 text-xs leading-5 text-slate-500">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[1fr_1fr]">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900">
                {language.reasons.title}
              </h2>
              <div className="mt-8 space-y-5">
                {language.reasons.items.map((item) => (
                  <Card key={item.title} className="flex gap-4">
                    <div className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-primary-50 text-primary-600">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-7 text-slate-600">
                        {item.text}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>

            <div>
              <Card hover={false} className="h-full bg-surface-muted p-8">
                <h2 className="text-2xl font-bold tracking-tight text-slate-900">
                  {language.useCases.title}
                </h2>
                <ul className="mt-6 space-y-4">
                  {language.useCases.items.map((item) => (
                    <li
                      key={item}
                      className="flex gap-3 text-base leading-7 text-slate-700"
                    >
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary-600" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 rounded-2xl border border-primary-100 bg-white p-5">
                  <p className="text-sm leading-7 text-slate-600">
                    {t("ui.levelNote")}
                  </p>
                </div>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-16 md:py-24">
        <Container>
          <h2 className="text-center text-2xl font-bold tracking-tight text-slate-900">
            {t("ui.otherLanguages")}
          </h2>
          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6">
            {otherLanguages.map((item) => (
              <LocalizedLink
                key={item.id}
                routeKey="languageDetail"
                params={{ langId: item.id }}
                className="group flex flex-col items-center rounded-2xl border border-slate-200/80 bg-white p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-md"
              >
                <div className="h-12 w-12 overflow-hidden rounded-full border-2 border-primary-100 ring-4 ring-primary-50 transition-transform duration-300 group-hover:scale-110">
                  <img
                    src={getLanguageFlag(item.id)}
                    alt={t("ui.flagAlt", { name: item.name })}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-900">
                  {item.name}
                </p>
              </LocalizedLink>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <Card
            hover={false}
            className="overflow-hidden bg-linear-to-br from-slate-900 via-primary-900 to-primary-700 p-8 text-center text-white md:p-12"
          >
            <h2 className="text-3xl font-bold tracking-tight">
              {t("ui.footerCtaTitle", { name: language.name })}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-primary-100">
              {t("ui.footerCtaDescription")}
            </p>
            <div className="mt-8 flex justify-center">
              <Button href={trialRequestUrl} variant="secondary" size="lg">
                {t("ui.trialCta")}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Card>
        </Container>
      </section>
    </main>
  );
}
