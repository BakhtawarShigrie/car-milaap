"use client"; // Yeh likhna zaroori hai kyunke hum hooks (useState, useEffect) use kar rahe hain

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Agar user 100px se zyada scroll karta hai, toh navbar show kar do
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        // Agar wapis top par aa jaye, toh hide kar do
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    // Memory leak se bachne ke liye cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      // yahan Tailwind classes se smooth animation aur show/hide logic handle ho rahi hai
      className={`fixed w-full z-50 transition-all duration-500 ease-in-out ${
        isScrolled ? 'top-0 opacity-100 shadow-md' : '-top-[100%] opacity-0'
      } bg-white`}
    >
      <div className="flex items-center justify-between px-6 py-3 max-w-7xl mx-auto">
        
        {/* 1. Logo Section */}
        <div className="flex flex-col items-start">
          <Link href="/" className="text-3xl font-black text-red-600 tracking-wider leading-none">
            CarMilaap
          </Link>
          {/* Maine NGF wali subtitle hata di hai, agar aapko koi aur subtitle (jaise 'Your Auto Partner') chahiye toh yahan add kar sakte hain */}
        </div>

        {/* 2. Navigation Links Section */}
        <nav className="hidden md:flex items-center gap-8 text-[15px] font-bold text-gray-800">
          <Link href="#" className="text-red-600 hover:text-red-800 transition-colors">
            Our Mission
          </Link>
          <Link href="#" className="hover:text-red-600 transition-colors">
            Updates
          </Link>
          <Link href="#" className="hover:text-red-600 transition-colors">
            News
          </Link>
          <Link href="#" className="hover:text-red-600 transition-colors">
            Media
          </Link>
          <Link href="#" className="hover:text-red-600 transition-colors">
            Join Us
          </Link>
        </nav>

        {/* 3. Action Button Section */}
        <div className="flex items-center gap-6">
          <Link href="#" className="bg-red-600 text-white px-6 py-2.5 rounded text-sm font-bold hover:bg-red-700 transition-all shadow-sm">
            About Us
          </Link>
        </div>

      </div>
    </header>
  );
}