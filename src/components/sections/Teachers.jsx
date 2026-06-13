import { useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import ParallaxBlobs from "../ui/ParallaxBlobs";
import TeacherVideoCard from "../teachers/TeacherVideoCard";
import { teacherMeta } from "../../data/metadata";

export default function Teachers() {
  const { t } = useTranslation("home");
  const teacherItems = t("teachers.items", { returnObjects: true });
  const teachers = teacherMeta.map((meta) => {
    const copy = teacherItems.find((item) => item.id === meta.id) ?? {};

    return {
      ...meta,
      ...copy,
    };
  });
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <section className="relative overflow-hidden bg-surface-muted py-16 md:py-24">
      <ParallaxBlobs variant="c" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow={t("teachers.eyebrow")}
            title={t("teachers.title")}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {teachers.map((teacher, index) => (
            <Reveal key={teacher.id} delay={index * 90}>
              <TeacherVideoCard
                teacher={teacher}
                role={teacher.role}
                activeVideoId={activeVideoId}
                onPlay={setActiveVideoId}
                onClose={() => setActiveVideoId(null)}
              />
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-10 text-center" delay={120}>
          <Button href="/ogretmenler" variant="outline">
            {t("teachers.cta")}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
