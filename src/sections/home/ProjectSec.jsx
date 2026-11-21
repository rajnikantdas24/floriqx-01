import SwiperBox from '../../components/common/SwiperBox';

export default function ProjectSec({ className = "project-sec space-bottom", id }) {
  return (
    <section className={className} id={id}>
      <div className="carousel-container">
        <div className="project-title">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="sec-title mb-0"
                data-aos="fade-right"
                data-aos-duration="900"
                data-aos-delay="400"
              >
                <span className="sub-title">Recent Projects</span>
                <h2 className="title mb-0">
                  Showcasing Our Recent Cutting-
                  <span>Edge Projects</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="paragrap" data-aos="fade-left" data-aos-duration="900" data-aos-delay="400">
                Our latest projects showcase the innovative solutions and cutting-edge technologies deliver clients.
              </p>
            </div>
          </div>
        </div>
        <SwiperBox swiperName="project" className="swiper project">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="project-card">
                <div className="project-content">
                  <div className="project-tags">
                    <a href="#" title="" className="tag">
                      IT Solutions
                    </a>
                    {" "}
                    <a href="#" title="" className="year m-0">
                      Security
                    </a>
                  </div>
                  <h3 className="title">
                    <a href="#" title="">
                      AI-Powered Customer Support Chatbot
                    </a>
                  </h3>
                  <p>
                    Enhance your customer experience with our AI-powered support chatbot. Automating customer service operations with intelligent chatbots enhance.
                  </p>
                  <a href="#" className="btn-style1">View projects</a>
                </div>
                <div className="project-img">
                  <img
                    src="/assets/images/event/project1-1.png"
                    alt="AI powered customer support chatbot project preview"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="project-card">
                <div className="project-content">
                  <div className="project-tags">
                    <a href="#" title="" className="tag">
                      IT Solutions
                    </a>
                    {" "}
                    <a href="#" title="" className="year m-0">
                      Security
                    </a>
                  </div>
                  <h3 className="title">
                    <a href="#" title="">
                      Cybersecurity & Data Protection
                    </a>
                  </h3>
                  <p>
                    Seamlessly transition enterprise systems to the cloud with our comprehensive. Implementing advance security protocols to safeguard digital assets and ensure.
                  </p>
                  <a href="#" className="btn-style1">View projects</a>
                </div>
                <div className="project-img">
                  <img
                    src="/assets/images/event/project1-2.png"
                    alt="Cybersecurity and data protection project illustration"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="project-card">
                <div className="project-content">
                  <div className="project-tags">
                    <a href="#" title="" className="tag">
                      IT Solutions
                    </a>
                    {" "}
                    <a href="#" title="" className="year m-0">
                      Security
                    </a>
                  </div>
                  <h3 className="title">
                    <a href="#" title="">
                      Data Analytics & Business Intelligence
                    </a>
                  </h3>
                  <p>
                    Turning raw data into actionable insights to support strategic decision-making. Implementing advance security protocols to safeguard digital assets and ensure.
                  </p>
                  <a href="#" className="btn-style1">View projects</a>
                </div>
                <div className="project-img">
                  <img
                    src="/assets/images/event/project1-1.png"
                    alt="Data analytics and business intelligence project dashboard preview"
                  />
                </div>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="project-card">
                <div className="project-content">
                  <div className="project-tags">
                    <a href="#" title="" className="tag">
                      IT Solutions
                    </a>
                    {" "}
                    <a href="#" title="" className="year m-0">
                      Security
                    </a>
                  </div>
                  <h3 className="title">
                    <a href="#" title="">
                      Cybersecurity & Data Protection
                    </a>
                  </h3>
                  <p>
                    Enabling remote teams work efficiently through secure, cloud-integrated. Implementing advance security protocols to safeguard digital assets and ensure.
                  </p>
                  <a href="#" className="btn-style1">View projects</a>
                </div>
                <div className="project-img">
                  <img
                    src="/assets/images/event/project1-2.png"
                    alt="Secure cloud based cybersecurity project preview"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="swiper-pagination project-pagination" />
        </SwiperBox>
      </div>
    </section>
  );
}
