import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Globe, Users, TrendingUp, ArrowLeft, Award, Zap, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function AboutPage({ user, onLogout }) {
  const stats = [
    { label: 'Active Global Users', value: '2.5M+' },
    { label: 'Annual Volume Processed', value: '$12.8B' },
    { label: 'Supported Countries', value: '150+' },
    { label: 'Customer Satisfaction', value: '99.9%' },
  ];

  const values = [
    {
      icon: ShieldCheck,
      title: 'Security-First Architecture',
      description: 'We safeguard your financial assets with end-to-end 256-bit encryption, SOC2 Type II certification, and multi-factor biometric protection.',
    },
    {
      icon: Zap,
      title: 'Sub-Second Global Settlement',
      description: 'Our proprietary ledger network ensures instant cross-border transfers and real-time point-of-sale authorizations worldwide.',
    },
    {
      icon: Globe,
      title: 'Financial Inclusivity',
      description: 'Democratizing access to modern banking infrastructure for freelancers, fast-growing startups, and global enterprises alike.',
    },
    {
      icon: Award,
      title: 'Zero Hidden Fees',
      description: 'Total pricing transparency with live, real-time foreign exchange market rates and no deceptive monthly maintenance charges.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1538] selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Navbar user={user} onLogout={onLogout} />

      <main className="flex-grow pt-28 pb-16">
        {/* Hero Section */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/60 text-[#8565FF] text-xs font-bold mb-6">
            <Users className="w-3.5 h-3.5" />
            <span>About Digital Money Inc.</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A1538] tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6">
            Building the Future of Global FinTech &amp; Instant Banking
          </h1>

          <p className="text-sm sm:text-lg text-[#9DA1C0] max-w-2xl mx-auto leading-relaxed mb-10">
            Founded with the mission to eliminate border friction in international commerce, Digital Money empowers millions of individuals and businesses to send, spend, and manage wealth effortlessly.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto bg-gradient-to-br from-purple-50/70 to-slate-50 p-8 rounded-3xl border border-purple-100 shadow-sm">
            {stats.map((stat, idx) => (
              <div key={idx} className="space-y-1">
                <div className="text-2xl sm:text-4xl font-black bg-gradient-to-r from-[#A78FFF] to-[#8565FF] bg-clip-text text-transparent">
                  {stat.value}
                </div>
                <div className="text-xs sm:text-sm font-semibold text-[#9DA1C0]">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Our Core Values */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center max-w-2xl mx-auto mb-14 space-y-3">
            <h2 className="text-2xl sm:text-4xl font-black text-[#1A1538] tracking-tight">
              Driven by Core Principles
            </h2>
            <p className="text-xs sm:text-sm text-[#9DA1C0]">
              Every technology we engineer is anchored in speed, uncompromising security, and radical transparency.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-purple-900/5 hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex gap-5"
              >
                <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#8565FF] flex items-center justify-center shrink-0 shadow-inner">
                  <val.icon className="w-6 h-6" />
                </div>
                <div className="space-y-2 text-left">
                  <h3 className="text-lg font-bold text-[#1A1538]">{val.title}</h3>
                  <p className="text-xs sm:text-sm text-[#9DA1C0] leading-relaxed">
                    {val.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
