import { Play } from 'lucide-react'
import Card from '../ui/Card'
import YouTubeModal from '../ui/YouTubeModal'
import { getTeacherPhoto } from '../../assets'
import { getTeacherHighlights } from '../../lib/teachers'

function getInitials(name) {
  return name
    .split(' ')
    .slice(0, 2)
    .map((part) => part[0])
    .join('')
    .toUpperCase()
}

function TeacherPlaceholder({ name }) {
  return (
    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-primary-100 via-white to-primary-50">
      <span className="text-4xl font-bold text-primary-600">{getInitials(name)}</span>
    </div>
  )
}

function TeacherMedia({ name, videoId, photoSrc, onPlay }) {
  const containerClass =
    'relative aspect-[4/5] w-full overflow-hidden bg-white'

  const mediaContent = photoSrc ? (
    <img
      src={photoSrc}
      alt={name}
      className="h-full w-full object-contain object-center"
    />
  ) : (
    <TeacherPlaceholder name={name} />
  )

  if (videoId) {
    return (
      <button
        type="button"
        onClick={() => onPlay(videoId)}
        className={`${containerClass} block`}
        aria-label={`${name} ile tanışın`}
      >
        {mediaContent}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/95 text-primary-600 shadow-lg ring-4 ring-white/25 transition-transform duration-300 group-hover:scale-105">
            <Play className="ml-1 h-6 w-6 fill-current" />
          </span>
        </div>
        <div className="absolute inset-x-0 bottom-0 px-3 pb-3">
          <span className="flex w-full items-center justify-center gap-1.5 rounded-lg bg-white/95 px-3 py-2 text-xs font-semibold text-slate-800 shadow-sm">
            <Play className="h-3.5 w-3.5 fill-primary-600 text-primary-600" />
            Öğretmenimizle Tanış
          </span>
        </div>
      </button>
    )
  }

  return <div className={containerClass}>{mediaContent}</div>
}

export default function TeacherVideoCard({
  teacher,
  role,
  activeVideoId,
  onPlay,
  onClose,
}) {
  const { name, videoId, photo } = teacher
  const isOpen = activeVideoId === videoId
  const photoSrc = photo ? getTeacherPhoto(photo) : null
  const highlights = getTeacherHighlights(teacher, role)

  return (
    <>
      <Card padded={false} className="group overflow-hidden">
        <TeacherMedia
          name={name}
          videoId={videoId}
          photoSrc={photoSrc}
          onPlay={onPlay}
        />
        <div className="px-5 py-5">
          <h3 className="text-center text-lg font-semibold text-slate-900">{name}</h3>
          <p className="mt-1.5 text-center text-sm font-medium text-primary-600">{role}</p>
          <ul className="mt-4 space-y-1.5 border-t border-slate-100 pt-4">
            {highlights.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-xs leading-5 text-slate-600"
              >
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-400" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </Card>

      {isOpen ? (
        <YouTubeModal videoId={videoId} title={name} onClose={onClose} />
      ) : null}
    </>
  )
}
