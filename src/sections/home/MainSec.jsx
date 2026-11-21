import { useVideoPopup } from '../../context/VideoPopupContext';

export default function MainSec() {
  const openVideo = useVideoPopup();
  return (
    <section className="main-sec">
      <div className="hero-style1">
        <div className="carousel-container">
          <div className="hero-info">
            <div className="row">
                <div className="video-box">
                  <img src="/assets/images/hero/floriqx-home-01.png" alt="Company introduction video thumbnail" />
              </div>
            </div>
            <div className="hero-img" data-aos="zoom-in" data-aos-duration="900" data-aos-delay="400">

            </div>
          </div>
        </div>
      </div>
      <div className="marquee-style1">
        <div className="marquee1">
          <div className="marquee-track">
            <span>Software Development</span>
            {" "}
            <span>AI Integration & Learning</span>
            {" "}
            <span>eCommerce Solutions</span>
            {" "}
            <span>Cloud Computing</span>
            {" "}
            <span>DevOps</span>
            {" "}
            <span>Consulting</span>
            {" "}
            <span>E-Books</span>
          </div>
        </div>
      </div>
    </section>
  );
}
