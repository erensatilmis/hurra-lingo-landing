import {
  BarChart3,
  CalendarClock,
  MessageSquare,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import { educationPage } from "../data/content";

const planIcons = [Target, CalendarClock, MessageSquare, Sparkles];
const trackingIcons = [MessageSquare, BarChart3];
const stepIcons = [Target, Users, BarChart3];

export default function EducationPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-surface-accent py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary-300/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary-400/20 blur-3xl" />
        </div>
        <Container className="relative">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
              {educationPage.hero.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              {educationPage.hero.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {educationPage.hero.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            title={educationPage.personalizedPlans.title}
            align="left"
            className="max-w-3xl"
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {educationPage.personalizedPlans.items.map((item, index) => {
              const Icon = planIcons[index];

              return (
                <Card key={item.title} className="h-full">
                  <div className="mb-4 inline-flex rounded-2xl bg-primary-50 p-3 text-primary-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <div className="grid items-start gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <SectionHeading
                title={educationPage.tracking.title}
                align="left"
              />
              <p className="mt-4 text-base leading-7 text-slate-600">
                Öğrenme yolculuğunuz boyunca gelişiminizi görünür kılan
                araçlarla desteklenirsiniz.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {educationPage.tracking.items.map((item, index) => {
                const Icon = trackingIcons[index];

                return (
                  <Card
                    key={item.title}
                    hover={false}
                    className="bg-surface-muted"
                  >
                    <div className="mb-3 inline-flex rounded-xl bg-white p-2.5 text-primary-600 shadow-sm">
                      <Icon className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-7 text-slate-600">
                      {item.description}
                    </p>
                  </Card>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow={educationPage.howItWorks.eyebrow}
            title={educationPage.howItWorks.title}
          />

          <div className="relative mt-12 grid gap-6 lg:grid-cols-3">
            <div className="pointer-events-none absolute left-[16.666%] right-[16.666%] top-12 hidden h-px bg-linear-to-r from-primary-200 via-primary-400 to-primary-200 lg:block" />

            {educationPage.howItWorks.steps.map((step, index) => {
              const Icon = stepIcons[index];

              return (
                <Card
                  key={step.number}
                  hover={false}
                  className="relative bg-white"
                >
                  <div className="flex items-start justify-between gap-4">
                    <span className="text-4xl font-bold text-primary-100">
                      {step.number}
                    </span>
                    <div className="rounded-2xl bg-primary-50 p-3 text-primary-600">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>
                  <h3 className="mt-6 text-xl font-semibold text-slate-900">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {step.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>
    </main>
  );
}
