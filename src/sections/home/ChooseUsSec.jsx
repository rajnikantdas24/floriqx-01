export default function ChooseUsSec({ className = "choose-us-sec space" }) {
  return (
    <section className={className}>
      <div className="carousel-container">
        <div className="sec-title" data-aos="fade-up" data-aos-duration="900" data-aos-delay="400">
          <span className="sub-title">Why Choose Us</span>
          <h2 className="title">
            Combining AI and Human Insight for
            {" "}
            <span>Maximum Impact</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <div
              className="choose-block v1"
              data-aos="fade-right"
              data-aos-duration="900"
              data-aos-delay="400"
            >
              <div className="choose-img">
                <img
                  src="/assets/images/event/choose1-1.png"
                  alt="Cost efficient development solutions illustration"
                  className="light"
                />
                {" "}
                <img
                  src="/assets/images/event/choose-dark.png"
                  alt="Cost efficient development solutions dark mode illustration"
                  className="dark"
                />
              </div>
              <div className="choose-content">
                <h4 className="title">
                  Cost-Efficient Development Solutions
                </h4>
                <p>
                  Lower Development Costs help businesses achieve high-quality results without overspending.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="choose-block" data-aos="fade-left" data-aos-duration="900" data-aos-delay="400">
              <div className="choose-img">
                <img
                  src="/assets/images/event/choose1-2.png"
                  alt="AI and human expert insights collaboration illustration"
                />
              </div>
              <div className="choose-content">
                <h4 className="title">AI & Expert Insights Together</h4>
                <p>
                  Expert + AI Combo brings together the precision of artificial intelligence.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="choose-block" data-aos="fade-right" data-aos-duration="900" data-aos-delay="400">
              <div className="choose-img">
                <img
                  src="/assets/images/event/choose1-3.png"
                  alt="Faster project delivery illustration"
                  className="light"
                />
                {" "}
                <img
                  src="/assets/images/event/choose-dark1-2.png"
                  alt="Faster project delivery dark mode illustration"
                  className="dark"
                />
              </div>
              <div className="choose-content">
                <h4 className="title">Faster Deliver Results 3X</h4>
                <p>
                  3x Faster Delivery empowers teams to complete projects at triple.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-8">
            <div className="choose-block v1" data-aos="fade-left" data-aos-duration="900" data-aos-delay="400">
              <div className="choose-img">
                <img
                  src="/assets/images/event/choose1-4.png"
                  alt="Scalable and seamless growth architecture illustration"
                  className="light"
                />
                {" "}
                <img
                  src="/assets/images/event/choose-dark1-3.png"
                  alt="Scalable architecture dark mode illustration"
                  className="dark"
                />
              </div>
              <div className="choose-content">
                <h4 className="title">
                  Seamless Growth with Scalable Design
                </h4>
                <p>
                  LScalable Architecture ensures your systems and applications can grow seamlessly as your business expands.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
