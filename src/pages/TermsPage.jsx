import React from 'react';
import { FileText, ShieldCheck } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function TermsPage({ user, onLogout }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1538] selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Navbar user={user} onLogout={onLogout} />

      <main className="flex-grow pt-28 pb-16">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 text-left">
          <div className="text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/60 text-[#8565FF] text-xs font-bold">
              <FileText className="w-3.5 h-3.5" />
              <span>Legal Documentation</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#1A1538] tracking-tight">
              Terms &amp; Conditions
            </h1>
            <p className="text-xs sm:text-sm text-[#9DA1C0]">Last updated: August 2026</p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-xl shadow-purple-900/5 space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#1A1538]">1. Agreement to Terms</h2>
              <p>
                By accessing or utilizing the digital platform, web interfaces, mobile applications, APIs, and banking services provided by Digital Money Inc., you agree to be bound by these Terms and all applicable financial regulations.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#1A1538]">2. Eligibility &amp; Account Security</h2>
              <p>
                You must be at least 18 years old and possess the legal capacity to enter into financial contracts. You are solely responsible for maintaining the confidentiality of your credentials and multi-factor authentication devices.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#1A1538]">3. Permitted Financial Transactions</h2>
              <p>
                Our services must only be utilized for lawful financial transactions. Any fraudulent behavior, money laundering, unauthorized scraping, or circumventing regulatory compliance will result in immediate account termination.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#1A1538]">4. Fees &amp; Transparent Exchange Rates</h2>
              <p>
                All exchange rates applied to cross-border remittances are derived in real-time from interbank wholesale markets. Any applicable fee schedule will be explicitly displayed prior to payment authorization.
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
