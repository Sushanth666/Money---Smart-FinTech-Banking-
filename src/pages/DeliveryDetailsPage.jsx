import React from 'react';
import { Truck, CreditCard, Clock, Globe, ShieldCheck, CheckCircle2 } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function DeliveryDetailsPage({ user, onLogout }) {
  const deliveryTiers = [
    {
      title: 'Instant Virtual Cards',
      time: 'Instant (< 5 seconds)',
      price: 'Free',
      description: 'Generate disposable virtual Visa cards directly in your mobile app with instant Apple Pay and Google Wallet provisioning.',
      features: ['Immediate card details generation', 'Zero delivery waiting time', 'Unlimited card issuance'],
    },
    {
      title: 'Standard Physical Card Delivery',
      time: '3 - 5 Business Days',
      price: 'Free on all accounts',
      description: 'Laser-etched matte purple contactless Visa debit card delivered securely in discreet tamper-proof packaging.',
      features: ['Tracked postal delivery', 'NFC tap-to-pay enabled', 'Global ATM withdrawal ready'],
    },
    {
      title: 'Express Priority Courier (DHL/FedEx)',
      time: '1 - 2 Business Days',
      price: '$15 (Free for Pro & Enterprise)',
      description: 'Expedited global priority courier with end-to-end real-time GPS tracking and direct signature delivery.',
      features: ['Worldwide express courier', 'Real-time SMS tracking', 'Guaranteed delivery window'],
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1538] selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Navbar user={user} onLogout={onLogout} />

      <main className="flex-grow pt-28 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/60 text-[#8565FF] text-xs font-bold mb-6">
            <Truck className="w-3.5 h-3.5" />
            <span>Card Fulfillment &amp; Transfer Speeds</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A1538] tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6">
            Fast, Reliable &amp; Global Delivery Standards
          </h1>

          <p className="text-sm sm:text-lg text-[#9DA1C0] max-w-2xl mx-auto leading-relaxed mb-16">
            Whether you need an instant digital card for online checkouts or a premium metal physical card shipped globally, we deliver seamlessly.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-6xl mx-auto">
            {deliveryTiers.map((tier, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-lg shadow-purple-900/5 hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-purple-100 text-[#8565FF] flex items-center justify-center shadow-inner">
                    <CreditCard className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-[#1A1538]">{tier.title}</h3>
                    <div className="text-xs font-bold text-[#8565FF] mt-1">{tier.time}</div>
                  </div>
                  <p className="text-xs text-[#9DA1C0] leading-relaxed">
                    {tier.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 space-y-2">
                  <div className="text-xs font-bold text-slate-800 mb-2">Cost: {tier.price}</div>
                  {tier.features.map((f, i) => (
                    <div key={i} className="flex items-center gap-2 text-xs text-[#9DA1C0]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{f}</span>
                    </div>
                  ))}
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
