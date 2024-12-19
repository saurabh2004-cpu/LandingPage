'use client'

import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Youtube } from 'lucide-react'

export function TopBar() {
  return (
    <div className="w-full bg-[#003344] text-white px-4 py-4 font-m">
      <div className="container mx-auto flex items-center justify-around mb-16 ">
        <div className="flex items-center space-x-6 text-md relative l-4 ">
          <Link
            href="tel:+1234698-5245"
            className="flex items-center gap-2 hover:text-gray-200"
          >
            <Phone className="h-4 w-4" />
            <span>+(123) 698-5245</span>
          </Link>

          <Link
            href="mailto:info@domain.com"
            className="flex items-center gap-2 hover:text-gray-200"
          >
            <Mail className="h-4 w-4" />
            <span>info@domain.com</span>
          </Link>

          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>24/11 Robert Road, New York, USA</span>
          </div>
        </div>

        <div className="flex items-center space-x-4 text-md">
          <Link
            href="https://facebook.com"
            target="_blank"
            className="hover:text-gray-500 transition-colors duration-300 ease-in-out"
          >
            <Facebook className="h-5 w-6 transition-transform duration-300 ease-in-out " />
            <span className="sr-only">Facebook</span>
          </Link>

          <Link
            href="https://twitter.com"
            target="_blank"
            className="hover:text-gray-500 transition-colors duration-300 ease-in-out"
          >
            <Twitter className="h-5 w-6 transition-transform duration-300 ease-in-out " />
            <span className="sr-only">Twitter</span>
          </Link>

          <Link
            href="https://instagram.com"
            target="_blank"
            className="hover:text-gray-500 transition-colors duration-300 ease-in-out"
          >
            <Instagram className="h-5 w-6 transition-transform duration-300 ease-in-out " />
            <span className="sr-only">Instagram</span>
          </Link>

          <Link
            href="https://youtube.com"
            target="_blank"
            className="hover:text-gray-500 transition-colors duration-300 ease-in-out"
          >
            <Youtube className="h-5 w-6 transition-transform duration-300 ease-in-out " />
            <span className="sr-only">YouTube</span>
          </Link>
        </div>


      </div>
    </div>
  )
}
