import { useTranslation } from "react-i18next";
import Container from "../ui/Container";
import SectionHeading from "../ui/SectionHeading";
import Button from "../ui/Button";
import Reveal from "../ui/Reveal";
import ParallaxBlobs from "../ui/ParallaxBlobs";
import BlogPostCard from "../blog/BlogPostCard";
import { assets } from "../../assets";

export default function BlogPreview() {
  const { t } = useTranslation("home");
  const posts = t("blog.items", { returnObjects: true });

  return (
    <section
      id="blog"
      className="relative overflow-hidden bg-white py-16 md:py-24"
    >
      <ParallaxBlobs variant="a" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow={t("blog.eyebrow")}
            title={t("blog.title")}
          />
        </Reveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {posts.slice(0, 3).map((post, index) => (
            <div
              key={post.id}
              className={index > 0 ? "hidden h-full md:block" : "h-full"}
            >
              <Reveal delay={index * 90} className="h-full">
                <BlogPostCard post={post} coverSrc={assets.blogCovers[index]} />
              </Reveal>
            </div>
          ))}
        </div>

        <Reveal className="mt-10 text-center" delay={120}>
          <Button to="/blog" variant="outline">
            {t("blog.cta")}
          </Button>
        </Reveal>
      </Container>
    </section>
  );
}
