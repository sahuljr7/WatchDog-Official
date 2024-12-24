import { Button } from "@/components/ui/button"

const products = [
  { title: "Product 1", description: "Description for Product 1" },
  { title: "Product 2", description: "Description for Product 2" },
  { title: "Product 3", description: "Description for Product 3" },
  { title: "Product 4", description: "Description for Product 4" },
  { title: "Product 5", description: "Description for Product 5" },
  { title: "Product 6", description: "Description for Product 6" },
  { title: "Product 7", description: "Description for Product 7" },
  { title: "Product 8", description: "Description for Product 8" },
]

export default function DatasheetPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">
        Watchdog Video Surveillance Solution Provider
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product, index) => (
          <div key={index} className="border rounded-lg p-4 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">{product.title}</h2>
            <p className="text-gray-600 mb-4">{product.description}</p>
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

