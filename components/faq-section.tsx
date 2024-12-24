'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { AnimatedSection } from '@/components/ui/animated-section'

const faqs = [
  {
    question: "What types of security solutions do you offer?",
    answer: "We offer a comprehensive range of security solutions including CCTV surveillance, access control systems, video management software, facial recognition systems, and networking equipment. Our solutions cater to various sectors including retail, banking, education, and government institutions."
  },
  {
    question: "Do you provide installation and maintenance services?",
    answer: "Yes, we provide professional installation services and ongoing maintenance support for all our security systems. Our team of certified technicians ensures proper setup and regular maintenance to keep your security infrastructure running smoothly."
  },
  {
    question: "What makes WatchDog different from other security providers?",
    answer: "WatchDog stands out through our innovative AI-powered solutions, comprehensive product range, and dedicated customer support. We offer customized solutions tailored to specific industry needs and maintain high standards of quality and reliability."
  },
  {
    question: "How can I become a WatchDog partner?",
    answer: "You can become a WatchDog partner by filling out our partner application form. We offer various partnership programs including reseller, system integrator, and technology partner options. Visit our Partner page for more information."
  },
  {
    question: "What warranty do you offer on your products?",
    answer: "We offer comprehensive warranty coverage on all our products. The specific warranty period varies by product type, typically ranging from 1-3 years. Extended warranty options are also available for select products."
  }
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <AnimatedSection>
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gradient bg-gradient-to-r from-primary to-blue-600">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-accent transition-colors"
                >
                  <span className="font-medium text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`h-5 w-5 transition-transform ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0 }}
                      animate={{ height: "auto" }}
                      exit={{ height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 py-4 bg-accent/50">
                        <p className="text-muted-foreground text-lg">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </AnimatedSection>
  )
}

