import React from 'react';
import { X, CheckCircle2, Sparkles } from 'lucide-react';

export default function FeatureModal({ modalData, onClose }) {
  if (!modalData) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md animate-in fade-in duration-200">
      <div className="relative w-full max-w-lg bg-white rounded-3xl p-8 shadow-2xl border border-purple-100 space-y-6">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600 hover:bg-slate-100 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-purple-100 text-[#7B59FF] text-xs font-bold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Feature Details</span>
          </div>
          <h3 className="text-2xl font-black text-[#181335]">
            {modalData.title}
          </h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {modalData.content}
          </p>
        </div>

        <div className="bg-purple-50/70 rounded-2xl p-4 border border-purple-100 space-y-2">
          <div className="flex items-center gap-2 text-xs font-bold text-[#7B59FF]">
            <CheckCircle2 className="w-4 h-4" />
            <span>Key Advantages</span>
          </div>
          <ul className="text-xs text-slate-600 space-y-1.5 pl-6 list-disc">
            <li>Instant setup with automated digital wallet sync</li>
            <li>Zero hidden transaction fees on tier-1 corridors</li>
            <li>Comprehensive REST & GraphQL integration APIs</li>
          </ul>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2.5 rounded-full bg-[#7B59FF] text-white text-xs font-bold shadow-md hover:bg-[#603BFA] transition-colors cursor-pointer"
          >
            Got It
          </button>
        </div>

      </div>
    </div>
  );
}
