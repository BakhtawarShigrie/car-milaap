import React from 'react';

export default function HowItWorks() {
  // Aap yahan apna text aur design aasani se change kar sakte hain
  const steps = [
    {
      id: '01',
      title: 'Order Your Sticker',
      description: 'CarMilaap ki website se apna smart QR sticker order karein. Yeh seedha aapke ghar deliver kiya jayega.',
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
        </svg>
      )
    },
    {
      id: '02',
      title: 'Paste Inside Windshield',
      description: 'Sticker ko apni gari ki windshield ke andar ki taraf lagayein. Yeh bahar se asani se scan ho sakega aur mehfooz rahega.',
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
        </svg>
      )
    },
    {
      id: '03',
      title: 'Stay Connected & Secure',
      description: 'Wrong parking ya emergency ki soorat mein koi bhi shakhs QR scan karke aapko private masked call kar sakta hai.',
      icon: (
        <svg className="w-8 h-8 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-white relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-full max-w-4xl h-full bg-red-50/50 blur-3xl -z-10 rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Top Badge */}
        <span className="inline-block bg-red-50 text-red-600 font-bold px-5 py-2 rounded-full text-sm mb-6 border border-red-100 shadow-sm tracking-wide">
          Simple Process
        </span>
        
        {/* Main Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-16 leading-tight">
          Yeh Kaise Kaam Karta Hai?
        </h2>

        {/* 3-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center relative group">
              
              {/* Connector Line for Desktop (hidden on last item and mobile) */}
              {index !== steps.length - 1 && (
                <div className="hidden md:block absolute top-12 left-1/2 w-full h-[2px] bg-gradient-to-r from-red-100 to-transparent z-0"></div>
              )}

              {/* Icon / Step Number Box */}
              <div className="w-24 h-24 bg-white rounded-3xl flex items-center justify-center shadow-xl border-2 border-gray-50 mb-8 relative z-10 group-hover:-translate-y-2 transition-transform duration-300">
                <div className="absolute -top-3 -right-3 w-8 h-8 bg-red-600 text-white rounded-full flex items-center justify-center font-bold text-sm shadow-md">
                  {step.id}
                </div>
                {step.icon}
              </div>
              
              {/* Text Content */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">
                {step.title}
              </h3>
              <p className="text-base text-gray-600 leading-relaxed max-w-xs mx-auto">
                {step.description}
              </p>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}