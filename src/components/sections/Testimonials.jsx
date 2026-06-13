import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Reveal from "../ui/Reveal";
import ParallaxBlobs from "../ui/ParallaxBlobs";
import { testimonials } from "../../data/content";

const SQRT_5000 = Math.sqrt(5000);

function getInitials(name) {
  return name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

function TestimonialCard({ position, item, handleMove, cardSize }) {
  const isCenter = position === 0;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="absolute left-1/2 top-1/2"
      style={{
        width: cardSize,
        height: cardSize,
        transform: `
          translate(-50%, -50%)
          translateX(${(cardSize / 1.5) * position}px)
          translateY(${isCenter ? -65 : position % 2 ? 15 : -15}px)
          rotate(${isCenter ? 0 : position % 2 ? 2.5 : -2.5}deg)
        `,
        zIndex: hovered ? 40 : isCenter ? 10 : 0,
        transition: "transform 0.5s ease-in-out",
      }}
    >
      <div
        onClick={() => handleMove(position)}
        className={`relative flex h-full w-full cursor-pointer flex-col border-2 border-black p-6 transition-colors duration-500 ease-in-out sm:p-8 ${
          isCenter ? "text-white" : "bg-white text-slate-900"
        }`}
        style={{
          backgroundColor: isCenter ? "#00AED0" : undefined,
          clipPath:
            "polygon(50px 0%, calc(100% - 50px) 0%, 100% 50px, 100% 100%, calc(100% - 50px) 100%, 50px 100%, 0 100%, 0 0)",
          boxShadow: isCenter
            ? "0px 8px 0px 4px #000000"
            : "0px 0px 0px 0px transparent",
        }}
      >
        <span
          className="absolute block origin-top-right rotate-45 bg-black"
          style={{ right: -2, top: 48, width: SQRT_5000, height: 2 }}
        />

        <div
          className={`mb-4 shrink-0 flex h-14 w-14 items-center justify-center overflow-hidden text-base font-bold ${
            item.avatar
              ? "rounded-full border-2 border-white/80"
              : isCenter
                ? "w-12 bg-white"
                : "w-12 text-white"
          }`}
          style={{
            color: !item.avatar && isCenter ? "#00AED0" : undefined,
            backgroundColor:
              !item.avatar && !isCenter ? "#00AED0" : undefined,
            boxShadow: "3px 3px 0px rgba(15, 23, 42, 0.12)",
          }}
        >
          {item.avatar ? (
            <img
              src={item.avatar}
              alt=""
              className="h-full w-full object-cover"
            />
          ) : (
            getInitials(item.name)
          )}
        </div>

        <h3
          onMouseEnter={() => isCenter && setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className={`min-h-0 flex-1 line-clamp-4 text-base font-medium leading-7 sm:line-clamp-6 sm:text-lg ${
            isCenter ? "text-white" : "text-slate-700"
          }`}
        >
          “{item.text}”
        </h3>

        <p
          className={`mt-4 shrink-0 text-sm italic ${
            isCenter ? "text-primary-100" : "text-slate-400"
          }`}
        >
          - {item.name}
          {item.lang ? `, ${item.lang}` : ""}
        </p>
      </div>

      {isCenter && hovered && (
        <div
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          className="absolute bottom-full left-1/2 z-50 mb-3 w-88 max-w-[88vw] -translate-x-1/2"
        >
          <div className="max-h-[55vh] overflow-y-auto rounded-2xl border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-700 shadow-2xl ring-1 ring-black/5">
            “{item.text}”
            <span
              className="mt-3 block text-xs font-semibold not-italic"
              style={{ color: "#00AED0" }}
            >
              — {item.name}
              {item.lang ? `, ${item.lang}` : ""}
            </span>
          </div>
          <span className="absolute left-1/2 top-full h-3 w-3 -translate-x-1/2 -translate-y-1/2 rotate-45 border-b border-r border-slate-200 bg-white" />
        </div>
      )}
    </div>
  );
}

export default function Testimonials() {
  const [cardSize, setCardSize] = useState(365);
  const [list, setList] = useState(() =>
    testimonials.items.map((item, index) => ({ ...item, tempId: index })),
  );

  const handleMove = (steps) => {
    const newList = [...list];

    if (steps > 0) {
      for (let i = steps; i > 0; i--) {
        const item = newList.shift();
        if (!item) break;
        newList.push({ ...item, tempId: Math.random() });
      }
    } else {
      for (let i = steps; i < 0; i++) {
        const item = newList.pop();
        if (!item) break;
        newList.unshift({ ...item, tempId: Math.random() });
      }
    }

    setList(newList);
  };

  useEffect(() => {
    const updateSize = () => {
      setCardSize(window.matchMedia("(min-width: 640px)").matches ? 365 : 290);
    };
    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const middle = Math.floor(list.length / 2);

  return (
    <section id="referanslar" className="relative bg-white py-16 md:py-24">
      <ParallaxBlobs variant="b" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow={testimonials.eyebrow}
            title={testimonials.title}
            subtitle="Velilerimizin ve öğrencilerimizin gerçek deneyimleri."
          />
        </Reveal>

        <div
          className="relative mt-10 w-full overflow-x-clip"
          style={{ height: 520 }}
        >
          {list.map((item, index) => (
            <TestimonialCard
              key={item.tempId}
              item={item}
              handleMove={handleMove}
              position={index - middle}
              cardSize={cardSize}
            />
          ))}

          <div className="absolute bottom-2 left-1/2 flex -translate-x-1/2 gap-3">
            <button
              type="button"
              aria-label="Önceki yorum"
              onClick={() => handleMove(-1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-slate-600 transition-colors hover:border-primary-600 hover:bg-primary-600 hover:text-white"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              aria-label="Sonraki yorum"
              onClick={() => handleMove(1)}
              className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-slate-200 bg-white text-slate-600 transition-colors hover:border-primary-600 hover:bg-primary-600 hover:text-white"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
}
