import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="container">

        <div className="text-center mb-5">
          <p className="section-title">CONTACT</p>
          <h2>Let's Build Something Amazing Together</h2>

          <p className="section-subtitle">
            I'm always excited to discuss new opportunities, collaborate on
            innovative projects, or simply connect with fellow developers.
          </p>
        </div>

        <div className="row g-5">

          {/* Left Side */}

          <div className="col-lg-5">

            <div className="contact-info">

              <h3>Get In Touch</h3>

              <p>
                Feel free to reach out through any of the following platforms.
                I'll get back to you as soon as possible.
              </p>

              <div className="info-box">
                <span>📞</span>
                <div>
                  <h5>Phone</h5>
                  <a href="tel:+919140613889">
                    +91 91406 13889
                  </a>
                </div>
              </div>

              <div className="info-box">
                <span>📧</span>
                <div>
                  <h5>Email</h5>
                  <a href="mailto:kumaryadavpushpendra70@gmail.com">
                    kumaryadavpushpendra70@gmail.com
                  </a>
                </div>
              </div>

        

              <div className="info-box">
                <span>💻</span>
                <div>
                  <h5>GitHub</h5>
                  <a
                    href="https://github.com/kumaryadavpushpendra70-cell"
                    target="_blank"
                    rel="noreferrer"
                  >
                    github.com/kumaryadavpushpendra70-cell
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Side */}

          <div className="col-lg-7">

            <div className="contact-form">

              <h3>Send Me a Message</h3>

              <form>

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

                <input
                  type="text"
                  className="form-control mb-3"
                  placeholder="Subject"
                />

                <textarea
                  rows="6"
                  className="form-control mb-4"
                  placeholder="Your Message"
                ></textarea>

                <button className="btn btn-primary">
                  Send Message
                </button>

              </form>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;