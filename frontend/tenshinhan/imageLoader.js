export default function imageLoader({ src, width, quality }) {
  return `${process.env.basePath}/${src}?w=${width}&q=${quality || 75}`;
}
