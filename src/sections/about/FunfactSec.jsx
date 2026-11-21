import Counter from '../../components/common/Counter';

export default function FunfactSec() {
  return (
    <section className="funfact-sec">
      <h2 className="main-title">funfact-title</h2>
      <div className="carousel-container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="funfact-block" data-aos="fade" data-aos-duration="900" data-aos-delay="300">
              <span className="sub-title">Project Complete</span>
              <div className="counter-box">
                <Counter target={35} />
                k+
              </div>
              <p>We take pride in delivering wide range of IT solutions</p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="funfact-block" data-aos="fade" data-aos-duration="900" data-aos-delay="400">
              <span className="sub-title">Clients Satisfactions</span>
              <div className="counter-box">
                <Counter target={99} />
                %
              </div>
              <p>
                We strive to exceed expectation delivering reliable, innovative.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="funfact-block" data-aos="fade" data-aos-duration="900" data-aos-delay="500">
              <span className="sub-title">Years Of Experience</span>
              <div className="counter-box">
                <Counter target={10} />
                +
              </div>
              <p>
                We have successfully delivered innovative solutions to clients.
              </p>
            </div>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-6">
            <div className="funfact-block" data-aos="fade" data-aos-duration="900" data-aos-delay="600">
              <span className="sub-title">Revenue Growth</span>
              <div className="counter-box">
                <Counter target={13} />
                m
              </div>
              <p>Average revenue growth for per successful clients</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
