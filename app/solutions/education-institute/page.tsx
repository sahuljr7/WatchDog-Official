import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function EducationInstitutePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Education Institute Solutions</h1>
      
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <Image
            src="/placeholder.svg"
            alt="Education Institute Security"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Creating Safe Learning Environments</h2>
          <p className="mb-4">
            WatchDog's Education Institute Solutions are designed to create secure and nurturing learning environments for students, faculty, and staff. Our comprehensive security systems integrate seamlessly with educational facilities to provide protection without disrupting the academic atmosphere.
          </p>
          <p className="mb-4">
            Key features of our education solutions include:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>Campus-wide video surveillance with intelligent analytics</li>
            <li>Access control systems for buildings and restricted areas</li>
            <li>Emergency notification and response systems</li>
            <li>Visitor management solutions</li>
            <li>Integration with school management software</li>
          </ul>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Learn More</Button>
        </div>
      </div>
      
      <div className="bg-accent rounded-lg p-8 mb-12">
        <h3 className="text-xl font-semibold mb-4">Case Study: University Security Upgrade</h3>
        <p className="mb-4">
          A large state university implemented our comprehensive security solution across its sprawling campus. The system included over 1000 cameras, centralized monitoring, and integration with student ID cards for access control. As a result, the university saw a 60% reduction in on-campus incidents and significantly improved emergency response times.
        </p>
        <Button variant="outline">View Full Case Study</Button>
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold mb-4">Benefits for Education Institutes</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2">Enhanced Safety</h4>
            <p>Comprehensive protection for students, staff, and visitors across campus.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2">Efficient Operations</h4>
            <p>Streamline security processes and improve resource allocation.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2">Peace of Mind</h4>
            <p>Create a secure environment that fosters learning and academic growth.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

