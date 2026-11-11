import React from 'react';
import { X, Award, Shield, Zap, Target } from 'lucide-react';

export default function LearnMoreModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative bg-[#141414] border border-[#262626] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[90vh]">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#262626] mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0A84FF]/20 border border-[#0A84FF]/40 flex items-center justify-center text-[#0A84FF]">
              <Target className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Our Founding Journey</h3>
              <p className="text-xs text-white/60">Catalyst Analytics Vision & Milestones</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white p-2 rounded-xl bg-[#1C1C1C] border border-[#262626]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-6 text-sm text-white/80 leading-relaxed">
          <p>
            In 2021, our founders realized that enterprise data was multiplying exponentially, yet decision-making speed remained paralyzed by manual reports, fragmented silos, and opaque BI dashboards.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6">
            <div className="p-4 rounded-2xl bg-[#1C1C1C] border border-[#262626]">
              <div className="flex items-center gap-2 font-bold text-white mb-1">
                <Zap className="w-4 h-4 text-[#0A84FF]" />
                <span>Real-Time Inference</span>
              </div>
              <p className="text-xs text-white/60">
                Transforming historical hindsight into real-time algorithmic foresight.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#1C1C1C] border border-[#262626]">
              <div className="flex items-center gap-2 font-bold text-white mb-1">
                <Shield className="w-4 h-4 text-emerald-400" />
                <span>Zero Compromise Security</span>
              </div>
              <p className="text-xs text-white/60">
                Air-gapped and private VPC architectures compliant with global enterprise regulations.
              </p>
            </div>
          </div>

          <h4 className="text-base font-bold text-white pt-2">Our Operating Philosophy</h4>
          <p>
            We believe that every high-growth business deserves AI systems that act as an authentic force multiplier, eliminating guesswork and liberating engineering bandwidth for visionary creation.
          </p>

          <div className="border-t border-[#262626] pt-6 flex justify-end">
            <button
              onClick={onClose}
              className="bg-[#0A84FF] hover:bg-[#0070E0] text-white font-semibold text-sm px-6 py-2.5 rounded-xl transition-all"
            >
              Close Story
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
