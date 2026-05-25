"use client";

import Link from 'next/link';
import { useState } from 'react';

export default function Hero() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Aap chahein toh baad mein is picture ko kisi aisi picture se change kar sakte hain 
  // jisme car ke aage QR sticker laga ho, abhi ke liye main wahi purani picture rakh raha hoon.
  const cloudinaryImageUrl = 'https://res.cloudinary.com/duhpsw6he/image/upload/v1779707106/quilia-orGJcWVI6js-unsplash_iklu0m.jpg';

  return (
    <section className="w-full bg-gray-50 pt-4 sm:pt-6 lg:pt-8 pb-16 md:pb-24">
      
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div 
          className="relative h-[95vh] sm:h-[80vh] md:h-[90vh] w-full rounded-2xl md:rounded-3xl overflow-hidden shadow-xl"
          style={{
            backgroundImage: `url('${cloudinaryImageUrl}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/50 z-10"></div>

          {/* === Hero Navbar === */}
          <nav className="absolute top-4 left-4 right-4 md:top-8 md:left-8 md:right-8 bg-white/95 backdrop-blur-md rounded-xl md:rounded-2xl shadow-lg z-30 transition-all duration-300">
            <div className="flex items-center justify-between px-5 py-3.5 md:px-6 md:py-4">
              
              <div className="flex flex-col items-start">
                <Link href="/" className="text-2xl md:text-3xl font-black text-red-600 tracking-wider leading-none">
                  CarMilaap
                </Link>
              </div>

              {/* Updated Navigation Links */}
              <div className="hidden md:flex items-center gap-6 lg:gap-8 text-[15px] font-semibold text-gray-800">
                <Link href="#" className="hover:text-red-600 transition-colors">How it Works</Link>
                <Link href="#" className="hover:text-red-600 transition-colors">Features</Link>
                <Link href="#" className="hover:text-red-600 transition-colors">Get Sticker</Link>
                <Link href="#" className="hover:text-red-600 transition-colors">Contact Us</Link>
              </div>

              <div className="flex items-center gap-4">
                <Link href="#" className="hidden sm:block bg-red-600 text-white px-5 py-2 rounded-lg text-sm font-bold hover:bg-red-700 transition-all shadow-md">
                  Buy Now
                </Link>

                <button 
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} 
                  className="md:hidden p-2 rounded-lg text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
                  aria-label="Toggle Menu"
                >
                  {isMobileMenuOpen ? (
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                  ) : (
                     <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={`${isMobileMenuOpen ? 'max-h-72 py-4 px-5 border-t' : 'max-h-0'} overflow-hidden md:hidden transition-all duration-300 ease-in-out bg-white rounded-b-xl md:rounded-b-2xl`}>
               <div className="flex flex-col gap-4 text-gray-800 font-medium text-sm">
                 <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-600 py-1">How it Works</Link>
                 <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-600 py-1">Features</Link>
                 <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-600 py-1">Get Sticker</Link>
                 <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="hover:text-red-600 py-1">Contact Us</Link>
                 <Link href="#" onClick={() => setIsMobileMenuOpen(false)} className="bg-red-600 text-white p-2.5 rounded-lg text-center font-bold sm:hidden -mt-1">Buy Now</Link>
               </div>
            </div>
          </nav>

          {/* === Updated Hero Content === */}
          <div className="absolute inset-x-0 bottom-0 p-6 sm:p-10 md:p-16 flex flex-col items-center text-center md:items-start md:text-left z-20">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white mb-4 tracking-tight leading-tight drop-shadow-md">
              Gari Apki, <span className="text-red-500">Privacy Hamari</span>
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-gray-200 max-w-2xl mb-8 font-medium drop-shadow-sm">
              CarMilaap ka Smart QR Sticker apni gari par lagayein. Wrong parking ho ya emergency, koi bhi QR scan karke aapse 'Masked Call' par baat kar sakta hai, bina aapka personal number jaane.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button className="w-full sm:w-auto bg-red-600 text-white px-8 py-3.5 rounded-xl font-bold text-base hover:bg-red-700 transition-all shadow-lg active:scale-95">
                Order Smart Sticker
              </button>
              <button className="w-full sm:w-auto bg-transparent border-2 border-white/70 text-white px-8 py-3.5 rounded-xl font-bold text-base hover:bg-white/10 transition-all active:scale-95 backdrop-blur-sm">
                Dekhein Yeh Kaise Kaam Karta Hai
              </button>
            </div>
          </div>

        </div> 
      </div>
    </section>
  );
}