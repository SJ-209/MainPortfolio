import React from 'react'

const Hero = () => {
  return (
    <section className="hero " id="about">
      <div className="container hero-content">
        <div className="hero-text">
          <h1>
            Software Engineer & <span className="highlight">Web Developer</span>
          </h1>
          <p>
          Innovative self-taught software developer with a passion for problem-solving and front end development. 
          Proficient in React, JavaScript, HTML, CSS and have experience with Node.js, Express.js, and PostgreSQL. 
          Backed by 17 years of military experience, recognized for strong leadership, strategic thinking, and delivering projects efficiently in high-pressure environments.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="btn btn-primary">
              View Projects
            </a>
            <a href="#contact" className="btn btn-secondary">
              Contact Me
            </a>
          </div>
        </div>
        <div className="hero-image-container">
          <img
            src="./assets/Me.jpg"
            alt="Professional headshot"
            className="hero-image"
          />
        </div>
      </div>
    </section>
  )
}

export default Hero

