import React from 'react';
import { Shield, Lock } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function PrivacyPage({ user, onLogout }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1538] selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Navbar user={user} onLogout={onLogout} />

      <main className="flex-grow pt-28 pb-16">
        <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 text-left">
          <div className="text-center space-y-4 mb-14">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/60 text-[#8565FF] text-xs font-bold">
              <Shield className="w-3.5 h-3.5" />
              <span>Data Protection</span>
            </div>
            <h1 className="text-3xl sm:text-5xl font-black text-[#1A1538] tracking-tight">
              Privacy Policy &amp; Security Standards
            </h1>
            <p className="text-xs sm:text-sm text-[#9DA1C0]">Last updated: August 2026</p>
          </div>

          <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-100 shadow-xl shadow-purple-900/5 space-y-8 text-xs sm:text-sm text-slate-600 leading-relaxed">
            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#1A1538]">1. Information We Collect</h2>
              <p>
                To provide compliant financial and banking services, we collect identification details (name, email address, government ID verification), transactional telemetry, and device telemetry to prevent fraud.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#1A1538]">2. Bank-Grade Cryptographic Storage</h2>
              <p>
                All sensitive user records, debit card identifiers, and financial logs are encrypted both in transit (TLS 1.3) and at rest (AES-256) across isolated secure multi-cloud server enclaves.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#1A1538]">3. We Never Sell Your Data</h2>
              <p>
                We do not sell, rent, or monetize your personal or financial information to third-party advertisers. Data is exclusively shared with authorized regulatory reporting entities and certified payment settlement networks.
              </p>
            </section>

            <section className="space-y-3">
              <h2 className="text-base sm:text-lg font-bold text-[#1A1538]">4. User Data Sovereignty &amp; GDPR Rights</h2>
              <p>
                You retain complete control over your financial records, including the right to request full export of transaction history or account deletion in accordance with GDPR and CCPA guidelines.
              </p>
            </section>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
