'use client'

import Image from 'next/image'
import { Check } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function AiSolutions() {
  return (
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - AI Visualization */}
          <div className="relative h-[400px] lg:h-[500px]">
            <Image
              src="https://mywatchdog.in/wp-content/uploads/2022/11/wrapper.png"
              alt="AI Technology Visualization"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>

          {/* Right Column - Content */}
          <div className="space-y-8">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-gradient bg-gradient-to-r from-primary to-blue-600">
              AI Based Solutions
            </h2>

            <div className="space-y-6">
              {/* FRS Solution */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-foreground">
                    FRS, VMS-VA, Visitor Management Solution
                  </h3>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    Our mission is your protection not only in Home but also in 
                    business places with our security monitors and Systems certified 
                    by the highest standards.
                  </p>
                </div>
              </div>

              {/* ANPR Solution */}
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-6 h-6 mt-1">
                  <Check className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-semibold mb-2 text-foreground">
                    ANPR Solution
                  </h3>
                  <p className="text-lg md:text-xl text-muted-foreground">
                    Click edit button to change this text. Lorem ipsum dolor sit amet, 
                    consectetur adipiscing elit.
                  </p>
                </div>
              </div>
            </div>

            <Button 
              className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-8 py-3"
            >
              CLICK HERE
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

