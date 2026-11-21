import { useLayoutEffect, useState } from 'react';

const STORAGE_KEY = 'darkMode';

function readStored() {
  try {
    return localStorage.getItem(STORAGE_KEY) === 'on';
  } catch (e) {
    return false;
  }
}

// Toggles the "active" class on <body> (that is what the theme CSS listens to)
// and remembers the choice in localStorage.
export default function DarkModeButton() {
  const [dark, setDark] = useState(readStored);

  useLayoutEffect(() => {
    document.body.classList.toggle('active', dark);
  }, [dark]);

  const toggle = (e) => {
    e.preventDefault();
    const next = !dark;
    try {
      localStorage.setItem(STORAGE_KEY, next ? 'on' : 'off');
    } catch (err) {
      /* storage not available */
    }
    setDark(next);
  };

  return (
    <a href="#" id="darkModeBtn" className={`dark-active${dark ? ' active' : ''}`} onClick={toggle}>
      <img src="/assets/images/icon/moon.png" alt="Moon Icon" className="moon" />
      <img src="/assets/images/icon/sun.png" alt="Sun Icon" className="sun" />
    </a>
  );
}
