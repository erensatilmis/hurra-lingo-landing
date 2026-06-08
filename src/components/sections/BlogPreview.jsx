import { ArrowUpRight, Clock } from "lucide-react";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Card from "../ui/Card";
import ImageSlot from "../ui/ImageSlot";
import Reveal from "../ui/Reveal";
import ParallaxBlobs from "../ui/ParallaxBlobs";
import { assets } from "../../assets";
import { blog } from "../../data/content";

export default function BlogPreview() {
  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-white py-16 md:py-24"
    >
      <ParallaxBlobs variant="a" />
      <Container className="relative">
        <Reveal>
          <SectionHeading eyebrow={blog.eyebrow} title={blog.title} />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {blog.items.map((post, index) => (
            <Reveal key={post.id} delay={(index % 3) * 90}>
              <Card padded={false} className="group h-full overflow-hidden">
                <div className="relative aspect-16/10 overflow-hidden">
                  <div className="h-full w-full transition-transform duration-500 group-hover:scale-110">
                    <ImageSlot
                      src={assets.blogCovers[index]}
                      label={`${post.title} kapak görseli`}
                      aspect="aspect-[16/10]"
                    />
                  </div>
                  {post.category && (
                    <span className="absolute left-3 top-3 rounded-full bg-white/90 px-3 py-1 text-xs font-semibold text-primary-700 shadow-sm backdrop-blur-sm">
                      {post.category}
                    </span>
                  )}
                </div>
                <div className="p-6">
                  {post.readTime && (
                    <p className="mb-3 inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
                      <Clock className="h-3.5 w-3.5" />
                      {post.readTime}
                    </p>
                  )}
                  <h3 className="text-lg font-semibold leading-7 text-slate-900 transition-colors group-hover:text-primary-700">
                    {post.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {post.excerpt}
                  </p>
                  <a
                    href="#"
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800"
                  >
                    Tıklayınız
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                  </a>
                </div>
              </Card>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
