import { experiences, skills } from "../data"

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">Professional Experience</h2>

        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Work History</h3>
            {experiences.map((exp, index) => (
              <div key={index} className="mb-8 bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold">{exp.company}</h4>
                <p className="text-blue-600 mb-2">{exp.role}</p>
                <p className="text-gray-600 mb-4">{exp.period}</p>
                <ul className="list-disc list-inside">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="text-gray-700 mb-2">
                      {achievement}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-6">Technical Skills</h3>
            {skills.map((category, index) => (
              <div key={index} className="mb-8 bg-white p-6 rounded-lg shadow-md">
                <h4 className="text-xl font-semibold mb-4">{category.category}</h4>
                {category.items.map((skill, i) => (
                  <div key={i} className="mb-4">
                    <div className="flex justify-between mb-1">
                      <span className="font-medium">{skill.name}</span>
                      <span>{skill.level}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <div className="bg-blue-600 rounded-full h-2" style={{ width: `${skill.level}%` }} />
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

