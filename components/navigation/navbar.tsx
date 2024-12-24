'use client'

import Link from 'next/link'
import Image from 'next/image'
import { useState, useEffect } from 'react'
import { ChevronDown, Menu, Search, X, Sun, Moon } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { SearchModal } from '@/components/search-modal'
import { useTheme } from 'next-themes'

type SubMenuItem = {
  name: string;
  href: string;
  submenu?: SubMenuItem[];
}

type NavItem = {
  name: string;
  href: string;
  submenu?: SubMenuItem[];
}

const navItems: NavItem[] = [
  { name: 'Home', href: '/' },
  {
    name: 'Product',
    href: '#',
    submenu: [
      {
        name: 'Surveillance',
        href: '#surveillance',
        submenu: [
          {
            name: 'CCTV',
            href: '#cctv',
            submenu: [
              { name: 'IP Camera', href: '#ip-camera' },
              { name: 'Motorized Lens IP', href: '#motorized-lens-ip' },
              { name: '5 MP IP Camera', href: '#5mp-ip-camera' },
              { name: '8 MP IP Camera', href: '#8mp-ip-camera' },
              { name: '4 MP IP Camera', href: '#4mp-ip-camera' },
              { name: '3 MP IP Camera', href: '#3mp-ip-camera' },
              { name: '2 MP IP Camera', href: '#2mp-ip-camera' },
              { name: '12 MP IP Camera', href: '#12mp-ip-camera' },
              { name: 'Motorized Lens', href: '#motorized-lens' },
              { name: 'AHD Camera', href: '#ahd-camera' },
              { name: '5 MP HD Camera', href: '#5mp-hd-camera' },
              { name: '2 MP HD Camera', href: '#2mp-hd-camera' },
              { name: '1.3 MP HD Camera', href: '#1.3mp-hd-camera' },
              { name: '1 MP HD Camera', href: '#1mp-hd-camera' },
              { name: '180 Fishlight', href: '#180-fishlight' },
              { name: '12 MP Multisensor', href: '#12mp-multisensor' },
              { name: 'Panoramic IP Camera', href: '#panoramic-ip-camera' },
            ]
          },
          { name: 'Video Recorder', href: '#video-recorder' },
          { name: 'VA/VMS', href: '#va-vms' },
          { name: 'FRS', href: '#frs' },
          { name: 'ITMS Solution', href: '#itms-solution' },
        ]
      },
      {
        name: 'Networking',
        href: '#networking',
        submenu: [
          { name: 'Core Switches', href: '#core-switches' },
          { name: 'Data Center Core', href: '#data-center-core' },
          { name: 'Access Switch', href: '#access-switch' },
          { name: 'Distribution Switch', href: '#distribution-switch' },
          { name: 'PoE Switch', href: '#poe-switch' },
          { name: 'Industrial Switch', href: '#industrial-switch' },
          { name: 'Routers', href: '#routers' },
          { name: 'WiFi Access Point', href: '#wifi-access-point' },
          { name: 'Fiber Module(SFP)', href: '#fiber-module' },
        ]
      },
    ]
  },
  {
    name: 'Solutions',
    href: '#',
    submenu: [
      { name: 'City Public Area', href: '/solutions/city-public-area' },
      { name: 'Shopping & Retail', href: '/solutions/shopping-retail' },
      { name: 'Government Sector', href: '/solutions/government-sector' },
      { name: 'Banking', href: '/solutions/banking' },
      { name: 'Education Institute', href: '/solutions/education-institute' },
      { name: 'Hospitality', href: '/solutions/hospitality' },
    ]
  },
  {
    name: 'Resource',
    href: '#',
    submenu: [
      { name: 'Brochure', href: '/resource/brochure' },
      { name: 'Datasheet', href: '/resource/datasheet' },
      { name: 'Certificates', href: '/resource/certificates' },
      { name: 'Software', href: '/resource/software' },
      { name: 'Warranty', href: '/resource/warranty' },
    ]
  },
  {
    name: 'Media',
    href: '#',
    submenu: [
      { name: 'Gallery', href: '/media/gallery' },
      { name: 'News', href: '/media/news' },
    ]
  },
  { name: 'Partner', href: '/partner' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null)
  const [activeNestedSubmenu, setActiveNestedSubmenu] = useState<string | null>(null)
  const [activeDeepNestedSubmenu, setActiveDeepNestedSubmenu] = useState<string | null>(null)
  const [isSearchOpen, setIsSearchOpen] = useState(false)
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark')
  }

  return (
    <nav className="bg-background sticky top-0 z-50 shadow-sm">
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
                className="relative group"
                onMouseEnter={() => setActiveSubmenu(item.name)}
                onMouseLeave={() => {
                  setActiveSubmenu(null)
                  setActiveNestedSubmenu(null)
                }}
              >
                <Link
                  href={item.href}
                  className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium flex items-center"
                >
                  {item.name}
                  {item.submenu && (
                    <ChevronDown className="ml-1 h-4 w-4" />
                  )}
                </Link>

                {item.submenu && activeSubmenu === item.name && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5">
                    <div className="py-1">
                      {item.submenu.map((subItem) => (
                        <div
                          key={subItem.name}
                          className="relative group/nested"
                          onMouseEnter={() => setActiveNestedSubmenu(subItem.name)}
                          onMouseLeave={() => setActiveNestedSubmenu(null)}
                        >
                          <Link
                            href={subItem.href}
                            className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground flex items-center justify-between"
                          >
                            {subItem.name}
                            {subItem.submenu && (
                              <ChevronDown className="ml-2 h-4 w-4" />
                            )}
                          </Link>

                          {subItem.submenu && activeNestedSubmenu === subItem.name && (
                            <div className="absolute left-full top-0 w-48 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5">
                              <div className="py-1">
                                {subItem.submenu.map((nestedItem) => (
                                  <div
                                    key={nestedItem.name}
                                    className="relative group/nested2"
                                  >
                                    <Link
                                      href={nestedItem.href}
                                      className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground flex items-center justify-between"
                                    >
                                      {nestedItem.name}
                                      {nestedItem.submenu && (
                                        <ChevronDown className="ml-2 h-4 w-4" />
                                      )}
                                    </Link>

                                    {nestedItem.submenu && (
                                      <div className="absolute left-full top-0 w-48 rounded-md shadow-lg bg-background ring-1 ring-black ring-opacity-5">
                                        <div className="py-1">
                                          {nestedItem.submenu.map((deepNestedItem) => (
                                            <Link
                                              key={deepNestedItem.name}
                                              href={deepNestedItem.href}
                                              className="block px-4 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground"
                                            >
                                              {deepNestedItem.name}
                                            </Link>
                                          ))}
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}

            <div className="flex items-center space-x-4">
              <Link 
                href="tel:18003099415"
                className="text-foreground hover:text-primary px-3 py-2 text-sm font-medium"
              >
                Toll Free 18003099415
              </Link>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsSearchOpen(true)}
                className="text-foreground hover:text-primary"
              >
                <Search className="h-5 w-5" />
              </Button>
              <Button
                variant="ghost"
                size="icon"
                onClick={toggleTheme}
                className="text-foreground hover:text-primary"
              >
                {mounted && (theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />)}
              </Button>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
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
                      <div key={subItem.name}>
                        {subItem.submenu ? (
                          <>
                            <Button
                              variant="ghost"
                              className="w-full text-left justify-start pl-4"
                              onClick={() => setActiveNestedSubmenu(activeNestedSubmenu === subItem.name ? null : subItem.name)}
                            >
                              {subItem.name}
                              <ChevronDown className={`ml-2 h-4 w-4 transform transition-transform ${
                                activeNestedSubmenu === subItem.name ? 'rotate-180' : ''
                              }`} />
                            </Button>
                            {activeNestedSubmenu === subItem.name && (
                              <div className="pl-8 space-y-1">
                                {subItem.submenu.map((nestedItem) => (
                                  <div key={nestedItem.name}>
                                    {nestedItem.submenu ? (
                                      <>
                                        <Button
                                          variant="ghost"
                                          className="w-full text-left justify-start pl-4"
                                          onClick={() => setActiveDeepNestedSubmenu(activeDeepNestedSubmenu === nestedItem.name ? null : nestedItem.name)}
                                        >
                                          {nestedItem.name}
                                          <ChevronDown className={`ml-2 h-4 w-4 transform transition-transform ${
                                            activeDeepNestedSubmenu === nestedItem.name ? 'rotate-180' : ''
                                          }`} />
                                        </Button>
                                        {activeDeepNestedSubmenu === nestedItem.name && (
                                          <div className="pl-12 space-y-1">
                                            {nestedItem.submenu.map((deepNestedItem) => (
                                              <Link
                                                key={deepNestedItem.name}
                                                href={deepNestedItem.href}
                                                className="block px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
                                              >
                                                {deepNestedItem.name}
                                              </Link>
                                            ))}
                                          </div>
                                        )}
                                      </>
                                    ) : (
                                      <Link
                                        href={nestedItem.href}
                                        className="block px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
                                      >
                                        {nestedItem.name}
                                      </Link>
                                    )}
                                  </div>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <Link
                            href={subItem.href}
                            className="block px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
                          >
                            {subItem.name}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <Link
              href="tel:18003099415"
              className="block px-3 py-2 text-sm text-foreground hover:bg-accent hover:text-accent-foreground rounded-md"
            >
              Toll Free 18003099415
            </Link>
            <Button
              variant="ghost"
              onClick={() => setIsSearchOpen(true)}
              className="w-full text-left justify-start"
            >
              <Search className="mr-2 h-5 w-5" />
              Search
            </Button>
            <Button
              variant="ghost"
              onClick={toggleTheme}
              className="w-full text-left justify-start"
            >
              {mounted && (theme === 'dark' ? <Sun className="mr-2 h-5 w-5" /> : <Moon className="mr-2 h-5 w-5" />)}
              {mounted && (theme === 'dark' ? 'Light Mode' : 'Dark Mode')}
            </Button>
          </div>
        </div>
      )}

      <SearchModal isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
    </nav>
  )
}

