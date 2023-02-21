import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { useOverlay } from './OverlayContext';

const BreakpointContext = createContext(null);

export default function BreakpointProvider({ children }) {
  const [size, setSize] = useState(initialBreakpoint);

  const onLargeScreenChange = useCallback(matches => {
    setSize(matches ? 'large' : 'medium');
  }, []);
  useMatchScreenSize('large', onLargeScreenChange);

  return <BreakpointContext.Provider value={size}>{children}</BreakpointContext.Provider>;
}

export function useScreenSize() {
  return useContext(BreakpointContext);
}

function useMatchScreenSize(size, onSizeChange) {
  const { onOverlayChange } = useOverlay();

  useEffect(() => {
    function handleMediaChange({ matches }) {
      onSizeChange(matches);
      onOverlayChange(null);
    }

    window.matchMedia(`(min-width: ${breakpoints[size]}px)`).addEventListener('change', handleMediaChange);

    return () => {
      window.matchMedia(`(min-width: ${breakpoints[size]}px)`).removeEventListener('change', handleMediaChange);
    };
  }, []);
}

function getInitialBreakpoint() {
  let inital;
  for (const [breakpoint, size] of Object.entries(breakpoints)) {
    inital = initialSize >= size ? breakpoint : inital;
  }
  return inital;
}

const initialSize = window.innerWidth;
const breakpoints = { large: 1024 };
const initialBreakpoint = getInitialBreakpoint();
