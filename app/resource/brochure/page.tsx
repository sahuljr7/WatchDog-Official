import { Button } from "@/components/ui/button"

export default function BrochurePage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Watchdog Video Surveillance Solution Provider
      </h1>
      <div className="flex justify-center">
        <Button
          className="bg-blue-500 hover:bg-blue-600 text-white"
          onClick={() => window.location.href = '/download'}
        >
          Download
        </Button>
      </div>
    </div>
  )
}

