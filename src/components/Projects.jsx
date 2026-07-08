import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "Bank Management System",
      description:
        "A banking application that performs account management, transactions, and basic banking operations with a user-friendly interface.",
      tech: ["Python", "File Handling", "OOP"],
      github: "https://github.com/samyyy25/Bank_Management_System",
      live: "#",
    },
    {
      title: "Portfolio Website",
      description:
        "A responsive personal portfolio showcasing projects, skills, internships, and achievements with a modern UI.",
      tech: ["React", "Bootstrap", "CSS"],
      github: "https://github.com/samyyy25/myproject",
      live: "#",
    },
  ];

  return (
    <section id="projects" className="projects-section">
      <div className="container">

        <div className="text-center mb-5">
          <p className="section-title">MY PROJECTS</p>
          <h2>Featured Work</h2>
          <p className="section-subtitle">
            Some of my projects built while learning full-stack development,
            solving real-world problems, and participating in hackathons.
          </p>
        </div>

        <div className="row g-4">

          {projects.map((project, index) => (
            <div className="col-lg-6" key={index}>
              <div className={`project-card ${project.featured ? "featured" : ""}`}>

                {project.featured && (
                  <span className="badge-project">
                    🏆 Hackathon Project
                  </span>
                )}

                <h3>{project.title}</h3>

                <p>{project.description}</p>

                <div className="tech-stack">
                  {project.tech.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </div>

                <div className="project-buttons">

                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-outline-primary"
                    >
                      GitHub
                    </a>
                  )}

                  {project.live !== "#" && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="btn btn-primary"
                    >
                      Live Demo
                    </a>
                  )}

                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;