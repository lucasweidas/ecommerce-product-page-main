import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import GalleryController from './GalleryController';
import { useOverlay } from '../../Context/OverlayContext';
import GalleryMain from './GalleryMain';
import LargeImage from './LargeImage';
import Lightbox from './Lightbox';
import Thumbnails from './Thumbnails';
import { useScreenSize } from '../../Context/BreakpointContext';
import ImageContainer from './ImageContainer';

export default function Gallery({ images, imageAlt }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [direction, setDirection] = useState(null);
  const screenSize = useScreenSize();
  const { overlay, onOverlayChange } = useOverlay();
  const isLargeScreen = screenSize === 'large';
  const showLighbox = overlay === 'lightbox';
  const largeImages = images.large;
  const smallImages = images.small;
  const maxImageIndex = largeImages.length - 1;
  const currentLargeImage = largeImages[imageIndex].url;

  function handleControllerClick({ target }) {
    let nextIndex = null;

    if (target.id === 'button-previous') {
      nextIndex = imageIndex === 0 ? maxImageIndex : imageIndex - 1;
    } else if (target.id === 'button-next') {
      nextIndex = imageIndex === maxImageIndex ? 0 : imageIndex + 1;
    }
    handleImageChange(nextIndex);
  }

  function handleImageChange(index) {
    let nextDirection = null;

    if (index === 0 && imageIndex === maxImageIndex) {
      nextDirection = 'right';
    } else if (index === maxImageIndex && imageIndex === 0) {
      nextDirection = 'left';
    } else if (index > imageIndex) {
      nextDirection = 'right';
    } else if (index < imageIndex) {
      nextDirection = 'left';
    }
    setImageIndex(index);
    setDirection(nextDirection);
  }

  function handleLighboxToggle() {
    onOverlayChange(showLighbox ? null : 'lightbox');
  }

  return (
    <>
      <div className="gallery">
        <GalleryMain>
          <ImageContainer onLightboxToggle={isLargeScreen ? handleLighboxToggle : null}>
            <LargeImage key={imageIndex} src={currentLargeImage} alt={imageAlt} direction={direction} />
          </ImageContainer>
          {!isLargeScreen && <GalleryController onImageChange={handleControllerClick} />}
        </GalleryMain>
        {isLargeScreen && <Thumbnails images={smallImages} alt={imageAlt} imageIndex={imageIndex} onImageChange={handleImageChange} />}
      </div>
      <AnimatePresence initial={false}>
        {isLargeScreen && showLighbox && (
          <Lightbox onLightboxToggle={handleLighboxToggle}>
            <GalleryMain className="gallery__main--lightbox">
              <ImageContainer>
                <LargeImage key={imageIndex} src={currentLargeImage} alt={imageAlt} direction={direction} />
              </ImageContainer>
              <GalleryController className="gallery__controller--lightbox" onImageChange={handleControllerClick} />
            </GalleryMain>
            <Thumbnails
              className="gallery__thumbnails--lightbox"
              images={smallImages}
              alt={imageAlt}
              imageIndex={imageIndex}
              onImageChange={handleImageChange}
            />
          </Lightbox>
        )}
      </AnimatePresence>
    </>
  );
}
