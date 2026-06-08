import {
  BookOpen,
  CheckCircle2,
  Cpu,
  Library,
  MessageCircle,
  Smartphone,
  Sparkles,
  User,
  Users,
  UsersRound,
} from "lucide-react";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import Badge from "../components/ui/Badge";
import { lessonsPage } from "../data/content";

const lessonIcons = [User, UsersRound, Users];
const pillarIcons = [Sparkles, Cpu, MessageCircle];
const beyondIcons = [Library, BookOpen, Smartphone, Sparkles];

function HighlightItem({ text }) {
  const colonIndex = text.indexOf(":");
  const label = colonIndex > -1 ? text.slice(0, colonIndex) : null;
  const body = colonIndex > -1 ? text.slice(colonIndex + 1).trim() : text;

  return (
    <li className="flex gap-3 text-sm leading-7 text-slate-600">
      <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary-600" />
      <span>
        {label && (
          <strong className="font-semibold text-slate-900">{label}: </strong>
        )}
        {body}
      </span>
    </li>
  );
}

export default function LessonsPage() {
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
              {lessonsPage.hero.eyebrow}
            </p>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              {lessonsPage.hero.title}
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-slate-600">
              {lessonsPage.hero.description}
            </p>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 lg:grid-cols-3">
            {lessonsPage.lessonTypes.map((lesson, index) => {
              const Icon = lessonIcons[index];

              return (
                <Card key={lesson.id} className="flex h-full flex-col">
                  <div className="mb-5 flex items-center justify-between gap-3">
                    <div className="inline-flex rounded-2xl bg-primary-50 p-3 text-primary-600">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Badge>{lesson.badge}</Badge>
                  </div>
                  <h2 className="text-xl font-semibold text-slate-900">
                    {lesson.title}
                  </h2>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600">
                    {lesson.description}
                  </p>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="bg-white py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow={lessonsPage.experience.eyebrow}
            title={lessonsPage.experience.title}
          />

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {lessonsPage.experience.pillars.map((pillar, index) => {
              const Icon = pillarIcons[index];

              return (
                <Card
                  key={pillar.title}
                  hover={false}
                  className="h-full bg-surface-muted"
                >
                  <div className="mb-4 inline-flex rounded-2xl bg-white p-3 text-primary-600 shadow-sm">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {pillar.title}
                  </h3>
                  <ul className="mt-5 space-y-4">
                    {pillar.items.map((item) => (
                      <li key={item.label}>
                        <p className="text-sm font-semibold text-slate-900">
                          {item.label}
                        </p>
                        <p className="mt-1 text-sm leading-7 text-slate-600">
                          {item.text}
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

      <section className="bg-surface-muted py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow={lessonsPage.beyondLive.eyebrow}
            title={lessonsPage.beyondLive.title}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {lessonsPage.beyondLive.items.map((item, index) => {
              const Icon = beyondIcons[index];

              return (
                <Card key={item.title} className="h-full">
                  <div className="mb-4 inline-flex rounded-2xl bg-primary-50 p-3 text-primary-600">
                    <Icon className="h-6 w-6" />
                  </div>
                  <h3 className="text-xl font-semibold leading-8 text-slate-900">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm font-medium text-primary-600">
                    {item.subtitle}
                  </p>
                  {item.skills && (
                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.skills.map((skill) => (
                        <Badge key={skill}>{skill}</Badge>
                      ))}
                    </div>
                  )}
                  <ul className="mt-5 space-y-3">
                    {item.points.map((point) => (
                      <HighlightItem key={point} text={point} />
                    ))}
                  </ul>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
                {lessonsPage.speaking.eyebrow}
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                {lessonsPage.speaking.title}
              </h2>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {lessonsPage.speaking.description}
              </p>
            </div>

            <Card
              hover={false}
              className="bg-linear-to-br from-primary-50 via-white to-secondary-400/10"
            >
              <ul className="space-y-4">
                {lessonsPage.speaking.highlights.map((highlight) => (
                  <HighlightItem key={highlight} text={highlight} />
                ))}
              </ul>
            </Card>
          </div>
        </Container>
      </section>
    </main>
  );
}
