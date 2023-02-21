export default function Thumbnails({ images, alt, className, imageIndex, onImageChange }) {
  const otherClasses = className ? ` ${className}` : '';

  return (
    <div className={`gallery__thumbnails gallery__wrapper${otherClasses}`}>
      {images.map(({ id, url }) => (
        <button
          key={id}
          className="button-thumbnail"
          aria-pressed={imageIndex === id}
          aria-label={`Select gallery image ${id}`}
          onClick={() => onImageChange(id)}
        >
          <img src={url} alt={alt} className="image__small" />
        </button>
      ))}
    </div>
  );
}
