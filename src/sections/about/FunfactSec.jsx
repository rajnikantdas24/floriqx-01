import Counter from '../../components/common/Counter';

export default function FunfactSec() {
  return (
    <section className="funfact-sec">
      <h2 className="main-title">funfact-title</h2>
      <div className="carousel-container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="funfact-block" data-aos="fade" data-aos-duration="900" data-aos-delay="300">
              <span className="sub-title">Project Complete</span>
              <div className="counter-box">
                <Counter target={110} />
                +
              </div>
              <p>We take pride in delivering wide range of IT solutions</p>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-6">
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
          <div className="col-lg-4 col-md-6 col-sm-6">
            <div className="funfact-block" data-aos="fade" data-aos-duration="900" data-aos-delay="500">
              <span className="sub-title">Years Of Experience</span>
              <div className="counter-box">
                <Counter target={15} />
                +
              </div>
              <p>
                We have successfully delivered innovative solutions to clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
