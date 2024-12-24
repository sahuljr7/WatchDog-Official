'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectTrigger, SelectContent, SelectItem } from "@/components/ui/select"

const productWarranties = [
  {
    title: "Standard Warranty",
    description: "Our standard warranty covers all manufacturing defects for a period of 1 year from the date of purchase."
  },
  {
    title: "Extended Warranty",
    description: "Extended warranty options are available for up to 3 years, providing additional peace of mind and protection for your investment."
  }
]

const productNames = ["CCTV Camera", "Network Switch", "DVR", "NVR"]

export default function WarrantyPage() {
  const [productName, setProductName] = useState("")
  const [modelNo, setModelNo] = useState("")
  const [serialNo, setSerialNo] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", { productName, modelNo, serialNo })
    // Here you would typically send this data to your backend
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Warranty Information</h1>
      
      {productWarranties.map((warranty, index) => (
        <div key={index} className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">{warranty.title}</h2>
          <p className="text-gray-600">{warranty.description}</p>
        </div>
      ))}

      <div className="mt-12">
        <h2 className="text-2xl font-semibold mb-4">Warranty Details</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="productName" className="block text-sm font-medium text-gray-700">
              Product Name*
            </label>
            <Select onValueChange={(value) => setProductName(value)} required>
              <SelectTrigger id="productName" className="w-full">
                {productName || "Select a product"}
              </SelectTrigger>
              <SelectContent>
                {productNames.map((name) => (
                  <SelectItem key={name} value={name}>
                    {name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label htmlFor="modelNo" className="block text-sm font-medium text-gray-700">
              Model No.*
            </label>
            <Input
              id="modelNo"
              value={modelNo}
              onChange={(e) => setModelNo(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="serialNo" className="block text-sm font-medium text-gray-700">
              Serial No.*
            </label>
            <Input
              id="serialNo"
              value={serialNo}
              onChange={(e) => setSerialNo(e.target.value)}
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Get Details
          </Button>
        </form>
      </div>
    </div>
  )
}
