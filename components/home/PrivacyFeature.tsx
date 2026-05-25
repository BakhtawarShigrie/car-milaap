import React from 'react';

export default function PrivacyFeature() {
  return (
    // Background color ko thoda different rakha hai taake pichle component se separate lagay
    <section className="py-16 md:py-24 bg-gray-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Image (Order changed for mobile responsiveness) */}
          <div className="relative w-full flex justify-center md:justify-start order-2 md:order-1">
            {/* Decorative background blob */}
            <div className="absolute inset-0 bg-gradient-to-bl from-red-50 to-orange-50 rounded-[2.5rem] transform -rotate-3 scale-105 -z-10"></div>
            
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white w-full max-w-md">
              <img 
                src="https://res.cloudinary.com/duhpsw6he/image/upload/v1779721563/thetags76_kiaehd.jpg" 
                alt="CarMilaap Feature" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>

          {/* Right Side: Text and Design */}
          <div className="flex flex-col items-start text-left order-1 md:order-2">
            {/* Tag / Badge */}
            <span className="inline-block bg-red-50 text-red-600 font-bold px-4 py-1.5 rounded-full text-sm mb-6 tracking-wide border border-red-100">
              100% Secure
            </span>
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Scan & Connect <br />Instantly
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Koi bhi shakhs aapki gari ke sticker ko apne smartphone camera se scan kar sakta hai. Scanner ko koi app download karne ki zaroorat nahi hoti, bas scan karein aur direct connect hon.
            </p>
            
            {/* Features List */}
            <ul className="space-y-4 w-full">
              {[
                'No Application Required',
                'Instant Masked Calling',
                'Complete Privacy Protection'
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-gray-800 font-bold text-lg bg-white p-3.5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0 w-8 h-8 rounded-full bg-red-100 flex items-center justify-center mr-4">
                    <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}