import Counter from '../../components/common/Counter';

export default function AboutPageBanner() {
  return (
    <section className="main-sec3">
      {/* page-banner */}
      <div className="page-banner">
        <div className="carousel-container">
          <div className="page-banner-info">
            <div className="page-banner-content">
              <span className="sub-title" data-aos="fade" data-aos-duration="900" data-aos-delay="200">
                About Us
              </span>
              <h1 className="title" data-aos="fade" data-aos-duration="900" data-aos-delay="300">
                Building Smarter Solutions for
                {" "}
                <span>Connected World</span>
              </h1>
            </div>
            <div className="page-banner-img" data-aos="zoom-in" data-aos-duration="900" data-aos-delay="400">
              <img src="/assets/images/hero/hero2-5.png" alt="Banner hero image" />
              <div className="exp-box">
                <div className="counter-box">
                  <Counter target={38} />
                  k+
                </div>
                <span className="sub-title">
                  million our happy global clients
                </span>
                {" "}
                <img src="/assets/images/author/exp1-1.png" alt="Experience icon image" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End page-banner */}
      {/* marquee-style1 */}
      <div className="marquee-style1">
        <div className="marquee1">
          <div className="marquee-track">
            <span>IT Solution - Cyber Security</span>
            {" "}
            <span>IT Solution - Cyber Security</span>
            {" "}
            <span>IT Solution - Cyber Security</span>
            {" "}
            <span>IT Solution - Cyber Security</span>
          </div>
        </div>
      </div>
      {/* End marquee-style1 */}
    </section>
  );
}
