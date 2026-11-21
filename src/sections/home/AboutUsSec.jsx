export default function AboutUsSec({ id }) {
  return (
    <section className="about-us-sec space" id={id}>
      <div className="carousel-container">
        <div className="about-info">
          <div className="row">
            <div className="col-lg-7">
              <div className="about-content">
                <div className="sec-title mb-0">
                  <h2 className="title" data-aos="fade-up" data-aos-duration="900" data-aos-delay="200">
                    We deliver end-to-end technology solutions that help businesses innovate and grow.
                  </h2>
                  <div className="about-btn" data-aos="fade-up" data-aos-duration="700" data-aos-delay="200">
                    <a href="about" className="btn-style1">
                      Learn More Us
                      {" "}
                      <span>
                        <img src="/assets/images/icon/arrow.svg" alt="Arrow icon for learn more button" />
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-img" data-aos="fade-left" data-aos-duration="900" data-aos-delay="300">
                <img
                  src="/assets/images/about/about1-1.png"
                  alt="About our company and technology solutions illustration"
                />
              </div>
            </div>
          </div>
          <div className="shade" />
        </div>
      </div>
    </section>
  );
}
