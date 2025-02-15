import { ArrowRight } from "lucide-react"

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1">
            <h1 className="text-5xl font-bold mb-6">
              Software Engineer & <span className="text-blue-600">Content Creator</span>
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              Building innovative solutions and sharing knowledge through code and content. Specialized in full-stack
              development and technical education.
            </p>
            <div className="flex gap-4">
              <a
                href="#projects"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors inline-flex items-center gap-2"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#contact"
                className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80"
              alt="Professional headshot"
              className="rounded-2xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

