

function About() {
  return (
    <section id="about" className="about-section">
      <div className="container">

        <div className="row align-items-center">

          {/* Left Side */}
          <div className="col-lg-6">

            <p className="section-title">ABOUT ME</p>

            <h2>
              Passionate <span>Full Stack Developer</span>
            </h2>

            <p className="about-text">
              Hello! I'm <strong>Pushpendra Kumar Yadav</strong>, a B.Tech
              Information Technology student at Shri Ramswaroop Memorial College
              of Engineering. I enjoy transforming ideas into responsive,
              user-friendly web applications that combine creativity with
              functionality.
            </p>

            <p className="about-text">
              Through my Full Stack Development internship, I gained practical experience
              in frontend development, backend integration, responsive design,
              Python programming, APIs, and database fundamentals.
            </p>

            <p className="about-text">
              I am always eager to learn new technologies and build projects
              that solve real-world problems while continuously improving my
              development skills.
            </p>

          </div>

          {/* Right Side */}
          <div className="col-lg-6">

            <div className="about-card">

              <div className="info">
                <h5>Name</h5>
                <p>Pushpendra Kumar Yadav</p>
              </div>

              <div className="info">
                <h5>Education</h5>
                <p>B.Tech (Information Technology)</p>
              </div>

              <div className="info">
                <h5>College</h5>
                <p>Shri Ramswaroop Memorial College of Engineering</p>
              </div>

              <div className="info">
                <h5>Experience</h5>
                <p>Full Stack Development Internship</p>
              </div>

              <div className="info">
                <h5>Frontend</h5>
                <p>HTML • CSS • JavaScript • React</p>
              </div>

              <div className="info">
                <h5>Backend</h5>
                <p>Python • API Integration</p>
              </div>

              <div className="info">
                <h5>Other Skills</h5>
                <p>Excel • Canva • PowerPoint • Google Sheets</p>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;