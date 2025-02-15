import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section className="hero">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            Software Engineer & <span className="highlight">Content Creator</span>
          </h1>
          <p>
            Building innovative solutions and sharing knowledge through code and content. Specialized in full-stack
            development and technical education.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects <ArrowRight />
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <img
            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
            alt="Professional headshot"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

