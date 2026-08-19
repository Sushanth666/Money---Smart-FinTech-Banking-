import React, { useState } from 'react';
import { HelpCircle, Mail, MessageSquare, Phone, ChevronDown, CheckCircle2, Send, Sparkles } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function SupportPage({ user, onLogout }) {
  const [openFaq, setOpenFaq] = useState(0);
  const [messageSent, setMessageSent] = useState(false);

  const faqs = [
    {
      q: 'How fast are international money transfers processed?',
      a: 'Most cross-border transactions on tier-1 currency corridors (USD, EUR, GBP, AUD, JPY) settle within sub-second speeds. In other regions, transfers typically arrive within 10-30 minutes.',
    },
    {
      q: 'Are my funds protected and FDIC insured?',
      a: 'Yes. All customer deposits are held in segregated, pass-through accounts at our partner tier-1 chartered banking institutions with FDIC insurance coverage up to $250,000.',
    },
    {
      q: 'How do I create and manage virtual debit cards?',
      a: 'You can generate unlimited virtual Visa cards instantly from your account dashboard under the Cards tab. Set custom daily spending limits or create single-use burn cards for one-time online purchases.',
    },
    {
      q: 'What fees are charged for currency exchange?',
      a: 'We use real-time interbank foreign exchange rates with zero hidden markups or monthly account maintenance charges.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1538] selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Navbar user={user} onLogout={onLogout} />

      <main className="flex-grow pt-28 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14">
          <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/60 text-[#8565FF] text-xs font-bold">
              <HelpCircle className="w-3.5 h-3.5" />
              <span>Customer Help Desk</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A1538] tracking-tight leading-[1.15]">
              How Can We Assist You Today?
            </h1>

            <p className="text-sm sm:text-base text-[#9DA1C0]">
              Our global concierge and compliance team is available 24/7/365 to resolve your account and transaction questions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 max-w-6xl mx-auto">
            {/* Left: Contact Options & Message Form */}
            <div className="lg:col-span-6 space-y-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-2 text-left">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#8565FF] flex items-center justify-center">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-[#1A1538]">Live Chat</h4>
                  <p className="text-xs text-[#9DA1C0]">Average response time: under 2 minutes.</p>
                </div>

                <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm space-y-2 text-left">
                  <div className="w-10 h-10 rounded-xl bg-purple-100 text-[#8565FF] flex items-center justify-center">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h4 className="font-bold text-sm text-[#1A1538]">Email Support</h4>
                  <p className="text-xs text-[#9DA1C0]">support@digitalmoney.com</p>
                </div>
              </div>

              {/* Message Box */}
              <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-purple-900/5 text-left space-y-4">
                <h3 className="text-xl font-bold text-[#1A1538]">Send Us a Message</h3>
                {messageSent ? (
                  <div className="p-6 bg-emerald-50 text-emerald-800 rounded-2xl text-center space-y-2 border border-emerald-100">
                    <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                    <p className="font-bold text-sm">Message Sent Successfully!</p>
                    <p className="text-xs text-emerald-700">A support agent will reply to your registered email shortly.</p>
                  </div>
                ) : (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setMessageSent(true);
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-bold text-[#1A1538] mb-1">Your Name</label>
                      <input required type="text" placeholder="Alex Rivera" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:border-[#8565FF] outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1A1538] mb-1">Email Address</label>
                      <input required type="email" placeholder="alex@example.com" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:border-[#8565FF] outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1A1538] mb-1">How can we help?</label>
                      <textarea required rows={4} placeholder="Describe your question or issue in detail..." className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:border-[#8565FF] outline-none resize-none" />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-full bg-gradient-to-r from-[#A78FFF] to-[#8565FF] text-white font-bold text-xs shadow-lg shadow-purple-500/25 hover:opacity-95"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>

            {/* Right: Interactive FAQs */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <h3 className="text-xl font-bold text-[#1A1538] mb-4">Frequently Asked Questions</h3>
              {faqs.map((faq, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                    className="w-full p-5 text-left font-bold text-xs sm:text-sm text-[#1A1538] flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/50"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown className={`w-4 h-4 text-[#8565FF] transition-transform duration-200 shrink-0 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </button>
                  {openFaq === idx && (
                    <div className="px-5 pb-5 pt-1 text-xs text-[#9DA1C0] leading-relaxed border-t border-slate-50">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
