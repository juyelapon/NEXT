import React, { useState } from 'react';
import { Calendar, Clock, CheckCircle, X, Sparkles, Building, User, Mail, MessageSquare } from 'lucide-react';

export default function BookingModal({ isOpen, onClose, preselectedService, onShowToast }) {
  if (!isOpen) return null;

  const [step, setStep] = useState(1);
  const [service, setService] = useState(preselectedService || 'AI Consulting');
  const [date, setDate] = useState('2026-11-18');
  const [time, setTime] = useState('10:00 AM EST');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    notes: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [confirmedBooking, setConfirmedBooking] = useState(null);

  const services = [
    'Predictive Analytics',
    'AI Consulting',
    'Data Engineering',
    'Custom ML Architecture',
  ];

  const timeSlots = [
    '09:00 AM EST',
    '10:00 AM EST',
    '11:30 AM EST',
    '02:00 PM EST',
    '03:30 PM EST',
    '04:30 PM EST',
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      if (onShowToast) onShowToast('Please fill in required fields (Name and Email)', 'error');
      return;
    }

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      const bookingCode = 'CA-' + Math.floor(100000 + Math.random() * 900000);
      setConfirmedBooking({
        code: bookingCode,
        service,
        date,
        time,
        email: formData.email,
        name: formData.name,
      });
      setStep(3);
      if (onShowToast) {
        onShowToast(`Meeting booked successfully! Ref: ${bookingCode}`, 'success');
      }
    }, 1000);
  };

  const handleReset = () => {
    setStep(1);
    setConfirmedBooking(null);
    setFormData({ name: '', email: '', company: '', notes: '' });
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-fadeIn">
      <div className="relative bg-[#141414] border border-[#262626] rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl overflow-hidden">
        
        {/* Top Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#262626] mb-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#0A84FF]/20 border border-[#0A84FF]/40 flex items-center justify-center text-[#0A84FF]">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-white">Schedule Strategic Discovery</h3>
              <p className="text-xs text-white/60">30-min strategy session with our Principal AI Architects</p>
            </div>
          </div>
          <button
            onClick={handleReset}
            className="text-white/60 hover:text-white p-2 rounded-xl bg-[#1C1C1C] border border-[#262626] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Step Indicator */}
        <div className="flex items-center justify-between mb-8 px-2">
          <div className="flex items-center gap-2">
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
              step >= 1 ? 'bg-[#0A84FF] text-white' : 'bg-[#1C1C1C] text-white/40'
            }`}>
              1
            </span>
            <span className="text-xs font-medium text-white/80">Slot</span>
          </div>
          <div className={`h-[2px] flex-1 mx-3 ${step >= 2 ? 'bg-[#0A84FF]' : 'bg-[#262626]'}`} />
          <div className="flex items-center gap-2">
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
              step >= 2 ? 'bg-[#0A84FF] text-white' : 'bg-[#1C1C1C] text-white/40'
            }`}>
              2
            </span>
            <span className="text-xs font-medium text-white/80">Details</span>
          </div>
          <div className={`h-[2px] flex-1 mx-3 ${step >= 3 ? 'bg-[#0A84FF]' : 'bg-[#262626]'}`} />
          <div className="flex items-center gap-2">
            <span className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold ${
              step === 3 ? 'bg-emerald-500 text-white' : 'bg-[#1C1C1C] text-white/40'
            }`}>
              3
            </span>
            <span className="text-xs font-medium text-white/80">Confirmation</span>
          </div>
        </div>

        {/* Step 1: Select Service & Time */}
        {step === 1 && (
          <div className="space-y-6">
            <div>
              <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                1. Select Focus Area
              </label>
              <div className="grid grid-cols-2 gap-2.5">
                {services.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setService(item)}
                    className={`p-3 rounded-xl text-xs sm:text-sm font-medium border text-left transition-all ${
                      service === item
                        ? 'bg-[#0A84FF]/20 border-[#0A84FF] text-white'
                        : 'bg-[#1C1C1C] border-[#262626] text-white/70 hover:border-white/30'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                  2. Select Date
                </label>
                <input
                  type="date"
                  value={date}
                  onChange={(e) => setDate(e.target.value)}
                  className="w-full bg-[#1C1C1C] border border-[#262626] focus:border-[#0A84FF] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-2">
                  3. Select Time
                </label>
                <select
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  className="w-full bg-[#1C1C1C] border border-[#262626] focus:border-[#0A84FF] rounded-xl px-4 py-2.5 text-sm text-white focus:outline-none"
                >
                  {timeSlots.map((slot) => (
                    <option key={slot} value={slot} className="bg-[#141414] text-white">
                      {slot}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="pt-4 flex justify-end">
              <button
                type="button"
                onClick={() => setStep(2)}
                className="bg-[#0A84FF] hover:bg-[#0070E0] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#0A84FF]/25 cursor-pointer"
              >
                Continue to Details
              </button>
            </div>
          </div>
        )}

        {/* Step 2: Contact Details */}
        {step === 2 && (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5">
                Full Name *
              </label>
              <div className="relative">
                <User className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  required
                  placeholder="e.g. Sarah Connor"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full bg-[#1C1C1C] border border-[#262626] focus:border-[#0A84FF] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5">
                Work Email *
              </label>
              <div className="relative">
                <Mail className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#1C1C1C] border border-[#262626] focus:border-[#0A84FF] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5">
                Company / Organization
              </label>
              <div className="relative">
                <Building className="w-4 h-4 text-white/40 absolute left-3.5 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Acme AI Corp"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full bg-[#1C1C1C] border border-[#262626] focus:border-[#0A84FF] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-white/70 uppercase tracking-wider mb-1.5">
                Primary Goal / Architecture Challenges
              </label>
              <div className="relative">
                <MessageSquare className="w-4 h-4 text-white/40 absolute left-3.5 top-3.5" />
                <textarea
                  rows={3}
                  placeholder="Describe your current data pipelines or AI objectives..."
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full bg-[#1C1C1C] border border-[#262626] focus:border-[#0A84FF] rounded-xl pl-10 pr-4 py-2.5 text-sm text-white focus:outline-none resize-none"
                />
              </div>
            </div>

            <div className="pt-4 flex items-center justify-between">
              <button
                type="button"
                onClick={() => setStep(1)}
                className="text-sm text-white/60 hover:text-white px-4 py-2"
              >
                Back
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="bg-[#0A84FF] hover:bg-[#0070E0] text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-[#0A84FF]/25 cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'Confirming...' : 'Confirm Meeting'}
              </button>
            </div>
          </form>
        )}

        {/* Step 3: Confirmation */}
        {step === 3 && confirmedBooking && (
          <div className="text-center py-4 space-y-5 animate-fadeIn">
            <div className="w-16 h-16 rounded-full bg-emerald-500/20 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>

            <div>
              <h4 className="text-2xl font-bold text-white">Meeting Confirmed!</h4>
              <p className="text-sm text-white/70 mt-1">
                Calendar invite and Google Meet link sent to{' '}
                <span className="text-[#0A84FF] font-medium">{confirmedBooking.email}</span>.
              </p>
            </div>

            <div className="bg-[#1C1C1C] border border-[#262626] rounded-2xl p-4 text-left max-w-sm mx-auto space-y-2 text-xs">
              <div className="flex justify-between">
                <span className="text-white/50">Reference:</span>
                <span className="font-mono font-bold text-white">{confirmedBooking.code}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Topic:</span>
                <span className="font-medium text-white">{confirmedBooking.service}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-white/50">Date & Time:</span>
                <span className="font-medium text-white">{confirmedBooking.date} @ {confirmedBooking.time}</span>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="bg-[#0A84FF] text-white font-semibold text-sm px-8 py-3 rounded-xl hover:bg-[#0070E0] transition-colors"
            >
              Done
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
