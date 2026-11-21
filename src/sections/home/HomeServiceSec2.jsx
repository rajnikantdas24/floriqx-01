export default function HomeServiceSec2({ className = "service-sec2 space-bottom", id }) {
  return (
    <section className={className} id={id}>
      <div className="carousel-container">
        <div className="sec-title" data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
          <span className="sub-title">Latest Services</span>
          <h2 className="title">
            Innovative Solutions for
            {" "}
            <span>Ambitious Startups</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6">
            <div className="ser-info2" data-aos="fade-right" data-aos-duration="900" data-aos-delay="400">
              <div className="ser-block2">
                <div className="ser-icon2">
                  <img src="/assets/images/icon/ser2-1.svg" alt="Custom AI software development service icon" />
                </div>
                <div className="ser-block-content">
                  <h4 className="title">
                    Custom AI Software Development
                  </h4>
                  <p>
                    Develop tailored AI-driven software solutions for businesses, including predictive analytics tools.
                  </p>
                  <a href="#" className="btn-style1">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="ser-info2" data-aos="fade-up" data-aos-duration="900" data-aos-delay="500">
              <div className="ser-block2">
                <div className="ser-icon2">
                  <img
                    src="/assets/images/icon/ser2-2.svg"
                    alt="Machine learning and data science service icon"
                  />
                </div>
                <div className="ser-block-content">
                  <h4 className="title">
                    Machine Learning & Data Science
                  </h4>
                  <p>
                    Implement machine learning models, data analysis, and predictive insights to help businesses make smarter.
                  </p>
                  <a href="#" className="btn-style1">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="ser-info2" data-aos="fade-left" data-aos-duration="900" data-aos-delay="600">
              <div className="ser-block2">
                <div className="ser-icon2">
                  <img src="/assets/images/icon/ser2-3.svg" alt="Robotic process automation service icon" />
                </div>
                <div className="ser-block-content">
                  <h4 className="title">
                    Robotic Process Automation (RPA)
                  </h4>
                  <p>
                    Automate repetitive business processes to reduce operational costs and increase efficiency.
                  </p>
                  <a href="#" className="btn-style1">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="ser-info2" data-aos="fade-right" data-aos-duration="900" data-aos-delay="400">
              <div className="ser-block2">
                <div className="ser-icon2">
                  <img
                    src="/assets/images/icon/ser2-4.svg"
                    alt="Natural language processing solutions service icon"
                  />
                </div>
                <div className="ser-block-content">
                  <h4 className="title">
                    Natural Language Processing (NLP) Solutions
                  </h4>
                  <p>
                    Develop chatbots, virtual assistants, and text analysis systems using advanced NLP technologies.
                  </p>
                  <a href="#" className="btn-style1">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="ser-info2" data-aos="fade-up" data-aos-duration="900" data-aos-delay="500">
              <div className="ser-block2">
                <div className="ser-icon2">
                  <img src="/assets/images/icon/ser2-5.svg" alt="AI driven cybersecurity service icon" />
                </div>
                <div className="ser-block-content">
                  <h4 className="title">
                    AI-Driven
                    <br />
                    Cybersecurity
                  </h4>
                  <p>
                    Protect businesses with intelligent threat detection, anomaly detection, and predictive security systems.
                  </p>
                  <a href="#" className="btn-style1">Read More</a>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="ser-info2" data-aos="fade-left" data-aos-duration="900" data-aos-delay="600">
              <div className="ser-block2">
                <div className="ser-icon2">
                  <img
                    src="/assets/images/icon/ser2-6.svg"
                    alt="Big data analytics and IT consulting service icon"
                  />
                </div>
                <div className="ser-block-content">
                  <h4 className="title">
                    Big Data Analytics & IT Consulting
                  </h4>
                  <p>
                    Provide data aggregation, processing, and insights to support strategic business decisions.
                  </p>
                  <a href="#" className="btn-style1">Read More</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
