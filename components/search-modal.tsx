'use client'

import { useState, useEffect } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Search, X } from 'lucide-react'

type SearchResult = {
  title: string
  url: string
}

export function SearchModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
  const [searchTerm, setSearchTerm] = useState('')
  const [results, setResults] = useState<SearchResult[]>([])

  useEffect(() => {
    if (searchTerm) {
      // This is a mock search function. In a real application, you'd call your backend API here.
      const mockSearch = async () => {
        const mockResults = [
          { title: 'Home', url: '/' },
          { title: 'About Us', url: '/about' },
          { title: 'Products', url: '/products' },
          { title: 'Services', url: '/services' },
        ].filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()))
        setResults(mockResults)
      }
      mockSearch()
    } else {
      setResults([])
    }
  }, [searchTerm])

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Search</DialogTitle>
        </DialogHeader>
        <div className="flex items-center border-b pb-4">
          <Search className="mr-2 h-5 w-5" />
          <Input
            type="text"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow"
          />
          <Button variant="ghost" onClick={onClose} className="ml-2">
            <X className="h-5 w-5" />
          </Button>
        </div>
        <div className="mt-4">
          {results.map((result, index) => (
            <a
              key={index}
              href={result.url}
              className="block p-2 hover:bg-accent rounded-md"
              onClick={onClose}
            >
              {result.title}
            </a>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}

