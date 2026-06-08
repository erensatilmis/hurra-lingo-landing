import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ImageSlot from "../ui/ImageSlot";
import Reveal from "../ui/Reveal";
import ParallaxBlobs from "../ui/ParallaxBlobs";
import { assets } from "../../assets";
import { mission } from "../../data/content";

export default function Mission() {
  return (
    <section className="relative overflow-hidden bg-white py-16 md:py-20">
      <ParallaxBlobs variant="b" />
      <Container className="relative">
        <div className="mx-auto max-w-6xl rounded-4xl border border-primary-100 bg-linear-to-br from-primary-50 via-white to-secondary-400/10 px-6 py-12 shadow-sm sm:px-10">
          <Reveal>
            <SectionHeading eyebrow={mission.eyebrow} title={mission.title} />
          </Reveal>

          <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7">
            {mission.offeredLanguages.map((language, index) => (
              <Reveal
                key={language.id}
                delay={index * 60}
                className="group flex flex-col items-center rounded-2xl border border-white/80 bg-white/80 p-4 text-center shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary-200 hover:shadow-md hover:shadow-primary-100/40"
              >
                <div className="h-14 w-14 overflow-hidden rounded-full border-2 border-primary-100 ring-4 ring-primary-50 transition-all duration-300 group-hover:-rotate-6 group-hover:scale-110 group-hover:border-primary-200 group-hover:ring-primary-100">
                  <ImageSlot
                    src={assets.languageFlags[index]}
                    label={`${language.name} bayrağı`}
                    aspect="aspect-square"
                    className="rounded-full"
                  />
                </div>
                <p className="mt-3 text-sm font-semibold text-slate-900">
                  {language.name}
                </p>
                <p className="mt-0.5 text-xs text-slate-500">
                  {language.nativeName}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
