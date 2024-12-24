import { Button } from "@/components/ui/button"

const software = [
  {
    title: "Watchdog VMS",
    description: "Video Management Software for comprehensive surveillance solutions."
  },
  {
    title: "Watchdog Analytics",
    description: "Advanced video analytics software for intelligent monitoring."
  }
]

export default function SoftwarePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Software</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {software.map((item, index) => (
          <div key={index} className="border rounded-lg p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>
            <p className="text-gray-600 mb-6">{item.description}</p>
            <Button
              className="w-full"
              onClick={() => window.location.href = '/download'}
            >
              Download
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}

