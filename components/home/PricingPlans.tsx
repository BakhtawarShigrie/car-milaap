import React from 'react';

export default function PricingPlans() {
  // Yahan aap apne plans ki exact details, price aur features asani se change kar sakte hain
  const plans = [
    {
      name: 'Basic Plan',
      price: 'Rs. 999',
      duration: 'Lifetime',
      description: 'Single car owner ke liye behtareen aur budget-friendly plan.',
      features: [
        '1 Smart QR Sticker',
        'Instant Masked Calling',
        'Weatherproof Material',
        'Standard Support'
      ],
      buttonText: 'Order Basic',
      isPopular: false,
    },
    {
      name: 'Standard Plan',
      price: 'Rs. 1,499',
      duration: 'Lifetime',
      description: 'Do gariyon ke liye perfect package, discounted price par.',
      features: [
        '2 Smart QR Stickers',
        'Instant Masked Calling',
        'Weatherproof Material',
        'Premium Support',
        'Free Home Delivery'
      ],
      buttonText: 'Order Standard',
      isPopular: true, // Yeh true honay se center wala card highlight ho jayega
    },
    {
      name: 'Family Plan',
      price: 'Rs. 8,999',
      duration: 'Lifetime',
      description: 'Poori family ki gariyon ko secure karne ke liye best value.',
      features: [
        '4 Smart QR Stickers',
        'Instant Masked Calling',
        'Weatherproof Material',
        'Priority 24/7 Support',
        'Free Express Delivery'
      ],
      buttonText: 'Order Family',
      isPopular: false,
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block bg-red-100 text-red-600 font-bold px-4 py-1.5 rounded-full text-sm mb-4 tracking-wide border border-red-200 shadow-sm">
            Pricing Plans
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Apni Zaroorat Ke Mutabiq <span className="text-red-600">Plan Chunein</span>
          </h2>
          <p className="text-lg text-gray-600">
            Ek dafa ki payment, zindagi bhar ka sakoon. Koi monthly fees nahi, koi hidden charges nahi.
          </p>
        </div>

        {/* 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10 items-center">
          {plans.map((plan, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col p-8 rounded-3xl bg-white transition-all duration-300 ${
                plan.isPopular 
                  ? 'border-4 border-red-600 shadow-2xl md:-translate-y-4' 
                  : 'border border-gray-200 shadow-lg hover:shadow-xl'
              }`}
            >
              {/* "Most Popular" Badge for the highlighted card */}
              {plan.isPopular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <span className="bg-red-600 text-white font-bold px-5 py-1.5 rounded-full text-sm uppercase tracking-wider shadow-md">
                    Most Popular
                  </span>
                </div>
              )}
              
              {/* Plan Info */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-500 mb-6 min-h-[48px]">{plan.description}</p>
              
              {/* Price */}
              <div className="mb-8">
                <span className="text-4xl font-extrabold text-gray-900">{plan.price}</span>
                <span className="text-gray-500 font-medium ml-2">/ {plan.duration}</span>
              </div>

              {/* Features List */}
              <ul className="space-y-4 mb-10 flex-1">
                {plan.features.map((feature, fIndex) => (
                  <li key={fIndex} className="flex items-start text-gray-800 font-medium">
                    <svg className="w-6 h-6 text-green-500 mr-3 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* Action Button */}
              <button className={`w-full py-4 rounded-xl font-bold text-base transition-all shadow-md active:scale-95 ${
                plan.isPopular
                  ? 'bg-red-600 text-white hover:bg-red-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}>
                {plan.buttonText}
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}