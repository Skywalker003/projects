import React from "react";
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaJs, 
  FaReact, 
  FaNodeJs, 
  FaGitAlt 
} from "react-icons/fa";

import { 
  SiMongodb, 
  SiExpress, 
  SiNextdotjs, 
  SiRedux, 
  SiTypescript, 
  SiTailwindcss, 
  SiFirebase, 
  SiVite 
} from "react-icons/si";

export default function Technologies() {

  const techStack = [
    { icon: <FaHtml5 />, name: "HTML" },
    { icon: <FaCss3Alt />, name: "CSS" },
    { icon: <FaJs />, name: "JavaScript" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiExpress />, name: "Express" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaGitAlt />, name: "Git" },

    { icon: <SiNextdotjs />, name: "Next.js" },
    { icon: <SiRedux />, name: "Redux" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiTailwindcss />, name: "Tailwind CSS" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiVite />, name: "Vite" },
  ];

  return (
    <section className="tech-section">
      <div className="about-section-heading">
        <p className="about-section-kicker">Our toolkit</p>
        <h2>Technologies We <span>Use</span></h2>
        <p>We teach with the tools used in modern frontend and full-stack workflows.</p>
      </div>

      <div className="tech-grid">
        {techStack.map((tech, index) => (
          <div key={index} className="tech-card">
            <div className="tech-icon">{tech.icon}</div>
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
