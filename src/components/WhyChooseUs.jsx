import React, { useState } from 'react';
import { Lightbulb, Users, Award, Shield, Check } from 'lucide-react';

export default function WhyChooseUs() {
  const [selectedPillar, setSelectedPillar] = useState(0);

  const pillars = [
    {
      id: 'innovation',
      title: 'Innovation',
      icon: Lightbulb,
      description: 'Pushing boundaries in AI, blockchain, and quantitative trading to deliver cutting-edge solutions.',
      stats: '40+ Patented AI Algorithms',
      color: '#0A84FF'
    },
    {
      id: 'collaboration',
      title: 'Collaboration',
      icon: Users,
      description: 'Working closely with clients to develop tailored solutions that drive measurable success.',
      stats: '100% Agile Co-Development',
      color: '#8961FF'
    },
    {
      id: 'excellence',
      title: 'Excellence',
      icon: Award,
      description: 'Maintaining the highest standards in code quality, system performance, and client outcomes.',
      stats: '99.99% Production Uptime',
      color: '#00C2FF'
    },
    {
      id: 'integrity',
      title: 'Integrity',
      icon: Shield,
      description: 'Operating with transparency and ethical considerations at the forefront of all decisions.',
      stats: 'Zero Data Leak Policy',
      color: '#34D399'
    },
  ];

  return (
    <section id="why-us" className="relative py-24 md:py-32 overflow-hidden bg-[#030303]">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Why Choose Us
          </h2>
          <p className="text-base sm:text-lg text-white/70">
            Our foundational pillars that govern our engineering philosophy and guarantee transformative outcomes.
          </p>
        </div>

        {/* Circular Interconnected Layout matching Figma */}
        <div className="relative flex justify-center items-center">
          {/* Desktop Overlapping / Chain layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-4 w-full max-w-6xl">
            {pillars.map((pillar, index) => {
              const Icon = pillar.icon;
              const isSelected = selectedPillar === index;

              return (
                <div
                  key={pillar.id}
                  onClick={() => setSelectedPillar(index)}
                  className={`relative group cursor-pointer aspect-square rounded-full flex flex-col items-center justify-center p-8 sm:p-9 text-center transition-all duration-300 ${
                    isSelected
                      ? 'bg-[#181818] border-4 border-[#0A84FF] shadow-2xl shadow-[#0A84FF]/25 scale-105 z-20'
                      : 'bg-[#141414] border-4 border-black hover:border-[#262626] hover:scale-[1.02] z-10'
                  }`}
                  style={{
                    boxShadow: isSelected
                      ? '0 0 35px rgba(10, 132, 255, 0.3), inset 0 0 20px rgba(10, 132, 255, 0.1)'
                      : 'none'
                  }}
                >
                  {/* Icon */}
                  <div className="mb-4 flex items-center justify-center">
                    <img
                      src="/images/icon-quality.svg"
                      alt={pillar.title}
                      className="w-8 h-8 object-contain opacity-90 group-hover:opacity-100 group-hover:scale-110 transition-all"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl sm:text-2xl font-medium text-white mb-3 tracking-tight">
                    {pillar.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-white/75 leading-relaxed font-normal line-clamp-4">
                    {pillar.description}
                  </p>

                  {/* Active Indicator Badge */}
                  {isSelected && (
                    <div className="absolute -bottom-3 bg-[#0A84FF] text-white text-[11px] font-bold px-3 py-0.5 rounded-full shadow-md flex items-center gap-1">
                      <Check className="w-3 h-3" />
                      <span>{pillar.stats}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Pillar Highlight Box */}
        {/* <div className="mt-14 max-w-3xl mx-auto bg-[#141414] border border-[#262626] rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <span className="text-xs uppercase tracking-widest text-[#0A84FF] font-semibold">
              Selected Principle
            </span>
            <h4 className="text-xl font-bold text-white mt-1">
              {pillars[selectedPillar].title} in Practice
            </h4>
            <p className="text-sm text-white/70 mt-1 max-w-lg">
              {pillars[selectedPillar].description}
            </p>
          </div>
          <div className="shrink-0 bg-[#1C1C1C] border border-[#262626] px-5 py-3 rounded-xl text-center">
            <div className="text-xs text-white/50">Verified Metric</div>
            <div className="text-base font-bold text-[#0A84FF]">
              {pillars[selectedPillar].stats}
            </div>
          </div>
        </div> */}

      </div>
    </section>
  );
}
