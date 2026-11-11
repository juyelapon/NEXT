import React from 'react';
import { Calendar } from 'lucide-react';

export default function Hero({ onOpenBooking, onOpenContact }) {
  return (
    <section id="home" className="relative isolate overflow-hidden pt-28 pb-16 md:pt-36 md:pb-20">
      <div aria-hidden="true" className="hero-dot-grid pointer-events-none absolute inset-0" />
      {/* Background Ambient Glows */}
      <div className="absolute right-0 top-10 -z-10 h-[550px] w-[550px] rounded-full bg-gradient-to-b from-[#0A84FF]/20 to-[#8961FF]/10 blur-[140px] animate-pulse-glow" />
      <div className="absolute left-0 top-40 -z-10 h-[400px] w-[400px] rounded-full bg-[#0A84FF]/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12 lg:gap-8">
          
          {/* Left Hero Content */}
          <div className="z-10 flex flex-col items-start text-left lg:col-span-7">
            <h1 className="mb-6 text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl lg:text-[60px] xl:text-[68px]">
              <span className="block">Transforming Data</span>
              <span className="mt-1 block">
                into{' '}
                <span className="inline-block rounded-xl bg-[#0A84FF] px-3 py-1 text-white shadow-lg shadow-[#0A84FF]/30">
                  Decisions
                </span>
              </span>
            </h1>

            {/* Subtitle */}
            <p className="mb-8 max-w-xl text-base font-normal leading-relaxed text-white/75 sm:text-lg">
              Leverage the power of machine learning and AI to unlock insights and drive business growth.
            </p>

            {/* Action Buttons */}
            <div className="mb-8 flex w-full flex-wrap items-center gap-4 sm:w-auto">
              <button
                onClick={onOpenBooking}
                className="flex w-full cursor-pointer items-center justify-center gap-2.5 rounded-xl bg-[#0A84FF] px-8 py-3.5 text-base font-bold text-white shadow-xl shadow-[#0A84FF]/30 transition-all duration-200 hover:bg-[#0070E0] hover:shadow-[#0A84FF]/50 active:scale-95 sm:w-auto"
              >
                <Calendar className="w-5 h-5" />
                <span>Book a Meeting</span>
              </button>

              <button
                onClick={onOpenContact}
                className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-xl border border-[#262626] bg-[#141414] px-7 py-3.5 text-base font-semibold text-white transition-all duration-200 hover:border-white/30 hover:bg-[#1C1C1C] sm:w-auto"
              >
                <span>Explore Solutions</span>
              </button>
            </div>

            {/* Social Proof Avatars */}
            <div className="flex w-full items-center gap-3 sm:w-auto">
              <div className="flex -space-x-3 overflow-hidden">
                <img
                  className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-[#030303]"
                  src="/images/avatar1.png"
                  alt="Client avatar 1"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-[#030303]"
                  src="/images/avatar2.png"
                  alt="Client avatar 2"
                />
                <img
                  className="inline-block h-8 w-8 rounded-full object-cover ring-2 ring-[#030303]"
                  src="/images/avatar3.png"
                  alt="Client avatar 3"
                />
              </div>
              <div className="text-xs font-normal text-white/70 sm:text-sm">
                Over <span className="font-semibold text-white">100+</span> clients have worked with us
              </div>
            </div>
          </div>

          {/* Right Hero Visual Area */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Radial Gradient Backing */}
            <div className="relative flex aspect-square w-full max-w-[480px] items-center justify-center">
              
              <div className="absolute inset-8 rounded-full bg-[radial-gradient(circle,rgba(10,132,255,0.24)_0%,rgba(10,132,255,0.08)_45%,transparent_72%)] blur-2xl" />
              
              {/* Main 3D Robot Image */}
              <div className="relative z-10 flex w-full items-center justify-center">
                <img
                  src="/images/hero-robot.png"
                  alt="AI Catalyst Assistant"
                  className="w-full max-w-[460px] object-contain drop-shadow-2xl animate-float"
                />
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
