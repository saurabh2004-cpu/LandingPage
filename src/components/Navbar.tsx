'use client';

import React, { useState } from "react";
import { Phone, Menu, X, ChevronDown } from 'lucide-react';
import Link from "next/link";
import Button from "./Button";
import { useRouter } from "next/navigation";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState<{ [key: string]: boolean }>({});
  const router = useRouter()

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const toggleSubmenu = (menu: string) => {
    setSubmenuOpen((prevState) => ({
      ...prevState,
      [menu]: !prevState[menu],
    }));
  };

  return (
    <nav className="absolute left-0 w-full bg-transparent text-white z-50 top-20 border-b border-white/10">
      <div className="container mx-auto flex items-center justify-between px-6 py-4 pr-12">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-2">
          <img
            src="https://demo.awaikenthemes.com/html-preview/carefirst/images/logo.svg"
            alt="Carefirst Logo"
            className="h-10 sm:h-12"
          />
        </Link>

        {/* Main Navigation (Desktop) */}
        <div className="hidden lg:flex items-center space-x-8">
          {/* Home Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-gray-200 transition-colors text-md font-semibold" onClick={() => router.push('/')}>
              <span>Home</span>
              <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-[#0B2C3D] rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-2">
                <Link href="/" className="block px-4 py-2 text-md bold hover:bg-white/10 transition-colors ">
                  Home - Image
                </Link>
                <Link href="/" className="block px-4 py-2 text-md bold hover:bg-white/10 transition-colors">
                  Home - Video
                </Link>
                <Link href="/" className="block px-4 py-2 text-md bold hover:bg-white/10 transition-colors">
                  Home - Slider
                </Link>
              </div>
            </div>
          </div>

          <Link href="/about" className="hover:text-gray-200 transition-colors text-md font-semibold">
            About Us
          </Link>

          <Link href="/services" className="hover:text-gray-200 transition-colors text-md font-semibold">
            Services
          </Link>

          {/* Pages Dropdown */}
          <div className="relative group">
            <button className="flex items-center space-x-1 hover:text-gray-200 transition-colors text-md font-semibold">
              <span>Pages</span>
              <ChevronDown className="h-4 w-4 group-hover:rotate-180 transition-transform" />
            </button>
            <div className="absolute top-full left-0 mt-2 w-48 bg-[#0B2C3D] rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
              <div className="py-2">
                <Link href="/service-details" className="block px-4 py-2 text-md bold hover:bg-white/10 transition-colors">
                  Service Details
                </Link>
                <Link href="/blogs" className="block px-4 py-2 text-md bold hover:bg-white/10 transition-colors">
                  Our Blog
                </Link>
                <Link href="/blog-details" className="block px-4 py-2 text-md bold hover:bg-white/10 transition-colors">
                  Blog Details
                </Link>
                <Link href="/our-team" className="block px-4 py-2 text-md bold hover:bg-white/10 transition-colors">
                  Our Team
                </Link>
                <Link href="/team-details" className="block px-4 py-2 text-md bold hover:bg-white/10 transition-colors">
                  Team Details
                </Link>
                <Link href="/video-testimonials" className="block px-4 py-2 text-md bold hover:bg-white/10 transition-colors">
                  Video Testimonials
                </Link>
                <Link href="/faq" className="block px-4 py-2 text-md bold hover:bg-white/10 transition-colors">
                  FAQ&apos;s
                </Link>
                <Link href="/book-appointment" className="block px-4 py-2 text-md bold hover:bg-white/10 transition-colors">
                  Book Appointment
                </Link>
                <Link href="/404" className="block px-4 py-2 text-md bold hover:bg-white/10 transition-colors">
                  404text-md bold
                </Link>
              </div>
            </div>
          </div>

          <Link href="/contact" className="hover:text-gray-200 transition-colors text-md font-semibold">
            Contact Us
          </Link>
        </div>

        {/* Contact Button */}
        <Button text={'+(123) 698-545'} icon={<Phone className="h-5 w-5" />} className="hidden lg:flex" />

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-white">
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="bg-black bg-opacity-90 lg:hidden fixed top-0 left-0 h-full w-[80%] z-40 text-white">
          <div className="flex justify-between items-center px-6 py-4">
            <Link href="/" className="flex items-center space-x-2">
              <img
                src="https://demo.awaikenthemes.com/html-preview/carefirst/images/logo.svg"
                alt="Carefirst Logo"
                className="h-10 sm:h-12"
              />
            </Link>
            <button onClick={toggleMobileMenu} className="text-white">
              <X className="h-6 w-6" />
            </button>
          </div>
          <ul className="flex flex-col space-y-4 px-6 py-6">
            {/* Home with Submenu */}
            <li>
              <button
                onClick={() => toggleSubmenu('home')}
                className="flex items-center justify-between w-full text-md font-semibold hover:text-gray-300"
              >
                Home
                <ChevronDown className={`h-4 w-4 transition-transform ${submenuOpen.home ? 'rotate-180' : ''}`} />
              </button>
              {submenuOpen.home && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link href="/" className="text-md hover:text-gray-300">
                      Home-Image
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-md hover:text-gray-300">
                      Home-Video
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-md hover:text-gray-300">
                      Home-Slider
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* About Us */}
            <li>
              <Link href="/AboutUs" className="text-md font-semibold hover:text-gray-300">
                About Us
              </Link>
            </li>

            {/* Services */}
            <li>
              <Link href="/services" className="text-md font-semibold hover:text-gray-300">
                Services
              </Link>
            </li>

            {/* Pages with Submenu */}
            <li>
              <button
                onClick={() => toggleSubmenu('pages')}
                className="flex items-center justify-between w-full text-md font-semibold hover:text-gray-300"
              >
                Pages
                <ChevronDown className={`h-4 w-4 transition-transform ${submenuOpen.pages ? 'rotate-180' : ''}`} />
              </button>
              {submenuOpen.pages && (
                <ul className="mt-2 ml-4 space-y-2">
                  <li>
                    <Link href="/" className="text-md hover:text-gray-300">
                      Service Details
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-md hover:text-gray-300">
                      Our Blog
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-md hover:text-gray-300">
                      Blog Details
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-md hover:text-gray-300">
                      Our Team
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-md hover:text-gray-300">
                      FAQ&apos;s
                    </Link>
                  </li>
                  <li>
                    <Link href="/" className="text-md hover:text-gray-300">
                      Book Appointment
                    </Link>
                  </li>
                </ul>
              )}
            </li>

            {/* Contact Us */}
            <li>
              <Link href="/ContactUs" className="text-md font-semibold hover:text-gray-300">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

