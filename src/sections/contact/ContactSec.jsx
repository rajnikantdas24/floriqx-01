export default function ContactSec() {
  return (
    <section className="contact-sec space">
      <div className="carousel-container">
        <div className="row">
          <div className="col-lg-5">
            <div className="contact-info" data-aos="fade-right" data-aos-duration="900" data-aos-delay="400">
              <div className="sec-title">
                <span className="sub-title">Get In Touch</span>
                <h2 className="title">
                  Talk to
                  {" "}
                  <span>Our Experts</span>
                </h2>
                <p>
                  Simply reach out via phone, email, or the contact form below, and we’ll get back to you promptly.
                </p>
              </div>
              <div className="contact-content">
                <div className="contact-icon">
                  <img src="/assets/images/icon/location.svg" alt="Main Address Icon" />
                </div>
                <h4 className="title">Main Address</h4>
                <p>20 Cooper Square, New York, NY 10003, USA</p>
              </div>
              <div className="contact-content">
                <div className="contact-icon">
                  <img src="/assets/images/icon/location2.svg" alt="Email Icon" />
                </div>
                <h4 className="title">Drop a Line</h4>
                <span>supportsasico@gmail.com</span>
                {" "}
                <span>www.sasico.net</span>
              </div>
              <div className="contact-content mb-0">
                <div className="contact-icon">
                  <img src="/assets/images/icon/location3.svg" alt="Phone Icon" />
                </div>
                <h4 className="title">Need helps urgent</h4>
                <span>+1 (234) 5678 9900</span>
                {" "}
                <span>+1 (200) 3000 6780</span>
              </div>
            </div>
          </div>
          <div className="col-lg-7">
            <div
              className="contact-form-info"
              data-aos="fade-left"
              data-aos-duration="900"
              data-aos-delay="400"
            >
              <h4 className="title">Have Questions? Reach Out</h4>
              <p>
                Your email address will not be published. Required fields are marked *
              </p>
              <form className="contact-form">
                <div className="form-group">
                  <label>Full name</label>
                  {" "}
                  <input type="text" placeholder="Benjamin Carter" required />
                </div>
                <div className="form-group">
                  <label>Email Address</label>
                  {" "}
                  <input type="email" placeholder="info@example.com" required />
                </div>
                <div className="form-group">
                  <label>Subjects</label>
                  {" "}
                  <select>
                    <option>+1 (234) 56 88 99</option>
                    <option>Web Development</option>
                    <option>UI/UX Design</option>
                    <option>Cyber Security</option>
                  </select>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  {" "}
                  <textarea placeholder="Write message" />
                </div>
                <div className="form-group mb-0">
                  <button type="submit" className="btn-style1">
                    Send Message
                    {" "}
                    <span>
                      <img src="/assets/images/icon/arrow.svg" alt="Send Message Arrow Icon" />
                    </span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
