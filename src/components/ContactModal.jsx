import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send, X, CheckCircle, Clock } from 'lucide-react';

export default function ContactModal({ isOpen, onClose, onShowToast }) {
  if (!isOpen) return null;

  const [form, setForm] = useState({
    name: '',
    email: '',
    subject: 'General Inquiry',
    message: '',
  });
  const [submitting, setSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      if (onShowToast) onShowToast('Please fill out all fields', 'error');
      return;
    }

    setSubmitting(true);
    setTimeout(() => {
      setSubmitting(false);
      setSent(true);
      if (onShowToast) onShowToast('Message delivered to our engineering desk!', 'success');
      setTimeout(() => {
        setSent(false);
        setForm({ name: '', email: '', subject: 'General Inquiry', message: '' });
        onClose();
      }, 2500);
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative bg-[#141414] border border-[#262626] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#262626] mb-6">
          <div>
            <h3 className="text-2xl font-bold text-white">Get in Touch</h3>
            <p className="text-xs text-white/60 mt-1">Our specialized architects reply in under 2 hours.</p>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white p-2 rounded-xl bg-[#1C1C1C] border border-[#262626]"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {sent ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h4 className="text-2xl font-bold text-white">Message Transmitted!</h4>
            <p className="text-sm text-white/70 max-w-sm mx-auto">
              Thank you, {form.name}. A designated solution architect is reviewing your brief and will respond shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5">
                  Your Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="Alex Mercer"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full bg-[#1C1C1C] border border-[#262626] focus:border-[#0A84FF] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5">
                  Email Address *
                </label>
                <input
                  type="email"
                  required
                  placeholder="alex@enterprise.com"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full bg-[#1C1C1C] border border-[#262626] focus:border-[#0A84FF] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5">
                Inquiry Topic
              </label>
              <select
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                className="w-full bg-[#1C1C1C] border border-[#262626] focus:border-[#0A84FF] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
              >
                <option value="General Inquiry">General Enterprise Inquiry</option>
                <option value="Predictive Analytics Implementation">Predictive Analytics Implementation</option>
                <option value="AI Consulting & Architecture Review">AI Consulting & Architecture Review</option>
                <option value="Data Pipeline Modernization">Data Pipeline Modernization</option>
                <option value="Partnership / Investment">Partnership / Investment</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5">
                Message / Technical Scope *
              </label>
              <textarea
                required
                rows={4}
                placeholder="Tell us about your data volume, tech stack, and business goals..."
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-[#1C1C1C] border border-[#262626] focus:border-[#0A84FF] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none resize-none"
              />
            </div>

            <div className="pt-2 flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs text-white/50">
                <Clock className="w-3.5 h-3.5 text-[#0A84FF]" />
                <span>Typical response: &lt; 2 hrs</span>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="flex items-center gap-2 bg-[#0A84FF] hover:bg-[#0070E0] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#0A84FF]/25 cursor-pointer disabled:opacity-50"
              >
                {submitting ? 'Transmitting...' : 'Send Message'}
                <Send className="w-4 h-4" />
              </button>
            </div>
          </form>
        )}

      </div>
    </div>
  );
}
