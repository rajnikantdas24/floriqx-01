import SwiperBox from '../../components/common/SwiperBox';

export default function TestimonialSec({ className = "testimonial-sec space" }) {
  return (
    <section className={className}>
      <div className="carousel-container">
        <div className="sec-title" data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
          <span className="sub-title">Our Testimonials</span>
          <h2 className="title mb-0">
            1000+
            {" "}
            <span>Customer Say</span>
            {" "}
            Us
          </h2>
        </div>
        <div className="testi-info" data-aos="zoom-in" data-aos-duration="900" data-aos-delay="400">
          <SwiperBox swiperName="testi" className="swiper testi">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="testi-card">
                  <img
                    src="/assets/images/author/testi1-1.png"
                    alt="James Anderson Operations Manager testimonial photo"
                  />
                  <div className="testi-content">
                    <p>
                      "This platform completely transformed how we manage our workflows. It’s intuitive, reliable, and has saved our team countless hours every week!"
                    </p>
                    <div className="testi-auther">
                      <h4 className="name">James Anderson,</h4>
                      <span className="designation">
                        Operations Manager
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testi-card">
                  <img
                    src="/assets/images/author/testi1-2.webp"
                    alt="Michael Harris Web Developer testimonial photo"
                  />
                  <div className="testi-content">
                    <p>
                      “Using this tool has streamlined our entire workflow. It’s fast and has drastically reduced the time we spend on repetitive tasks.”
                    </p>
                    <div className="testi-auther">
                      <h4 className="name">Michael Harris,</h4>
                      <span className="designation">
                        Web Developer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-slide">
                <div className="testi-card">
                  <img
                    src="/assets/images/author/testi1-3.webp"
                    alt="Jenifer Trump Tech Engineer testimonial photo"
                  />
                  <div className="testi-content">
                    <p>
                      “Our team became more organized and efficient from day one. The platform is smart, easy to use, and truly elevates how we work.”
                    </p>
                    <div className="testi-auther">
                      <h4 className="name">Jenifer Trump,</h4>
                      <span className="designation">
                        Tech Engineer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Pagination */}
            <div className="swiper-pagination project-pagination2" />
          </SwiperBox>
        </div>
      </div>
    </section>
  );
}
