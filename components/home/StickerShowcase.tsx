export default function StickerShowcase() {
  const stickerImageUrl = 'https://res.cloudinary.com/duhpsw6he/image/upload/v1779720122/Sticker_card_waxf1j.png';

  return (
    // Background color ko halka sa grey rakha hai taake upar wale white section se alag nazar aaye
    <section className="w-full bg-gray-50 py-16 md:py-24">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Flex container: Mobile par column (neche upar), Desktop par row (left right) */}
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* ======================================= */}
          {/* === Left Side - Sticker Image Container === */}
          {/* ======================================= */}
          <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-lg rounded-3xl overflow-hidden shadow-2xl bg-white border border-gray-100 p-2 md:p-4 hover:scale-[1.02] transition-transform duration-500">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img 
                src={stickerImageUrl} 
                alt="CarMilaap Smart QR Sticker" 
                className="w-full h-auto object-contain rounded-2xl"
              />
            </div>
          </div>

          {/* ======================================= */}
          {/* === Right Side - Text Content & Points === */}
          {/* ======================================= */}
          <div className="w-full lg:w-1/2 flex flex-col items-center text-center lg:items-start lg:text-left">
            
            {/* Small Badge */}
            <div className="inline-block bg-red-100 text-red-600 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider mb-6 uppercase">
              Premium Build Quality
            </div>
            
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
              Aapki Gari Ka <br className="hidden lg:block" />
              <span className="text-red-600">Digital Guardian</span>
            </h2>
            
            {/* Paragraph */}
            <p className="text-lg text-gray-600 mb-8 font-medium leading-relaxed max-w-2xl">
              Hamara specially designed QR sticker aapki gari ki windscreen par perfectly fit hota hai. Yeh dekhne mein khoobsurat lagta hai aur emergency ya parking ke waqt logo ko aapse connect karne ka sabse safe tareeqa hai.
            </p>

            {/* Feature Check-list */}
            <ul className="flex flex-col gap-4 mb-10 text-gray-700 font-bold w-full max-w-lg">
              <li className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="bg-green-50 p-2 rounded-lg text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span>Weather-proof aur long-lasting material</span>
              </li>
              <li className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="bg-green-50 p-2 rounded-lg text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span>High-contrast design jo asani se scan ho jaye</span>
              </li>
              <li className="flex items-center gap-4 bg-white p-4 rounded-xl border border-gray-100 shadow-sm">
                <div className="bg-green-50 p-2 rounded-lg text-green-600">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <span>Ek baar lagayein aur hamesha ke liye be-fikar ho jayein</span>
              </li>
            </ul>

            {/* Action Button */}
            <button className="bg-gray-900 text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-red-600 transition-all duration-300 shadow-xl hover:shadow-red-600/30 w-full sm:w-auto active:scale-95">
              Order Your Sticker Now
            </button>
            
          </div>

        </div>
      </div>
    </section>
  );
}