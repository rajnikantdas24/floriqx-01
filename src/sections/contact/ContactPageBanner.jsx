export default function ContactPageBanner() {
  return (
    <section className="main-sec3">
      {/* page-banner */}
      <div className="page-banner">
        <div className="carousel-container">
          <div className="page-banner-info">
            <div className="page-banner-content">
              <span className="sub-title" data-aos="fade" data-aos-duration="900" data-aos-delay="200">
                Contact Us
              </span>
              <h1 className="title" data-aos="fade" data-aos-duration="900" data-aos-delay="300">
                Let’s Connect and Build
                {" "}
                <span>Something Amazing</span>
              </h1>
            </div>
            <div className="page-banner-img" data-aos="zoom-in" data-aos-duration="900" data-aos-delay="400">
              <img src="/assets/images/hero/her2-1.png" alt="Contact Us Banner Image" />
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
