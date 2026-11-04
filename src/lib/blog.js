export const BLOG_LOCALES = ["id", "en", "jp"];

const hasStory = (translation) => Boolean(translation?.title && translation?.content);

const textFromHtml = (html = "") => html
    .replace(/<[^>]*>/g, " ")
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/\s+/g, " ")
    .trim();

const excerptFromHtml = (html = "") => {
  const text = textFromHtml(html);
  return text.length > 180 ? `${text.slice(0, 177).trimEnd()}…` : text;
};

export const localizePost = (post, locale = "id") => {
  const translations = post.translations || {};
  const requested = hasStory(translations[locale]) ? translations[locale] : null;
  const fallback = hasStory(translations.id)
    ? translations.id
    : Object.values(translations).find(hasStory);
  const legacy = {
    title: post.title,
    excerpt: post.excerpt,
    content: post.content,
    readingTime: post.readingTime,
  };
  const translation = requested || fallback || legacy;
  const content = translation.content || "";

  return {
    ...post,
    ...translation,
    excerpt: translation.excerpt?.trim() || excerptFromHtml(content),
    readingTime: translation.readingTime || Math.max(1, Math.ceil(textFromHtml(content).split(/\s+/).filter(Boolean).length / 200)),
    slug: post.slug,
    hasTranslation: Boolean(requested || (!post.translations && locale === "id")),
    availableLocales: post.translations
      ? BLOG_LOCALES.filter((language) => hasStory(post.translations[language]))
      : ["id"],
  };
};
