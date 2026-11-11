import React from 'react';

export default function Companies() {
  const logos = [
    { src: '/images/company-1.svg', alt: 'Partner Brand 1' },
    { src: '/images/company-2.svg', alt: 'Partner Brand 2' },
    { src: '/images/company-3.svg', alt: 'Partner Brand 3' },
    { src: '/images/company-4.svg', alt: 'Partner Brand 4' },
    { src: '/images/company-5.svg', alt: 'Partner Brand 5' },
    { src: '/images/company-6.svg', alt: 'Partner Brand 6' },
  ];

  // Duplicate for seamless loop
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section className="relative py-12 overflow-hidden">
      {/* Figma Gradient Stroke Top & Bottom */}
      <div 
        className="absolute top-0 left-0 right-0 h-[1px] opacity-80"
        style={{
          background: 'linear-gradient(90deg, rgba(10, 132, 255, 0.8) 0%, rgba(137, 97, 255, 0.8) 100%)'
        }}
      />
      <div 
        className="absolute bottom-0 left-0 right-0 h-[1px] opacity-80"
        style={{
          background: 'linear-gradient(90deg, rgba(10, 132, 255, 0.8) 0%, rgba(137, 97, 255, 0.8) 100%)'
        }}
      />

      <div className="max-w-7xl mx-auto px-6 mb-6 text-center">
        <p className="text-xs uppercase tracking-widest text-white/50 font-semibold">
          Trusted by Fortune 500 & high-growth innovation leaders
        </p>
      </div>

      {/* Marquee Container with fade edge masks */}
      <div className="relative w-full overflow-hidden flex items-center">
        {/* Left Fade Mask */}
        <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none bg-gradient-to-r from-[#030303] to-transparent" />
        {/* Right Fade Mask */}
        <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-40 z-10 pointer-events-none bg-gradient-to-l from-[#030303] to-transparent" />

        <div className="animate-marquee flex items-center gap-10 sm:gap-16 py-2">
          {marqueeLogos.map((logo, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center min-w-[140px] px-4 py-2 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              <img
                src={logo.src}
                alt={logo.alt}
                className="h-10 w-auto max-w-[140px] object-contain select-none"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
