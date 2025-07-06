import { experiences, skills } from "../data"
import { useInView } from "react-intersection-observer"
import React from "react"

const Experience = () => {
  // Only one observer for all skills
  const { ref: skillsRef, inView: skillsInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Professional Experience</h2>

        <div className="experience-grid">
          <div className="work-history">
            <h3 className="work-h">Work History</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="experience-item">
                <h4>{exp.company}</h4>
                <p className="role">{exp.role}</p>
                <p className="period">{exp.period}</p>
                <ul>
                  {exp.achievements.map((achievement, i) => (
                    <li key={i}>{achievement}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="skills" ref={skillsRef}>
            <h3 className="Tech-s">Technical Skills</h3>
            <br />
            {skills.map((category, index) => (
              <div key={index} className="skill-category">
                <h4>{category.category}</h4>
                {category.items.map((skill, i) => (
                  <div key={i} className="skill-item">
                    <div className="skill-info">
                      <span>{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="skill-bar">
                      <div
                        className="skill-progress"
                        style={{
                          width: skillsInView ? `${skill.level}%` : 0,
                          transition: "width 1s cubic-bezier(0.4,0,0.2,1)",
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience

