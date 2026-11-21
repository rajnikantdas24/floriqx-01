export default function TrialSec() {
  return (
    <section className="trial-sec space-bottom">
      <div className="carousel-container">
        <div className="trial-info">
          <div className="row">
            <div className="col-lg-5">
              <div className="trial-title" data-aos="fade-right" data-aos-duration="900" data-aos-delay="200">
                <div className="sec-title">
                  <span className="sub-title">Why Choose Us</span>
                  <h2 className="title">
                    Start your analytics
                    {" "}
                    <span>journey in minutes</span>
                  </h2>
                </div>
              </div>
            </div>
            <div className="col-lg-7">
              <div className="trial-content" data-aos="fade-left" data-aos-duration="900" data-aos-delay="200">
                <p>
                  Ready to harness the full power of your data? Our platform makes analytics simple actionable.
                </p>
                <ul className="trial-list">
                  <li>
                    <img src="/assets/images/icon/check1-2.svg" alt="Intelligence Reporting Icon" />
                    Intelligence Reporting
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-2.svg" alt="Advanced Data Modeling Icon" />
                    Advanced Data Modeling
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-2.svg" alt="Custom KPI Tracking Icon" />
                    Custom KPI Tracking
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-2.svg" alt="Data-Driven Insights Icon" />
                    Data-Driven Insights
                  </li>
                </ul>
                <a href="#" className="btn-style1">
                  Get 14-days Free Trials
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
    </section>
  );
}
