import React from "react";
import "./Experience.css";

function Experience() {
  const experience = [
    {
      company: "Shri Ramswaroop Digital Technologies Pvt. Ltd.",
      role: "Full Stack Development Intern",
      duration: "August 2025",
      points: [
        "Worked on full-stack web development using Python and modern web technologies.",
        "Developed responsive frontend components and backend logic.",
        "Integrated APIs and improved application functionality.",
        "Learned database management, version control, and responsive UI development.",
      ],
    },
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="container">

        <div className="text-center mb-5">
          <p className="section-title">EXPERIENCE</p>
          <h2>Internships & Training</h2>
          <p className="section-subtitle">
            My professional learning journey through internships and industry
            training.
          </p>
        </div>

        <div className="timeline">

          {experience.map((exp, index) => (
            <div className="timeline-item" key={index}>

              <div className="timeline-dot"></div>

              <div className="timeline-card">

                <span className="duration">{exp.duration}</span>

                <h3>{exp.role}</h3>

                <h5>{exp.company}</h5>

                <ul>
                  {exp.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;