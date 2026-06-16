import { ArrowUpRight, Clock } from "lucide-react";
import Card from "../ui/Card";
import ImageSlot from "../ui/ImageSlot";

export default function BlogPostCard({ post, coverSrc }) {
  return (
    <Card padded={false} className="group flex h-full flex-col overflow-hidden">
      <div className="relative aspect-16/10 shrink-0 overflow-hidden">
        <div className="h-full w-full transition-transform duration-500 group-hover:scale-110">
          <ImageSlot
            src={coverSrc}
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
      <div className="flex flex-1 flex-col p-6">
        {post.readTime && (
          <p className="mb-3 inline-flex items-center gap-1.5 text-xs font-medium text-slate-400">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime}
          </p>
        )}
        <h3 className="text-lg font-semibold leading-7 text-slate-900 transition-colors group-hover:text-primary-700">
          {post.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
          {post.excerpt}
        </p>
        <a
          href="#"
          className="mt-5 inline-flex items-center gap-2 pt-1 text-sm font-semibold text-primary-700 transition-colors hover:text-primary-800"
        >
          Tıklayınız
          <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
        </a>
      </div>
    </Card>
  );
}
