export default function ChooseUsSec2() {
  return (
    <section className="choose-us-sec2">
      <div className="carousel-container">
        <div className="choose-us-info2 space-bottom">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="choose-us-content2"
                data-aos="fade-right"
                data-aos-duration="900"
                data-aos-delay="400"
              >
                <div className="sec-title">
                  <span className="sub-title">Why Choose Us</span>
                  <h2 className="title">
                    Built on Trust, Driven
                    {" "}
                    <span>by Technology</span>
                  </h2>
                  <p>
                    We combine deep technical expertise with strategic thinking to deliver solutions that truly make a difference. Client-first approach ensures every project is customized to meet goals.
                  </p>
                </div>
                <ul className="choose-list2">
                  <li>
                    <img src="/assets/images/icon/check1-3.svg" alt="Customized Solutions Icon" />
                    Customized Solutions
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-3.svg" alt="Quality Assurance Icon" />
                    Quality Assurance
                  </li>
                  <li>
                    <img src="/assets/images/icon/check1-3.svg" alt="On-Time Delivery Icon" />
                    On-Time Delivery
                  </li>
                </ul>
                <a href="#" className="btn-style1">
                  Get Started With Us
                  {" "}
                  <span>
                    <img src="/assets/images/icon/arrow.svg" alt="Arrow icon" />
                  </span>
                </a>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="choose-img2" data-aos="fade-left" data-aos-duration="900" data-aos-delay="400">
                <img src="/assets/images/event/choose2-1.png" alt="Team Collaboration Illustration" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
