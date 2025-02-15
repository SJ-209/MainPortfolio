import { Menu, Github, Linkedin, Youtube } from "lucide-react"

const Header = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-2xl font-bold">John Doe</h1>

          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="hover:text-blue-600 transition-colors">
              About
            </a>
            <a href="#experience" className="hover:text-blue-600 transition-colors">
              Experience
            </a>
            <a href="#youtube" className="hover:text-blue-600 transition-colors">
              YouTube
            </a>
            <a href="#projects" className="hover:text-blue-600 transition-colors">
              Projects
            </a>
            <a href="#contact" className="hover:text-blue-600 transition-colors">
              Contact
            </a>
          </div>

          <div className="flex items-center space-x-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 hover:text-blue-600 transition-colors" />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
              <Youtube className="w-5 h-5 hover:text-blue-600 transition-colors" />
            </a>
            <button className="md:hidden">
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header

