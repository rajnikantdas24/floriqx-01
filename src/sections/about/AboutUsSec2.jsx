import Counter from '../../components/common/Counter';

export default function AboutUsSec2() {
  return (
    <section className="about-us-sec2">
      <div className="carousel-container">
        <div className="about-info2 space">
          <div className="row">
            <div className="col-lg-7">
              <div className="about-content2">
                <div className="sec-title">
                  <span className="sub-title" data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
                    Learn About us
                  </span>
                  <h2 className="title" data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
                    Transforming Ideas into
                    {" "}
                    <span>Intelligent Solutions</span>
                  </h2>
                  <p data-aos="fade-up" data-aos-duration="700" data-aos-delay="400">
                    We specialize in delivering innovative IT solutions empower businesses to thrive in the digital age. From cloud computing and software development cybersecurity and data analytics.
                  </p>
                </div>
                <div className="about-inner-content">
                  <div className="row">
                    <div className="col-lg-5 col-md-5">
                      <div
                        className="about-img2"
                        data-aos="fade-right"
                        data-aos-duration="900"
                        data-aos-delay="400"
                      >
                        <img src="/assets/images/about/about2-1.png" alt="Team working on IT solutions" />
                      </div>
                    </div>
                    <div className="col-lg-7 col-md-7">
                      <div
                        className="about-tabs2"
                        data-aos="fade-left"
                        data-aos-duration="900"
                        data-aos-delay="400"
                      >
                        <ul className="nav nav-tabs" id="myTab" role="tablist">
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link active"
                              id="home-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#home"
                              type="button"
                              role="tab"
                              aria-controls="home"
                              aria-selected="true"
                            >
                              Who We Are?
                            </button>
                          </li>
                          <li className="nav-item" role="presentation">
                            <button
                              className="nav-link"
                              id="profile-tab"
                              data-bs-toggle="tab"
                              data-bs-target="#profile"
                              type="button"
                              role="tab"
                              aria-controls="profile"
                              aria-selected="false"
                            >
                              Our Goals
                            </button>
                          </li>
                        </ul>
                        <div className="shade2" />
                        <div className="tab-content" id="myTabContent">
                          <div
                            className="tab-pane fade show active"
                            id="home"
                            role="tabpanel"
                            aria-labelledby="home-tab"
                          >
                            <div className="about-tab-content2">
                              <p>
                                We are a team of passionate technology experts dedicated to transforming businesses through innovation and intelligent solutions.
                              </p>
                              <ul className="pro-list">
                                <li>
                                  Experienced IT Professionals
                                </li>
                                <li>
                                  Client-Centered Approach
                                </li>
                                <li>
                                  Innovative Mindset & End-to-End Solutions
                                </li>
                              </ul>
                              <a href="#" className="btn-style1">
                                Meet Our Teams
                                {" "}
                                <span>
                                  <img src="/assets/images/icon/arrow.svg" alt="Arrow icon" />
                                </span>
                              </a>
                            </div>
                          </div>
                          <div
                            className="tab-pane fade"
                            id="profile"
                            role="tabpanel"
                            aria-labelledby="profile-tab"
                          >
                            <div className="about-tab-content2">
                              <p>
                                We focus on building innovative IT solutions designed to improve efficiency, reduce costs, and support long-term business success.
                              </p>
                              <ul className="pro-list">
                                <li>
                                  Innovation that lasts
                                </li>
                                <li>
                                  Scalable, secure solutions
                                </li>
                                <li>
                                  Streamlined digital operations
                                </li>
                              </ul>
                              <a href="#" className="btn-style1">
                                Meet Our Teams
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
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-5">
              <div className="about-img2_one">
                <img
                  src="/assets/images/about/about2-2.png"
                  alt="Company office workspace"
                  data-aos="fade-up"
                  data-aos-duration="900"
                  data-aos-delay="400"
                />
                <div className="about-counter">
                  <div className="counter-box">
                    <Counter target={10} />
                    +
                  </div>
                  <p>Years of experience in IT Solutions</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="shade3" />
      </div>
    </section>
  );
}
