import React, { useState } from 'react';
import { ChevronDown, Search, MessageSquarePlus } from 'lucide-react';

export default function FAQ({ onOpenContact }) {
  const [openIndex, setOpenIndex] = useState(0); // 01 is open by default like Figma
  const [searchQuery, setSearchQuery] = useState('');

  const faqs = [
    {
      number: '01',
      question: 'What services does Catalyst Analytics provide?',
      answer:
        'Catalyst Analytics offers a comprehensive range of enterprise intelligence services including custom predictive analytics, AI consulting, scalable data engineering, UX design for data-heavy applications, and end-to-end MLOps pipeline automation.'
    },
    {
      number: '02',
      question: 'How do you ensure data security and privacy?',
      answer:
        'We adhere to rigorous industry benchmarks including SOC 2 Type II, ISO 27001, and GDPR compliance. All client models can be deployed in self-hosted or private cloud environments (AWS, Azure, GCP, or On-Prem) with zero data retention on external public endpoints.'
    },
    {
      number: '03',
      question: 'What industries do you specialize in?',
      answer:
        'We specialize in Fintech & Quantitative Trading, Healthcare Diagnostics & Biotech, Supply Chain & Autonomous Logistics, and Enterprise SaaS. Our models are trained and customized specifically for high-stakes operational environments.'
    },
    {
      number: '04',
      question: 'How does the engagement and onboarding process work?',
      answer:
        'Our engagement kicks off with a 2-week architectural assessment and discovery sprint. We identify high-ROI opportunities, construct an interactive Proof of Concept (PoC), and then transition seamlessly into production deployment with full CI/CD monitoring.'
    },
    {
      number: '05',
      question: 'What makes Catalyst Analytics different from other AI firms?',
      answer:
        'Unlike generic agencies that wrap existing APIs, Catalyst builds custom proprietary architectures tailored to your unique corporate data. We focus on measurable business ROI, explainable AI, and complete intellectual property ownership for our partners.'
    }
  ];

  const filteredFaqs = faqs.filter(
    (item) =>
      item.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 overflow-hidden bg-[#030303]">
      <div className="max-w-4xl mx-auto px-6 sm:px-8">
        
        {/* Section Title */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto">
            Everything you need to know about our technology, onboarding timelines, security standards, and partnership models.
          </p>

          {/* Search Bar for FAQ */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="w-5 h-5 text-white/40 absolute left-4 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search frequently asked questions..."
              className="w-full bg-[#141414] border border-[#262626] focus:border-[#0A84FF] rounded-xl pl-12 pr-4 py-3 text-sm text-white placeholder-white/40 focus:outline-none transition-colors"
            />
          </div>
        </div>

        {/* FAQ Accordion List matching Figma Container & styling */}
        <div className="space-y-4">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={faq.number}
                  className={`border transition-all duration-300 rounded-[28px] sm:rounded-[36px] overflow-hidden ${
                    isOpen
                      ? 'bg-[#181818] border-[#0A84FF]/60 shadow-xl shadow-[#0A84FF]/10'
                      : 'bg-[#141414] border-[#262626] hover:border-white/20'
                  }`}
                >
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full p-6 sm:p-8 flex items-center justify-between gap-4 sm:gap-6 text-left cursor-pointer"
                  >
                    <div className="flex items-center gap-4 sm:gap-6">
                      {/* Number Container matching Figma */}
                      <div
                        className={`w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg sm:text-xl shrink-0 transition-colors ${
                          isOpen
                            ? 'bg-[#0A84FF]/15 text-[#0A84FF] border border-[#0A84FF]/40'
                            : 'bg-[#1C1C1C] text-white border border-[#262626]'
                        }`}
                      >
                        {faq.number}
                      </div>

                      {/* Question Text */}
                      <span
                        className={`text-lg sm:text-xl font-medium tracking-tight transition-colors ${
                          isOpen ? 'text-[#0A84FF]' : 'text-white'
                        }`}
                      >
                        {faq.question}
                      </span>
                    </div>

                    {/* Expand Arrow Icon matching Figma */}
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? 'rotate-180 bg-[#0A84FF] text-white'
                          : 'bg-[#1C1C1C] text-white/70 border border-[#262626]'
                      }`}
                    >
                      <ChevronDown className="w-5 h-5" />
                    </div>
                  </button>

                  {/* Collapsible Answer */}
                  {isOpen && (
                    <div className="px-6 pb-8 sm:px-8 sm:pb-8 pt-0 pl-[76px] sm:pl-[104px]">
                      <p className="text-white/80 text-base leading-relaxed font-normal">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })
          ) : (
            <div className="text-center py-12 bg-[#141414] border border-[#262626] rounded-2xl">
              <p className="text-white/60 text-sm">No matching questions found.</p>
            </div>
          )}
        </div>

        {/* Bottom CTA for custom questions */}
        <div className="mt-12 text-center bg-[#141414] border border-[#262626] p-6 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-left">
            <h4 className="font-semibold text-white">Have a specific question not covered here?</h4>
            <p className="text-sm text-white/60">Our senior engineering leads are available for technical discussions.</p>
          </div>
          <button
            onClick={onOpenContact}
            className="flex items-center gap-2 bg-[#0A84FF] hover:bg-[#0070E0] text-white font-semibold text-sm px-5 py-2.5 rounded-xl transition-all shadow-md shadow-[#0A84FF]/20 shrink-0 cursor-pointer"
          >
            <MessageSquarePlus className="w-4 h-4" />
            <span>Ask an Engineer</span>
          </button>
        </div>

      </div>
    </section>
  );
}
