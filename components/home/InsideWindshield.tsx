export default function InsideWindshield() {
  const imageUrl = 'https://res.cloudinary.com/duhpsw6he/image/upload/v1779721563/thetags76_kiaehd.jpg';

  // Yahan aap apne saare points asani se add ya edit kar sakte hain
  const points = [
    "Protection from Rain, Water and Sun.",
    "It cannot be easily tampered with or removed from the outside.",
    "It can be scanned very fast and easily from the outside of the vehicle.",
    "Point 4 yahan likhein...", // Aap yahan mazeed points add kar sakte hain
    "Point 5 yahan likhein..."
  ];

  return (
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* === Left Side - Image === */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-xl bg-white border border-gray-200 p-2 md:p-3 hover:scale-[1.02] transition-transform duration-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={imageUrl} 
                alt="Inside Windshield Tag" 
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* === Right Side - Text & Bullet Points === */}
          <div className="w-full lg:w-1/2 flex flex-col items-start text-left">
            
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-8">
              Our Tags stick on the <br className="hidden lg:block" />
              <span className="text-red-600">inside of the Windshield.</span>
            </h2>

            {/* Bullet Points Grid/List */}
            <ul className="flex flex-col gap-6 mb-10 text-gray-700 font-medium w-full text-base sm:text-lg">
              {points.map((point, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="mt-1 bg-red-100 p-1.5 rounded-full text-red-600 shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            
          </div>

        </div>
      </div>
    </section>
  );
}