export default function Features() {
  const features = [
    {
      id: 1,
      title: "100% Privacy Guard",
      description: "Aapka personal mobile number kabhi kisi ko show nahi hoga. QR scan karne wale aapse sirf secure 'Masked Call' ke zariye rabta kar sakenge.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
        </svg>
      ),
      bgColor: "bg-red-500",
    },
    {
      id: 2,
      title: "Emergency Alerts",
      description: "Khudana khaasta kisi accident ya emergency ki surat mein, koi bhi shaks QR scan karke aapki family ya emergency contacts ko fauran itla de sakta hai.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
        </svg>
      ),
      bgColor: "bg-gray-800",
    },
    {
      id: 3,
      title: "Smart Parking Solutions",
      description: "Ghalat parking ki wajah se hone wali pareshani se bachein. Gari block hone ki surat mein log aapse asani se aur bina jhijhak contact kar sakte hain.",
      icon: (
        <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"></path>
        </svg>
      ),
      bgColor: "bg-red-600",
    }
  ];

  return (
    <section className="w-full bg-white py-20 md:py-28">
      {/* Same max-w-8xl container taake Hero section ke sath alignment bilkul perfect rahay */}
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <h2 className="text-sm font-bold text-red-600 uppercase tracking-[0.2em] mb-3">
            Why Choose CarMilaap?
          </h2>
          <h3 className="text-3xl md:text-4xl lg:text-5xl font-black text-gray-900 tracking-tight leading-tight mb-6">
            Aapki Gari Ke Liye <br className="hidden md:block" /> Smart Aur Secure Hal
          </h3>
          <p className="text-lg text-gray-600 font-medium">
            Hamara Smart QR Sticker aapko parking ke masail aur emergency situations mein tahafuz faraham karta hai, aapki identity chupaye rakhte hue.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {features.map((feature) => (
            <div 
              key={feature.id} 
              className="flex flex-col items-center text-center p-8 rounded-3xl bg-gray-50 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-md ${feature.bgColor} -rotate-3 hover:rotate-0 transition-transform duration-300`}>
                {feature.icon}
              </div>
              
              {/* Text Content */}
              <h4 className="text-xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h4>
              <p className="text-gray-600 leading-relaxed font-medium">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}