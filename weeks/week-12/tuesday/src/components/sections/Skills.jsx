// src/components/sections/Skills.jsx
import "./Skills.css";

export const Skills = () => {
  const skillCategories = [
    {
      title: "Code",
      skills: ["HTML", "CSS", "JavaScript", "React"],
    },
    {
      title: "Toolbox",
      skills: ["Git", "VS Code", "Figma"],
    },
    // Here you can store your skills and categories
  ];

  return (
    <section className="skills">
      <div className="container">
        <h2>Skills</h2>
        <div className="skills-grid">
          {skillCategories.map((category) => (
            <div key={category.title} className="skill-category">
              <h3>{category.title}</h3>
              <ul className="skill-list">
                {category.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
