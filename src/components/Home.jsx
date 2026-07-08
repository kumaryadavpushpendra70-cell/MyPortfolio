import React from "react";
import "./Home.css";
import profile from "../assets/file.jpg";


function Home() {
  return (
    <section id="home" className="home-section">
      <div className="container">

        <div className="row align-items-center min-vh-100">

          {/* Left Side */}

          <div className="col-lg-6 order-2 order-lg-1">

            <p className="hello">Hello, I'm</p>

            <h1 className="name">
              Puspendra<span>Kumar</span><span>Yadav</span>
            </h1>

            <h3 className="designation">
              Aspiring Full-Stack Developer | IT Student | Creative Problem Solver
            </h3>

            <p className="description">
              Creative and tech-savvy Information Technology student passionate
              about designing modern websites and developing user-friendly web
              applications. Experienced in frontend development, backend
              integration, Python, React, Canva, and digital marketing through
              internships and virtual training.

            </p>

            <h4 className="greet">Let's Build Together.</h4>

            <div className="buttons">

              <a href="#contact" className="btn btn-primary me-3">
                Hire Me
              </a>

      
            </div>

          </div>

          {/* Right Side */}

          <div className="col-lg-6 text-center order-1 order-lg-2">

            <div className="image-box">
              <img
                src={profile}
                alt="Samriddhi"
                className="profile-img"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Home;