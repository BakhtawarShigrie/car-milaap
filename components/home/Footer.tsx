"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image'; // 1. Next.js Image component import kiya

export default function Footer() {
  return (
    <footer className="bg-gray-950 text-gray-300 pt-16 pb-8 relative overflow-hidden border-t border-gray-900">
      
      {/* Decorative Top Background Glow */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-900/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-blue-950/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* === TOP SECTION: Animated People Image & Newsletter CTA === */}
        <div className="bg-gray-900/60 backdrop-blur-md rounded-3xl border border-gray-800 p-8 md:p-12 mb-16 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            
            {/* Left Column: Text & Subscription */}
            <div className="text-left">
              <span className="text-red-500 font-bold text-sm tracking-widest uppercase mb-3 block">
                CarMilaap Community
              </span>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 tracking-tight">
                Privacy Aur Security Ke Is<br />Safar Mein Hamare Sath Judein
              </h3>
              <p className="text-gray-400 mb-6 text-base max-w-md">
                Naye features, updates aur special offers ke liye apna email register karein. No spam, we promise!
              </p>
              
              {/* Email Form */}
              <form className="flex flex-col sm:flex-row gap-3 max-w-md" onSubmit={(e) => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email address" 
                  className="bg-gray-950/80 border border-gray-700 text-white px-5 py-3 rounded-xl focus:outline-none focus:border-red-600 flex-1 text-sm font-medium transition-colors"
                  required
                />
                <button className="bg-red-600 text-white font-bold px-6 py-3 rounded-xl hover:bg-red-700 transition-all shadow-md active:scale-95 text-sm shrink-0">
                  Subscribe Now
                </button>
              </form>
            </div>

            {/* Right Column: Exact Animated People Image from your link */}
            <div className="w-full flex justify-center lg:justify-end">
              <div className="relative max-w-md w-full rounded-2xl overflow-hidden group">
                {/* Decorative glow behind image */}
                <div className="absolute inset-0 bg-gradient-to-tr from-red-600/20 to-blue-600/20 opacity-50 group-hover:opacity-70 transition-opacity duration-500 rounded-2xl"></div>
                
                {/* 2. <img> ki jagah <Image /> use kiya aur width/height add ki */}
                <Image 
                  src="https://res.cloudinary.com/duhpsw6he/image/upload/v1779744104/team_09s_ktk3lr.jpg" 
                  alt="CarMilaap Team Animation" 
                  width={600}
                  height={400}
                  className="w-full h-auto object-cover relative z-10 transform group-hover:scale-102 transition-transform duration-700 rounded-2xl border border-gray-700/50 shadow-xl"
                />
              </div>
            </div>

          </div>
        </div>

        {/* === MIDDLE SECTION: Grid Links & Logo === */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-8 pb-12 border-b border-gray-800">
          
          {/* Brand Column */}
          <div className="flex flex-col items-start">
            <Link href="/" className="text-2xl font-black text-red-600 tracking-wider mb-4 leading-none">
              CarMilaap
            </Link>
            <p className="text-sm text-gray-400 mb-6 leading-relaxed max-w-xs">
              Gari Apki, Privacy Hamari. Smart QR Stickers ke zariye wrong parking aur emergency communication ko mehfooz banayein.
            </p>
            
            {/* Social Icons */}
            <div className="flex gap-4">
              {['facebook', 'twitter', 'instagram', 'linkedin'].map((social) => (
                <a 
                  key={social} 
                  href="#" 
                  className="w-9 h-9 bg-gray-900 border border-gray-800 rounded-xl flex items-center justify-center text-gray-400 hover:text-white hover:bg-red-600 hover:border-red-600 transition-all shadow-sm"
                  aria-label={social}
                >
                  <span className="capitalize text-xs font-bold">{social[0]}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Column 1: Company */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5 border-l-2 border-red-600 pl-3">
              Company
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors text-gray-400">About Us</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-gray-400">How it Works</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-gray-400">Features</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-gray-400">Contact Us</Link></li>
            </ul>
          </div>

          {/* Column 2: Programs */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5 border-l-2 border-red-600 pl-3">
              Our Programs
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors text-gray-400">Shopkeeper Partnership</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-gray-400">Garage & Auto Mechanics</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-gray-400">Referral Program</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-gray-400">Affiliate Earnings</Link></li>
            </ul>
          </div>

          {/* Column 3: Legal & Support */}
          <div>
            <h4 className="text-sm font-bold text-white uppercase tracking-wider mb-5 border-l-2 border-red-600 pl-3">
              Legal & Safety
            </h4>
            <ul className="space-y-3 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors text-gray-400">Privacy Policy</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-gray-400">Terms of Service</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-gray-400">Masked Calling Safety</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors text-gray-400">24/7 Helpline Support</Link></li>
            </ul>
          </div>

        </div>

        {/* === BOTTOM SECTION: Copyright === */}
        <div className="pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-gray-500 font-medium">
          <p>© {new Date().getFullYear()} CarMilaap. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-red-600 text-sm">♥</span> in Pakistan
          </p>
        </div>

      </div>
    </footer>
  );
}