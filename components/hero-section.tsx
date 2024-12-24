'use client'

import { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

const slides = [
  {
    badge: "Core Switch",
    title: "CORE SWITCHES",
    description: "WatchDog Data center-class switches have more extensive high availability and fault tolerance systems built into the hardware and software for better uptime for mission-critical applications. And they provide significantly higher deployment flexibility with both top-of-rack and end-of-row configuration compatibility.",
    image: "https://mywatchdog.in/wp-content/uploads/2023/06/hi-end-switch-1.jpeg"
  },
  {
    badge: "Network Security",
    title: "ADVANCED SECURITY",
    description: "Experience state-of-the-art network security with our advanced monitoring and protection systems, designed to safeguard your critical infrastructure.",
    image: "https://mywatchdog.in/wp-content/uploads/2022/03/mywatchdogbanner1-removebg-preview.png"
  },
  {
    badge: "Smart Solutions",
    title: "INTELLIGENT NETWORKING",
    description: "Leverage our cutting-edge networking solutions that combine performance, reliability, and smart management capabilities for optimal network operations.",
    image: "https://mywatchdog.in/wp-content/uploads/2022/03/mywatchdog_banner2-removebg-preview.png"
  }
]

export function HeroSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay()])
  const [selectedIndex, setSelectedIndex] = useState(0)

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev()
  }, [emblaApi])

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext()
  }, [emblaApi])

  const onSelect = useCallback(() => {
    if (!emblaApi) return
    setSelectedIndex(emblaApi.selectedScrollSnap())
  }, [emblaApi, setSelectedIndex])

  useEffect(() => {
    if (!emblaApi) return
    onSelect()
    emblaApi.on('select', onSelect)
  }, [emblaApi, onSelect])

  return (
    <section className="relative min-h-[600px] overflow-hidden">
      <div 
        className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary/70 dark:from-primary/80 dark:to-primary/60"
      />
      
      <div className="relative h-full" ref={emblaRef}>
        <div className="flex h-full">
          {slides.map((slide, index) => (
            <div 
              key={index}
              className="flex-[0_0_100%] min-w-0 relative h-full"
            >
              <div className="container mx-auto px-4 h-full">
                <div className="grid lg:grid-cols-2 gap-8 items-center h-full py-16">
                  {/* Left Content */}
                  <div className="text-white space-y-6">
                    <Badge 
                      className="bg-background/10 hover:bg-background/20 text-white border-none"
                    >
                      {slide.badge}
                    </Badge>
                    
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white text-shadow">
                      {slide.title}
                    </h1>
                    
                    <p className="text-xl md:text-2xl text-white/90 max-w-xl leading-relaxed">
                      {slide.description}
                    </p>
                    
                    <Button 
                      size="lg"
                      className="bg-white text-primary hover:bg-white/90 dark:bg-white dark:text-primary dark:hover:bg-white/90"
                    >
                      Read more
                    </Button>
                  </div>

                  {/* Right Image */}
                  <div className="relative h-[300px] lg:h-[400px]">
                    <Image
                      src={slide.image}
                      alt={slide.title}
                      fill
                      className="object-contain"
                      priority={index === 0}
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Controls */}
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 dark:hover:bg-white/10"
        onClick={scrollPrev}
        aria-label="Previous slide"
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:bg-white/20 dark:hover:bg-white/10"
        onClick={scrollNext}
        aria-label="Next slide"
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      {/* Dot Navigation */}
      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex flex-col space-y-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}

