import { useEffect, useMemo, useState } from "react";
import { Briefcase } from "lucide-react";
import { useTranslation } from "react-i18next";
import Container from "../components/ui/Container";
import Card from "../components/ui/Card";
import Button from "../components/ui/Button";
import Badge from "../components/ui/Badge";
import TeacherVideoCard from "../components/teachers/TeacherVideoCard";
import { assets } from "../assets";
import { teachersPage as teachersData } from "../data/teachersPage";
import {
  INITIAL_TEACHERS_VISIBLE,
  getVisibleTeachers,
} from "../lib/teachers";

const flagByGroup = {
  english: assets.languageFlags[1],
  german: assets.languageFlags[2],
  french: assets.languageFlags[3],
  spanish: assets.languageFlags[4],
  russian: assets.languageFlags[5],
  chinese: assets.languageFlags[6],
};

function mergeTeacherGroups(i18nGroups) {
  return i18nGroups.map((group) => {
    const dataGroup = teachersData.groups.find((item) => item.id === group.id);

    return {
      ...group,
      teachers: group.teachers.map((teacher) => {
        const dataTeacher = dataGroup?.teachers.find(
          (item) => item.name === teacher.name,
        );

        return {
          ...teacher,
          videoId: dataTeacher?.videoId,
          photo: dataTeacher?.photo,
          isForeign: dataTeacher?.isForeign,
        };
      }),
    };
  });
}

export default function TeachersPage() {
  const { t } = useTranslation("teachers");
  const groups = useMemo(
    () => mergeTeacherGroups(t("groups", { returnObjects: true })),
    [t],
  );
  const [activeGroup, setActiveGroup] = useState("all");
  const [activeVideoId, setActiveVideoId] = useState(null);
  const [expandedGroups, setExpandedGroups] = useState({});
  const visibleGroups =
    activeGroup === "all"
      ? groups
      : groups.filter((group) => group.id === activeGroup);

  useEffect(() => {
    setExpandedGroups({});
  }, [activeGroup]);

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
              {t("hero.eyebrow")}
            </p>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
              {t("hero.title")}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {t("hero.description")}
            </p>
            <p className="mt-4 text-base leading-7 text-slate-600">
              {t("hero.subtitle")}
            </p>
          </div>
        </Container>
      </section>

      <section className="sticky top-16 z-40 border-b border-slate-200/80 bg-white/90 backdrop-blur-xl">
        <Container className="py-4">
          <div className="flex gap-2 overflow-x-auto pb-1 [-ms-overflow-style:none] scrollbar-none [&::-webkit-scrollbar]:hidden">
            <button
              type="button"
              onClick={() => setActiveGroup("all")}
              className={`shrink-0 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                activeGroup === "all"
                  ? "bg-primary-600 text-white"
                  : "bg-surface-muted text-slate-600 hover:text-primary-700"
              }`}
            >
              {t("allGroupsLabel")}
            </button>
            {groups.map((group) => (
              <button
                key={group.id}
                type="button"
                onClick={() => setActiveGroup(group.id)}
                className={`inline-flex shrink-0 items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  activeGroup === group.id
                    ? "bg-primary-600 text-white"
                    : "bg-surface-muted text-slate-600 hover:text-primary-700"
                }`}
              >
                <img
                  src={flagByGroup[group.id]}
                  alt=""
                  className="h-4 w-4 rounded-full object-cover"
                />
                {group.label}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container className="space-y-16">
          {visibleGroups.map((group) => (
            <div key={group.id} id={group.id}>
              <div className="mb-8 flex flex-wrap items-center gap-4">
                <img
                  src={flagByGroup[group.id]}
                  alt=""
                  className="h-10 w-10 rounded-full border-2 border-primary-100 object-cover"
                />
                <div>
                  <h2 className="text-2xl font-bold text-slate-900">
                    {group.label}
                  </h2>
                </div>
                <Badge className="ml-auto">{group.role}</Badge>
              </div>

              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                {getVisibleTeachers(
                  group.teachers,
                  expandedGroups[group.id],
                ).map((teacher) => (
                  <TeacherVideoCard
                    key={teacher.name}
                    teacher={teacher}
                    role={group.role}
                    activeVideoId={activeVideoId}
                    onPlay={setActiveVideoId}
                    onClose={() => setActiveVideoId(null)}
                  />
                ))}
              </div>

              {group.teachers.length > INITIAL_TEACHERS_VISIBLE && (
                <div className="mt-8 text-center">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() =>
                      setExpandedGroups((current) => ({
                        ...current,
                        [group.id]: !current[group.id],
                      }))
                    }
                  >
                    {expandedGroups[group.id]
                      ? t("showLessLabel")
                      : t("showAllLabel")}
                  </Button>
                </div>
              )}
            </div>
          ))}
        </Container>
      </section>

      <section className="bg-surface-muted pb-20 pt-4 md:pb-24">
        <Container>
          <Card
            hover={false}
            className="overflow-hidden bg-linear-to-br from-white via-primary-50 to-secondary-400/10 p-8 md:p-10"
          >
            <div className="grid items-center gap-8 lg:grid-cols-[1fr_auto]">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
                  {t("career.eyebrow")}
                </p>
                <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900">
                  {t("career.title")}
                </h2>
                <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600">
                  {t("career.description")}
                </p>
              </div>
              <Button href="#" size="lg" className="shrink-0">
                <Briefcase className="mr-2 h-5 w-5" />
                {t("career.cta")}
              </Button>
            </div>
          </Card>
        </Container>
      </section>
    </main>
  );
}
