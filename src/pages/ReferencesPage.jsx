import { useState } from "react";
import { Quote, Video } from "lucide-react";
import Container from "../components/ui/Container";
import SectionHeading from "../components/ui/SectionHeading";
import Card from "../components/ui/Card";
import ReferenceVideoCard, {
  ReviewInitials,
} from "../components/references/ReferenceVideoCard";
import { referencesPage } from "../data/referencesPage";

export default function ReferencesPage() {
  const [activeVideoId, setActiveVideoId] = useState(null);

  return (
    <main>
      <section className="relative overflow-hidden bg-surface-accent py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary-300/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary-400/20 blur-3xl" />
        </div>
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
                {referencesPage.hero.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl">
                {referencesPage.hero.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {referencesPage.hero.description}
              </p>
            </div>

            <Card
              hover={false}
              className="bg-linear-to-br from-white via-primary-50 to-secondary-400/10 p-8"
            >
              <div className="flex items-start gap-4">
                <div className="rounded-2xl bg-primary-600 p-3 text-white">
                  <Video className="h-7 w-7" />
                </div>
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-primary-600">
                    {referencesPage.videos.items.length} video yorum
                  </p>
                  <p className="mt-2 text-2xl font-bold text-slate-900">
                    Gerçek veli deneyimleri
                  </p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {referencesPage.reviews.items.length} yazılı geri bildirimle
                    birlikte Hurra Lingo’yu keşfedin.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow={referencesPage.videos.eyebrow}
            title={referencesPage.videos.title}
            subtitle={referencesPage.videos.subtitle}
          />

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {referencesPage.videos.items.map((item) => (
              <ReferenceVideoCard
                key={item.id}
                item={item}
                activeVideoId={activeVideoId}
                onPlay={setActiveVideoId}
                onClose={() => setActiveVideoId(null)}
              />
            ))}
          </div>
        </Container>
      </section>

      <section className="bg-surface-muted py-16 md:py-24">
        <Container>
          <SectionHeading
            eyebrow={referencesPage.reviews.eyebrow}
            title={referencesPage.reviews.title}
          />

          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {referencesPage.reviews.items.map((item) => (
              <Card key={item.id} className="h-full">
                <div className="flex items-start gap-4">
                  {item.avatar ? (
                    <img
                      src={item.avatar}
                      alt=""
                      className="h-12 w-12 shrink-0 rounded-full border-2 border-primary-100 object-cover"
                    />
                  ) : (
                    <ReviewInitials name={item.name} />
                  )}
                  <div className="min-w-0 flex-1">
                    <Quote className="h-6 w-6 text-primary-300" />
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base">
                      {item.text}
                    </p>
                    <div className="mt-5">
                      <p className="font-semibold text-slate-900">
                        {item.name}
                      </p>
                      <p className="text-sm text-slate-500">{item.role}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </main>
  );
}
