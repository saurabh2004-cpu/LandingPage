"use client"

import React from "react"
import { User, ShoppingCart, Store, MoreVertical, Phone, } from 'lucide-react'
import Link from "next/link"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { cn } from "@/lib/utils"
import AnimatedPhoneButton from "./Button"
import Button from "./Button"

const Navbar = () => {
  return (
    <nav className="absolute left-0 w-full bg-transparent text-white z-50 top-20 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-around px-6 py-2">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
            <Store className="h-4 w-4" />
          </div>
          <span className="text-xl font-semibold">Carefirst</span> 
        </Link>

        {/* Main Navigation */}
        <div className="hidden lg:flex items-center space-x-8 ">
          <NavigationMenu >
            <NavigationMenuList >
              <NavigationMenuItem >
                <NavigationMenuTrigger className="bg-transparent text-white  ">
                  <span className="flex items-center text-md font-semibold ">
                    Home
                  </span>
                </NavigationMenuTrigger >
                <NavigationMenuContent className="bg-[#023047] rounded-xl min-w-[200px] ">
                  <ul className="grid w-48 p-2 ">
                    <DropdownItem href="/" label="Home-Image" />
                    <DropdownItem href="/" label="Home-Video" />
                    <DropdownItem href="/" label="Home-Sidebar" />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/about" className="hover:text-gray-200 transition-colors text-sm font-semibold">
            About Us
          </Link>

          <Link href="/services" className="hover:text-gray-200 transition-colors  text-sm font-semibold">
            Services
          </Link>

          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-transparent hover:text-white">
                  <span className="flex items-center text-sm  font-semibold">
                    Pages
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent className="bg-[#023047] rounded-xl min-w-[200px] p-0">
                  <ul className="grid w-48 p-2">
                    <DropdownItem href="/" label="Service Details" />
                    <DropdownItem href="/" label="Our blog" />
                    <DropdownItem href="/" label="Blog Details" />
                    <DropdownItem href="/" label="Our Team" />
                    <DropdownItem href="/" label="Team Details" />
                    <DropdownItem href="/" label="Video testimonial" />
                    <DropdownItem href="/" label="FAQ's" />
                    <DropdownItem href="/" label="Book Appointment" />
                    <DropdownItem href="/" label="404" />
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/contact" className="hover:text-gray-200 transition-colors  text-sm font-semibold">
            Contact Us
          </Link>
        </div>

        {/* Contact Button */}
        <Button text={'+(123) 698-545'} icon={<Phone className="h-5 w-5" />}/>

        {/* Mobile Menu */}
        <div className="lg:hidden flex items-center space-x-4">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuTrigger className="bg-transparent text-white hover:bg-transparent hover:text-white">
                  <User className="h-5 w-5" />
                </NavigationMenuTrigger>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <Link href="/cart" className="text-white">
            <ShoppingCart className="h-5 w-5" />
          </Link>

          <button className="text-white">
            <MoreVertical className="h-5 w-5" />
          </button>
        </div>
      </div>
    </nav>
  )
}

interface DropdownItemProps {
  href: string;
  label: string;
}

const DropdownItem: React.FC<DropdownItemProps> = ({ href, label }) => {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "flex items-center px-4 py-2",
          "text-white hover:bg-[#1a3c64] transition-colors w-full "
        )}
      >
        <span>{label}</span>
      </Link>
    </li>
  )
}

export default Navbar

