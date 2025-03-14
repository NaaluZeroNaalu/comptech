import { useState } from 'react'
import logo from "./logo.png"

function Header(){
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

    return(

        <>
        <nav className="bg-white/90 backdrop-blur-md fixed w-full top-0 left-0 z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex items-center">
              <img src={logo} alt="ComptechHeal Logo" className="h-10 w-auto" />
              <span className="text-2xl font-bold text-orange-500 ml-2 hidden sm:inline">ComptechHeal</span>
            </a>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            <a href="/" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
              Home
            </a>
            <a href="/About-us" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
              About
            </a>
            <a href="/Services-we-provide" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
              Services
            </a>
            {/* <a href="/careers" className="text-gray-700 hover:text-orange-500 px-3 py-2 text-sm font-medium transition-colors">
              Careers
            </a> */}
            <a
            style={{textDecoration:"none"}}
              href="/Connect-with-us"
              className="bg-orange-500 text-white hover:bg-orange-600 px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-orange-500 hover:text-orange-600 hover:bg-orange-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 bg-white shadow-lg">
          <a
            href="/"
            className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Home
          </a>
          <a
            href="/About-us"
            className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            About
          </a>
          <a
            href="/Services-we-provide"
            className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Services
          </a>
          <a
            href="/careers"
            className="text-gray-700 hover:text-orange-500 hover:bg-orange-50 block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Careers
          </a>
          <a
          style={{textDecoration:"none"}}
            href="/Connect-with-us"
            className="text-white bg-orange-500 hover:bg-orange-600 block px-3 py-2 rounded-md text-base font-medium transition-colors"
          >
            Contact Us
          </a>
        </div>
      </div>
    </nav>
        </>
    )
}

export default Header;