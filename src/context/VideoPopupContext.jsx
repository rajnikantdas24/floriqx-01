import { createContext, useCallback, useContext, useMemo, useState } from 'react';

export const VIDEO_URL = 'https://www.youtube.com/embed/ScMzIvxBSi4?autoplay=1';

const OpenContext = createContext(() => {});
const StateContext = createContext({ isOpen: false, close: () => {} });

export function VideoPopupProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const open = useCallback((e) => {
    if (e && e.preventDefault) e.preventDefault();
    setIsOpen(true);
  }, []);
  const close = useCallback(() => setIsOpen(false), []);
  const state = useMemo(() => ({ isOpen, close }), [isOpen, close]);

  return (
    <OpenContext.Provider value={open}>
      <StateContext.Provider value={state}>{children}</StateContext.Provider>
    </OpenContext.Provider>
  );
}

// Used by any section that has a ".video-btn" – returns the click handler
export function useVideoPopup() {
  return useContext(OpenContext);
}

// Used by the popup itself
export function useVideoPopupState() {
  return useContext(StateContext);
}
