'use client'

import React, { useCallback, useEffect, useState } from 'react'
import Image from 'next/image'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const images = [
  {
    src: "https://media.istockphoto.com/id/2018833666/photo/set-of-security-camera-or-cctv-cameras.webp?a=1&b=1&s=612x612&w=0&k=20&c=JxVB0CgU-bbrNvcRJ8Al1wWop0GuEPoxsPskragOoDQ=",
    alt: "Security camera monitoring system"
  },
  {
    src: "https://media.istockphoto.com/id/1977230951/photo/cctv-camera-installed-on-wall-of-the-building-scan-the-area-for-surveillance-purposes-can-be.webp?a=1&b=1&s=612x612&w=0&k=20&c=eqRnrSTKA_vyAJD8s6uKJWu3BQKDsHja3MrkoLPzwFc=",
    alt: "AI-powered security analysis"
  },
  {
    src: "https://images.unsplash.com/photo-1549109926-58f039549485?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8c2VjdXJpdHklMjBjYW1lcmF8ZW58MHx8MHx8fDA%3D",
    alt: "Advanced surveillance technology"
  }
]

export function ImageCarousel() {
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
    <div className="relative">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex">
          {images.map((image, index) => (
            <div className="flex-[0_0_100%] min-w-0 relative aspect-video" key={index}>
              <Image
                src={image.src}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
            </div>
          ))}
        </div>
      </div>
      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75"
        onClick={scrollPrev}
      >
        <ChevronLeft className="h-6 w-6" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/50 hover:bg-white/75"
        onClick={scrollNext}
      >
        <ChevronRight className="h-6 w-6" />
      </Button>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`h-2 w-2 rounded-full transition-colors ${
              index === selectedIndex ? 'bg-white' : 'bg-white/50'
            }`}
            onClick={() => emblaApi?.scrollTo(index)}
          />
        ))}
      </div>
    </div>
  )
}

