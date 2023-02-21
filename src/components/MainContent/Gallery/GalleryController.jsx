export default function GalleryController({ className, onImageChange }) {
  const otherClasses = className ? ` ${className}` : '';

  return (
    <div className={`gallery__controller${otherClasses}`}>
      <button className="button button-controller hover--clr-orange-6" id="button-previous" onClick={onImageChange}>
        <svg viewBox="0 0 12 18" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1 3 9l8 8" stroke="currentColor" strokeWidth="3" fill="none" fillRule="evenodd" />
        </svg>
      </button>
      <button className="button button-controller hover--clr-orange-6" id="button-next" onClick={onImageChange}>
        <svg viewBox="0 0 12 18" xmlns="http://www.w3.org/2000/svg">
          <path d="m2 1 8 8-8 8" stroke="currentColor" strokeWidth="3" fill="none" fillRule="evenodd" />
        </svg>
      </button>
    </div>
  );
}
