import React from 'react';
import { CheckCircle2, AlertCircle, X } from 'lucide-react';

export default function Toast({ toast, onClose }) {
  if (!toast) return null;

  const isSuccess = toast.type === 'success';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex items-center gap-3 bg-[#141414] border border-[#262626] shadow-2xl rounded-2xl p-4 max-w-md animate-slideUp">
      <div
        className={`w-9 h-9 rounded-xl flex items-center justify-center shrink-0 ${
          isSuccess
            ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
            : 'bg-rose-500/20 text-rose-400 border border-rose-500/30'
        }`}
      >
        {isSuccess ? <CheckCircle2 className="w-5 h-5" /> : <AlertCircle className="w-5 h-5" />}
      </div>
      <div className="text-sm text-white font-medium flex-1 pr-2">
        {toast.message}
      </div>
      <button
        onClick={onClose}
        className="text-white/40 hover:text-white p-1 rounded-lg"
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
