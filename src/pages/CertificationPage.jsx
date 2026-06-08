import {
  Award,
  BarChart3,
  Download,
  FileCheck2,
  Globe2,
  Quote,
  Sparkles,
  UserCheck,
} from "lucide-react";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import Button from "../components/ui/Button";
import { certificationPage } from "../data/certificationPage";

const pillarIcons = [BarChart3, UserCheck, Award];

export default function CertificationPage() {
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
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
                {certificationPage.hero.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                {certificationPage.hero.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {certificationPage.hero.description}
              </p>
            </div>

            <Card
              hover={false}
              className="bg-linear-to-br from-white via-primary-50 to-secondary-400/10 p-8"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary-600 p-3 text-white">
                  <FileCheck2 className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                    CEFR Uyumlu
                  </p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    İngilizce Dil Yeterlilik Sertifikası
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    Ankara Üniversitesi iş birliğiyle, uluslararası geçerliliği
                    olan resmi belge.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {certificationPage.pillars.map((pillar, index) => {
              const Icon = pillarIcons[index];

              return (
                <Card key={pillar.id} className="flex h-full flex-col">
                  <div className="mb-5 inline-flex rounded-2xl bg-primary-50 p-3 text-primary-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {pillar.title}
                  </h2>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {pillar.description}
                  </p>
                  <ul className="mt-6 space-y-4 border-t border-slate-100 pt-6">
                    {pillar.points.map((point) => (
                      <li key={point.label}>
                        <p className="text-sm font-semibold text-slate-900">
                          {point.label}
                        </p>
                        <p className="mt-1 text-sm leading-7 text-slate-600">
                          {point.text}
                        </p>
                      </li>
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white pb-16 md:pb-24">
        <Container>
          <Card
            hover={false}
            className="flex flex-col items-start gap-6 bg-linear-to-r from-primary-700 via-primary-600 to-primary-500 p-8 text-white md:flex-row md:items-center md:justify-between md:p-10"
          >
            <div className="max-w-2xl">
              <div className="inline-flex rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide">
                Bilgilendirme
              </div>
              <p className="mt-4 text-lg font-medium leading-relaxed text-primary-50">
                {certificationPage.pdf.label}
              </p>
            </div>
            <Button
              href={certificationPage.pdf.href}
              variant="secondary"
              size="lg"
              className="shrink-0"
              target="_blank"
              rel="noreferrer"
            >
              <Download className="mr-2 h-5 w-5" />
              {certificationPage.pdf.button}
            </Button>
          </Card>
        </Container>
      </section>

      <section className="bg-surface-muted py-16 md:py-24">
        <Container>
          <Card hover={false} className="overflow-hidden p-0">
            <div className="grid lg:grid-cols-[1fr_1.2fr]">
              <div className="bg-linear-to-br from-primary-600 to-primary-700 p-8 text-white md:p-10">
                <Quote className="h-10 w-10 text-primary-200" />
                <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-primary-100">
                  {certificationPage.testimonial.title}
                </p>
                <p className="mt-2 text-base font-medium text-white/90">
                  {certificationPage.testimonial.role}
                </p>
              </div>
              <div className="p-8 md:p-10">
                <p className="text-sm leading-8 text-slate-600 md:text-base">
                  {certificationPage.testimonial.text}
                </p>
              </div>
            </div>
          </Card>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <SectionHeading
                eyebrow={certificationPage.certificates.eyebrow}
                title={certificationPage.certificates.title}
                subtitle={certificationPage.certificates.subtitle}
                align="left"
              />
              <div className="mt-6 flex flex-wrap gap-2">
                {certificationPage.certificates.levels.map((level) => (
                  <Badge key={level} className="px-4 py-1.5 text-sm">
                    {level}
                  </Badge>
                ))}
              </div>
              <p className="mt-6 text-base leading-8 text-slate-600">
                {certificationPage.certificates.description}
              </p>
              <ul className="mt-6 space-y-4">
                {certificationPage.certificates.details.map((detail) => (
                  <li
                    key={detail}
                    className="flex gap-3 text-sm leading-7 text-slate-600"
                  >
                    <Sparkles className="mt-1 h-4 w-4 shrink-0 text-primary-600" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="order-1 lg:order-2">
              <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white p-4 shadow-xl shadow-primary-100/40">
                <img
                  src={certificationPage.certificates.image}
                  alt="CEFR dil seviyeleri A1, A2, B1"
                  className="w-full rounded-3xl object-contain"
                />
              </div>
            </div>
          </div>
        </Container>
      </section>

      {certificationPage.partnerships.map((partnership, index) => (
        <section
          key={partnership.id}
          className={
            index % 2 === 0
              ? "bg-surface-muted py-16 md:py-24"
              : "bg-white py-16 md:py-24"
          }
        >
          <Container>
            <div
              className={`grid items-center gap-12 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="overflow-hidden rounded-4xl border border-slate-200 bg-white p-6 shadow-lg shadow-primary-100/30">
                <img
                  src={partnership.image}
                  alt={partnership.title}
                  className="mx-auto w-full max-w-sm object-contain"
                />
              </div>
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
                  {partnership.eyebrow}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                  {partnership.title}
                </h2>
                {partnership.paragraphs.map((paragraph) => (
                  <p
                    key={paragraph.slice(0, 40)}
                    className="mt-4 text-base leading-8 text-slate-600"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </Container>
        </section>
      ))}

      <section className="pb-20 pt-4 md:pb-24">
        <Container>
          <Card
            hover={false}
            className="overflow-hidden bg-linear-to-br from-slate-900 via-primary-900 to-primary-700 p-8 text-center text-white md:p-12"
          >
            <Globe2 className="mx-auto h-10 w-10 text-primary-200" />
            <h2 className="mt-5 text-3xl font-bold tracking-tight">
              {certificationPage.examCta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-primary-100">
              Online dil sınavlarına katılım ve sertifika süreci hakkında bilgi
              almak için bizimle iletişime geçin.
            </p>
            <div className="mt-8">
              <Button
                href={certificationPage.examCta.href}
                variant="secondary"
                size="lg"
              >
                {certificationPage.examCta.button}
              </Button>
            </div>
          </Card>
        </Container>
      </section>
    </main>
  );
}
