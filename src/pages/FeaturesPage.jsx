import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Sparkles, CreditCard, Shield, Zap, RefreshCw, BarChart3, Lock, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function FeaturesPage({ user, onLogout }) {
  const navigate = useNavigate();

  const featureList = [
    {
      icon: Zap,
      title: 'Instant Global Money Transfers',
      description: 'Move funds across 150+ countries with sub-second execution speeds and real-time live conversion exchange rates.',
      highlights: ['Sub-second latency', 'Over 40 currencies supported', 'Instant recipient notifications'],
    },
    {
      icon: CreditCard,
      title: 'Virtual & Physical Visa Cards',
      description: 'Issue unlimited virtual debit cards instantly for secure online shopping, alongside physical cards with contactless NFC chips.',
      highlights: ['Apple Pay & Google Pay ready', 'Zero foreign transaction fees', 'Custom spending limits per card'],
    },
    {
      icon: Lock,
      title: 'Military-Grade Biometric Security',
      description: 'Bank-level 256-bit encryption with dynamic CVV refresh, fingerprint/Face ID authorization, and automated anomaly detection.',
      highlights: ['Dynamic rolling CVV codes', 'Real-time card freezing in app', 'SOC2 Type II certified'],
    },
    {
      icon: BarChart3,
      title: 'Intelligent Financial Analytics',
      description: 'Automated categorization and real-time insights to help you track spending habits, optimize savings, and manage cashflow.',
      highlights: ['Automated budget targets', 'Exportable tax & accounting statements', 'Visual spend breakdown graphs'],
    },
    {
      icon: RefreshCw,
      title: 'Automated Recurring Payments',
      description: 'Never miss a subscription or recurring invoice. Schedule automated standing orders with intelligent overdraft shields.',
      highlights: ['One-click subscription cancellation', 'Flexible payment intervals', 'Smart balance forecasts'],
    },
    {
      icon: Shield,
      title: 'FDIC-Insured Account Protection',
      description: 'Your capital is backed by partner tier-1 depository institutions with pass-through insurance up to $250,000 per account.',
      highlights: ['Full regulatory compliance', 'Multi-tenant segregated funds', '24/7 dedicated fraud monitoring'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1538] selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Navbar user={user} onLogout={onLogout} />

      <main className="flex-grow pt-28 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/60 text-[#8565FF] text-xs font-bold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Platform Capabilities</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A1538] tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6">
            Engineered for Speed, Security &amp; Financial Freedom
          </h1>

          <p className="text-sm sm:text-lg text-[#9DA1C0] max-w-2xl mx-auto leading-relaxed mb-12">
            Explore our comprehensive suite of modern banking and cross-border payment tools designed for modern individuals and growing digital businesses.
          </p>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
            {featureList.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-purple-900/5 hover:shadow-xl hover:border-purple-200 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#8565FF] flex items-center justify-center shadow-inner">
                    <item.icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-[#1A1538]">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#9DA1C0] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100/80 space-y-2">
                  {item.highlights.map((h, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs font-semibold text-[#1A1538]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Call to Action */}
          <div className="mt-16 bg-gradient-to-r from-[#A78FFF] to-[#8565FF] rounded-3xl p-10 text-white max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl shadow-purple-500/20">
            <div className="text-left space-y-2">
              <h3 className="text-2xl font-bold">Ready to experience next-gen banking?</h3>
              <p className="text-xs sm:text-sm text-purple-100">Open your free account in under 3 minutes with zero commitment.</p>
            </div>
            <button
              onClick={() => navigate('/signup')}
              className="px-8 py-3.5 rounded-full bg-white text-[#8565FF] font-bold text-xs sm:text-sm hover:bg-slate-50 transition-all shadow-md active:scale-95 shrink-0"
            >
              Get Started Now
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
