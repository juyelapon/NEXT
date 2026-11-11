import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export default function Navbar({ onOpenContact, onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#why-us' },
    { name: 'About Us', href: '#story' },
    { name: 'Careers', href: '#faq' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-[#030303]/90 backdrop-blur-md border-b border-[#262626]/80 py-3 shadow-lg shadow-black/40'
          : 'bg-[#030303] py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#home" className="flex items-center gap-3 group">
          <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-[#141414] border border-[#262626] flex items-center justify-center group-hover:border-[#0A84FF] transition-colors">
            <img
              src="/images/logo.png"
              alt="Catalyst Analytics"
              className="w-8 h-8 object-contain"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="font-bold text-white text-lg tracking-tight leading-tight group-hover:text-[#0A84FF] transition-colors">
              Catalyst
            </span>
            <span className="font-semibold text-white/70 text-xs tracking-wider uppercase">
              Analytics
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-1 lg:gap-2 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-full transition-all duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right Action CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 bg-[#0A84FF] hover:bg-[#0070E0] active:scale-95 text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all duration-200 shadow-lg shadow-[#0A84FF]/25 hover:shadow-[#0A84FF]/40 cursor-pointer"
          >
            <span>Contact Us</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden text-white/90 hover:text-white p-2 rounded-lg bg-[#141414] border border-[#262626]"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a] border-b border-[#262626] px-6 py-6 animate-fadeIn">
          <nav className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2 text-base font-medium text-white/80 hover:text-white hover:bg-[#141414] rounded-lg transition-colors"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 border-t border-[#262626] flex flex-col gap-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full bg-[#0A84FF] text-white font-semibold py-3 rounded-xl hover:bg-[#0070E0] transition-colors"
              >
                Contact Us
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full bg-[#141414] border border-[#262626] text-white font-medium py-3 rounded-xl hover:bg-[#1C1C1C] transition-colors"
              >
                Book a Meeting
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
