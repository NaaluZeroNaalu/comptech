import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import logo from './logo.png';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/About-us' },
    { label: 'Services', href: '/Services-we-provide' },
    { label: 'Careers', href: '/careers' },
  ];

  return (
    <nav className="bg-white/95 backdrop-blur-lg fixed w-full top-0 left-0 z-50 border-b border-gray-100 shadow-[0_2px_12px_rgba(0,0,0,0.06)]">
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex items-center justify-between h-[72px]">

          {/* ================= LOGO ================= */}
          <div className="flex-shrink-0">
            <a
              href="/"
              className="flex items-center gap-2.5 group"
            >
              <img
                src={logo}
                alt="ComptechHeal Logo"
                className="h-11 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
              />

              {/* <span className="text-[25px] font-bold tracking-tight text-orange-500 transition-colors duration-300 group-hover:text-orange-600 hidden sm:inline">
                ComptechHeal
              </span> */}
            </a>
          </div>


          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden md:flex items-center gap-2">

            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="
                  relative
                  px-4
                  py-2
                  text-[15px]
                  font-medium
                  text-gray-700
                  transition-colors
                  duration-200
                  hover:text-orange-500
                  group
                "
              >
                {link.label}

                {/* Hover underline */}
                <span
                  className="
                    absolute
                    left-4
                    right-4
                    bottom-0
                    h-[2px]
                    bg-orange-500
                    scale-x-0
                    origin-center
                    transition-transform
                    duration-300
                    group-hover:scale-x-100
                  "
                />
              </a>
            ))}

          </div>


          {/* ================= CONTACT BUTTON ================= */}
          <div className="hidden md:block">

            <a
              href="/Connect-with-us"
              className="
                inline-flex
                items-center
                justify-center
                bg-orange-500
                hover:bg-orange-600
                text-white
                px-6
                py-2.5
                rounded-xl
                text-sm
                font-semibold
                shadow-[0_4px_12px_rgba(249,115,22,0.25)]
                hover:shadow-[0_6px_18px_rgba(249,115,22,0.35)]
                hover:-translate-y-0.5
                transition-all
                duration-200
              "
            >
              Contact Us
            </a>

          </div>


          {/* ================= MOBILE MENU BUTTON ================= */}
          <button
            onClick={toggleMenu}
            className="
              md:hidden
              inline-flex
              items-center
              justify-center
              p-2
              rounded-lg
              text-gray-700
              hover:text-orange-500
              hover:bg-orange-50
              focus:outline-none
              focus:ring-2
              focus:ring-orange-400
              transition-all
              duration-200
            "
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>

        </div>
      </div>


      {/* ================= MOBILE MENU ================= */}
      <div
        className={`
          md:hidden
          bg-white
          border-t
          border-gray-100
          shadow-lg
          transition-all
          duration-300
          overflow-hidden
          ${
            isOpen
              ? 'max-h-[500px] opacity-100'
              : 'max-h-0 opacity-0'
          }
        `}
      >

        <div className="px-4 py-4 space-y-1">

          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={closeMenu}
              className="
                block
                px-4
                py-3
                rounded-lg
                text-base
                font-medium
                text-gray-700
                hover:text-orange-500
                hover:bg-orange-50
                transition-colors
                duration-200
              "
            >
              {link.label}
            </a>
          ))}


          {/* Mobile Contact */}
          <a
            href="/Connect-with-us"
            onClick={closeMenu}
            className="
              block
              mt-3
              px-4
              py-3
              rounded-xl
              bg-orange-500
              hover:bg-orange-600
              text-white
              text-base
              font-semibold
              text-center
              shadow-md
              transition-all
              duration-200
            "
          >
            Contact Us
          </a>

        </div>
      </div>

    </nav>
  );
}