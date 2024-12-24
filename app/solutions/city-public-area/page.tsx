import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function CityPublicAreaPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">City Public Area Solutions</h1>
      
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <Image
            src="/placeholder.svg"
            alt="City Public Area Surveillance"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Enhancing Urban Safety and Efficiency</h2>
          <p className="mb-4">
            Our City Public Area solutions leverage cutting-edge surveillance technology to create safer, smarter urban environments. By integrating high-resolution cameras, advanced analytics, and centralized management systems, we enable city authorities to monitor public spaces effectively, respond to incidents quickly, and make data-driven decisions for urban planning and resource allocation.
          </p>
          <p className="mb-4">
            Key features of our City Public Area solutions include:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>AI-powered video analytics for crowd management and anomaly detection</li>
            <li>Integrated emergency response systems</li>
            <li>Traffic monitoring and smart parking solutions</li>
            <li>Environmental monitoring for air quality and noise levels</li>
            <li>Scalable architecture to accommodate growing urban needs</li>
          </ul>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Learn More</Button>
        </div>
      </div>
      
      <div className="bg-accent rounded-lg p-8 mb-12">
        <h3 className="text-xl font-semibold mb-4">Case Study: Smart City Implementation</h3>
        <p className="mb-4">
          In partnership with the municipal government of Metropolis, we implemented a comprehensive smart city solution that reduced crime rates by 30% and improved emergency response times by 40% within the first year of deployment. Our integrated system allowed for real-time monitoring of critical areas, predictive policing, and efficient resource allocation.
        </p>
        <Button variant="outline">Read Full Case Study</Button>
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold mb-4">Benefits of Our City Public Area Solutions</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2">Enhanced Public Safety</h4>
            <p>Proactive threat detection and rapid incident response capabilities.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2">Improved Urban Planning</h4>
            <p>Data-driven insights for optimizing city infrastructure and services.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2">Cost-Effective Operations</h4>
            <p>Streamlined resource management and predictive maintenance.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

