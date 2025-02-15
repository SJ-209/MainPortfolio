import { Play, Users, Video } from "lucide-react"

const YouTube = () => {
  return (
    <section id="youtube" className="youtube">
      <div className="container">
        <h2>YouTube Channel</h2>

        <div className="youtube-stats">
          <div className="stat-item">
            <Users className="stat-icon" />
            <h4 className="stat-number">50K+</h4>
            <p>Subscribers</p>
          </div>

          <div className="stat-item">
            <Video className="stat-icon" />
            <h4 className="stat-number">200+</h4>
            <p>Videos Published</p>
          </div>

          <div className="stat-item">
            <Play className="stat-icon" />
            <h4 className="stat-number">1M+</h4>
            <p>Total Views</p>
          </div>
        </div>

        <div className="youtube-content">
          <div className="youtube-description">
            <h3>Channel Focus</h3>
            <p>
              Dedicated to helping developers master modern web development through practical tutorials, code reviews,
              and in-depth explanations of complex concepts.
            </p>
            <ul>
              <li>Full-stack Development Tutorials</li>
              <li>Code Reviews & Best Practices</li>
              <li>System Design & Architecture</li>
              <li>Developer Productivity Tips</li>
            </ul>
          </div>

          <div className="youtube-video-container">
            <iframe
              className="youtube-video"
              src="https://www.youtube.com/embed/featured"
              title="Featured Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}

export default YouTube

