import Overlay from '../../Overlay';
import { motion } from 'framer-motion';

export default function Lightbox({ onLightboxToggle, children }) {
  return (
    <motion.div className="gallery lightbox" id="lightbox" variants={fade} initial="hidden" animate="visible" exit="exit">
      <Overlay onClick={onLightboxToggle} variants={fade} />
      <div className="lightbox__container">
        <button className="button button-close--lightbox hover--clr-orange-6" aria-label="Close lightbox" aria-controls="lightbox" onClick={onLightboxToggle}>
          <svg viewBox="0 0 14 15" xmlns="http://www.w3.org/2000/svg">
            <path
              d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
              fill="currentColor"
              fillRule="evenodd"
            />
          </svg>
        </button>
        {children}
      </div>
    </motion.div>
  );
}

const fade = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.2,
      ease: 'easeInOut',
    },
  },
  exit: {
    opacity: 0,
    transition: {
      duration: 0.1,
    },
  },
};
