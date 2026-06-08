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
import Reveal from "../ui/Reveal";
import ParallaxBlobs from "../ui/ParallaxBlobs";
import { ageGroups } from "../../data/content";

const groupIcons = {
  "4-6": Baby,
  "7-12": BookOpen,
  "13-18": GraduationCap,
  "18+": Briefcase,
};

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

        <div className="mt-12 hidden gap-6 lg:grid lg:grid-cols-[0.95fr_1.35fr]">
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

          <Reveal>
            <div
              key={activeId}
              className="animate-fade-in relative h-full overflow-hidden rounded-3xl bg-linear-to-br from-primary-700 via-primary-600 to-primary-500 p-8 text-white shadow-xl shadow-primary-300/30 md:p-10"
            >
              <span className="pointer-events-none absolute -right-3 -top-8 select-none text-[7rem] font-black leading-none text-white/10">
                {activeGroup.id}
              </span>
              <div className="pointer-events-none absolute -bottom-16 -left-10 h-48 w-48 rounded-full bg-white/10 blur-3xl" />

              <div className="relative flex h-full flex-col">
                <div className="inline-flex w-fit rounded-2xl bg-white/15 p-4 ring-1 ring-white/25 backdrop-blur-sm">
                  <ActiveIcon className="h-8 w-8" />
                </div>
                <span className="mt-6 inline-flex w-fit rounded-full bg-white/15 px-3 py-1 text-xs font-semibold uppercase tracking-wide ring-1 ring-white/20">
                  {activeGroup.subtitle}
                </span>
                <h3 className="mt-4 text-3xl font-bold leading-tight">
                  {activeGroup.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-primary-50">
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
                <Card>
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
                </Card>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
