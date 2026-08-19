import React, { useState } from 'react';
import { Youtube, Play, Clock, Eye, Sparkles } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function YoutubePage({ user, onLogout }) {
  const [activeVideo, setActiveVideo] = useState(null);

  const videos = [
    {
      id: 'video-1',
      title: 'Digital Money Platform Walkthrough & Complete Setup Guide',
      duration: '12:45',
      views: '45.8k views',
      thumbnail: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?auto=format&fit=crop&w=600&q=80',
      description: 'A step-by-step masterclass on setting up your multi-currency wallet, generating virtual cards, and making instant international transfers.',
    },
    {
      id: 'video-2',
      title: 'How Multi-Currency Accounts Eliminate 90% of Foreign Exchange Fees',
      duration: '08:20',
      views: '29.3k views',
      thumbnail: 'https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=600&q=80',
      description: 'Understanding interbank wholesale rates vs retail bank markups and how to convert currency at the exact market midpoint.',
    },
    {
      id: 'video-3',
      title: 'Zero-Trust Biometric Security & Dynamic CVV Explained',
      duration: '10:15',
      views: '18.9k views',
      thumbnail: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&w=600&q=80',
      description: 'Behind the scenes of our biometric tokenization and automated anti-fraud machine learning architecture.',
    },
    {
      id: 'video-4',
      title: 'Scaling FinTech Engineering: High Throughput Ledger Systems',
      duration: '16:50',
      views: '34.1k views',
      thumbnail: 'https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?auto=format&fit=crop&w=600&q=80',
      description: 'Our lead engineering team shares architecture diagrams and strategies for handling 10,000+ financial TPS.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1538] selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Navbar user={user} onLogout={onLogout} />

      <main className="flex-grow pt-28 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/60 text-[#8565FF] text-xs font-bold mb-6">
            <Youtube className="w-3.5 h-3.5" />
            <span>Video Masterclasses &amp; Guides</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A1538] tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6">
            Official YouTube Video Playlist
          </h1>

          <p className="text-sm sm:text-lg text-[#9DA1C0] max-w-2xl mx-auto leading-relaxed mb-16">
            Watch in-depth feature demos, developer tutorials, and financial literacy workshops produced by our product specialists.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left max-w-5xl mx-auto">
            {videos.map((vid) => (
              <div
                key={vid.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-xl shadow-purple-900/5 hover:shadow-2xl hover:border-purple-200 transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Video Thumbnail */}
                <div
                  onClick={() => setActiveVideo(vid)}
                  className="relative h-48 sm:h-56 bg-slate-900 overflow-hidden cursor-pointer"
                >
                  <img
                    src={vid.thumbnail}
                    alt={vid.title}
                    className="w-full h-full object-cover opacity-85 group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-slate-900/30 flex items-center justify-center">
                    <div className="w-14 h-14 rounded-full bg-white/90 backdrop-blur-sm text-[#8565FF] flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 fill-current translate-x-0.5" />
                    </div>
                  </div>
                  <span className="absolute bottom-3 right-3 bg-black/75 backdrop-blur-md text-white text-[11px] font-mono font-bold px-2 py-0.5 rounded-md">
                    {vid.duration}
                  </span>
                </div>

                {/* Video Details */}
                <div className="p-6 space-y-3">
                  <div className="flex items-center justify-between text-xs text-[#9DA1C0]">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5" />
                      {vid.views}
                    </span>
                    <span className="text-[#8565FF] font-bold">HD 1080p</span>
                  </div>

                  <h3 className="text-lg font-bold text-[#1A1538] leading-snug group-hover:text-[#8565FF] transition-colors">
                    {vid.title}
                  </h3>
                  <p className="text-xs text-[#9DA1C0] leading-relaxed">
                    {vid.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Video Player Lightbox Modal */}
        {activeVideo && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-md">
            <div className="bg-[#1A1538] rounded-3xl p-6 sm:p-8 max-w-2xl w-full shadow-2xl border border-purple-500/20 text-white space-y-5 text-left relative">
              <button
                onClick={() => setActiveVideo(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-white"
              >
                ✕
              </button>

              <div className="aspect-video bg-black rounded-2xl flex flex-col items-center justify-center p-6 text-center space-y-3 relative overflow-hidden border border-white/10">
                <img
                  src={activeVideo.thumbnail}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover opacity-30"
                />
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#8565FF] text-white flex items-center justify-center mx-auto shadow-2xl">
                  <Play className="w-8 h-8 fill-current translate-x-0.5" />
                </div>
                <p className="relative z-10 font-bold text-sm text-white">Streaming HD Masterclass</p>
                <p className="relative z-10 text-xs text-purple-200">{activeVideo.title}</p>
              </div>

              <div>
                <h3 className="text-xl font-bold">{activeVideo.title}</h3>
                <p className="text-xs text-slate-300 mt-1">{activeVideo.description}</p>
              </div>
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
