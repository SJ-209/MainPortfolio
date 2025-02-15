import { experiences, skills } from "../data"

const Experience = () => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2>Professional Experience</h2>

        <div className="experience-grid">
          <div className="work-history">
            <h3>Work History</h3>
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

          <div className="skills">
            <h3>Technical Skills</h3>
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
                      <div className="skill-progress" style={{ width: `${skill.level}%` }} />
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

