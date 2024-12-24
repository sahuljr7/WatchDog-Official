'use client'

import { useState } from 'react'
import { useForm, Controller } from 'react-hook-form'
import { z } from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Select } from '@/components/ui/select'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert'
import { CheckCircle2 } from 'lucide-react'

const formSchema = z.object({
  companyName: z.string().min(1, { message: "Company Name is required" }),
  country: z.string().min(1, { message: "Country is required" }),
  state: z.string().min(1, { message: "State is required" }),
  city: z.string().min(1, { message: "City is required" }),
  phone: z.string().optional(),
  email: z.string().email({ message: "Invalid email address" }),
  areaOfInterest: z.string().min(1, { message: "Area of Interest is required" }),
  currentBusiness: z.string().optional(),
  annualTurnover: z.number().min(0, { message: "Annual Turnover cannot be negative" }),
  query: z.string().optional(),
})

type FormData = z.infer<typeof formSchema>

const countries = [
  "United States",
  "Canada",
  "United Kingdom",
  "Australia",
  "Germany",
  "France",
  "Japan",
  "India",
  // Add more countries as needed
]

const areasOfInterest = [
  "CCTV Surveillance",
  "Access Control",
  "Video Door Phone",
  "Entrance Management System",
  "Others",
]

export default function PartnerPage() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const { register, handleSubmit, control, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      annualTurnover: 100000,
    },
  })

  const onSubmit = (data: FormData) => {
    console.log(data)
    setIsSubmitted(true)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Become a Partner</h1>
      
      {isSubmitted ? (
        <Alert className="mb-8">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Success</AlertTitle>
          <AlertDescription>
            Your partner application has been submitted successfully. We will contact you soon.
          </AlertDescription>
        </Alert>
      ) : (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <Label htmlFor="companyName">Company Name*</Label>
              <Input id="companyName" {...register("companyName")} />
              {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName.message}</p>}
            </div>
            
            <div>
              <Label htmlFor="country">Country*</Label>
              <Controller
                name="country"
                control={control}
                render={({ field }) => (
                  <Select {...field}>
                    <option value="">Select Country</option>
                    {countries.map((country) => (
                      <option key={country} value={country}>{country}</option>
                    ))}
                  </Select>
                )}
              />
              {errors.country && <p className="text-red-500 text-sm mt-1">{errors.country.message}</p>}
            </div>
            
            <div>
              <Label htmlFor="state">State*</Label>
              <Input id="state" {...register("state")} />
              {errors.state && <p className="text-red-500 text-sm mt-1">{errors.state.message}</p>}
            </div>
            
            <div>
              <Label htmlFor="city">City*</Label>
              <Input id="city" {...register("city")} />
              {errors.city && <p className="text-red-500 text-sm mt-1">{errors.city.message}</p>}
            </div>
            
            <div>
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" {...register("phone")} />
            </div>
            
            <div>
              <Label htmlFor="email">Email*</Label>
              <Input id="email" type="email" {...register("email")} />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>
            
            <div>
              <Label htmlFor="areaOfInterest">Area of Interest*</Label>
              <Controller
                name="areaOfInterest"
                control={control}
                render={({ field }) => (
                  <Select {...field}>
                    <option value="">Select Area of Interest</option>
                    {areasOfInterest.map((area) => (
                      <option key={area} value={area}>{area}</option>
                    ))}
                  </Select>
                )}
              />
              {errors.areaOfInterest && <p className="text-red-500 text-sm mt-1">{errors.areaOfInterest.message}</p>}
            </div>
          </div>
          
          <div>
            <Label htmlFor="currentBusiness">Current Business</Label>
            <Input id="currentBusiness" {...register("currentBusiness")} />
          </div>
          
          <div>
            <Label htmlFor="annualTurnover">Annual Turnover</Label>
            <Controller
              name="annualTurnover"
              control={control}
              render={({ field }) => (
                <div className="flex items-center">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => field.onChange(Math.max(0, field.value - 10000))}
                  >
                    -
                  </Button>
                  <Input
                    id="annualTurnover"
                    type="number"
                    className="mx-2 text-center"
                    {...field}
                    onChange={(e) => field.onChange(Number(e.target.value))}
                  />
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => field.onChange(field.value + 10000)}
                  >
                    +
                  </Button>
                </div>
              )}
            />
            {errors.annualTurnover && <p className="text-red-500 text-sm mt-1">{errors.annualTurnover.message}</p>}
          </div>
          
          <div>
            <Label htmlFor="query">Query or Comments</Label>
            <Textarea id="query" {...register("query")} />
          </div>
          
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      )}
    </div>
  )
}

