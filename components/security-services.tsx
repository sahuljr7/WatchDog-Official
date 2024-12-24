'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'

export function SecurityServices() {
  const trackingRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in')
          }
        })
      },
      { threshold: 0.1 }
    )

    if (trackingRef.current) {
      observer.observe(trackingRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-gradient bg-gradient-to-r from-primary to-blue-600">
              SECURITY SERVICES YOU CAN DEPEND ON
            </h2>
            
            <p className="text-xl text-gray-700 mb-8">
              Trust us mywatchdog to protect your home and business from any 
              potential threats. Our superior alarm and security systems will provide 
              you with the safety and security that you need and deserve.
            </p>

            <Button 
              className="bg-[#e91e63] hover:bg-[#d81557] text-white rounded-full px-8 py-3"
            >
              LEARN MORE
            </Button>
          </div>

          <div className="relative h-[400px]">
            <Image
              src="https://mywatchdog.in/wp-content/uploads/2020/05/watchdog.png"
              alt="WatchDog Security Camera System"
              fill
              className="object-contain"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>

        {/* Auto Tracking Section */}
        <div 
          ref={trackingRef}
          className="opacity-0 transition-opacity duration-1000 max-w-4xl mx-auto"
        >
          
          <div className="w-full h-0 pb-[56.25%] relative">
            <img
              src="https://mywatchdog.in/wp-content/uploads/2020/02/HTB1vPlPNbvpK1RjSZPiq6zmwXXan.gif"
              alt="Auto tracking demonstration"
              className="absolute top-0 left-0 w-full h-full object-contain rounded-lg"
            />
          </div>
        </div>

        {/* Bottom Text */}
        <p className="text-gray-700 mt-12 text-center">
          WatchDog CCTV specializes in surveillance equipment for the home, business and public places. 
          Our products vary from a range of DVR with CCTV monitoring and offering installation services. 
          We are dedicated to offering security system for all types of needs.
        </p>
      </div>
    </section>
  )
}

