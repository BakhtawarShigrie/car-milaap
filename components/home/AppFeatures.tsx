import React from 'react';

export default function AppFeatures() {
  // Yahan aap apni screenshot ka exact data (title aur description) type kar lein
  const features = [
    {
      id: 1,
      title: "App Management Feature",
      description: "Riya 🦋⃟💗 ke sajde mei itna rehne lagay, deewana deewana dunya kehne lagay, deewana deewana duniya kehne lagay 💔",
      imgSrc: "https://res.cloudinary.com/duhpsw6he/image/upload/v1779745450/icon-7797704_640_ru2m0d.png"
    },
    {
      id: 2,
      title: "Search any vehicle",
      description: "kflkdalkv kldfdkfkal fafjajpjfae fhighirwkdke ceojoiwrjofwr gjgropwjgpojwpojefewmce cewojcpowejf wejfpojewf wejfpojwefj",
      imgSrc: "https://res.cloudinary.com/duhpsw6he/image/upload/v1779745450/icon-7797704_640_ru2m0d.png"
    },
    {
      id: 3,
      title: "Free PDF Copy",
      description: "kldfdkfkal fafjajpjfae fhighirwkdke ceojoiwrjofwr gjgropwjgpojwpojefe kldfdkfkal fafjajpjfae fhighirwkdke ceojoiwrjofwr gjgropwjgpojwpojefe",
      imgSrc: "https://res.cloudinary.com/duhpsw6he/image/upload/v1779745450/icon-7797704_640_ru2m0d.png"
    }
  ];

  return (
    // Agar screenshot mein background color white/red hai, to bg-gray-900 ko bg-white ya bg-red-50 se replace kar lein
    <section className="py-16 md:py-24 bg-gray-900 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Main Heading (Optional: Agar tasveer mein koi main heading hai to yahan type karein) */}
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4">
            Mobile App Experience
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Hamari app ke zariye live tracking aur instant connections ka experience.
          </p>
        </div>

        {/* 3 Mobile Columns Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-16">
          {features.map((feature) => (
            <div key={feature.id} className="flex flex-col items-center group">
              
              {/* Mobile Device Mockup Design */}
              <div className="relative rounded-[2.5rem] border-[8px] border-gray-800 bg-black overflow-hidden shadow-2xl mb-8 w-64 h-[28rem] transform group-hover:-translate-y-2 transition-transform duration-500">
                {/* Mobile Top Notch/Camera cutout illusion */}
                <div className="absolute top-0 inset-x-0 h-6 bg-gray-800 rounded-b-2xl w-32 mx-auto z-10"></div>
                
                {/* Image */}
                <img 
                  src={feature.imgSrc} 
                  alt={feature.title} 
                  className="w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity"
                />
              </div>

              {/* Text Data */}
              <div className="max-w-xs">
                <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed text-base">
                  {feature.description}
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}