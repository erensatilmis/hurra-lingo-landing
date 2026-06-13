import { useState } from "react";
import { Maximize2 } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import ImageSlot from "../ui/ImageSlot";
import Reveal from "../ui/Reveal";
import Lightbox from "../ui/Lightbox";
import ParallaxBlobs from "../ui/ParallaxBlobs";
import { assets } from "../../assets";
import { gallery } from "../../data/content";

const bentoSpans = ["sm:col-span-2 sm:row-span-2", "", "", "sm:col-span-2"];

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  return (
    <section className="relative overflow-hidden bg-surface-muted py-16 md:py-24">
      <ParallaxBlobs variant="b" />
      <Container className="relative">
        <Reveal>
          <SectionHeading eyebrow={gallery.eyebrow} title={gallery.title} />
        </Reveal>

        <div className="mt-12 grid auto-rows-[180px] gap-4 sm:grid-cols-3 lg:grid-cols-4">
          {assets.galleryImages.map((image, index) => {
            const caption =
              gallery.captions?.[index] ?? `Galeri görseli ${index + 1}`;

            return (
              <Reveal
                key={index}
                delay={index * 80}
                className={`group relative cursor-pointer overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm ${bentoSpans[index] ?? ""}`}
              >
                <button
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="block h-full w-full"
                  aria-label={`${caption} - büyüt`}
                >
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-105">
                    <ImageSlot
                      src={image}
                      alt={caption}
                      label={caption}
                      fit="cover"
                      className="object-center"
                    />
                  </div>
                  <div className="pointer-events-none absolute inset-0 flex items-end bg-linear-to-t from-slate-900/70 via-slate-900/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <div className="flex w-full items-center justify-between p-4">
                      <span className="text-sm font-semibold text-white">
                        {caption}
                      </span>
                      <Maximize2 className="h-4 w-4 text-white" />
                    </div>
                  </div>
                </button>
              </Reveal>
            );
          })}
        </div>
      </Container>

      {activeIndex !== null && (
        <Lightbox
          image={assets.galleryImages[activeIndex]}
          label={
            gallery.captions?.[activeIndex] ??
            `Galeri görseli ${activeIndex + 1}`
          }
          onClose={() => setActiveIndex(null)}
        />
      )}
    </section>
  );
}
