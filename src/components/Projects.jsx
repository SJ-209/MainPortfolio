import { useState } from "react"
import { projects } from "../data"
import { ExternalLink, Github } from "lucide-react"

const Projects = () => {
  const [filter, setFilter] = useState("all")

  const technologies = Array.from(new Set(projects.flatMap((project) => project.technologies)))

  const filteredProjects =
    filter === "all" ? projects : projects.filter((project) => project.technologies.includes(filter))

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2>Projects Portfolio</h2>

        <div className="project-filters">
          <button onClick={() => setFilter("all")} className={`filter-btn ${filter === "all" ? "active" : ""}`}>
            All
          </button>
          {technologies.map((tech) => (
            <button
              key={tech}
              onClick={() => setFilter(tech)}
              className={`filter-btn ${filter === tech ? "active" : ""}`}
            >
              {tech}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <div key={index} className="project-card">
              <img src={project.image || "/placeholder.svg"} alt={project.title} className="project-image" />
              <div className="project-content">
                <h3>{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-tags">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="project-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <p className="project-impact">{project.impact}</p>
                <div className="project-links">
                  {project.liveDemo && (
                    <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">
                      <ExternalLink /> Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="project-link">
                      <Github /> Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects

