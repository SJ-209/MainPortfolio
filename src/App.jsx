import Header from "./components/Header"
import Hero from "./components/Hero"
import Experience from "./components/Experience"
// import YouTube from "./components/YouTube"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

function App() {
  const handleEmailClick = () => {
    const email = "infomail26@protonmail.com";
      const subject = "Hey Sam - Let's Connect!";
      const body = "Hi Sam,\n\nI hope this message finds you well. I wanted to reach out to discuss...";
    
        // Try opening Gmail in a new tab
        const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${email}&su=${subject}&body=${body}`;
        const newTab = window.open(gmailUrl, '_blank');
    
        // If the new tab fails to open (e.g., due to pop-up blockers), fallback to mailto:
        if (!newTab || newTab.closed || typeof newTab.closed === 'undefined') {
            window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
        }
  }

  return (
    <div className="app">
      <Header />
      <Hero handleEmailClick={handleEmailClick} />
      <Experience />
      {/* <YouTube /> */}
      <Projects />
      <Contact handleEmailClick={handleEmailClick}/>
    </div>
  )
}

export default App

