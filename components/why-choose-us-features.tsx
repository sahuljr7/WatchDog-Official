import { Clock, HandshakeIcon, Headset, Maximize2, ListFilter, Settings } from 'lucide-react'

const features = [
  {
    icon: <Clock className="w-12 h-12" />,
    title: "24 x 7 Support"
  },
  {
    icon: <HandshakeIcon className="w-12 h-12" />,
    title: "Reliable & Proven"
  },
  {
    icon: <Headset className="w-12 h-12" />,
    title: "Expert Support"
  },
  {
    icon: <Maximize2 className="w-12 h-12" />,
    title: "Different Range"
  },
  {
    icon: <ListFilter className="w-12 h-12" />,
    title: "Best Price"
  },
  {
    icon: <Settings className="w-12 h-12" />,
    title: "Trustworthy"
  }
]

export function WhyChooseUsFeatures() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4 text-gradient bg-gradient-to-r from-primary to-blue-600">
            WHY CHOOSE US
          </h2>
          <div className="mt-2 inline-block w-24 h-1 bg-blue-500"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-2xl font-semibold text-gray-900 mt-4">
                {feature.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

