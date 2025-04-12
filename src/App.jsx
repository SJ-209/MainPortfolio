import Header from "./components/Header"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
// import YouTube from "./components/YouTube"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  return (
    <div className="app">
      <Header />
      <Hero />
      <Experience />
      {/* <YouTube /> */}
      <Projects />
      <Contact />
    </div>
  )
}

export default App

