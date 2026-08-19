import React from 'react';
import { Code, Terminal, Layers, ArrowRight, CheckCircle2, Play } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function TutorialsPage({ user, onLogout }) {
  const tutorials = [
    {
      title: 'Integrating the Digital Money REST API',
      category: 'API Integration',
      level: 'Beginner',
      time: '15 min read',
      description: 'Step-by-step guide to generating API keys, authenticating requests via Bearer token, and initiating payouts.',
    },
    {
      title: 'Real-Time Webhooks for Transaction Events',
      category: 'Webhooks & Events',
      level: 'Intermediate',
      time: '20 min read',
      description: 'Configure and verify cryptographically signed HMAC webhooks for deposit confirmation, chargebacks, and FX swaps.',
    },
    {
      title: 'Building a Multi-Currency Checkout with React & Node',
      category: 'Full-Stack Tutorial',
      level: 'Advanced',
      time: '35 min read',
      description: 'Full code walkthrough creating a localized shopping checkout supporting instant multi-currency settlement.',
    },
    {
      title: 'Issuing Programmatic Virtual Visa Cards',
      category: 'Cards API',
      level: 'Intermediate',
      time: '18 min read',
      description: 'Learn how to generate single-use virtual cards programmatically with custom automated budget ceilings.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1538] selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Navbar user={user} onLogout={onLogout} />

      <main className="flex-grow pt-28 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/60 text-[#8565FF] text-xs font-bold mb-6">
            <Code className="w-3.5 h-3.5" />
            <span>Developer Documentation &amp; Tutorials</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A1538] tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6">
            Development Tutorials &amp; Quickstarts
          </h1>

          <p className="text-sm sm:text-lg text-[#9DA1C0] max-w-2xl mx-auto leading-relaxed mb-16">
            Master the Digital Money API and developer toolkit with practical guides, code snippets, and architecture references.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
            {tutorials.map((tut, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-[#8565FF] text-[11px] font-bold">
                      {tut.category}
                    </span>
                    <span className="text-xs text-[#9DA1C0]">{tut.time}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1A1538]">{tut.title}</h3>
                  <p className="text-xs sm:text-sm text-[#9DA1C0] leading-relaxed">
                    {tut.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
                    {tut.level}
                  </span>
                  <button className="flex items-center gap-1.5 text-xs font-bold text-[#8565FF] hover:underline cursor-pointer">
                    <span>Read Tutorial</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
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
