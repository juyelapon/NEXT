import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, BookOpen } from 'lucide-react';

export default function WhyWeStarted({ onOpenLearnMore }) {
  const slides = [
    {
      id: 1,
      quote: "That’s when we knew there had to be a better way — a smarter, faster, more intuitive solution.",
      author: "John Doe",
      role: "Founder & CEO",
      context: "Early Research & Discovery Phase"
    },
    {
      id: 2,
      quote: "So we built a platform that empowers companies to transform raw data into real-time decisions using the power of AI.",
      author: "John Doe",
      role: "Founder & CEO",
      context: "Platform Architecture Launch"
    },
    {
      id: 3,
      quote: "We’re here to make intelligent systems accessible, actionable, and aligned with real business goals.",
      author: "John Doe",
      role: "Founder & CEO",
      context: "Global Mission & Scale"
    }
    
  ];

  const [currentIndex, setCurrentIndex] = useState(1);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const visibleSlides = [-1, 0, 1].map((offset) => ({
    slide: slides[(currentIndex + offset + slides.length) % slides.length],
    slideIndex: (currentIndex + offset + slides.length) % slides.length,
    offset,
  }));

  useEffect(() => {
    if (!isAutoPlay) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);
    return () => clearInterval(interval);
  }, [currentIndex, isAutoPlay]);

  return (
    <section
      id="story"
      className="relative py-24 md:py-32 overflow-hidden bg-[#030303]"
      onMouseEnter={() => setIsAutoPlay(false)}
      onMouseLeave={() => setIsAutoPlay(true)}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Why We Started
          </h2>
          <p className="text-base sm:text-lg text-white/70">
            The driving purpose behind our technology and the team committed to rewriting the rules of intelligence.
          </p>
        </div>

        {/* Carousel Container */}
        <div className="relative flex items-center justify-center gap-4 sm:gap-6">
          {/* Prev Button */}
          <button
            onClick={prevSlide}
            className="hidden sm:flex z-20 w-12 h-12 rounded-full bg-[#1C1C1C] border border-[#262626] hover:border-[#0A84FF] text-white/80 hover:text-white items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer shrink-0"
            aria-label="Previous quote"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          {/* Cards Display Window */}
          <div className="relative w-full max-w-5xl overflow-hidden py-4">
            {/* Left & Right Gradient Fade Masks matching Figma */}
            <div className="hidden lg:block absolute left-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-r from-[#030303] to-transparent" />
            <div className="hidden lg:block absolute right-0 top-0 bottom-0 w-32 z-10 pointer-events-none bg-gradient-to-l from-[#030303] to-transparent" />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
              {visibleSlides.map(({ slide, slideIndex, offset }) => {
                const isCenter = offset === 0;
                return (
                  <div
                    key={slide.id}
                    onClick={() => setCurrentIndex(slideIndex)}
                    className={`relative min-h-[190px] px-2 py-3 flex-col justify-between transition-all duration-300 cursor-pointer ${isCenter
                        ? 'flex opacity-100'
                        : 'hidden md:flex opacity-35 hover:opacity-60'
                      }`}
                  >
                    {/* Top Decorative Line with Icon */}
                    <div className="flex items-center gap-3 w-full mb-6">
                      <div className="h-px flex-1 bg-white/20" />
                      <span
                        aria-hidden="true"
                        className="bg-gradient-to-b from-[#0A84FF] to-[#004C99] bg-clip-text font-serif text-5xl font-bold leading-[0.65] text-transparent"
                      >
                        “
                      </span>
                      <div className="h-px flex-1 bg-white/20" />
                    </div>

                    {/* Quote Text */}
                    <p className="flex min-h-[72px] items-center justify-center text-center text-sm leading-5 font-normal text-white">
                      {slide.quote}
                    </p>

                    {/* Author Details */}
                    <div className="mt-4 text-center">
                      <div className="text-sm font-semibold text-[#0A84FF]">
                        {slide.author}
                      </div>
                      <div className="text-[10px] text-[#0A84FF]/70 font-medium">
                        {slide.role}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="hidden sm:flex z-20 w-12 h-12 rounded-full bg-[#1C1C1C] border border-[#262626] hover:border-[#0A84FF] text-white/80 hover:text-white items-center justify-center transition-all duration-200 active:scale-95 cursor-pointer shrink-0"
            aria-label="Next quote"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* Mobile Nav Arrows & Indicator Dots */}
        <div className="flex sm:hidden items-center justify-center gap-4 mt-6">
          <button
            onClick={prevSlide}
            className="w-10 h-10 rounded-full bg-[#1C1C1C] border border-[#262626] text-white flex items-center justify-center"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <div className="flex gap-2">
            {slides.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrentIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all ${currentIndex === i ? 'bg-[#0A84FF] w-6' : 'bg-white/20'
                  }`}
              />
            ))}
          </div>
          <button
            onClick={nextSlide}
            className="w-10 h-10 rounded-full bg-[#1C1C1C] border border-[#262626] text-white flex items-center justify-center"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>

        {/* "Learn More" Center Button matching Figma Node #31:3992 */}
        <div className="flex justify-center mt-12">
          <button
            onClick={onOpenLearnMore}
            className="inline-flex items-center gap-2 bg-[#0A84FF] hover:bg-[#0070E0] active:scale-95 text-white font-semibold text-sm px-8 py-3.5 rounded-xl transition-all duration-200 shadow-xl shadow-[#0A84FF]/25 hover:shadow-[#0A84FF]/40 cursor-pointer"
          >
            <BookOpen className="w-4 h-4" />
            <span>Learn More About Our Journey</span>
          </button>
        </div>

      </div>
    </section>
  );
}
