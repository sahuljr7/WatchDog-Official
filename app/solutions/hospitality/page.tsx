import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function HospitalityPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Hospitality Security Solutions</h1>
      
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Enhancing Guest Safety and Satisfaction</h2>
          <p className="mb-4">
            WatchDog's Hospitality Security Solutions are tailored to meet the unique challenges of hotels, resorts, and other hospitality venues. Our systems are designed to provide comprehensive security while maintaining a welcoming atmosphere for guests.
          </p>
          <p className="mb-4">
            Key features of our hospitality solutions include:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Discreet, high-resolution cameras for public areas</li>
            <li>Smart access control systems for guest rooms and restricted areas</li>
            <li>Integration with property management systems</li>
            <li>Real-time monitoring and alerts for security staff</li>
            <li>Analytics for occupancy tracking and operational efficiency</li>
          </ul>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Discover Solutions</Button>
        </div>
        <div>
          <Image
            src="/placeholder.svg"
            alt="Hospitality Security System"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      
      <div className="bg-accent rounded-lg p-8 mb-12">
        <h3 className="text-xl font-semibold mb-4">Success Story: Luxury Resort Chain</h3>
        <p className="mb-4">
          A renowned luxury resort chain implemented our comprehensive security solution across their properties worldwide. The integrated system not only enhanced guest safety but also improved operational efficiency. Within the first year, they reported a 35% reduction in security incidents, a 20% improvement in staff response times, and increased guest satisfaction scores related to safety and security.
        </p>
        <Button variant="outline">Read Full Case Study</Button>
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold mb-4">Benefits for Hospitality Sector</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2">Enhanced Guest Safety</h4>
            <p>Comprehensive protection that doesn't compromise on hospitality.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2">Operational Efficiency</h4>
            <p>Streamline security processes and improve staff allocation.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2">Brand Protection</h4>
            <p>Maintain a positive reputation by ensuring a safe, secure environment.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

