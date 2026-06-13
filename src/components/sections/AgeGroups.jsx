import { useState } from "react";
import {
  Baby,
  BookOpen,
  Briefcase,
  ChevronRight,
  GraduationCap,
} from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import Badge from "../ui/Badge";
import ImageSlot from "../ui/ImageSlot";
import Reveal from "../ui/Reveal";
import ParallaxBlobs from "../ui/ParallaxBlobs";
import { ageGroups } from "../../data/content";

const groupIcons = {
  "4-6": Baby,
  "7-12": BookOpen,
  "13-18": GraduationCap,
  "18+": Briefcase,
};

function AgeGroupPhoto({ src, alt, label, variant = "desktop" }) {
  const isDesktop = variant === "desktop";

  const imageMask = isDesktop
    ? "linear-gradient(to right, transparent 0%, transparent 2%, rgba(0,0,0,0.03) 6%, rgba(0,0,0,0.08) 10%, rgba(0,0,0,0.14) 14%, rgba(0,0,0,0.22) 18%, rgba(0,0,0,0.32) 22%, rgba(0,0,0,0.45) 26%, rgba(0,0,0,0.6) 30%, rgba(0,0,0,0.76) 34%, rgba(0,0,0,0.9) 38%, black 42%)"
    : "linear-gradient(to right, transparent 0%, transparent 3%, rgba(0,0,0,0.04) 7%, rgba(0,0,0,0.1) 11%, rgba(0,0,0,0.18) 15%, rgba(0,0,0,0.28) 19%, rgba(0,0,0,0.4) 23%, rgba(0,0,0,0.55) 27%, rgba(0,0,0,0.72) 31%, rgba(0,0,0,0.86) 35%, black 40%)";

  const blendOverlay = isDesktop
    ? "linear-gradient(to right, transparent 0%, transparent 12%, rgba(91, 33, 182, 0.004) 16%, rgba(91, 33, 182, 0.01) 20%, rgba(91, 33, 182, 0.016) 24%, rgba(109, 40, 217, 0.012) 28%, rgba(109, 40, 217, 0.006) 32%, rgba(109, 40, 217, 0.002) 36%, transparent 42%)"
    : "linear-gradient(to right, transparent 0%, transparent 10%, rgba(255, 255, 255, 0.04) 14%, rgba(255, 255, 255, 0.08) 18%, rgba(255, 255, 255, 0.12) 22%, rgba(255, 255, 255, 0.08) 26%, rgba(255, 255, 255, 0.04) 30%, rgba(255, 255, 255, 0.015) 34%, transparent 40%)";

  return (
    <div
      className={
        isDesktop
          ? "pointer-events-none absolute inset-y-0 right-0 w-[50%] min-w-[9rem] overflow-visible"
          : "pointer-events-none absolute inset-y-0 right-0 w-[50%] min-w-[7rem] overflow-visible"
      }
    >
      <div
        className={
          isDesktop
            ? "absolute inset-y-0 -left-10 right-0 md:-left-12"
            : "absolute inset-y-0 -left-8 right-0 sm:-left-10"
        }
      >
        <div
          className="h-full w-full"
          style={{
            maskImage: imageMask,
            WebkitMaskImage: imageMask,
          }}
        >
          <ImageSlot
            src={src}
            alt={alt}
            label={label}
            fit="cover"
            className="object-[62%_center]"
          />
        </div>
        <div
          className="pointer-events-none absolute inset-0"
          style={{ background: blendOverlay }}
        />
      </div>
    </div>
  );
}

export default function AgeGroups() {
  const [activeId, setActiveId] = useState(ageGroups.groups[0].id);
  const activeIndex = ageGroups.groups.findIndex(
    (group) => group.id === activeId,
  );
  const activeGroup = ageGroups.groups[activeIndex] ?? ageGroups.groups[0];
  const ActiveIcon = groupIcons[activeGroup.id] ?? Baby;

  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-24">
      <ParallaxBlobs variant="c" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow={ageGroups.eyebrow}
            title="Yaşa uygun öğrenme yolları"
            subtitle={ageGroups.subtitle}
          />
        </Reveal>

        <div className="mt-12 hidden gap-6 lg:grid lg:grid-cols-[0.95fr_1.35fr] lg:items-stretch">
          <Reveal className="space-y-3">
            {ageGroups.groups.map((group) => {
              const Icon = groupIcons[group.id] ?? Baby;
              const active = group.id === activeId;

              return (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => setActiveId(group.id)}
                  aria-pressed={active}
                  className={`group flex w-full items-center gap-4 rounded-2xl border p-4 text-left transition-all duration-300 ${
                    active
                      ? "border-primary-300 bg-linear-to-r from-primary-50 to-white shadow-md shadow-primary-100/50"
                      : "border-slate-200 bg-white hover:-translate-y-0.5 hover:border-primary-200 hover:shadow-sm"
                  }`}
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 ${
                      active
                        ? "bg-primary-600 text-white shadow-lg shadow-primary-600/30"
                        : "bg-primary-50 text-primary-600 group-hover:scale-110"
                    }`}
                  >
                    <Icon className="h-6 w-6" />
                  </span>
                  <span className="flex-1">
                    <span className="block text-base font-bold text-slate-900">
                      {group.title}
                    </span>
                    <span className="mt-0.5 block text-xs font-medium text-slate-500">
                      {group.subtitle}
                    </span>
                  </span>
                  <ChevronRight
                    className={`h-5 w-5 transition-all duration-300 ${
                      active
                        ? "translate-x-0 text-primary-600 opacity-100"
                        : "-translate-x-1 text-slate-300 opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                    }`}
                  />
                </button>
              );
            })}
          </Reveal>

          <Reveal className="h-full">
            <div
              key={activeId}
              className="animate-fade-in relative h-full overflow-hidden rounded-3xl bg-linear-to-br from-primary-700 via-primary-600 to-primary-500 text-white shadow-xl shadow-primary-300/30"
            >
              <div className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

              <AgeGroupPhoto
                src={activeGroup.image}
                alt={activeGroup.title}
                label={`${activeGroup.title} görseli`}
                variant="desktop"
              />

              <div className="relative z-10 flex min-w-0 max-w-[50%] flex-col py-8 pl-8 pr-4 md:max-w-[46%] md:py-10 md:pl-10 md:pr-6">
                <div className="inline-flex w-fit rounded-2xl bg-white/15 p-4 ring-1 ring-white/25 backdrop-blur-sm">
                  <ActiveIcon className="h-8 w-8" />
                </div>
                <p className="mt-6 flex-1 text-base leading-8 text-primary-50">
                  {activeGroup.description}
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-10 space-y-4 lg:hidden">
          {ageGroups.groups.map((group, index) => {
            const Icon = groupIcons[group.id] ?? Baby;

            return (
              <Reveal key={group.id} delay={index * 80}>
                <Card padded={false} className="relative overflow-hidden">
                  <AgeGroupPhoto
                    src={group.image}
                    alt={group.title}
                    label={`${group.title} görseli`}
                    variant="mobile"
                  />
                  <div className="relative z-10 p-6 pr-[46%]">
                      <div className="flex items-center gap-3">
                        <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary-50 text-primary-600">
                          <Icon className="h-6 w-6" />
                        </span>
                        <div>
                          <Badge>{group.subtitle}</Badge>
                          <h3 className="mt-1.5 text-lg font-bold text-slate-900">
                            {group.title}
                          </h3>
                        </div>
                      </div>
                      <p className="mt-3 text-sm leading-7 text-slate-600">
                        {group.description}
                      </p>
                  </div>
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
