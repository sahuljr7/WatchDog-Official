import { Camera, VideoIcon, Network, Settings, Fingerprint } from 'lucide-react'
import { Button } from '@/components/ui/button'

const offerings = [
  {
    icon: <Camera className="w-12 h-12 text-primary" />,
    title: "CCTV Camera",
    description: "Our mission is your protection not only in Home but also in business places with our security monitors and Systems certified by the highest standards",
  },
  {
    icon: <VideoIcon className="w-12 h-12 text-primary" />,
    title: "Video Recorder DVR/NVR",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mat.",
  },
  {
    icon: <Network className="w-12 h-12 text-primary" />,
    title: "Network Switches (L2 & L3 Series)",
    description: "Cloud/Smart/Fully Managed/PoE Industrial Switches (4 Port to 48 Port with Console) are available with different specification.",
  },
  {
    icon: <Settings className="w-12 h-12 text-primary" />,
    title: "Fiber Module (SFP) 1G to 400G",
    description: "All type Fiber Module (Single mode and multi mode range 100m to 120km for SFP and Coper SFP) are available with Solution.",
  },
  {
    icon: <Fingerprint className="w-12 h-12 text-primary" />,
    title: "AI FRs, VMS-VA, ANPR, Visitor Management Solution",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mat.",
  }
]

export function WhyChooseUs() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground text-gradient bg-gradient-to-r from-primary to-blue-600">
          What We Offer
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {offerings.map((offering, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 rounded-lg hover:bg-accent transition-colors"
            >
              <div className="mb-4">
                {offering.icon}
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 text-foreground">
                {offering.title}
              </h3>
              
              <p className="text-lg text-muted-foreground mb-6">
                {offering.description}
              </p>
              
              <Button
                className="bg-primary hover:bg-primary/90 text-primary-foreground rounded-full px-6"
              >
                Read More
                <span className="ml-2">→</span>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

