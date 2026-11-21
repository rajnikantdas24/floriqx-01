import SwiperBox from '../../components/common/SwiperBox';

export default function BrandSec({ className = "brand-sec space" }) {
  return (
    <section className={className}>
      <h2>brand sec</h2>
      <div className="container-fluid">
        <div className="brand-title" data-aos="fade-down" data-aos-duration="900">
          <span>Trusted by over 1.7 million companies worldwide</span>
        </div>
        <SwiperBox swiperName="brand" className="swiper brand" data-aos="fade-up" data-aos-duration="900">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="brand-img">
                <a href="#" title="">
                  <img src="/assets/images/brand/brand1.svg" alt="Trusted partner company brand logo" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand-img">
                <a href="#" title="">
                  <img src="/assets/images/brand/brand2.svg" alt="Global business client brand logo" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand-img">
                <a href="#" title="">
                  <img src="/assets/images/brand/brand3.svg" alt="Enterprise technology brand logo" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand-img">
                <a href="#" title="">
                  <img src="/assets/images/brand/brand4.svg" alt="International IT services brand logo" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand-img">
                <a href="#" title="">
                  <img src="/assets/images/brand/brand5.svg" alt="Professional solutions company logo" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand-img">
                <a href="#" title="">
                  <img src="/assets/images/brand/brand5.svg" alt="Professional solutions company logo" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand-img">
                <a href="#" title="">
                  <img src="/assets/images/brand/brand1.svg" alt="Trusted partner company brand logo" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand-img">
                <a href="#" title="">
                  <img src="/assets/images/brand/brand2.svg" alt="Global business client brand logo" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand-img">
                <a href="#" title="">
                  <img src="/assets/images/brand/brand3.svg" alt="Enterprise technology brand logo" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand-img">
                <a href="#" title="">
                  <img src="/assets/images/brand/brand4.svg" alt="International IT services brand logo" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand-img">
                <a href="#" title="">
                  <img src="/assets/images/brand/brand5.svg" alt="Professional solutions company logo" />
                </a>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="brand-img">
                <a href="#" title="">
                  <img src="/assets/images/brand/brand5.svg" alt="Professional solutions company logo" />
                </a>
              </div>
            </div>
          </div>
        </SwiperBox>
      </div>
    </section>
  );
}
