"use client";
import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import Button from './Button';  // Assuming you have a Button component
import { NAV_LINKS } from '../constants';  // Assuming your nav links are stored here

const Navbar = () => {
  // State to manage mobile menu visibility
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu visibility
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu after clicking an option
  const handleMenuItemClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <nav className="w-full bg-white flex items-center justify-between shadow-lg px-6 py-4 lg:px-10 lg:py-6 relative z-20">
        {/* Logo and Name */}
        <Link href="/" className="flex items-center">
          <Image src="/logo.jpg" alt="Madan Bairi Logo" width={50} height={50} />
          <div className="ml-3">
            <span className="text-2xl font-bold text-gray-800">MADAM BAIRI</span>
            <div className="text-sm text-gray-600">Research Based Education</div>
          </div>
        </Link>

        {/* Navigation Links */}
        <div className="hidden lg:flex flex-grow justify-center">
          <ul className="flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <li key={link.key} className="group">
                <Link href={link.href} className="text-gray-700 font-semibold text-lg transition-colors duration-300 hover:text-green-600 hover:bg-green-100 py-2 px-4 rounded-lg">
                  {link.label}
                </Link>
                <div className="h-0.5 bg-transparent group-hover:bg-green-600 transition-all duration-300"></div>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Menu Icon */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            className="focus:outline-none"
          >
            <Image src="/menu.svg" alt="Menu" width={28} height={28} className="cursor-pointer" />
          </button>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      <div className={`transition-all duration-300 ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0 overflow-hidden'}`}>
        <ul className="flex flex-col items-center gap-4 py-4 bg-white shadow-lg">
          {NAV_LINKS.map((link) => (
            <li key={link.key} className="w-full text-center">
              <Link href={link.href} 
                className="text-gray-700 block w-full py-2 px-4 rounded-lg transition-colors duration-300 hover:bg-green-600 hover:text-white" 
                onClick={handleMenuItemClick}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
