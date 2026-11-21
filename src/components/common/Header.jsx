import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import NavMenu from './NavMenu';

export default function Header({ onePage, onOpenSearch, onOpenMenu }) {
  // Sticky header: "sticky" class once the page is scrolled more than 50px
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setSticky(window.scrollY > 50);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const openSearch = (e) => {
    e.preventDefault();
    onOpenSearch();
  };

  return (
    <header className={`header-main${sticky ? ' sticky' : ''}`}>
      <div className="carousel-container">
        <div className="header-bottom">
          <div className="row">
            {/* Logo */}
            <div className="col-lg-2 col-md-6 col-sm-6">
              <div className="header-logo">
                <Link to="/" className="logo" title="Home">
                  <img src="/assets/images/logo.svg" alt="Floriqx Technologies" />
                </Link>{' '}
                <Link to="/" title="Home">
                  <img src="/assets/images/dark-logo.svg" alt="Floriqx Technologies Dark Logo" />
                </Link>
              </div>
            </div>
            {/* Navigation Menu */}
            <div className="col-lg-7">
              <NavMenu variant="desktop" onePage={onePage} />
            </div>
            {/* Buttons */}
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div className="header-btn">
                <a href="#" className="search-btn" aria-label="Search" onClick={openSearch}>
                  <img src="/assets/images/icon/search.svg" alt="Search Icon" />
                </a>{' '}
                <a href="/contact" className="sign-btn menu-btn">Free Quote</a>
                {/* Hamburger for mobile */}{' '}
                <button className="hamburger-btn" aria-label="Toggle Menu" onClick={onOpenMenu}>
                  <span /> <span /> <span />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
