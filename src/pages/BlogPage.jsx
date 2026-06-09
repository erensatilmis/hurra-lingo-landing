import { BookOpen } from 'lucide-react'
import Container from '../components/ui/Container'
import Card from '../components/ui/Card'
import BlogPostCard from '../components/blog/BlogPostCard'
import { assets } from '../assets'
import { blog } from '../data/content'

export default function BlogPage() {
  return (
    <main>
      <section className="relative overflow-hidden bg-surface-accent py-16 md:py-24">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary-300/30 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-secondary-400/20 blur-3xl" />
        </div>
        <Container className="relative">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-600">
                {blog.eyebrow}
              </p>
              <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                {blog.title}
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                {blog.description}
              </p>
            </div>

            <Card
              hover={false}
              className="hidden w-full max-w-xs bg-white/90 p-6 lg:block"
            >
              <div className="inline-flex rounded-2xl bg-primary-50 p-3 text-primary-600">
                <BookOpen className="h-7 w-7" />
              </div>
              <p className="mt-4 text-sm font-semibold text-slate-900">
                {blog.items.length} blog yazısı
              </p>
              <p className="mt-2 text-sm leading-7 text-slate-600">
                Dil öğrenimi, eğitim ve motivasyon üzerine güncel içerikler.
              </p>
            </Card>
          </div>
        </Container>
      </section>

      <section className="py-16 md:py-24">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 md:items-stretch xl:grid-cols-3">
            {blog.items.map((post, index) => (
              <div key={post.id} className="h-full">
                <BlogPostCard
                  post={post}
                  coverSrc={assets.blogCovers[index]}
                />
              </div>
            ))}
          </div>
        </Container>
      </section>
    </main>
  )
}
