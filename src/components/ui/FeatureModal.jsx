import React from 'react';
import { X, CheckCircle2, Sparkles } from 'lucide-react';

export default function FeatureModal({ modalData, onClose }) {
  if (!modalData) return null;

  const advantages = modalData.advantages || [
    'Instant money transfers with sub-second settlement across 150+ countries',
    'Zero hidden fees with real-time transparent currency exchange rates',
    'Bank-grade 256-bit encryption & multi-factor biometric authentication',
    'Unified virtual & physical debit cards with instant cashback rewards',
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border border-purple-100 space-y-5">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-3 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#7B59FF] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Platform Overview</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-black text-[#181335] leading-tight">
            {modalData.title}
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {modalData.content}
          </p>
        </div>

        <div className="bg-purple-50/70 rounded-2xl p-4 sm:p-5 border border-purple-100 space-y-3 text-left">
          <div className="flex items-center gap-2 text-xs font-bold text-[#7B59FF]">
            <CheckCircle2 className="w-4 h-4" />
            <span>Key Advantages & Capabilities</span>
          </div>
          <ul className="text-xs text-slate-600 space-y-2 pl-2">
            {advantages.map((adv, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#7B59FF] mt-1.5 shrink-0" />
                <span>{adv}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-gradient-to-r from-[#A78FFF] to-[#8565FF] text-white text-xs font-bold shadow-md shadow-purple-500/20 hover:opacity-95 transition-all cursor-pointer active:scale-95"
          >
            Close Details
          </button>
        </div>

      </div>
    </div>
  );
}
