import { useNavigate } from "react-router-dom";
import { Check, Sparkles, Tag } from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import Reveal from "../components/ui/Reveal";
import SpotlightCard from "../components/ui/SpotlightCard";
import ParallaxBlobs from "../components/ui/ParallaxBlobs";
import { trialRequestUrl } from "../data/metadata";
import { useLocalePath } from "../routing/useLocalePath";

export default function PricingPage() {
  const navigate = useNavigate();
  const { localizedPath } = useLocalePath();
  const { t } = useTranslation("pricing");
  const languages = t("languages", { returnObjects: true });
  const tiers = t("tiers", { returnObjects: true });
  const benefitItems = t("benefits.items", { returnObjects: true });

  return (
    <main>
      <section className="relative overflow-hidden bg-surface-accent py-16 md:py-24">
        <ParallaxBlobs variant="a" />
        <Container className="relative">
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary-500/10 px-4 py-1.5 text-sm font-semibold text-secondary-600">
              <Tag className="h-4 w-4" />
              {t("hero.campaign")}
            </span>
            <h1 className="mt-5 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {t("hero.description")}
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-2">
              {languages.map((language) => (
                <span
                  key={language}
                  className="rounded-full border border-primary-100 bg-white/70 px-3 py-1 text-sm font-medium text-primary-700 shadow-sm backdrop-blur-sm"
                >
                  {language}
                </span>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-stretch gap-6 lg:grid-cols-3">
            {tiers.map((tier, index) => (
              <Reveal key={tier.id} delay={index * 90} className="h-full">
                <SpotlightCard
                  className={`flex h-full flex-col rounded-3xl p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 ${
                    tier.highlight
                      ? "border-2 border-primary-500 bg-white shadow-xl shadow-primary-200/50"
                      : "border border-slate-200/80 bg-white hover:border-primary-200 hover:shadow-xl hover:shadow-primary-100/50"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-lg font-bold text-slate-900">
                      {tier.name}
                    </h3>
                    {tier.badge && (
                      <Badge className="bg-primary-600 text-white">
                        {tier.badge}
                      </Badge>
                    )}
                  </div>

                  <div className="mt-6 flex items-end gap-1">
                    <span className="text-4xl font-extrabold text-slate-900">
                      {tier.price}
                    </span>
                    <span className="pb-1 text-lg font-semibold text-slate-900">
                      {t("currency")}
                    </span>
                    <span className="pb-1.5 text-sm font-medium text-slate-400">
                      / {tier.unit}
                    </span>
                  </div>
                  <p className="mt-1 text-xs font-medium uppercase tracking-wide text-primary-600">
                    {tier.note}
                  </p>

                  <ul className="mt-6 flex-1 space-y-3 border-t border-slate-100 pt-6">
                    {tier.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex gap-3 text-sm text-slate-600"
                      >
                        <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary-50 text-primary-600">
                          <Check className="h-3.5 w-3.5" />
                        </span>
                        <span className="leading-6">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Button
                    onClick={() =>
                      navigate(localizedPath("onboarding"), {
                        state: { tier: tier.id, tierName: tier.name },
                      })
                    }
                    variant={tier.highlight ? "primary" : "outline"}
                    size="lg"
                    className="mt-8 w-full"
                  >
                    {t("buyCta")}
                  </Button>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-16 md:py-24">
        <Container>
          <Reveal>
            <SectionHeading
              eyebrow={t("benefits.eyebrow")}
              title={t("benefits.title")}
            />
          </Reveal>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefitItems.map((item, index) => (
              <Reveal key={item.title} delay={(index % 3) * 80}>
                <SpotlightCard className="group h-full rounded-3xl border border-slate-200/80 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-100/50">
                  <div className="mb-5 inline-flex rounded-2xl bg-linear-to-br from-primary-500 to-primary-700 p-3.5 text-white shadow-lg shadow-primary-600/25 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                    <Sparkles className="h-6 w-6" />
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.text}
                  </p>
                </SpotlightCard>
              </Reveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Button href={trialRequestUrl} size="lg">
              {t("trialCta")}
            </Button>
          </div>
        </Container>
      </section>
    </main>
  );
}
