import { Play, Users, Video } from "lucide-react"

const YouTube = () => {
  return (
    <section id="youtube" className="py-20">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-12 text-center">YouTube Channel</h2>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Users className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h4 className="text-2xl font-bold mb-2">50K+</h4>
            <p className="text-gray-600">Subscribers</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Video className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h4 className="text-2xl font-bold mb-2">200+</h4>
            <p className="text-gray-600">Videos Published</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <Play className="w-12 h-12 mx-auto mb-4 text-blue-600" />
            <h4 className="text-2xl font-bold mb-2">1M+</h4>
            <p className="text-gray-600">Total Views</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Channel Focus</h3>
            <p className="text-gray-700 mb-6">
              Dedicated to helping developers master modern web development through practical tutorials, code reviews,
              and in-depth explanations of complex concepts.
            </p>
            <ul className="space-y-4">
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Full-stack Development Tutorials</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Code Reviews & Best Practices</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>System Design & Architecture</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                <span>Developer Productivity Tips</span>
              </li>
            </ul>
          </div>

          <div className="aspect-video">
            <iframe
              className="w-full h-full rounded-lg shadow-lg"
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

