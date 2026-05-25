import React from 'react';

export default function InsideWindshield() {
  return (
    <section className="py-16 md:py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Text and Design */}
          <div className="flex flex-col items-start text-left">
            {/* Tag / Badge */}
            <span className="inline-block bg-blue-50 text-blue-600 font-bold px-4 py-1.5 rounded-full text-sm mb-6 tracking-wide border border-blue-100">
              Hassle-Free Solution
            </span>
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Put Inside Your<br />Windshield
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Applying the CarMilaap Smart Sticker is as easy as putting it on the inside of your windshield. It is designed to be easily readable from the outside, while staying safe from weather and vandalism inside your car.
            </p>
            
            {/* Features List */}
            <ul className="space-y-4">
              {[
                'Weatherproof & Durable',
                'Visible from Outside',
                'Zero Maintenance'
              ].map((feature, index) => (
                <li key={index} className="flex items-center text-gray-800 font-bold text-lg">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mr-3">
                    <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side: Image */}
          <div className="relative w-full flex justify-center md:justify-end">
            {/* Decorative background blob for modern UI feel */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-red-50 rounded-[2.5rem] transform rotate-3 scale-105 -z-10"></div>
            
            {/* Main Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              {/* Note: Standard <img> tag used to avoid next/image domain configuration issues. 
                  If your next.config.ts has Cloudinary configured, you can switch to <Image> */}
              <img 
                src="https://res.cloudinary.com/duhpsw6he/image/upload/v1779721563/thetags76_kiaehd.jpg" 
                alt="CarMilaap Sticker inside windshield" 
                className="w-full max-w-md h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}