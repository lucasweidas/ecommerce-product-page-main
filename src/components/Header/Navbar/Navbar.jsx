import { AnimatePresence } from 'framer-motion';
import { useScreenSize } from '../../Context/BreakpointContext';
import { useOverlay } from '../../Context/OverlayContext';
import NavLeft from './NavLeft';
import NavMiddle from './NavMiddle';
import NavRight from './NavRight';

export default function Nav() {
  const { overlay, onOverlayChange } = useOverlay();
  const screenSize = useScreenSize();
  const isLargeScreen = screenSize === 'large';
  const showGuide = overlay === 'nav-guide';

  function handleGuideToggle() {
    onOverlayChange(showGuide ? null : 'nav-guide');
  }

  return (
    <nav className="nav hero-container">
      <div className="nav__container">
        <NavLeft isLargeScreen={isLargeScreen} shown={showGuide} onToggleGuide={handleGuideToggle} />
        <AnimatePresence initial={false}>
          {(isLargeScreen || showGuide) && <NavMiddle isLargeScreen={isLargeScreen} shown={showGuide} onToggleGuide={handleGuideToggle} />}
        </AnimatePresence>
        <NavRight />
      </div>
    </nav>
  );
}
