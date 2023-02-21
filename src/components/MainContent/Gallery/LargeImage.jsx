import { motion } from 'framer-motion';

export default function LargeImage({ src, alt, direction }) {
  let variants = scale;
  if (direction === 'left') {
    variants = toLeft;
  } else if (direction === 'right') {
    variants = toRight;
  }

  return (
    <motion.div variants={variants} initial="hidden" animate="visible" exit="exit">
      <img src={src} alt={alt} className="image__large" />
    </motion.div>
  );
}

const transition = { duration: 0.3, ease: 'easeOut' };
const exit = {
  position: 'absolute',
  transform: 'scale(0.7)',
  transition: { duration: 0.3, ease: 'easeIn' },
};

const toRight = {
  hidden: {
    x: '-100%',
  },
  visible: {
    x: '0%',
    transition: transition,
  },
  exit: exit,
};

const toLeft = {
  hidden: {
    x: '100%',
  },
  visible: {
    x: '0%',
    transition: transition,
  },
  exit: exit,
};

const scale = {
  hidden: {
    transform: 'scale(0.7)',
  },
  visible: {
    transform: 'scale(1)',
    transition: transition,
  },
  exit: exit,
};
