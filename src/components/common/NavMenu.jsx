import { Link, useLocation } from 'react-router-dom';
import { mainMenu, onePageMenu } from '../../data/menus';
import { handleAnchorClick } from '../../utils/scroll';

/**
 * Renders the menu used both in the header (variant="desktop") and in the
 * slide-in menu (variant="mobile").
 *  - normal pages : router links, the current page gets "active" on both the <li> and the <a>
 *  - one-page demo: "#anchor" links, smooth scroll; the "active" class comes from MenuSpy
 */
export default function NavMenu({ variant, onePage }) {
  const { pathname } = useLocation();
  const current = pathname.replace(/\/+$/, '') || '/';

  if (onePage) {
    return (
      <nav className="main-menu11 v2 menu-style11 one_page_nav">
        <ul>
          {onePageMenu.map((item) => (
            <li key={item.href}>
              <a href={item.href} title="" onClick={handleAnchorClick}>
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  }

  const isDesktop = variant === 'desktop';
  return (
    <nav className="main-menu11 menu-style11" aria-label={isDesktop ? 'Main Navigation' : undefined}>
      <ul>
        {mainMenu.map((item) => {
          const active = item.to === current;
          return (
            <li key={item.to} className={active ? 'active' : undefined}>
              <Link to={item.to} className={active ? 'active' : undefined}>
                {item.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
