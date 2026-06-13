import { useMemo, useState } from "react";
import { HelpCircle, MessageCircle, Quote } from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Accordion from "../components/ui/Accordion";
import Button from "../components/ui/Button";
import { reviewAvatars } from "../data/metadata";
import { useLocalePath } from "../routing/useLocalePath";

export default function FaqPage() {
  const { t, i18n } = useTranslation("faq");
  const { localizedPath } = useLocalePath();
  const items = useMemo(
    () => t("items", { returnObjects: true }),
    [t, i18n.language],
  );
  const testimonials = useMemo(
    () =>
      t("testimonials.items", { returnObjects: true }).map((item) => ({
        ...item,
        avatar: reviewAvatars[item.id] ?? item.avatar,
      })),
    [t, i18n.language],
  );
  const [openId, setOpenId] = useState(items[0]?.id ?? null);

  const handleToggle = (id) => {
    setOpenId((current) => (current === id ? null : id));
  };

  return (
    <main>
      <section className="relative overflow-hidden bg-surface-accent py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary-300/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary-400/20 blur-3xl" />
        </div>
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
                {t("hero.eyebrow")}
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                {t("hero.title")}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {t("hero.description")}
              </p>
            </div>

            <Card
              hover={false}
              className="hidden w-full max-w-xs bg-white/90 p-6 lg:block"
            >
              <div className="inline-flex rounded-2xl bg-primary-50 p-3 text-primary-600">
                <HelpCircle className="h-7 w-7" />
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-900">
                {t("sidebar.count", { count: items.length })}
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                {t("sidebar.countDescription")}
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                title={t("sidebar.title")}
                subtitle={t("sidebar.subtitle")}
                align="left"
              />
              <Card
                hover={false}
                className="mt-8 bg-linear-to-br from-primary-50 to-white p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-2xl bg-primary-600 p-3 text-white">
                    <MessageCircle className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-slate-900">
                      {t("sidebar.contactTitle")}
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {t("sidebar.contactDescription")}
                    </p>
                    <Button
                      to={localizedPath("contact")}
                      variant="outline"
                      size="sm"
                      className="mt-4"
                    >
                      {t("sidebar.contactCta")}
                    </Button>
                  </div>
                </div>
              </Card>
            </div>

            <Accordion items={items} openId={openId} onToggle={handleToggle} />
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow={t("testimonials.eyebrow")}
            title={t("testimonials.title")}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {testimonials.map((item) => (
              <Card key={item.id} className="h-full">
                <div className="flex items-start gap-4">
                  <img
                    src={item.avatar}
                    alt=""
                    className="h-14 w-14 rounded-full border-2 border-primary-100 object-cover"
                  />
                  <div className="min-w-0 flex-1">
                    <Quote className="h-6 w-6 text-primary-300" />
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                      {item.text}
                    </p>
                    <p className="mt-5 text-base font-semibold text-slate-900">
                      {item.name}
                    </p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
