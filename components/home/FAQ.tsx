"use client";

import React, { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  // Yahan aap apni screenshot ke mutabiq questions aur answers change kar sakte hain
  const faqs = [
    {
      question: "CarMilaap sticker kaise kaam karta hai?",
      answer: "Jab koi aapki gari ke sticker par mojood QR code scan karta hai, toh usey koi app download karne ki zaroorat nahi hoti. Woh seedha browser se aapko masked call kar sakta hai."
    },
    {
      question: "Kya mera mobile number safe rahega?",
      answer: "Jee bilkul! Hamara system 'Masked Calling' feature use karta hai jis se aapka personal mobile number call karne wale se chupa rehta hai. Aapki privacy 100% secure hai."
    },
    {
      question: "Sticker order karne ke baad kitne din mein milega?",
      answer: "Aam taur par humari standard delivery 3 se 5 working days mein poore Pakistan mein ho jati hai. Express delivery ki saholat bhi majood hai."
    },
    {
      question: "Agar main gari change kar loon toh kya hoga?",
      answer: "Aap apne CarMilaap account mein login karke kisi bhi waqt apni nayi gari ki details update kar sakte hain. Aapko naya sticker lene ki zaroorat nahi padegi."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-gray-100 text-gray-600 font-bold px-4 py-1.5 rounded-full text-sm mb-4 tracking-wide border border-gray-200">
            Got Questions?
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 mb-6">
            Aksar Pooche Gaye <span className="text-red-600">Sawalat</span>
          </h2>
          <p className="text-lg text-gray-600">
            CarMilaap ke baare mein mazeed jaaniye. Agar aapka sawal yahan nahi hai, toh hamari support team se rabta karein.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`border rounded-2xl transition-all duration-300 ${
                activeIndex === index 
                  ? 'border-red-600 bg-red-50/30 shadow-md' 
                  : 'border-gray-200 bg-white hover:border-red-300 hover:shadow-sm'
              }`}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between p-5 md:p-6 text-left focus:outline-none"
              >
                <span className={`text-lg font-bold pr-4 ${activeIndex === index ? 'text-red-600' : 'text-gray-900'}`}>
                  {faq.question}
                </span>
                <span className={`flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-colors ${
                  activeIndex === index ? 'bg-red-600 text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  <svg 
                    className={`w-5 h-5 transition-transform duration-300 ${activeIndex === index ? 'rotate-180' : 'rotate-0'}`} 
                    fill="none" stroke="currentColor" viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </button>
              
              {/* Answer content with smooth height transition */}
              <div 
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  activeIndex === index ? 'max-h-48 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="p-5 md:p-6 pt-0 text-gray-600 text-base leading-relaxed border-t border-red-100/50">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}