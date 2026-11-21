import { useEffect, useRef, useState } from 'react';

// Same behaviour as the original: fade out on window load, after 2s, or at the latest after 5s.
export default function Preloader() {
  const [phase, setPhase] = useState('visible'); // visible -> fading -> gone
  const hidden = useRef(false);

  useEffect(() => {
    const timers = [];
    const hide = () => {
      if (hidden.current) return;
      hidden.current = true;
      setPhase('fading');
      timers.push(setTimeout(() => setPhase('gone'), 600));
    };

    timers.push(setTimeout(hide, 2000));
    timers.push(setTimeout(hide, 5000));
    if (document.readyState === 'complete') {
      hide();
    } else {
      window.addEventListener('load', hide);
    }
    return () => {
      hidden.current = false;
      timers.forEach(clearTimeout);
      window.removeEventListener('load', hide);
    };
  }, []);

  const style =
    phase === 'visible'
      ? undefined
      : { transition: 'opacity 0.5s ease', opacity: 0, ...(phase === 'gone' ? { display: 'none' } : {}) };

  return (
    <div id="preloader" style={style}>
      <div className="loader">
        <img src="/assets/images/logo.svg" alt="Website Logo" className="light" />
        <img src="/assets/images/dark-logo.svg" alt="Website Logo" className="dark" />
      </div>
    </div>
  );
}
