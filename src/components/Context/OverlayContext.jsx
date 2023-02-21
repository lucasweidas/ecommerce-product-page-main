import { createContext, useContext, useState } from 'react';

const OverlayContext = createContext(null);

export default function OverlayProvider({ children }) {
  const [overlay, setOverlay] = useState(null);

  function handleOverlayChange(nextOverlay) {
    const html = document.documentElement;
    if (nextOverlay === 'nav-guide' || nextOverlay === 'lightbox') {
      html.classList.add('no-scroll');
    } else {
      html.classList.remove('no-scroll');
    }
    setOverlay(nextOverlay);
  }

  const providerValue = {
    overlay,
    onOverlayChange: handleOverlayChange,
  };

  return <OverlayContext.Provider value={providerValue}>{children}</OverlayContext.Provider>;
}

export function useOverlay() {
  return useContext(OverlayContext);
}
