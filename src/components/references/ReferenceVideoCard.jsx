import { Play } from "lucide-react";
import Card from "../ui/Card";
import YouTubeModal from "../ui/YouTubeModal";

function getInitials(name) {
  return name
    .split(" ")
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

export default function ReferenceVideoCard({
  item,
  activeVideoId,
  onPlay,
  onClose,
}) {
  const { name, role, videoId, photo } = item;
  const isOpen = activeVideoId === videoId;

  return (
    <>
      <Card padded={false} className="group overflow-hidden">
        <button
          type="button"
          onClick={() => onPlay(videoId)}
          className="relative block aspect-4/5 w-full overflow-hidden bg-white"
          aria-label={`${name} videosunu izle`}
        >
          <img
            src={photo}
            alt={name}
            className="h-full w-full object-contain object-center transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/35" />
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
            <span className="flex h-16 w-16 scale-90 items-center justify-center rounded-full bg-white/95 text-primary-600 shadow-lg transition-transform duration-300 group-hover:scale-100">
              <Play className="ml-1 h-7 w-7 fill-current" />
            </span>
          </div>
        </button>
        <div className="px-5 py-5 text-center">
          <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
          <p className="mt-1.5 text-sm font-medium text-primary-600">{role}</p>
        </div>
      </Card>

      {isOpen ? (
        <YouTubeModal videoId={videoId} title={name} onClose={onClose} />
      ) : null}
    </>
  );
}

export function ReviewInitials({ name }) {
  return (
    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-linear-to-br from-primary-100 to-primary-50 text-sm font-bold text-primary-700">
      {getInitials(name)}
    </div>
  );
}
