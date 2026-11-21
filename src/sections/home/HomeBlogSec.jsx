export default function HomeBlogSec({ className = "blog-sec space-bottom", id }) {
  return (
    <section className={className} id={id}>
      <div className="carousel-container">
        <div className="blog-title">
          <div className="row">
            <div className="col-lg-6">
              <div
                className="sec-title mb-0"
                data-aos="fade-right"
                data-aos-duration="900"
                data-aos-delay="400"
              >
                <span className="sub-title">News & Blog</span>
                <h2 className="title mb-0">
                  Read Our
                  {" "}
                  <span>Latest Insights</span>
                </h2>
              </div>
            </div>
            <div className="col-lg-6">
              <p className="paragrap" data-aos="fade-left" data-aos-duration="900" data-aos-delay="400">
                Our latest news section keeps updated with the most recent insights.
              </p>
            </div>
          </div>
        </div>
        <div className="row" data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
          <div className="col-lg-4 col-md-6">
            <div className="blog-card">
              <div className="blog-img">
                <img
                  src="/assets/images/blog/blog1-1.png"
                  alt="Comprehensive Cybersecurity Protection blog image"
                />
              </div>
              <div className="blog-content">
                <ul className="blog-meta">
                  <li>
                    <a href="#" title="" className="active">
                      Mobile
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">Admin</a>
                  </li>
                  <li>
                    <a href="#" title="">July 24, 2025</a>
                  </li>
                </ul>
                <h4 className="title">
                  <a href="#" title="">
                    Comprehensive Cybersecurity Protection for All Industries
                  </a>
                </h4>
                <p>
                  Safeguard your data with multi-layer security systems and continuous threat monitoring.
                </p>
                <a href="#" className="btn-style1">
                  Read More
                  {" "}
                  <span>
                    <img src="/assets/images/icon/arrow.svg" alt="Arrow icon" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-card">
              <div className="blog-img">
                <img src="/assets/images/blog/blog1-2.png" alt="Cloud Migration Steps blog image" />
              </div>
              <div className="blog-content">
                <ul className="blog-meta">
                  <li>
                    <a href="#" title="" className="active">SasS</a>
                  </li>
                  <li>
                    <a href="#" title="">Admin</a>
                  </li>
                  <li>
                    <a href="#" title="">July 23, 2025</a>
                  </li>
                </ul>
                <h4 className="title">
                  <a href="#" title="">
                    Cloud Migration Steps Benefits and Challenges
                  </a>
                </h4>
                <p>
                  We provide valuable content that helps you make informed decisions.
                </p>
                <a href="#" className="btn-style1">
                  Read More
                  {" "}
                  <span>
                    <img src="/assets/images/icon/arrow.svg" alt="Arrow icon" />
                  </span>
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6">
            <div className="blog-card">
              <div className="blog-img">
                <img
                  src="/assets/images/blog/blog1-3.png"
                  alt="Infrastructure Management Best Practices blog image"
                />
              </div>
              <div className="blog-content">
                <ul className="blog-meta">
                  <li>
                    <a href="#" title="" className="active">
                      Dashboard
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">Admin</a>
                  </li>
                  <li>
                    <a href="#" title="">July 22, 2025</a>
                  </li>
                </ul>
                <h4 className="title">
                  <a href="#" title="">
                    Infrastructure Management Best Practices for 2025
                  </a>
                </h4>
                <p>
                  Technologies, optimizing IT operations, or seeking strategies to boost efficiency.
                </p>
                <a href="#" className="btn-style1">
                  Read More
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
