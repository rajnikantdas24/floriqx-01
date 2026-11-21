export default function SolutionPageBanner() {
  return (
    <section className="main-sec3">
      {/* page-banner */}
      <div className="page-banner">
        <div className="carousel-container">
          <div className="page-banner-info">
            <div className="page-banner-content">
              <span className="sub-title" data-aos="fade" data-aos-duration="900" data-aos-delay="200">
                IT Solutions
              </span>
              <h1 className="title" data-aos="fade" data-aos-duration="900" data-aos-delay="300">
                Pioneering Smart IT for
                {" "}
                <span>Smarter Businesses</span>
              </h1>
            </div>
            <div className="page-banner-img" data-aos="zoom-in" data-aos-duration="900" data-aos-delay="400">
              <img src="/assets/images/hero/hero2-4.png" alt="Smart IT Solutions for Smarter Businesses" />
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
