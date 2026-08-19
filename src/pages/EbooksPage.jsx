import React, { useState } from 'react';
import { BookOpen, Download, CheckCircle2, Sparkles } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function EbooksPage({ user, onLogout }) {
  const [downloaded, setDownloaded] = useState({});

  const ebooks = [
    {
      id: 1,
      title: 'The Modern FinTech Playbook 2026',
      tag: 'Architecture & Strategy',
      description: 'A comprehensive guide on building scalable cross-border digital financial ledgers and multi-currency payment pipelines.',
      pages: '124 Pages',
      downloads: '14.2k Downloads',
    },
    {
      id: 2,
      title: 'Mastering Global Money Transfers',
      tag: 'Personal Finance',
      description: 'How to optimize currency exchanges, eliminate hidden bank markups, and protect assets across international boundaries.',
      pages: '88 Pages',
      downloads: '28.5k Downloads',
    },
    {
      id: 3,
      title: 'Zero-Trust Security for Banking APIs',
      tag: 'Cybersecurity',
      description: 'Deep dive into biometric tokenization, end-to-end payload signing, and SOC2 compliance for modern financial web apps.',
      pages: '142 Pages',
      downloads: '9.8k Downloads',
    },
    {
      id: 4,
      title: 'Digital Card Issuing & Rewards Architecture',
      tag: 'Product Engineering',
      description: 'Learn how instant virtual Visa debit cards and merchant cash-back engines operate under high transaction loads.',
      pages: '96 Pages',
      downloads: '11.4k Downloads',
    },
  ];

  const handleDownload = (id) => {
    setDownloaded((prev) => ({ ...prev, [id]: true }));
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1538] selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Navbar user={user} onLogout={onLogout} />

      <main className="flex-grow pt-28 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/60 text-[#8565FF] text-xs font-bold mb-6">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Free Publications &amp; eBooks</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A1538] tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6">
            Expert Insights &amp; Free FinTech eBooks
          </h1>

          <p className="text-sm sm:text-lg text-[#9DA1C0] max-w-2xl mx-auto leading-relaxed mb-16">
            Download our curated research papers, architectural blueprints, and financial optimization guides for free.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
            {ebooks.map((book) => (
              <div
                key={book.id}
                className="bg-white rounded-3xl p-8 border border-slate-100 shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-[#8565FF] text-[11px] font-bold">
                      {book.tag}
                    </span>
                    <span className="text-xs text-[#9DA1C0]">{book.pages}</span>
                  </div>

                  <h3 className="text-xl font-bold text-[#1A1538]">{book.title}</h3>
                  <p className="text-xs sm:text-sm text-[#9DA1C0] leading-relaxed">
                    {book.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-[#9DA1C0] font-medium">{book.downloads}</span>
                  <button
                    onClick={() => handleDownload(book.id)}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-slate-50 hover:bg-[#8565FF] hover:text-white border border-slate-200 hover:border-transparent text-xs font-bold text-[#1A1538] transition-all cursor-pointer"
                  >
                    {downloaded[book.id] ? (
                      <>
                        <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                        <span>Downloaded PDF</span>
                      </>
                    ) : (
                      <>
                        <Download className="w-4 h-4" />
                        <span>Download Free PDF</span>
                      </>
                    )}
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
