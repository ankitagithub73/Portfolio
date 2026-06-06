import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaWordpress,
  FaBootstrap,
  FaGitAlt,
} from "react-icons/fa";

import { SiPhp, SiMysql } from "react-icons/si";

function Skills() {
  const skills = [
    { icon: <FaHtml5 />, name: "HTML5" },
    { icon: <FaCss3Alt />, name: "CSS3" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaBootstrap />, name: "Bootstrap" },
    { icon: <FaReact />, name: "React JS" },
    { icon: <FaWordpress />, name: "WordPress" },
    { icon: <SiPhp />, name: "PHP" },
    { icon: <FaGitAlt />, name: "Git" },
  ];

  return (
    <section className="skills-section py-5" id="skills">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="fw-bold">My <span>Skills</span></h2>
          <p className="text-white">
            Technologies and tools I work with
          </p>
        </div>

        <div className="row g-4">
          {skills.map((skill, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6" key={index}>
              <div className="skill-card text-center">
                <div className="skill-icon">
                  {skill.icon}
                </div>

                <h5 className="mt-3">{skill.name}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;