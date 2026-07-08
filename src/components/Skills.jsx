
import "./Skills.css";

function Skills() {
  const skills = [
    {
      title: "Frontend",
      icon: "💻",
      items: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React.js"],
    },
    {
      title: "Backend",
      icon: "⚙️",
      items: ["Python", "REST APIs", "Backend Integration", "MySQL"],
    },
    {
      title: "Tools",
      icon: "🛠️",
      items: ["Git", "GitHub", "VS Code", "Canva", "PowerPoint"],
    },
    {
      title: "Data & Office",
      icon: "📊",
      items: ["Excel", "Google Sheets", "Data Entry"],
    },
    {
      title: "Soft Skills",
      icon: "🚀",
      items: [
        "Communication",
        "Creative Thinking",
        "Problem Solving",
        "Time Management",
      ],
    },
    {
      title: "Learning",
      icon: "📚",
      items: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Advanced React",
      ],
    },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container">

        <div className="text-center mb-5">
          <p className="section-title">MY SKILLS</p>
          <h2>Technologies I Work With</h2>
          <p className="section-subtitle">
            A combination of development, design and productivity tools that
            help me build modern and responsive web applications.
          </p>
        </div>

        <div className="row g-4">

          {skills.map((skill, index) => (
            <div className="col-lg-4 col-md-6" key={index}>
              <div className="skill-card">

                <div className="skill-icon">
                  {skill.icon}
                </div>

                <h4>{skill.title}</h4>

                <div className="skill-list">
                  {skill.items.map((item, i) => (
                    <span key={i}>{item}</span>
                  ))}
                </div>

              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;