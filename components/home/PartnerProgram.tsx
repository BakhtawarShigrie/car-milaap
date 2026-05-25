import React from 'react';

export default function PartnerProgram() {
  return (
    // Is section ka background slightly blue rakha hai taake pichle components se alag nazar aaye
    <section className="py-16 md:py-24 bg-blue-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          
          {/* Left Side: Image */}
          <div className="relative w-full flex justify-center md:justify-start">
            {/* Decorative modern background element */}
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-200 to-indigo-100 rounded-[2.5rem] transform -rotate-3 scale-105 -z-10"></div>
            
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white w-full max-w-md bg-white">
              {/* YAHAN APNI NAYI IMAGE KA LINK PASTE KAREIN 👇 */}
              <img 
                src="https://res.cloudinary.com/duhpsw6he/image/upload/v1779721563/thetags76_kiaehd.jpg" 
                alt="CarMilaap Partner Program" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>

          {/* Right Side: Text & Points */}
          <div className="flex flex-col items-start text-left">
            {/* Tag / Badge */}
            <span className="inline-block bg-indigo-100 text-indigo-700 font-bold px-4 py-1.5 rounded-full text-sm mb-6 tracking-wide border border-indigo-200">
              Shopkeepers & Garages Ke Liye
            </span>
            
            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
              Hamare Partner Banein<br />Aur <span className="text-blue-600">20% Profit</span> Kamayein
            </h2>
            
            {/* Description */}
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              CarMilaap ke sath business karein. Apni shop par physical stock bechein ya digital referral network banayein, aur apne har customer par behtareen munafa kamayein.
            </p>
            
            {/* Detailed Points (Designed as distinct cards) */}
            <ul className="space-y-4 mb-10 w-full">
              
              {/* Point 1: Display Physical Cards */}
              <li className="flex items-start text-gray-800 text-base sm:text-lg bg-white p-4.5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-0.5">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                </div>
                <div>
                  <strong className="block text-gray-900 font-bold mb-1">Physical Display Profit</strong>
                  <span className="text-gray-600 text-sm">Hamare stickers apne display mein rakhein aur har physical sale par direct 20% profit hasil karein.</span>
                </div>
              </li>
              
              {/* Point 2: Referral Profile */}
              <li className="flex items-start text-gray-800 text-base sm:text-lg bg-white p-4.5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-0.5">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"></path></svg>
                </div>
                <div>
                  <strong className="block text-gray-900 font-bold mb-1">Digital Referral System</strong>
                  <span className="text-gray-600 text-sm">Apni referral profile banayein. Apne link, QR code, ya referral code se jisko bhi add karwayenge, aapko 20% commission milega.</span>
                </div>
              </li>
              
              {/* Point 3: Live Tracking */}
              <li className="flex items-start text-gray-800 text-base sm:text-lg bg-white p-4.5 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center mr-4 mt-0.5">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path></svg>
                </div>
                <div>
                  <strong className="block text-gray-900 font-bold mb-1">Live Tracking Dashboard</strong>
                  <span className="text-gray-600 text-sm">Apni profile par login karein aur har waqt apne referrals, sales aur earnings ki live reports track karein.</span>
                </div>
              </li>
            </ul>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button className="flex-1 bg-blue-600 text-white px-6 py-4 rounded-xl font-bold text-base hover:bg-blue-700 transition-all shadow-lg active:scale-95 text-center flex items-center justify-center gap-2">
                Get Display Cards
              </button>
              <button className="flex-1 bg-white border-2 border-blue-600 text-blue-600 px-6 py-4 rounded-xl font-bold text-base hover:bg-blue-50 transition-all active:scale-95 text-center shadow-sm flex items-center justify-center gap-2">
                Become a Referral
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}