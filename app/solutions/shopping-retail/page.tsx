import Image from 'next/image'
import { Button } from '@/components/ui/button'

export default function ShoppingRetailPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Shopping & Retail Solutions</h1>
      
      <div className="grid md:grid-cols-2 gap-8 items-center mb-12">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Revolutionizing Retail Security and Analytics</h2>
          <p className="mb-4">
            WatchDog's Shopping & Retail solutions combine state-of-the-art surveillance with powerful analytics to enhance security, optimize operations, and improve customer experiences in retail environments. Our integrated systems provide comprehensive coverage for loss prevention, customer behavior analysis, and operational efficiency.
          </p>
          <p className="mb-4">
            Key components of our retail solutions include:
          </p>
          <ul className="list-disc list-inside mb-6">
            <li>High-resolution cameras with wide-angle coverage</li>
            <li>AI-powered analytics for theft prevention and customer tracking</li>
            <li>Heat mapping for store layout optimization</li>
            <li>Queue management systems</li>
            <li>Integration with point-of-sale systems for transaction verification</li>
          </ul>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90">Explore Features</Button>
        </div>
        <div>
          <Image
            src="/placeholder.svg"
            alt="Retail Surveillance System"
            width={600}
            height={400}
            className="rounded-lg shadow-md"
          />
        </div>
      </div>
      
      <div className="bg-accent rounded-lg p-8 mb-12">
        <h3 className="text-xl font-semibold mb-4">Success Story: Major Retail Chain</h3>
        <p className="mb-4">
          A leading national retail chain implemented our comprehensive surveillance and analytics solution across 500 stores. Within six months, they reported a 25% reduction in shrinkage, a 15% increase in conversion rates, and significant improvements in staff allocation efficiency. Our system's insights also led to optimized store layouts, enhancing the overall shopping experience.
        </p>
        <Button variant="outline">Read Full Story</Button>
      </div>
      
      <div>
        <h3 className="text-2xl font-semibold mb-4">Benefits for Shopping & Retail</h3>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-card p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2">Enhanced Security</h4>
            <p>Advanced theft prevention and real-time monitoring to reduce shrinkage and protect assets.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2">Customer Insights</h4>
            <p>Detailed analytics on shopper behavior, preferences, and traffic patterns to inform marketing and merchandising decisions.</p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow">
            <h4 className="text-lg font-semibold mb-2">Operational Efficiency</h4>
            <p>Optimize staffing, inventory management, and store layouts based on data-driven insights.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

