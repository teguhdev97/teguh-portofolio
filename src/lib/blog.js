export const BLOG_LOCALES = ["id", "en", "jp"];

export const localizePost = (post, locale = "id") => {
  const translations = post.translations || {};
  const requested = translations[locale];
  const fallback = translations.id || Object.values(translations).find((item) => item?.title);
  const legacy = {
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    readingTime: post.readingTime,
  };
  const translation = requested || fallback || legacy;

  return {
    ...post,
    ...translation,
    slug: post.slug,
    hasTranslation: Boolean(requested || (!post.translations && locale === "id")),
    availableLocales: post.translations
      ? BLOG_LOCALES.filter((language) => post.translations[language]?.title && post.translations[language]?.content)
      : ["id"],
  };
};
