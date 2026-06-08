import {
  Award,
  GraduationCap,
  Library,
  Smartphone,
  Sparkles,
  Video,
} from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import SpotlightCard from "../ui/SpotlightCard";
import Reveal from "../ui/Reveal";
import Parallax from "../ui/Parallax";
import { features } from "../../data/content";

const iconMap = {
  Video,
  Sparkles,
  Smartphone,
  GraduationCap,
  Library,
  Award,
};

const spanByIndex = [
  "lg:col-span-2",
  "",
  "",
  "lg:col-span-2",
  "lg:col-span-2",
  "",
];

export default function Features() {
  return (
    <section className="relative overflow-hidden bg-surface-muted py-16 md:py-24">
      <div className="pointer-events-none absolute inset-0">
        <Parallax
          speed={0.2}
          className="absolute -left-24 top-24 h-72 w-72 rounded-full bg-primary-200/30 blur-3xl"
        />
        <Parallax
          speed={-0.18}
          className="absolute -right-20 bottom-10 h-80 w-80 rounded-full bg-secondary-400/15 blur-3xl"
        />
      </div>

      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Neden Hurra Lingo?"
            title="Modern öğrenme deneyimi"
            subtitle="Canlı dersler, yapay zekâ ve mobil uygulama ile dil öğrenimini zenginleştiriyoruz."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];
            const featured = index === 0;

            if (featured) {
              return (
                <Reveal
                  key={feature.id}
                  delay={index * 70}
                  className={spanByIndex[index]}
                >
                  <SpotlightCard className="group h-full rounded-3xl border border-primary-500/40 bg-linear-to-br from-primary-700 via-primary-600 to-primary-500 p-8 text-white shadow-xl shadow-primary-600/25">
                    <div className="pointer-events-none absolute -right-10 -top-12 h-44 w-44 rounded-full bg-white/10 blur-2xl" />
                    <div className="flex h-full flex-col justify-between gap-6 sm:flex-row sm:items-end">
                      <div>
                        <div className="inline-flex rounded-2xl bg-white/15 p-4 ring-1 ring-white/25 backdrop-blur-sm transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                          <Icon className="h-7 w-7" />
                        </div>
                        <h3 className="mt-6 text-2xl font-bold leading-tight">
                          {feature.title}
                        </h3>
                        <p className="mt-3 max-w-md text-sm leading-7 text-primary-50">
                          {feature.description}
                        </p>
                      </div>
                      <span className="shrink-0 text-7xl font-black leading-none text-white/15 sm:self-start">
                        01
                      </span>
                    </div>
                  </SpotlightCard>
                </Reveal>
              );
            }

            return (
              <Reveal
                key={feature.id}
                delay={index * 70}
                className={spanByIndex[index]}
              >
                <SpotlightCard className="group relative h-full overflow-hidden rounded-3xl border border-slate-200/70 bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-100/50">
                  <span className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-linear-to-r from-primary-500 to-secondary-500 transition-transform duration-300 group-hover:scale-x-100" />
                  <span className="pointer-events-none absolute -right-1 -top-5 select-none text-7xl font-black text-slate-100 transition-colors duration-300 group-hover:text-primary-100">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <div className="relative">
                    <div className="mb-5 inline-flex rounded-2xl bg-linear-to-br from-primary-500 to-primary-700 p-3.5 text-white shadow-lg shadow-primary-600/25 transition-transform duration-300 group-hover:-rotate-6 group-hover:scale-110">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">
                      {feature.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600">
                      {feature.description}
                    </p>
                  </div>
                </SpotlightCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
