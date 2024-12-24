import Image from 'next/image'

const certificates = [
  { src: "/placeholder.svg", alt: "Certificate 1" },
  { src: "/placeholder.svg", alt: "Certificate 2" },
  { src: "/placeholder.svg", alt: "Certificate 3" },
  { src: "/placeholder.svg", alt: "Certificate 4" },
  { src: "/placeholder.svg", alt: "Certificate 5" },
  { src: "/placeholder.svg", alt: "Certificate 6" },
]

export default function CertificatesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Certificates</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {certificates.map((cert, index) => (
          <div key={index} className="flex justify-center">
            <Image
              src={cert.src}
              alt={cert.alt}
              width={300}
              height={400}
              className="rounded-lg shadow-md"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

