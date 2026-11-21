import { useState } from 'react';

export default function ContactSec() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const ACCESS_KEY = 'ba2974de-59c8-475f-a10e-9867c798e7d4';

  const validateField = (name, value) => {
    switch (name) {
      case 'name':
        if (!value.trim()) return 'Full name is required';
        if (value.trim().length < 2) return 'Name must be at least 2 characters';
        if (value.trim().length > 100) return 'Name is too long';
        return '';
      case 'email':
        if (!value.trim()) return 'Email is required';
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) return 'Please enter a valid email address';
        return '';
      case 'subject':
        if (!value) return 'Please select a subject';
        return '';
      case 'message':
        if (!value.trim()) return 'Message is required';
        if (value.trim().length < 10) return 'Message must be at least 10 characters';
        if (value.trim().length > 2000) return 'Message is too long (max 2000 characters)';
        return '';
      default:
        return '';
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    // Real-time validation while typing
    if (touched[name]) {
      const error = validateField(name, value);
      setErrors(prev => ({ ...prev, [name]: error }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched(prev => ({ ...prev, [name]: true }));
    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  };

  const validateAll = () => {
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });
    setErrors(newErrors);
    setTouched({ name: true, email: true, subject: true, message: true });
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('');

    if (!validateAll()) return;

    setIsSubmitting(true);

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          name: formData.name.trim(),
          email: formData.email.trim(),
          subject: formData.subject,
          message: formData.message.trim(),
          from_name: 'Floriqx Contact Form'
        })
      });

      const result = await response.json();

      if (result.success) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
        setTouched({});
        setErrors({});
      } else {
        setStatus('error');
      }
    } catch (err) {
      setStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Helper for input style
  const getInputStyle = (field) => ({
    border: errors[field] && touched[field] ? '1.5px solid #e74c3c' : undefined,
    outline: errors[field] && touched[field] ? 'none' : undefined
  });

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
                  <a href="mailto:contact@floriqx.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <img src="/assets/images/icon/location2.svg" alt="Email Icon" />
                  </a>
                </div>
                <h4 className="title">Drop a Line</h4>
                <a href="mailto:contact@floriqx.com" style={{ color: 'inherit', textDecoration: 'none' }}>
                  contact@floriqx.com
                </a>
              </div>
              <div className="contact-content">
                <div className="contact-icon">
                  <a href="tel:+918305525344" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <img src="/assets/images/icon/location3.svg" alt="Phone Icon" />
                  </a>
                </div>
                <h4 className="title">Need helps urgent</h4>
                <a href="tel:+918305525344" style={{ color: 'inherit', textDecoration: 'none' }}>
                  +91-8305525344
                </a>
              </div>
              <div className="contact-content mb-0">
                <div className="contact-icon">
                  <a href="https://wa.me/918305525344" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                    <img src="/assets/images/icon/whatsapp.svg" alt="WhatsApp Icon" />
                  </a>
                </div>
                <h4 className="title">WhatsApp</h4>
                <a href="https://wa.me/918305525344" target="_blank" rel="noopener noreferrer" style={{ color: 'inherit', textDecoration: 'none' }}>
                  Chat on WhatsApp
                </a>
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
              <form className="contact-form" onSubmit={handleSubmit} noValidate>
                <div className="form-group">
                  <label>Full name *</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Benjamin Carter"
                    value={formData.name}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={getInputStyle('name')}
                    maxLength={100}
                  />
                  {errors.name && touched.name && (
                    <span style={{ color: '#e74c3c', fontSize: '13px', display: 'block', marginTop: '4px' }}>
                      {errors.name}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label>Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="info@example.com"
                    value={formData.email}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={getInputStyle('email')}
                  />
                  {errors.email && touched.email && (
                    <span style={{ color: '#e74c3c', fontSize: '13px', display: 'block', marginTop: '4px' }}>
                      {errors.email}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label>Subjects *</label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={getInputStyle('subject')}
                  >
                    <option value="">Select Subject</option>
                    <option value="Web Development">Web Development</option>
                    <option value="UI/UX Design">UI/UX Design</option>
                    <option value="Cyber Security">Cyber Security</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </select>
                  {errors.subject && touched.subject && (
                    <span style={{ color: '#e74c3c', fontSize: '13px', display: 'block', marginTop: '4px' }}>
                      {errors.subject}
                    </span>
                  )}
                </div>
                <div className="form-group">
                  <label>Message *</label>
                  <textarea
                    name="message"
                    placeholder="Write message"
                    value={formData.message}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    style={getInputStyle('message')}
                    maxLength={2000}
                    rows="5"
                  />
                  {errors.message && touched.message && (
                    <span style={{ color: '#e74c3c', fontSize: '13px', display: 'block', marginTop: '4px' }}>
                      {errors.message}
                    </span>
                  )}
                </div>
                <div className="form-group mb-0">
                  <button type="submit" className="btn-style1" disabled={isSubmitting}>
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                    {" "}
                    <span>
                      <img src="/assets/images/icon/arrow.svg" alt="Send Message Arrow Icon" />
                    </span>
                  </button>
                </div>

                {status === 'success' && (
                  <p style={{ color: '#27ae60', marginTop: '15px', fontWeight: '500' }}>
                    Message sent successfully! We'll get back to you soon.
                  </p>
                )}
                {status === 'error' && (
                  <p style={{ color: '#e74c3c', marginTop: '15px', fontWeight: '500' }}>
                    Something went wrong. Please try again or contact us directly.
                  </p>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}