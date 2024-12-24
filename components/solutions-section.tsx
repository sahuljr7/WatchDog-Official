import { Star, Lightbulb, Timer } from 'lucide-react'
import { ImageCarousel } from '@/components/image-carousel'

const solutions = [
  {
    icon: <Star className="w-8 h-8 text-gray-600" />,
    title: "CCTV and Video Surveillance",
    description: "No matter the size, type and location of your company, our surveillance system will protect your business."
  },
  {
    icon: <Lightbulb className="w-8 h-8 text-gray-600" />,
    title: "Network Security Solutions",
    description: "Elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo. Nam varius consectetur elementum."
  },
  {
    icon: <Timer className="w-8 h-8 text-gray-600" />,
    title: "Access Control Solutions",
    description: "Effective and simple to use door access system, we offer a decade of experience in planning, customization and installation"
  }
]

export function SolutionsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Title and Tagline */}
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-gradient bg-gradient-to-r from-primary to-blue-600">
              SOLUTIONS
            </h2>
            <p className="text-xl md:text-2xl text-gray-700 max-w-md mb-8">
              Protect Your Business With Our Unique Solutions
            </p>
            <div className="mt-8">
              <ImageCarousel />
            </div>
          </div>

          {/* Right Column - Solutions Cards */}
          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="mb-4">
                  {solution.icon}
                </div>
                <h3 className="text-2xl font-semibold mb-3 text-gray-800">
                  {solution.title}
                </h3>
                <p className="text-lg text-gray-600">
                  {solution.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

