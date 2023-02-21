import { AnimatePresence } from 'framer-motion';

export default function ImageContainer({ onLightboxToggle, children }) {
  return (
    <div className="image__container" onClick={onLightboxToggle}>
      <AnimatePresence initial={false}>{children}</AnimatePresence>
    </div>
  );
}
