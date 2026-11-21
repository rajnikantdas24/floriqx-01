export default function MainSec2({ id }) {
  return (
    <section className="main-sec2 space-top" id={id}>
      {/* pricing-sec */}
      <div className="pricing-sec">
        <div className="carousel-container">
          <div className="sec-title">
            <span className="sub-title" data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
              Pricing Package
            </span>
            <h2 className="title" data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
              Simple, Transparent Pricing
            </h2>
            <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">
              Our pricing packages are designed to offer flexibility, transparency, and value for every business size.
            </p>
          </div>
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="price-card" data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
                <span className="offer">15% OFF</span>
                <h4 className="price">
                  $18
                  <span>/month</span>
                </h4>
                <h5 className="title">Basic Package</h5>
                <p>Simple solution & powerful</p>
                <ul className="price-list">
                  <li>
                    <img src="/assets/images/icon/check1-1.svg" alt="Check icon" />
                    Fully responsive design
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-1.svg" alt="Check icon" />
                    Basic speed optimization
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-1.svg" alt="Check icon" />
                    Standard security setup
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-1.svg" alt="Check icon" />
                    Contact form integration
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-1.svg" alt="Check icon" />
                    Support 5 days/week
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-1.svg" alt="Check icon" />
                    Basic analytics setup
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-1.svg" alt="Check icon" />
                    Weekly backups
                  </li>
                </ul>
                <a href="#" className="btn-style1">
                  Choose Package
                  {" "}
                  <span>
                    <img src="/assets/images/icon/arrow.svg" alt="Arrow icon" />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="price-card blue" data-aos="fade-up" data-aos-duration="900" data-aos-delay="500">
                <span className="offer">25% OFF</span>
                <h4 className="price">
                  $86
                  <span>/month</span>
                </h4>
                <h5 className="title">Professional Plan</h5>
                <p>Growing businesses looking to scale</p>
                <ul className="price-list">
                  <li>
                    <img src="/assets/images/icon/check1-1.svg" alt="Check icon" />
                    Custom UI/UX aligned with brand
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-1.svg" alt="Check icon" />
                    Full on-page SEO optimization
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-1.svg" alt="Check icon" />
                    Enhanced performance
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-1.svg" alt="Check icon" />
                    Advanced security
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-1.svg" alt="Check icon" />
                    Dedicated landing pages
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-1.svg" alt="Check icon" />
                    Daily backups
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-1.svg" alt="Check icon" />
                    Priority 24/7 support
                  </li>
                </ul>
                <a href="#" className="btn-style1">
                  Choose Package
                  {" "}
                  <span>
                    <img src="/assets/images/icon/arrow.svg" alt="Arrow icon" />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="price-card" data-aos="fade-up" data-aos-duration="900" data-aos-delay="600">
                <span className="offer">20% OFF</span>
                <h4 className="price">
                  $189
                  <span>/month</span>
                </h4>
                <h5 className="title">Enterprise Plan</h5>
                <p>Large enterprises & complex AI-driven</p>
                <ul className="price-list">
                  <li>
                    <img src="/assets/images/icon/check1-1.svg" alt="Check icon" />
                    Fully custom design & development
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-1.svg" alt="Check icon" />
                    Web-app or internal portal solutions
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-1.svg" alt="Check icon" />
                    ERP / CRM / API integrations
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-1.svg" alt="Check icon" />
                    Enterprise-grade security
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-1.svg" alt="Check icon" />
                    Dedicated cloud hosting
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-1.svg" alt="Check icon" />
                    Flexible SLA agreements
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-1.svg" alt="Check icon" />
                    Dedicated engineering team
                  </li>
                </ul>
                <a href="#" className="btn-style1">
                  Choose Package
                  {" "}
                  <span>
                    <img src="/assets/images/icon/arrow.svg" alt="Arrow icon" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End pricing-sec */}
      {/* marquee-style1 */}
      <div className="marquee-style2">
        <div className="marquee2">
          <div className="marquee-track2">
            <span>Simple Pricing Package</span>
            {" "}
            <span>Simple Pricing Package</span>
            {" "}
            <span>Simple Pricing Package</span>
            {" "}
            <span>Simple Pricing Package</span>
          </div>
        </div>
      </div>
      {/* End marquee-style1 */}
    </section>
  );
}
