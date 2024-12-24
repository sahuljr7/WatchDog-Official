import Image from 'next/image'
import { Star } from 'lucide-react'

export function AboutUs() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-gradient bg-gradient-to-r from-primary to-blue-600">
            ABOUT US
          </h2>
          
          <div className="flex justify-center mb-8">
            <Star className="w-8 h-8 text-gray-600" />
          </div>
          
          {/*<p className="text-xl text-gray-700 leading-relaxed mb-12">
            A decade old legacy in the area of Network Security, Apollo Infoways has witnessed 
            the industry being conceived and mature over the period of time and have been at 
            the forefront of every technological breakthrough.
          </p>*/}

          <p className="text-gray-700 text-lg leading-relaxed mb-12">
            A decade old legacy in the area of Network Security, Apollo Infoways has witnessed 
            the industry being conceived and mature over the period of time and have been at 
            the forefront of every technological breakthrough. We are here today bringing best 
            of breed surveillance solution for our valued customers, which helps us realize our 
            vision of "Securing All" with our valued Brand "WatchDog". WatchDog is one the most 
            promising security brand in Indian as well as overseas market with enhanced technology 
            and better quality products.
          </p>

          {/*<p className="text-2xl text-gray-900 font-medium">
            Ravi prakash
          </p>*/}

          <div className="flex flex-col items-center">
            <div className="relative w-24 h-24 mb-4">
              <Image
                src="https://mywatchdog.in/wp-content/uploads/2020/01/ravi-prakash.jpg"
                alt="Ravi prakash"
                fill
                className="rounded-full object-cover"
              />
            </div>
            <p className="text-gray-900 font-medium">
              Ravi prakash
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

