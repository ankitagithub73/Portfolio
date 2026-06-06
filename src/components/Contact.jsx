import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import bgImage from "../assets/bg3.jpg";

function Contact() {
  return (
    <section
      className="contact-section py-5"
      id="contact"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div className="container py-3 contact-container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">
            <span>Contact</span> Me
          </h2>
          <p className="text-white">
            Feel free to reach out for collaboration or opportunities.
          </p>
        </div>

        <div className="row align-items-center">
          {/* Contact Info */}
          <div className="col-lg-5 mb-4">
            <div className="contact-info">
              <div className="info-box">
                <FaPhoneAlt className="contact-icon" />
                <div>
                  <h5>Phone</h5>
                  <p>+91 999 999 9999</p>
                </div>
              </div>

              <div className="info-box">
                <FaEnvelope className="contact-icon" />
                <div>
                  <h5>Email</h5>
                  <p>ankita16702shah@gmail.com</p>
                </div>
              </div>

              <div className="info-box">
                <FaMapMarkerAlt className="contact-icon" />
                <div>
                  <h5>Social Icons</h5>
                  <div className="d-flex gap-2">
                  <a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon text-dark"
                  >
                    <FaGithub />
                  </a>

                  <a
                    href="https://linkedin.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-icon text-primary"
                  >
                    <FaLinkedin />
                  </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="col-lg-7">
            <form className="contact-form">
              <div className="row">
                <div className="col-md-6 mb-3">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your Name"
                  />
                </div>

                <div className="col-md-6 mb-3">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                  />
                </div>
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Subject"
                />
              </div>

              <div className="mb-3">
                <textarea
                  rows="5"
                  className="form-control"
                  placeholder="Your Message"
                ></textarea>
              </div>

              <button className="btn btn-primary px-4 py-2">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
