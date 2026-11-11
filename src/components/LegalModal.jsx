import React from 'react';
import { X, ShieldCheck, FileText } from 'lucide-react';

export default function LegalModal({ isOpen, onClose, type }) {
  if (!isOpen) return null;

  const isPrivacy = type === 'privacy';
  const title = isPrivacy ? 'Privacy Policy' : 'Terms of Service';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative bg-[#141414] border border-[#262626] rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl overflow-y-auto max-h-[85vh]">
        <div className="flex items-center justify-between pb-4 border-b border-[#262626] mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0A84FF]/20 border border-[#0A84FF]/40 flex items-center justify-center text-[#0A84FF]">
              {isPrivacy ? <ShieldCheck className="w-5 h-5" /> : <FileText className="w-5 h-5" />}
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">{title}</h3>
              <p className="text-xs text-white/60">Effective Date: November 2026</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white p-2 rounded-xl bg-[#1C1C1C] border border-[#262626]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="space-y-4 text-xs sm:text-sm text-white/80 leading-relaxed">
          {isPrivacy ? (
            <>
              <p>
                At Catalyst Analytics, safeguarding client intellectual property and sensitive corporate telemetry is our foundational commitment.
              </p>
              <h4 className="font-bold text-white text-sm">1. Data Ownership</h4>
              <p>
                Clients maintain 100% ownership over all datasets, model weights, embeddings, and analytics derived during our engineering engagements. We do not use customer proprietary data to train public foundation models.
              </p>
              <h4 className="font-bold text-white text-sm">2. Security & Compliance</h4>
              <p>
                We execute all workloads within certified ISO 27001, SOC 2 Type II, and HIPAA/GDPR aligned infrastructures, enforcing 256-bit AES encryption at rest and TLS 1.3 in transit.
              </p>
            </>
          ) : (
            <>
              <p>
                Welcome to Catalyst Analytics. By accessing our platform, solutions, and consultation portals, you agree to these Terms of Service.
              </p>
              <h4 className="font-bold text-white text-sm">1. Service Level Commitments</h4>
              <p>
                Catalyst provides high-availability SLA uptime guarantees of 99.9% for production microservices deployed under enterprise service level agreements.
              </p>
              <h4 className="font-bold text-white text-sm">2. Confidentiality</h4>
              <p>
                Mutual Non-Disclosure Agreements (NDAs) govern all client strategic discovery sessions, codebase audits, and proof-of-concept deliverables.
              </p>
            </>
          )}

          <div className="border-t border-[#262626] pt-6 flex justify-end">
            <button
              onClick={onClose}
              className="bg-[#0A84FF] hover:bg-[#0070E0] text-white font-semibold text-xs sm:text-sm px-6 py-2.5 rounded-xl transition-all"
            >
              I Understand
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
