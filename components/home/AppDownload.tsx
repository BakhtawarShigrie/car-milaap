export default function AppDownload() {
  return (
    // Light background taake pichle dark section ke baad clear separation nazar aaye
    <section className="w-full bg-white py-20 md:py-28 border-t border-gray-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Badge */}
        <div className="inline-block bg-gray-100 text-gray-800 px-4 py-1.5 rounded-full text-sm font-bold tracking-wider mb-6 uppercase">
          For Car Owners
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
          Download the <span className="text-red-600">CarMilaap App</span>
        </h2>
        
        {/* Description */}
        <p className="text-lg md:text-xl text-gray-600 font-medium mb-10 max-w-2xl mx-auto leading-relaxed">
          Sticker scan karne ke liye kisi app ki zaroorat nahi, lekin owner apni car profile, emergency contacts aur privacy settings hamari official app se easily manage kar sakte hain.
        </p>

        {/* Store Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          
          {/* Apple App Store Button */}
          <button className="flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-3.5 rounded-xl hover:bg-black transition-all shadow-lg active:scale-95 w-full sm:w-auto border border-gray-800">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M16.365 21.444c-1.127.534-2.261.272-3.375-.246-1.126-.52-2.18-.535-3.323.014-1.226.58-2.348.514-3.364-.178-3.08-2.062-5.45-6.865-4.004-10.428.69-1.692 2.012-2.775 3.51-2.836 1.139-.046 2.224.717 2.871.717.653 0 1.954-.897 3.313-.761 1.408.058 2.628.583 3.365 1.63-2.909 1.76-2.427 5.766.452 6.945-.698 1.83-1.636 3.557-2.902 4.908-.13.136-.264.283-.418.423-.042-.187-.087-.376-.125-.588zM14.862 3.82c-.066 1.7-1.31 3.254-3.02 3.344-.194-1.614 1.096-3.137 2.723-3.411.087-.015.176-.021.264-.021.011.028.024.057.033.088z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-wider font-semibold opacity-80">Download on the</div>
              <div className="text-xl font-bold leading-none mt-0.5">App Store</div>
            </div>
          </button>

          {/* Google Play Store Button */}
          <button className="flex items-center justify-center gap-3 bg-gray-900 text-white px-8 py-3.5 rounded-xl hover:bg-black transition-all shadow-lg active:scale-95 w-full sm:w-auto border border-gray-800">
            <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
              <path d="M3.245 20.655c-.144-.183-.223-.424-.223-.715V4.06c0-.29.08-.532.223-.715.143-.183.35-.275.617-.275.127 0 .254.025.382.076L16.035 9.8c.456.244.694.508.694.799 0 .29-.238.555-.694.799l-11.79 6.655c-.128.05-.255.076-.382.076-.267 0-.474-.092-.618-.275zm1.432-1.583l9.02-5.072-9.02-5.072v10.144zm9.848-5.56l2.12-1.194-2.12-1.194-2.12 1.194 2.12 1.194zm-8.86-9.664L14.73 9.07 16.34 7.46 5.665 1.448l-.002 2.4z"/>
            </svg>
            <div className="text-left">
              <div className="text-[10px] uppercase tracking-wider font-semibold opacity-80">GET IT ON</div>
              <div className="text-xl font-bold leading-none mt-0.5">Google Play</div>
            </div>
          </button>

        </div>
      </div>
    </section>
  );
}