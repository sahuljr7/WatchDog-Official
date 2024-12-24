'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { ChevronDown, Menu, Search, X } from 'lucide-react'
import { Button } from '@/components/ui/button'

const navItems = [
  { name: 'Home', href: '/' },
  {
    name: 'Product',
    href: '#',
    submenu: ['Product 1', 'Product 2', 'Product 3']
  },
  {
    name: 'Solutions',
    href: '#',
    submenu: ['Solution 1', 'Solution 2', 'Solution 3']
  },
  {
    name: 'Resource',
    href: '#',
    submenu: ['Resource 1', 'Resource 2', 'Resource 3']
  },
  {
    name: 'Media',
    href: '#',
    submenu: ['Media 1', 'Media 2', 'Media 3']
  },
  { name: 'Partner', href: '#' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)

  return (
    <nav className="bg-white sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/placeholder.svg"
                alt="WatchDog Logo"
                width={180}
                height={60}
                className="h-12 w-auto"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => setActiveSubmenu(item.name)}
                onMouseLeave={() => setActiveSubmenu(null)}
              >
                <Link
                  href={item.href}
                  className="text-gray-700 hover:text-green-500 px-3 py-2 text-sm font-medium flex items-center"
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>

                {item.submenu && activeSubmenu === item.name && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <Link
                          key={subItem}
                          href="#"
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                        >
                          {subItem}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="flex items-center space-x-4">
              <Link 
                href="tel:18003099415"
                className="text-gray-700 hover:text-green-500 px-3 py-2 text-sm font-medium"
              >
                Toll Free 18003099415
              </Link>
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-700 hover:text-green-500"
              >
                <Search className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navItems.map((item) => (
              <div key={item.name}>
                <Button
                  variant="ghost"
                  className="w-full text-left justify-start"
                  onClick={() => setActiveSubmenu(activeSubmenu === item.name ? null : item.name)}
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className={`ml-2 h-4 w-4 transform transition-transform ${
                      activeSubmenu === item.name ? 'rotate-180' : ''
                    }`} />
                  )}
                </Button>
                {item.submenu && activeSubmenu === item.name && (
                  <div className="pl-4 space-y-1">
                    {item.submenu.map((subItem) => (
                      <Link
                        key={subItem}
                        href="#"
                        className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="tel:18003099415"
              className="block px-3 py-2 text-sm text-gray-700 hover:bg-gray-100 rounded-md"
            >
              Toll Free 18003099415
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

