import { Menu, Github, Linkedin, Youtube } from "lucide-react"

const Header = () => {
  return (
    <header className="header">
      <nav className="container nav">
        <h1>SJ</h1>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </div>

        <div className="social-links">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin />
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            <Youtube />
          </a>
          <button className="menu-btn">
            <Menu />
          </button>
        </div>
      </nav>
    </header>
  )
}

export default Header

