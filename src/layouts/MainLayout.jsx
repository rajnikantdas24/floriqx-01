import { useEffect, useRef, useState } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import AOS from 'aos';
import VideoPopup from '../components/common/VideoPopup';
import DarkModeButton from '../components/common/DarkModeButton';
import Preloader from '../components/common/Preloader';
import MobileMenu from '../components/common/MobileMenu';
import SearchPopup from '../components/common/SearchPopup';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import { useVideoPopupState } from '../context/VideoPopupContext';
import { initHeaderOffset, scrollToLocationHash } from '../utils/scroll';

export default function MainLayout() {
  const { pathname } = useLocation();
  const onePage = pathname === '/index-onepage';

  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const video = useVideoPopupState();
  const isFirstRender = useRef(true);

  // ---- once, when the app starts -------------------------------------------
  useEffect(() => {
    initHeaderOffset();

    // AOS animation (the original started it on window "load")
    const startAOS = () =>
      AOS.init({ duration: 1500, once: true, easing: 'ease-out-cubic', offset: 10 });

    if (document.readyState === 'complete') {
      startAOS();
      scrollToLocationHash();
    } else {
      window.addEventListener('load', startAOS);
      window.addEventListener('load', scrollToLocationHash);
    }
    return () => {
      window.removeEventListener('load', startAOS);
      window.removeEventListener('load', scrollToLocationHash);
    };
  }, []);

  // ---- on every page change (a full page load in the old multi-page site) ------
  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.scrollTo(0, 0);
    AOS.refreshHard(); // pick up the data-aos elements of the new page
  }, [pathname]);

  return (
    <>
      <VideoPopup isOpen={video.isOpen} onClose={video.close} />
      <Preloader />

      <div className="wrapper">
        <MobileMenu open={menuOpen} onClose={() => setMenuOpen(false)} onePage={onePage} />
        <SearchPopup open={searchOpen} onClose={() => setSearchOpen(false)} />
        <Header
          onePage={onePage}
          onOpenSearch={() => setSearchOpen(true)}
          onOpenMenu={() => setMenuOpen(true)}
        />
        <Outlet />
        <Footer />
      </div>
    </>
  );
}
