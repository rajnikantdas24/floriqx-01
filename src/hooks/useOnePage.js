import { useEffect } from 'react';

/**
 * Everything that only the one-page demo (/index-onepage) needs:
 *  - <body class="onepage" id="Home">  (the "#Home" anchor points at the body)
 *  - MenuSpy scroll-spy on every ".one_page_nav" menu (desktop + mobile)
 *  - click sync between the desktop and mobile menus
 *  - first menu item active when the page loads without a hash
 * Ported 1:1 from the original main.js (MenuSpy is loaded as a global script).
 */
export default function useOnePage() {
  useEffect(() => {
    document.body.classList.add('onepage');
    document.body.id = 'Home';

    const cleanups = [];
    const MenuSpy = window.MenuSpy;

    if (!MenuSpy) {
      console.error('MenuSpy is not loaded!');
    } else {
      const menus = document.querySelectorAll('.one_page_nav');
      const spies = Array.from(menus).map(
        (menu) =>
          new MenuSpy(menu, {
            menuItemSelector: 'a[href^="#"]',
            activeClass: 'active',
            threshold: 150,
            enableLocationHash: false,
          })
      );
      cleanups.push(() => spies.forEach((s) => s && s.destroy && s.destroy()));

      // syncMenus
      const onClick = (e) => {
        const link = e.target.closest('.one_page_nav a[href^="#"]');
        if (!link) return;
        const target = link.getAttribute('href');
        document.querySelectorAll('.one_page_nav a[href^="#"]').forEach((item) => {
          item.classList.remove('active');
          if (item.getAttribute('href') === target) item.classList.add('active');
        });
      };
      document.addEventListener('click', onClick);
      cleanups.push(() => document.removeEventListener('click', onClick));

      // setInitialActive
      const setInitialActive = () => {
        if (window.location.hash) return;
        document.querySelectorAll('.one_page_nav li').forEach((li) => li.classList.remove('active'));
        document
          .querySelectorAll('.one_page_nav li:first-child')
          .forEach((li) => li.classList.add('active'));
      };
      if (document.readyState === 'complete') {
        setInitialActive();
      } else {
        window.addEventListener('load', setInitialActive);
        cleanups.push(() => window.removeEventListener('load', setInitialActive));
      }
    }

    return () => {
      cleanups.forEach((fn) => fn());
      document.body.classList.remove('onepage');
      document.body.removeAttribute('id');
    };
  }, []);
}
