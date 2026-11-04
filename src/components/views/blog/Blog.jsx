import Link from "next/link";
import Image from "next/image";

const Blog = ({ posts = [], locale = "id" }) => {
  if (!posts.length) {
    return <p className="text-subtext">Belum ada artikel yang dipublikasikan.</p>;
  }

  return (
    <div className="grid gap-5 sm:grid-cols-2">
      {posts.map((post) => (
        <article key={post.id} className="card !p-0 overflow-hidden">
          <Link href={`/blog/${post.slug}`} className="group block h-full">
            {post.coverImage && (
              <div className="relative aspect-video overflow-hidden">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 50vw"
                />
              </div>
            )}
            <div className="p-5 space-y-3">
              <div className="text-xs text-subtext flex flex-wrap gap-2">
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString(locale, { dateStyle: "medium" })}
                </time>
                <span>•</span>
                <span>{post.readingTime || 1} min read</span>
              </div>
              <h2 className="text-xl font-semibold group-hover:text-primary">{post.title}</h2>
              <p className="text-sm text-subtext line-clamp-3">{post.excerpt}</p>
              <div className="flex flex-wrap gap-2 pt-1">
                {(post.tags || []).map((tag) => <span key={tag} className="badge text-xs">{tag}</span>)}
              </div>
            </div>
          </Link>
        </article>
      ))}
    </div>
  );
};

export default Blog;
