import Link from "next/link";
import Image from "next/image";
import { BiBookOpen, BiLinkExternal, BiTimeFive } from "react-icons/bi";

const Meta = ({ post, locale }) => (
  <div className="flex flex-wrap items-center gap-2 text-xs text-subtext">
    <time dateTime={post.publishedAt}>{new Date(post.publishedAt).toLocaleDateString(locale, { dateStyle: "medium" })}</time>
    <span className="h-1 w-1 rounded-full bg-primary" />
    <span className="inline-flex items-center gap-1"><BiTimeFive size={13} /> {post.readingTime || 1} min</span>
  </div>
);

const Cover = ({ post, priority = false }) => (
  <div className="relative h-full min-h-[240px] overflow-hidden bg-gradient-to-br from-orange-100 via-rose-100 to-violet-200 dark:from-slate-800 dark:via-slate-900 dark:to-violet-950">
    {post.coverImage ? (
      <Image src={post.coverImage} alt={post.title} fill priority={priority} className="object-cover transition duration-700 group-hover:scale-105" sizes="(max-width: 768px) 100vw, 55vw" />
    ) : (
      <div className="absolute inset-0 grid place-items-center"><BiBookOpen className="text-orange-400/70" size={64} /></div>
    )}
    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/35 via-transparent to-transparent" />
  </div>
);

const Blog = ({ posts = [], locale = "id" }) => {
  if (!posts.length) {
    return (
      <div className="rounded-[2rem] border border-dashed border-stroke bg-container p-12 text-center">
        <BiBookOpen className="mx-auto mb-4 text-primary" size={36} />
        <h2 className="text-xl font-semibold text-title">The first story is being written.</h2>
        <p className="mt-2 text-sm text-subtext">Come back soon for notes on engineering, learning, and building products.</p>
      </div>
    );
  }

  const [featured, ...rest] = posts;

  return (
    <div className="space-y-8">
      <article className="group overflow-hidden rounded-[2rem] border border-stroke bg-container shadow-[0_30px_90px_-50px_rgba(15,23,42,.6)]">
        <Link href={`/blog/${featured.slug}`} className="grid min-h-[420px] md:grid-cols-[1.15fr_.85fr]">
          <Cover post={featured} priority />
          <div className="relative flex flex-col justify-between p-7 sm:p-10">
            <div>
              <span className="mb-6 inline-flex rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-[.18em] text-primary">Featured story</span>
              <Meta post={featured} locale={locale} />
              <h2 className="mt-5 text-3xl font-semibold leading-tight tracking-tight text-title transition group-hover:text-primary sm:text-4xl">{featured.title}</h2>
              <p className="mt-4 text-base leading-relaxed text-subtext line-clamp-4">{featured.excerpt}</p>
            </div>
            <div className="mt-8 flex items-end justify-between gap-4">
              <div className="flex flex-wrap gap-2">{(featured.tags || []).slice(0, 3).map((tag) => <span key={tag} className="rounded-full border border-stroke px-3 py-1 text-xs text-subtext">{tag}</span>)}</div>
              <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-slate-950 text-white transition group-hover:-translate-y-1 group-hover:translate-x-1 dark:bg-white dark:text-slate-950"><BiLinkExternal size={20} /></span>
            </div>
          </div>
        </Link>
      </article>

      {rest.length > 0 && (
        <div className="grid gap-5 md:grid-cols-2">
          {rest.map((post, index) => (
            <article key={post.id} className={`group overflow-hidden rounded-[1.75rem] border border-stroke bg-container transition duration-300 hover:-translate-y-1 hover:shadow-xl ${index % 3 === 2 ? "md:col-span-2" : ""}`}>
              <Link href={`/blog/${post.slug}`} className={`grid h-full ${index % 3 === 2 ? "md:grid-cols-2" : "grid-rows-[220px_1fr]"}`}>
                <Cover post={post} />
                <div className="flex flex-col p-6">
                  <Meta post={post} locale={locale} />
                  <h2 className="mt-4 text-2xl font-semibold leading-snug text-title transition group-hover:text-primary">{post.title}</h2>
                  <p className="mt-3 text-sm leading-relaxed text-subtext line-clamp-3">{post.excerpt}</p>
                  <div className="mt-auto flex items-center justify-between pt-6 text-sm font-medium text-title">
                    Read story <BiLinkExternal size={18} className="transition group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      )}
    </div>
  );
};

export default Blog;
