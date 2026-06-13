import { useTranslation } from "react-i18next";
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
import ImageSlot from "../ui/ImageSlot";
import Reveal from "../ui/Reveal";
import { featureMeta } from "../../data/metadata";

const iconMap = {
  Video,
  Sparkles,
  Smartphone,
  GraduationCap,
  Library,
  Award,
};

export default function Features() {
  const { t } = useTranslation("home");
  const featureItems = t("features.items", { returnObjects: true });
  const features = featureMeta.map((meta) => {
    const copy = featureItems.find((item) => item.id === meta.id) ?? {};

    return {
      ...meta,
      ...copy,
    };
  });

  return (
    <section className="bg-white py-16 md:py-24">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow={t("features.eyebrow")}
            title={t("features.title")}
          />
        </Reveal>

        <div className="mt-14 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon];

            return (
              <Reveal key={feature.id} delay={index * 50}>
                <article className="group flex h-full flex-col">
                  <div className="overflow-hidden rounded-2xl bg-slate-50">
                    <div className="aspect-4/3 overflow-hidden">
                      <ImageSlot
                        src={feature.image}
                        alt={feature.title}
                        label={`${feature.title} görseli`}
                        fit="cover"
                        className="object-center transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                      />
                    </div>
                  </div>

                  <div className="mt-5 flex flex-1 flex-col">
                    <div className="flex items-center gap-2.5">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-600">
                        <Icon className="h-4 w-4" strokeWidth={1.75} />
                      </span>
                      <h3 className="text-base font-semibold tracking-tight text-slate-900">
                        {feature.title}
                      </h3>
                    </div>
                    <p className="mt-3 flex-1 text-sm leading-6 text-slate-500">
                      {feature.description}
                    </p>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
