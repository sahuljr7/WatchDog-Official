import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-gray-300 py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {/* Products Column */}
          <div>
            <h2 className="text-[#4cd137] text-xl font-semibold mb-6">PRODUCTS</h2>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-[#4cd137] transition-colors">
                  CCTV Camera
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#4cd137] transition-colors">
                  Video Recoder
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#4cd137] transition-colors">
                  Network Switches
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#4cd137] transition-colors">
                  (VMS) Video Management System & Video Analytics
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#4cd137] transition-colors">
                  (FRS) Face Recognition System
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#4cd137] transition-colors">
                  Visitor Management System
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#4cd137] transition-colors">
                  Fiber Module (SFP)
                </Link>
              </li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h2 className="text-[#4cd137] text-xl font-semibold mb-6">SOLUTIONS</h2>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="hover:text-[#4cd137] transition-colors">
                  City Public Area
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#4cd137] transition-colors">
                  Shoping & Retail
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#4cd137] transition-colors">
                  Government Sector
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#4cd137] transition-colors">
                  Banking
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#4cd137] transition-colors">
                  Education Institute
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-[#4cd137] transition-colors">
                  Hospitality
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us Column */}
          <div>
            <h2 className="text-[#4cd137] text-xl font-semibold mb-6">CONTACT US</h2>
            <div className="space-y-6">
              <div>
                <p className="font-semibold mb-2">Corporate Office:</p>
                <p>H-113, H Block, Sector-63</p>
                <p>Noida, UP: 201301</p>
              </div>

              <div>
                <p className="mb-2">Call us: <Link href="tel:+911204123342" className="hover:text-[#4cd137] transition-colors">+91-120-4123342</Link></p>
                <p className="mb-2">Toll Free: <Link href="tel:18003099415" className="hover:text-[#4cd137] transition-colors">18003099415</Link></p>
                <p>E-mail: <Link href="mailto:info@mywatchdog.in" className="hover:text-[#4cd137] transition-colors">info@mywatchdog.in</Link></p>
              </div>

              <div>
                <p className="font-semibold mb-2">RMA & Service Centre:</p>
                <p>G-149, G-Block , Noida,</p>
                <p>UP : 201301,India</p>
              </div>

              <div>
                <p className="font-semibold mb-2">Service Centre in Odhisa</p>
                <p>K-11, Ruchika Market,</p>
                <p>Bhubaneswar, Odhisa: 751003</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Copyright Text */}
        <div className="text-center mt-12 pt-8 border-t border-gray-800">
          <p className="text-sm text-gray-400">Copyright © 2024 mywatchdog.in</p>
        </div>
      </div>
    </footer>
  )
}

