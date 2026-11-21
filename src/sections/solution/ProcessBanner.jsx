export default function ProcessBanner() {
  return (
    <section className="process-banner space-bottom">
      <div className="carousel-container">
        <div className="process-info">
          <div className="process-title">
            <div className="row mb-0">
              <div className="col-lg-5">
                <div
                  className="sec-title mb-0"
                  data-aos="fade-right"
                  data-aos-duration="900"
                  data-aos-delay="400"
                >
                  <span className="sub-title">Working Process</span>
                  <h2 className="title mb-0">
                    Turning Ideas into
                    {" "}
                    <span>Scalable Solutions</span>
                  </h2>
                </div>
              </div>
              <div className="col-lg-7">
                <p className="paragraph" data-aos="fade-left" data-aos-duration="900" data-aos-delay="400">
                  We follow a clear and strategic working process designed to deliver efficient and result-driven IT solutions.
                </p>
              </div>
            </div>
          </div>
          <div className="shade" />
          <div className="row">
            <div className="col-lg-4 col-md-6">
              <div className="process-block" data-aos="fade-up" data-aos-duration="900" data-aos-delay="300">
                <span>Step 01</span>
                <h4 className="title">Discover & Plan</h4>
                <p>
                  We start by understanding your business goals, challenges, and technical needs.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="process-block" data-aos="fade-up" data-aos-duration="900" data-aos-delay="500">
                <span>Step 02</span>
                <h4 className="title">Design & Develop</h4>
                <p>
                  Our experts craft user-focused designs and develop robust, scalable systems
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6">
              <div className="process-block" data-aos="fade-up" data-aos-duration="900" data-aos-delay="700">
                <span>Step 03</span>
                <h4 className="title">Deliver & Support</h4>
                <p>
                  We ensure smooth deployment, monitor performance, and provide ongoing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
