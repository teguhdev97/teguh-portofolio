const HtmlContent = ({ html }) => {
  if (!html) return null

  return (
    <div
      className="
        prose prose-neutral max-w-none
        prose-headings:font-semibold
        prose-h1:text-2xl
        prose-h2:text-xl
        prose-h3:text-lg
        prose-p:text-sm
        prose-p:leading-7
        prose-a:text-primary prose-a:no-underline hover:prose-a:underline
        prose-strong:text-foreground
        prose-code:bg-muted prose-code:px-1 prose-code:rounded
        prose-pre:bg-muted prose-pre:border prose-pre:rounded-lg
        prose-img:rounded-lg
        prose-blockquote:border-l-4 prose-blockquote:border-primary prose-blockquote:pl-4 prose-blockquote:text-muted-foreground

        dark:prose-invert
      "
      dangerouslySetInnerHTML={{ __html: html }}
    />
  )
}

export default HtmlContent
