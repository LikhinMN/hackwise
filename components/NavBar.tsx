'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 w-[calc(100%-2rem)] max-w-6xl flex items-center justify-between border border-slate-700 px-6 py-4 rounded-full text-white text-sm z-50 bg-black/20 backdrop-blur-sm">
      {/* Logo */}
      <Link href="https://prebuiltui.com">
        <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
          <circle cx="4.706" cy="16" r="4.706" fill="#D9D9D9" />
          <circle cx="16.001" cy="4.706" r="4.706" fill="#D9D9D9" />
          <circle cx="16.001" cy="27.294" r="4.706" fill="#D9D9D9" />
          <circle cx="27.294" cy="16" r="4.706" fill="#D9D9D9" />
        </svg>
      </Link>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-6">
        {['Products', 'Stories', 'Pricing', 'Docs'].map((item) => (
          <a
            key={item}
            href="#"
            className="relative overflow-hidden h-6 group"
          >
            <span className="block group-hover:-translate-y-full transition-transform duration-300">
              {item}
            </span>
            <span className="block absolute top-full left-0 group-hover:-translate-y-full transition-transform duration-300">
              {item}
            </span>
          </a>
        ))}
      </div>

      {/* Desktop Buttons */}
      <div className="hidden md:flex items-center gap-4">
        <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
          Contact
        </button>
        <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
          Get Started
        </button>
      </div>

      {/* Mobile Toggle */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden text-gray-300 transition-colors duration-200 hover:text-white"
      >
        <div className="relative w-6 h-6">
          <span 
            className={`absolute top-1 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
              isOpen ? 'rotate-45 translate-y-2' : ''
            }`}
          />
          <span 
            className={`absolute top-2.5 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
              isOpen ? 'opacity-0' : ''
            }`}
          />
          <span 
            className={`absolute top-4 left-0 w-6 h-0.5 bg-current transition-all duration-300 ease-in-out ${
              isOpen ? '-rotate-45 -translate-y-2' : ''
            }`}
          />
        </div>
      </button>

      {/* Mobile Menu */}
      <div className={`absolute top-20 left-0 bg-black/90 backdrop-blur-sm w-full flex flex-col items-center gap-4 py-6 border-t border-slate-800 text-base rounded-b-2xl transition-all duration-300 ease-in-out overflow-hidden ${
        isOpen 
          ? 'max-h-96 opacity-100 translate-y-0' 
          : 'max-h-0 opacity-0 -translate-y-4 pointer-events-none'
      }`}>
        <div className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'delay-100 opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <a className="hover:text-indigo-400 transition-colors duration-200" href="#">
            Products
          </a>
        </div>
        <div className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'delay-150 opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <a className="hover:text-indigo-400 transition-colors duration-200" href="#">
            Customer Stories
          </a>
        </div>
        <div className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'delay-200 opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <a className="hover:text-indigo-400 transition-colors duration-200" href="#">
            Pricing
          </a>
        </div>
        <div className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'delay-250 opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <a className="hover:text-indigo-400 transition-colors duration-200" href="#">
            Docs
          </a>
        </div>
        <div className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'delay-300 opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200">
            Contact
          </button>
        </div>
        <div className={`transition-all duration-300 ease-in-out ${
          isOpen ? 'delay-350 opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
        }`}>
          <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}
