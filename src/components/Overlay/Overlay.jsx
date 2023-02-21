import { motion } from 'framer-motion';

export default function Overlay({ onClick, variants }) {
  return <motion.div className="overlay" variants={variants} initial="hidden" animate="visible" exit="exit" onClick={onClick}></motion.div>;
}
