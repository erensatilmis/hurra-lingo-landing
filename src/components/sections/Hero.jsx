import Container from "../ui/Container";
import Button from "../ui/Button";
import CountUp from "../ui/CountUp";
import TiltCard from "../ui/TiltCard";
import Parallax from "../ui/Parallax";
import HeroIllustration from "../illustrations/HeroIllustration";
import { hero } from "../../data/content";
import turkishFlag from "../../assets/languages/turkish.svg";
import englishFlag from "../../assets/languages/english.svg";
import germanFlag from "../../assets/languages/german.svg";
import frenchFlag from "../../assets/languages/french.svg";
import spanishFlag from "../../assets/languages/spanish.svg";
import russianFlag from "../../assets/languages/russian.svg";
import azerbaijaniFlag from "../../assets/languages/azerbaijani.svg";

const welcomeMessages = [
  { flag: turkishFlag, text: "Hurra Lingo'ya Hoş Geldiniz" },
  { flag: englishFlag, text: "Welcome to Hurra Lingo" },
  { flag: germanFlag, text: "Willkommen bei Hurra Lingo" },
  { flag: frenchFlag, text: "Bienvenue chez Hurra Lingo" },
  { flag: spanishFlag, text: "Bienvenido a Hurra Lingo" },
  { flag: russianFlag, text: "Добро пожаловать в Hurra Lingo" },
  { flag: azerbaijaniFlag, text: "Hurra Lingo-ya Xoş Gəldiniz" },
];

const heroStats = [
  { id: "students", end: 10000, suffix: "+", label: "Mutlu öğrenci" },
  { id: "satisfaction", end: 98, suffix: "%", label: "Memnuniyet" },
  { id: "languages", end: 7, suffix: "", label: "Farklı dil" },
];

function renderHighlightedTitle(title) {
  const keyword = "Eğlenceli";
  if (!title.includes(keyword)) return title;
  const [before, after] = title.split(keyword);
  return (
    <>
      {before}
      <span className="bg-linear-to-r from-primary-600 via-primary-500 to-secondary-500 bg-clip-text text-transparent">
        {keyword}
      </span>
      {after}
    </>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-surface-accent">
      <div className="pointer-events-none absolute inset-0">
        <Parallax
          speed={0.25}
          className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary-300/30 blur-3xl"
        />
        <Parallax
          speed={-0.2}
          className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary-400/20 blur-3xl"
        />
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 right-0 z-10 hidden w-24 overflow-hidden 2xl:block"
      >
        <div className="absolute inset-x-0 top-0 z-10 h-24 bg-linear-to-b from-surface-accent to-transparent" />
        <div className="absolute inset-x-0 bottom-0 z-10 h-24 bg-linear-to-t from-surface-accent to-transparent" />
        <div className="animate-hero-flow-up flex flex-col items-center gap-12">
          {[...welcomeMessages, ...welcomeMessages].map((message, index) => (
            <div
              key={`${message.text}-${index}`}
              className="flex flex-col items-center gap-3"
            >
              <span className="whitespace-nowrap text-center text-xl font-bold leading-none tracking-tight text-primary-500/70 [writing-mode:vertical-rl] rotate-180">
                {message.text}
              </span>
              <img
                src={message.flag}
                alt=""
                className="h-7 w-7 rounded-full object-cover shadow-sm ring-1 ring-black/5"
              />
            </div>
          ))}
        </div>
      </div>

      <Container className="relative py-16 md:py-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="reveal is-visible">
            <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-semibold text-primary-700 shadow-sm">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary-500" />
              </span>
              Online Yabancı Dil Eğitimi
            </p>
            <h1 className="text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              {renderHighlightedTitle(hero.title)}
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              {hero.description}
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                to="/onboarding"
                size="lg"
                className="hover:-translate-y-0.5 hover:scale-[1.03] hover:shadow-xl hover:shadow-primary-600/30"
              >
                Eğitime Başla
              </Button>
            </div>

            <dl className="mt-10 grid max-w-lg grid-cols-3 gap-4">
              {heroStats.map((stat) => (
                <div
                  key={stat.id}
                  className="rounded-2xl border border-primary-100/70 bg-white/70 px-4 py-3 text-center shadow-sm backdrop-blur-sm"
                >
                  <dd className="text-2xl font-bold text-primary-700 sm:text-3xl">
                    <CountUp end={stat.end} suffix={stat.suffix} />
                  </dd>
                  <dt className="mt-1 text-xs font-medium text-slate-500">
                    {stat.label}
                  </dt>
                </div>
              ))}
            </dl>
          </div>

          <Parallax speed={0.08} className="relative">
            <TiltCard className="overflow-hidden rounded-4xl border border-white/80 bg-white p-3 shadow-2xl shadow-primary-200/40">
              <HeroIllustration />
            </TiltCard>
            <div className="absolute -bottom-4 -left-4 animate-float rounded-2xl border border-white bg-white px-4 py-3 shadow-lg">
              <p className="text-xs font-semibold uppercase tracking-wide text-primary-600">
                7/24 Canlı Ders
              </p>
              <p className="text-sm font-medium text-slate-700">
                Her yaştan öğrenci
              </p>
            </div>
          </Parallax>
        </div>
      </Container>
    </section>
  );
}
