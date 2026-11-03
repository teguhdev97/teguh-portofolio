function SVGFromAPI({ svgString, size = 25 }) {
  const cleanSVG = svgString.replace(/<\?xml.*\?>/, ''); // hapus prolog

  return (
     <span
    className="w-4 h-4 flex items-center justify-center shrink-0"
    dangerouslySetInnerHTML={{
      __html: skill.icon
        .replace(/<\?xml.*?\?>/g, "")
        .replace(/<!--.*?-->/g, ""),
    }}
  />
  );
}
