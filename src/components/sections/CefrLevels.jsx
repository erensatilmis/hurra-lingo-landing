import { useState } from "react";
import { useTranslation } from "react-i18next";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Accordion from "../ui/Accordion";
import ImageSlot from "../ui/ImageSlot";
import YouTubeModal from "../ui/YouTubeModal";
import Reveal from "../ui/Reveal";
import ParallaxBlobs from "../ui/ParallaxBlobs";
import { cefrVideo } from "../../data/metadata";

export default function CefrLevels() {
  const { t } = useTranslation("home");
  const levels = t("cefrLevels.levels", { returnObjects: true });
  const videoLabel = t("cefrLevels.video.label");
  const [openId, setOpenId] = useState(levels[0].id);
  const [videoOpen, setVideoOpen] = useState(false);

  const handleToggle = (id) => {
    setOpenId(id);
  };

  return (
    <section className="relative overflow-hidden bg-surface-muted py-16 md:py-24">
      <ParallaxBlobs variant="a" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow={t("cefrLevels.eyebrow")}
            title={t("cefrLevels.title")}
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-2 lg:items-stretch">
          <Reveal>
            <Accordion items={levels} openId={openId} onToggle={handleToggle} />
          </Reveal>

          <Reveal className="h-full">
            <button
              type="button"
              onClick={() => setVideoOpen(true)}
              className="group relative block h-full min-h-80 w-full overflow-hidden rounded-3xl bg-[#FF4880] shadow-lg shadow-primary-300/20 transition-transform duration-300 hover:-translate-y-1 lg:min-h-full"
              aria-label={`${videoLabel} - oynat`}
            >
              <ImageSlot
                src={cefrVideo.image}
                alt={videoLabel}
                label={videoLabel}
                fit="cover"
                className="object-left object-center transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/20">
                <img
                  src={cefrVideo.playButton}
                  alt=""
                  aria-hidden="true"
                  className="h-24 w-24 transition-transform duration-300 group-hover:scale-110 sm:h-28 sm:w-28"
                />
              </div>
            </button>
          </Reveal>
        </div>
      </Container>

      {videoOpen ? (
        <YouTubeModal
          videoId={cefrVideo.videoId}
          title={videoLabel}
          onClose={() => setVideoOpen(false)}
        />
      ) : null}
    </section>
  );
}
