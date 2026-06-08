import Parallax from './Parallax'

const variants = {
  a: [
    { speed: 0.22, className: 'absolute -left-24 top-16 h-72 w-72 bg-primary-200/30' },
    { speed: -0.18, className: 'absolute -right-20 bottom-8 h-80 w-80 bg-secondary-400/15' },
  ],
  b: [
    { speed: -0.2, className: 'absolute -right-24 top-10 h-80 w-80 bg-primary-200/25' },
    { speed: 0.2, className: 'absolute -left-16 bottom-0 h-72 w-72 bg-secondary-400/15' },
  ],
  c: [
    { speed: 0.18, className: 'absolute left-1/3 -top-10 h-64 w-64 bg-primary-200/25' },
    { speed: -0.22, className: 'absolute -right-16 bottom-10 h-72 w-72 bg-secondary-400/15' },
  ],
}

export default function ParallaxBlobs({ variant = 'a' }) {
  const blobs = variants[variant] ?? variants.a

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {blobs.map((blob, index) => (
        <Parallax
          key={index}
          speed={blob.speed}
          className={`${blob.className} rounded-full blur-3xl`}
        />
      ))}
    </div>
  )
}
