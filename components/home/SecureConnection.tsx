export default function SecureConnection() {
  const imageUrl = 'https://res.cloudinary.com/duhpsw6he/image/upload/v1779721563/thetags76_kiaehd.jpg';

  return (
    <section className="w-full bg-gray-900 py-16 md:py-24 text-white">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Flex container */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* ======================================= */}
          {/* === Left Side - Exact Data + Dark UI == */}
          {/* ======================================= */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left order-2 lg:order-1">
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight mb-8">
              Anyone getting bothered will be able to <span className="text-red-500">contact you easily.</span>
            </h2>

            <ul className="flex flex-col gap-4 mb-10 text-gray-200 font-medium w-full text-base sm:text-lg">
              
              <li className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/10 shadow-sm backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="mt-0.5 bg-red-500/20 p-2 rounded-lg text-red-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="leading-relaxed">You will receive Masked Call, WhatsApp, and SMS when your parked vehicle is creating issue.</span>
              </li>

              <li className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/10 shadow-sm backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="mt-0.5 bg-red-500/20 p-2 rounded-lg text-red-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="leading-relaxed">Your Phone Number is <strong className="text-white">MASKED</strong>.</span>
              </li>

              <li className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/10 shadow-sm backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="mt-0.5 bg-red-500/20 p-2 rounded-lg text-red-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="leading-relaxed">You can Add Emergency contact Number so people can contact your family incase of any accidents.</span>
              </li>

              <li className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/10 shadow-sm backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="mt-0.5 bg-red-500/20 p-2 rounded-lg text-red-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="leading-relaxed">Anyone can scan using camera, Paytm, so no special APP is needed.</span>
              </li>

              <li className="flex items-start gap-4 bg-white/5 p-4 rounded-xl border border-white/10 shadow-sm backdrop-blur-sm hover:bg-white/10 transition-colors">
                <div className="mt-0.5 bg-red-500/20 p-2 rounded-lg text-red-400 shrink-0">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span className="leading-relaxed">It is a One time purchase.</span>
              </li>

            </ul>
            
          </div>

          {/* ======================================= */}
          {/* === Right Side - Image & Glow Effect == */}
          {/* ======================================= */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end order-1 lg:order-2">
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl bg-gray-800 border border-gray-700 p-2 md:p-4 hover:scale-[1.02] transition-transform duration-500">
              
              {/* Image */}
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={imageUrl} 
                alt="Scan CarMilaap Tag" 
                className="w-full h-auto object-cover rounded-2xl"
              />
              
              {/* Fix: z-20 add kiya hai taake gradient image ke upar perfectly show ho */}
              <div className="absolute inset-0 bg-gradient-to-tr from-red-600/30 to-transparent pointer-events-none rounded-3xl z-20"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}