import { Play } from 'lucide-react'
import Card from '../ui/Card'
import YouTubeModal from '../ui/YouTubeModal'
import { getTeacherPhoto } from '../../assets'

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
        aria-label={`${name} videosunu izle`}
      >
        {mediaContent}
        <div className="absolute inset-0 bg-slate-950/0 transition-colors duration-300 group-hover:bg-slate-950/35" />
        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
          <span className="flex h-16 w-16 scale-90 items-center justify-center rounded-full bg-white/95 text-primary-600 shadow-lg transition-transform duration-300 group-hover:scale-100">
            <Play className="ml-1 h-7 w-7 fill-current" />
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

  return (
    <>
      <Card padded={false} className="group overflow-hidden">
        <TeacherMedia
          name={name}
          videoId={videoId}
          photoSrc={photoSrc}
          onPlay={onPlay}
        />
        <div className="px-5 py-5 text-center">
          <h3 className="text-lg font-semibold text-slate-900">{name}</h3>
          <p className="mt-1.5 text-sm font-medium text-primary-600">{role}</p>
        </div>
      </Card>

      {isOpen ? (
        <YouTubeModal videoId={videoId} title={name} onClose={onClose} />
      ) : null}
    </>
  )
}
