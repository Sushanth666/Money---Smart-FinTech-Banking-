import React from 'react';
import { Newspaper, Calendar, Clock, ArrowRight } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function BlogPage({ user, onLogout }) {
  const posts = [
    {
      title: 'How Global Businesses Cut 85% of Cross-Border Payment Fees',
      category: 'FinTech Strategy',
      date: 'Aug 16, 2026',
      readTime: '6 min read',
      snippet: 'Traditional SWIFT wires charge exorbitant intermediaries. Learn how decentralized settlement corridors are revolutionizing enterprise liquidity.',
    },
    {
      title: 'The Rise of Dynamic CVV and Biometric Virtual Cards',
      category: 'Security & Cards',
      date: 'Aug 10, 2026',
      readTime: '4 min read',
      snippet: 'Why static 3-digit card numbers are becoming obsolete and how tokenized rolling security credentials prevent e-commerce fraud.',
    },
    {
      title: 'Multi-Currency Digital Wallets: Everything Freelancers Need to Know',
      category: 'Personal Finance',
      date: 'Jul 28, 2026',
      readTime: '7 min read',
      snippet: 'Receiving payments in USD, EUR, and GBP without getting eaten by exchange spreads. A complete roadmap for digital nomads.',
    },
    {
      title: 'Building Financial Resilience in High-Inflation Global Markets',
      category: 'Economics & Wealth',
      date: 'Jul 15, 2026',
      readTime: '8 min read',
      snippet: 'Strategies for managing treasury balances across diverse foreign currency reserves and stable liquidity pools.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1538] selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Navbar user={user} onLogout={onLogout} />

      <main className="flex-grow pt-28 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/60 text-[#8565FF] text-xs font-bold mb-6">
            <Newspaper className="w-3.5 h-3.5" />
            <span>FinTech Insights &amp; News</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A1538] tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6">
            How-To Guides, Strategy &amp; FinTech Blog
          </h1>

          <p className="text-sm sm:text-lg text-[#9DA1C0] max-w-2xl mx-auto leading-relaxed mb-16">
            Stay updated with the latest trends in global payments, currency optimization, banking engineering, and modern personal finance.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
            {posts.map((post, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between text-xs text-[#9DA1C0]">
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-[#8565FF] font-bold text-[11px]">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1A1538] leading-tight">
                    {post.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9DA1C0] leading-relaxed">
                    {post.snippet}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-[#9DA1C0] flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    {post.date}
                  </span>
                  <button className="flex items-center gap-1.5 text-xs font-bold text-[#8565FF] hover:underline cursor-pointer">
                    <span>Read Article</span>
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
