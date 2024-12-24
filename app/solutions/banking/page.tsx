import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function BankingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Banking Security Solutions</h1>
      
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Safeguarding Financial Institutions</h2>
          <p className="mb-4">
            WatchDog's Banking Security Solutions offer comprehensive protection for financial institutions, from local branches to large corporate headquarters. Our integrated systems combine advanced surveillance technology with intelligent analytics to ensure the safety of assets, employees, and customers while maintaining regulatory compliance.
          </p>
          <p className="mb-4">
            Our banking solutions feature:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>High-resolution cameras with low-light capabilities</li>
            <li>AI-powered facial recognition and behavior analysis</li>
            <li>Secure vault and ATM monitoring systems</li>
            <li>Integration with access control and alarm systems</li>
            <li>Cybersecurity measures for data protection</li>
          </ul>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Explore Features</Button>
        </div>
        <div>
          <Image
            src="/placeholder.svg"
            alt="Banking Security System"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      
      <div className="bg-accent rounded-lg p-8 mb-12">
        <h3 className="text-xl font-semibold mb-4">Success Story: Major National Bank</h3>
        <p className="mb-4">
          A leading national bank implemented our comprehensive security solution across 1000+ branches and ATMs. Within the first year, they reported a 40% reduction in security incidents, improved fraud detection rates, and enhanced customer trust. Our system's real-time alerts and centralized monitoring capabilities significantly improved response times to potential security threats.
        </p>
        <Button variant="outline">Read Full Case Study</Button>
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold mb-4">Benefits for Banking Sector</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2">Enhanced Security</h4>
            <p>Comprehensive protection against theft, fraud, and cyber threats.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2">Regulatory Compliance</h4>
            <p>Meet and exceed industry standards and regulatory requirements.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2">Operational Efficiency</h4>
            <p>Streamline security processes and reduce manual monitoring needs.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

