import Image from 'next/image'

const images = [
  { src: '/placeholder.svg', alt: 'Gallery Image 1' },
  { src: '/placeholder.svg', alt: 'Gallery Image 2' },
  { src: '/placeholder.svg', alt: 'Gallery Image 3' },
  { src: '/placeholder.svg', alt: 'Gallery Image 4' },
  { src: '/placeholder.svg', alt: 'Gallery Image 5' },
  { src: '/placeholder.svg', alt: 'Gallery Image 6' },
  { src: '/placeholder.svg', alt: 'Gallery Image 7' },
  { src: '/placeholder.svg', alt: 'Gallery Image 8' },
]

export default function GalleryPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Gallery</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {images.map((image, index) => (
          <div key={index} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
            <Image
              src={image.src}
              alt={image.alt}
              width={300}
              height={200}
              layout="responsive"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

