import { Check } from 'lucide-react'

export function FeaturesSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100">
              <Check className="h-8 w-8 text-green-600" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
              AI Based Solutions
            </h2>
            <h3 className="text-xl md:text-2xl font-semibold text-gray-700">
              FRS, VMS-VA, Visitor Management Solution
            </h3>
            <p className="text-lg text-gray-600">
              Our mission is your protection not only in Home but also in Commercial places. 
              We provide complete security solutions with advanced AI technology for comprehensive protection.
            </p>
          </div>
          <div className="relative">
            <img
              src="/placeholder.svg"
              alt="AI Security Technology"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-teal-500/20 rounded-lg" />
          </div>
        </div>
      </div>
    </section>
  )
}

