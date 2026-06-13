import { ArrowUpRight, Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import { contactMapEmbedUrl } from "../data/metadata";

function ContactCard({ icon: Icon, title, children, className = "" }) {
  return (
    <Card hover={false} className={`h-full ${className}`}>
      <div className="mb-4 inline-flex rounded-2xl bg-primary-50 p-3 text-primary-600">
        <Icon className="h-6 w-6" />
      </div>
      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <div className="mt-4 space-y-3">{children}</div>
    </Card>
  );
}

export default function ContactPage() {
  const { t } = useTranslation("common");
  const phones = t("contactPage.phones.items", { returnObjects: true });
  const addresses = t("contactPage.addresses", { returnObjects: true });

  return (
    <main>
      <section className="relative overflow-hidden bg-surface-accent py-16 md:py-20">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-16 top-0 h-64 w-64 rounded-full bg-primary-300/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-72 w-72 rounded-full bg-secondary-400/20 blur-3xl" />
        </div>
        <Container className="relative">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
            {t("contactPage.eyebrow")}
          </p>
          <h1 className="mt-3 max-w-3xl text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
            {t("contactPage.title")}
          </h1>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
            {t("contactPage.subtitle")}
          </p>
        </Container>
      </section>

      <section className="py-16 md:py-20">
        <Container>
          <div className="grid gap-6 lg:grid-cols-12">
            <a
              href={t("contactPage.messageCta.href")}
              target="_blank"
              rel="noreferrer noopener"
              className="group relative overflow-hidden rounded-4xl bg-linear-to-br from-[#25D366] to-[#128C7E] p-8 text-white shadow-xl shadow-[#25D366]/20 transition-transform duration-300 hover:-translate-y-1 lg:col-span-5"
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-white/10 blur-2xl" />
              <div className="relative">
                <div className="inline-flex rounded-2xl bg-white/15 p-3">
                  <MessageCircle className="h-7 w-7" />
                </div>
                <h2 className="mt-6 text-2xl font-bold">
                  {t("contactPage.messageCta.title")}
                </h2>
                <p className="mt-3 max-w-sm text-sm leading-7 text-white/85">
                  {t("contactPage.whatsappDescription")}
                </p>
                <span className="mt-8 inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#128C7E] transition-colors group-hover:bg-white/95">
                  {t("contactPage.messageCta.button")}
                  <ArrowUpRight className="h-4 w-4" />
                </span>
              </div>
            </a>

            <div className="grid gap-6 sm:grid-cols-2 lg:col-span-7">
              <ContactCard icon={Phone} title={t("contactPage.phones.title")}>
                {phones.map((phone) => (
                  <a
                    key={phone.label}
                    href={phone.href}
                    className="block text-base font-medium text-slate-700 transition-colors hover:text-primary-700"
                  >
                    {phone.label}
                  </a>
                ))}
              </ContactCard>

              <ContactCard icon={Mail} title={t("contactPage.email.title")}>
                <a
                  href={t("contactPage.email.href")}
                  className="break-all text-base font-medium text-slate-700 transition-colors hover:text-primary-700"
                >
                  {t("contactPage.email.label")}
                </a>
              </ContactCard>
            </div>
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {addresses.map((address) => (
              <ContactCard key={address.id} icon={MapPin} title={address.title}>
                {address.lines.map((line) => (
                  <p key={line} className="text-sm leading-7 text-slate-600">
                    {line}
                  </p>
                ))}
              </ContactCard>
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted pb-20 pt-4 md:pb-24">
        <Container>
          <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
                {t("contactPage.map.eyebrow")}
              </p>
              <h2 className="mt-2 text-3xl font-bold tracking-tight text-slate-900">
                {t("contactPage.map.title")}
              </h2>
            </div>
            <Button
              href={t("contactPage.map.openUrl")}
              variant="outline"
              size="sm"
            >
              {t("contactPage.map.openInMaps")}
            </Button>
          </div>

          <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-lg shadow-primary-100/30">
            <iframe
              title={t("contactPage.map.iframeTitle")}
              src={contactMapEmbedUrl}
              className="aspect-video w-full min-h-90 border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </Container>
      </section>
    </main>
  );
}
