export default function AboutTeamSec() {
  return (
    <section className="team-sec space">
      <div className="carousel-container">
        <div className="row">
          <div className="col-lg-6">
            <div className="team-title" data-aos="fade-right" data-aos-duration="900" data-aos-delay="400">
              <div className="sec-title mb-0">
                <span className="sub-title">Learn About Us</span>
                <h2 className="title mb-0">
                  Meet Talented Minds Talented Professionals,
                  {" "}
                  <span>Tailored Solutions</span>
                </h2>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-6">
            <div className="team-card" data-aos="fade-left" data-aos-duration="900" data-aos-delay="400">
              <div className="team-img">
                <img src="/assets/images/team/founder_01.png" alt={"Rajnikant Das, CEO & Founder"} />
                <ul className="social-link">
                  <li>
                    <a href="#" title="">
                      <img src="/assets/images/icon/facebook.svg" alt="Rajnikant on Facebook" />
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <img src="/assets/images/icon/twitter.svg" alt="Rajnikant on Twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" title="">
                      <img src="/assets/images/icon/linkedin.svg" alt="Rajnikant on LinkedIn" />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="team-content">
                <h4 className="name">Rajnikant Das</h4>
                <span className="designation">CEO & Founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
