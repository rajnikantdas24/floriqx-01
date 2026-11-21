export default function Footer() {
  // Scroll To Top button
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  // Dynamic year (return se pehle, function ke andar)
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-style1">
      <button id="scrollTopBtn" onClick={scrollToTop}>
        <img src="/assets/images/icon/arrow4.svg" alt="Scroll to top arrow icon" />
      </button>
      <div className="carousel-container">
        <div className="footer-info">
          <div className="footer-content space">
            <div className="sec-title mb-0">
              <span className="sub-title">Let’s Work Together</span>
              <h2 className="title">
                Turn Your Ideas into Reality
                <br />
                <span>with Our Expertise</span>
              </h2>
              <p>
                Let’s work together to bring your ideas to life and create solutions that make an impact.
              </p>
            </div>
            <div className="footer-btn">
              <a href="/contact" className="btn-style1">
                Start Your Project{" "}
                <span>
                  <img src="/assets/images/icon/arrow.svg" alt="Arrow icon" />
                </span>
              </a>
            </div>
          </div>
          <div className="shade" />
          <div className="footer-bottom">
            <ul className="footer-links">
              <li><a href="/about">About</a></li>
              <li><a href="/solution">Solutions</a></li>
              <li><a href="/contact">Contact</a></li>
              <li><a href="/ebooks">eBook</a></li>
            </ul>
            <div className="copyright-area">
              <p>© {currentYear} FloriQX Technologies. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}