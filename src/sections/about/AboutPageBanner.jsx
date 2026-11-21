import Counter from '../../components/common/Counter';

export default function AboutPageBanner() {
  return (
    <section className="main-sec3">
      {/* page-banner */}
      <div className="page-banner">
        <div className="carousel-container">
          <div className="page-banner-info">
            <div className="page-banner-content">
              <h1 className="title" data-aos="fade" data-aos-duration="900" data-aos-delay="300">
                Turn Your Ideas into Reality with Our
                {" "}
                <span>Expertise</span>
              </h1>
            </div>
            <div className="page-banner-img" data-aos="zoom-in" data-aos-duration="900" data-aos-delay="400">
              <img src="/assets/images/hero/aboutus.png" alt="About Us" />
            </div>
          </div>
        </div>
      </div>
      {/* End page-banner */}
      {/* marquee-style1 */}
      <div className="marquee-style1">
        <div className="marquee1">
          <div className="marquee-track">
            <span>Software Development</span>
            {" "}
            <span>AI Integration & Learning</span>
            {" "}
            <span>eCommerce Solutions</span>
            {" "}
            <span>Cloud Computing</span>
            {" "}
            <span>DevOps</span>
            {" "}
            <span>Consulting</span>
            {" "}
            <span>E-Books</span>
          </div>
        </div>
      </div>
      {/* End marquee-style1 */}
    </section>
  );
}
