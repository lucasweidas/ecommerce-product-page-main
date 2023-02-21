import { motion } from 'framer-motion';
import Overlay from '../../Overlay';
import GuideList from './GuideList';

export default function MobileGuide({ shown, onToggle }) {
  return (
    <>
      <Overlay onClick={onToggle} variants={fade} />
      <motion.div className="guide" variants={fadeIn} initial="hidden" animate="visible" exit="exit">
        <CloseButton shown={shown} onClick={onToggle} />
        <GuideList />
      </motion.div>
    </>
  );
}

function CloseButton({ shown, onClick }) {
  return (
    <button className="button button-guide" aria-label="Close guide" aria-haspopup="true" aria-expanded={shown} aria-controls="nav-guide" onClick={onClick}>
      <svg width="14" height="15" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
          fill="#69707D"
          fillRule="evenodd"
        />
      </svg>
    </button>
  );
}

const fadeInTransition = { duration: 0.25, ease: 'easeInOut' };
const fadeInHidden = { opacity: 0, x: '-100%' };
const fadeIn = {
  hidden: fadeInHidden,
  visible: {
    opacity: 1,
    x: '0%',
    transition: fadeInTransition,
  },
  exit: {
    ...fadeInHidden,
    transition: fadeInTransition,
  },
};
const fade = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: fadeInTransition,
  },
  exit: {
    opacity: 0,
    transition: fadeInTransition,
  },
};
