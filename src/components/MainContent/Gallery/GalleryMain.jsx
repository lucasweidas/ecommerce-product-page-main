export default function GalleryMain({ className, children }) {
  const otherClasses = className ? ` ${className}` : '';
  return <div className={`gallery__main gallery__wrapper${otherClasses}`}>{children}</div>;
}
