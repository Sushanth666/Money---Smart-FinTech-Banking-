import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { UserCheck, ShieldCheck, CreditCard, Send, ArrowRight, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function WorksPage({ user, onLogout }) {
  const navigate = useNavigate();

  const steps = [
    {
      step: '01',
      icon: UserCheck,
      title: 'Create Your Free Account',
      description: 'Sign up with your email and verify your identity in less than 2 minutes via automated KYC biometric check.',
    },
    {
      step: '02',
      icon: ShieldCheck,
      title: 'Connect & Fund Multi-Currency Wallet',
      description: 'Link your existing bank account or deposit funds in 40+ supported currencies with zero incoming transfer fees.',
    },
    {
      step: '03',
      icon: CreditCard,
      title: 'Generate Instant Virtual & Physical Cards',
      description: 'Issue disposable virtual cards for secure online checkouts and order a physical contactless Visa debit card.',
    },
    {
      step: '04',
      icon: Send,
      title: 'Send, Spend & Earn Rewards Globally',
      description: 'Transfer money globally in real-time and earn up to 3.5% automated cashback on all worldwide merchant purchases.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1538] selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Navbar user={user} onLogout={onLogout} />

      <main className="flex-grow pt-28 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/60 text-[#8565FF] text-xs font-bold mb-6">
            <Send className="w-3.5 h-3.5" />
            <span>How It Works</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A1538] tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6">
            Four Simple Steps to Master Your Money Anywhere
          </h1>

          <p className="text-sm sm:text-lg text-[#9DA1C0] max-w-2xl mx-auto leading-relaxed mb-16">
            We stripped away legacy banking paperwork, slow wire processing, and predatory hidden fees. Here is how our seamless platform works:
          </p>

          {/* Steps Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-left relative">
            {steps.map((item, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 relative flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#8565FF] flex items-center justify-center shadow-inner">
                      <item.icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-black text-purple-200">{item.step}</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1A1538]">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-[#9DA1C0] leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center gap-1.5 text-xs font-bold text-[#8565FF]">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Instant Activation</span>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Banner */}
          <div className="mt-16 text-center space-y-4">
            <button
              onClick={() => navigate('/signup')}
              className="px-10 py-4 rounded-full bg-gradient-to-r from-[#A78FFF] to-[#8565FF] text-white font-bold text-sm shadow-xl shadow-purple-500/25 hover:opacity-95 hover:scale-105 transition-all duration-300 cursor-pointer active:scale-95"
            >
              Open Your Account in 2 Minutes
            </button>
            <p className="text-xs text-[#9DA1C0]">No credit check required • Free setup • Cancel anytime</p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
