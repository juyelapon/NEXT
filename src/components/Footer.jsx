import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, CheckCircle2 } from 'lucide-react';

export default function Footer({ onOpenPrivacy, onOpenTerms }) {
  const [emailInput, setEmailInput] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (!emailInput || !emailInput.includes('@')) return;
    setSubscribed(true);
    setTimeout(() => {
      setEmailInput('');
      setSubscribed(false);
    }, 4000);
  };

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#why-us' },
    { name: 'About Us', href: '#story' },
    { name: 'Careers', href: '#faq' },
  ];

  return (
    <footer className="relative bg-[#030303] border-t border-[#858585]/40 pt-16 pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        
        {/* Top Row: Brand, Nav & Socials */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 pb-12 border-b border-[#262626]">
          {/* Logo & Name */}
          <a href="#home" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-xl overflow-hidden bg-[#141414] border border-[#262626] flex items-center justify-center group-hover:border-[#0A84FF] transition-colors">
              <img
                src="/images/logo.png"
                alt="Catalyst Analytics Logo"
                className="w-8 h-8 object-contain"
              />
            </div>
            <div className="flex flex-col text-left">
              <span className="font-bold text-white text-lg tracking-tight leading-tight">
                Catalyst
              </span>
              <span className="font-semibold text-white/70 text-xs tracking-wider uppercase">
                Analytics
              </span>
            </div>
          </a>

          {/* Nav Links */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-[#E6E6E6]/80 hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Icons Container matching Figma Node #31:3999 */}
          <div className="flex items-center gap-3.5 bg-[#141414] border border-[#262626] px-4 py-2 rounded-2xl">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-[#1C1C1C] border border-[#262626] flex items-center justify-center hover:bg-[#0A84FF] hover:border-[#0A84FF] transition-all group"
              aria-label="Twitter / X"
            >
              <img
                src="/images/social-1.svg"
                alt="Social Icon 1"
                className="w-4 h-4 filter invert opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-[#1C1C1C] border border-[#262626] flex items-center justify-center hover:bg-[#0A84FF] hover:border-[#0A84FF] transition-all group"
              aria-label="LinkedIn"
            >
              <img
                src="/images/social-2.svg"
                alt="Social Icon 2"
                className="w-4 h-4 filter invert opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="w-10 h-10 rounded-xl bg-[#1C1C1C] border border-[#262626] flex items-center justify-center hover:bg-[#0A84FF] hover:border-[#0A84FF] transition-all group"
              aria-label="GitHub"
            >
              <img
                src="/images/social-3.svg"
                alt="Social Icon 3"
                className="w-4 h-4 filter invert opacity-80 group-hover:opacity-100 transition-opacity"
              />
            </a>
          </div>
        </div>

        {/* Middle Row: Contact Channels & Newsletter */}
        <div className="py-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center border-b border-[#262626]">
          {/* Contact Details */}
          <div className="lg:col-span-7 flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href="mailto:contact@catalystanalytics.io"
              className="flex items-center gap-2.5 text-xs sm:text-sm text-[#E6E6E6]/80 hover:text-white bg-[#141414] border border-[#262626] hover:border-[#0A84FF] px-4 py-2.5 rounded-xl transition-all"
            >
              <img src="/images/contact-email.svg" alt="Email" className="w-4 h-4 filter invert" />
              <span>contact@catalystanalytics.io</span>
            </a>

            <a
              href="tel:+14697124672"
              className="flex items-center gap-2.5 text-xs sm:text-sm text-[#E6E6E6]/80 hover:text-white bg-[#141414] border border-[#262626] hover:border-[#0A84FF] px-4 py-2.5 rounded-xl transition-all"
            >
              <img src="/images/contact-phone.svg" alt="Phone" className="w-4 h-4 filter invert" />
              <span>+1 (469) 712-4672</span>
            </a>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-[#E6E6E6]/70 bg-[#141414] border border-[#262626] px-4 py-2.5 rounded-xl">
              <img src="/images/contact-location.svg" alt="Location" className="w-4 h-4 filter invert" />
              <span>Austin, TX 78731</span>
            </div>
          </div>

          {/* Interactive Newsletter */}
          <div className="lg:col-span-5">
            <form onSubmit={handleSubscribe} className="relative flex items-center">
              <input
                type="email"
                value={emailInput}
                onChange={(e) => setEmailInput(e.target.value)}
                placeholder="Subscribe to AI Intelligence Brief..."
                required
                className="w-full bg-[#141414] border border-[#262626] focus:border-[#0A84FF] rounded-xl pl-4 pr-32 py-3 text-xs sm:text-sm text-white placeholder-white/40 focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-1.5 bg-[#0A84FF] hover:bg-[#0070E0] text-white text-xs font-semibold px-4 py-2 rounded-lg flex items-center gap-1.5 transition-colors cursor-pointer"
              >
                {subscribed ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-300" />
                    <span>Joined!</span>
                  </>
                ) : (
                  <>
                    <span>Subscribe</span>
                    <Send className="w-3 h-3" />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom Row: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#98989A]">
          <div className="flex items-center gap-6">
            <button
              onClick={onOpenPrivacy}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={onOpenTerms}
              className="hover:text-white transition-colors cursor-pointer"
            >
              Terms of Service
            </button>
          </div>

          <div>
            © 2025 Catalyst Analytics. All rights reserved. Built with React & Tailwind CSS.
          </div>
        </div>

      </div>
    </footer>
  );
}
