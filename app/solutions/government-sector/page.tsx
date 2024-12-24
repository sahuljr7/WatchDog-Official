import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function GovernmentSectorPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Government Sector Solutions</h1>
      
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <Image
            src="/placeholder.svg"
            alt="Government Facility Security"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Securing Government Facilities with Advanced Technology</h2>
          <p className="mb-4">
            WatchDog's Government Sector solutions provide robust, scalable, and highly secure surveillance systems designed to meet the unique needs of government facilities. Our solutions integrate cutting-edge technology with stringent security protocols to ensure the safety of personnel, protection of sensitive information, and efficient operations of government institutions.
          </p>
          <p className="mb-4">
            Key features of our Government Sector solutions include:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>High-security access control systems with multi-factor authentication</li>
            <li>Encrypted video surveillance with advanced analytics</li>
            <li>Perimeter intrusion detection systems</li>
            <li>Integration with emergency response systems</li>
            <li>Customizable dashboards for real-time monitoring and reporting</li>
          </ul>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Discover Solutions</Button>
        </div>
      </div>
      
      <div className="bg-accent rounded-lg p-8 mb-12">
        <h3 className="text-xl font-semibold mb-4">Case Study: National Security Enhancement</h3>
        <p className="mb-4">
          We implemented a comprehensive security overhaul for a network of government buildings across multiple cities. The project involved integrating advanced surveillance systems, implementing strict access controls, and establishing a centralized monitoring center. This resulted in a 50% reduction in security incidents and significantly improved response times to potential threats.
        </p>
        <Button variant="outline">View Detailed Case Study</Button>
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold mb-4">Benefits for Government Sector</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2">Enhanced National Security</h4>
            <p>Comprehensive protection for critical infrastructure and sensitive information.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2">Operational Efficiency</h4>
            <p>Streamlined processes and improved resource allocation through data-driven insights.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2">Compliance Assurance</h4>
            <p>Ensure adherence to strict government regulations and security standards.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

