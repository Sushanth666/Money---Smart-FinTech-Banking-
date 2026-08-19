import React, { useState } from 'react';
import { Briefcase, MapPin, DollarSign, Clock, ArrowRight, CheckCircle2, Sparkles, Send } from 'lucide-react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';

export default function CareersPage({ user, onLogout }) {
  const [selectedRole, setSelectedRole] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const openings = [
    {
      id: 'sr-fintech-eng',
      title: 'Senior Distributed Systems Engineer (FinTech)',
      department: 'Engineering',
      location: 'San Francisco, CA / Remote',
      type: 'Full-time',
      salary: '$165k - $210k + Equity',
      description: 'Design and scale our high-throughput global ledger microservices processing billions in real-time payments.',
    },
    {
      id: 'staff-sec-eng',
      title: 'Staff Security & Compliance Engineer',
      department: 'Security',
      location: 'New York, NY / Remote',
      type: 'Full-time',
      salary: '$180k - $230k + Equity',
      description: 'Lead cryptography, zero-trust infrastructure, and regulatory compliance protocols across tier-1 banking corridors.',
    },
    {
      id: 'product-lead',
      title: 'Lead Product Manager - Mobile Cards',
      department: 'Product',
      location: 'London, UK / Remote',
      type: 'Full-time',
      salary: '£120k - £150k + Equity',
      description: 'Drive the product roadmap for our global physical and virtual card issuing platform and rewards ecosystem.',
    },
    {
      id: 'senior-brand-des',
      title: 'Senior Product & Brand Designer',
      department: 'Design',
      location: 'Remote (Worldwide)',
      type: 'Full-time',
      salary: '$130k - $165k + Equity',
      description: 'Craft world-class interactive web and mobile financial experiences with rich motion design and micro-interactions.',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1538] selection:bg-purple-500 selection:text-white overflow-x-hidden">
      <Navbar user={user} onLogout={onLogout} />

      <main className="flex-grow pt-28 pb-16">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-14 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-50 border border-purple-200/60 text-[#8565FF] text-xs font-bold mb-6">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Join Our Mission</span>
          </div>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1A1538] tracking-tight max-w-4xl mx-auto leading-[1.15] mb-6">
            Shape the Future of Global Financial Infrastructure
          </h1>

          <p className="text-sm sm:text-lg text-[#9DA1C0] max-w-2xl mx-auto leading-relaxed mb-16">
            We are looking for brilliant engineers, designers, and operators passionate about democratizing global financial power.
          </p>

          {/* Job List */}
          <div className="max-w-5xl mx-auto space-y-6 text-left">
            {openings.map((job) => (
              <div
                key={job.id}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-md hover:shadow-xl hover:border-purple-200 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-3 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full bg-purple-100 text-[#8565FF] text-[11px] font-bold">
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#9DA1C0]">
                      <MapPin className="w-3.5 h-3.5" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-[#9DA1C0]">
                      <Clock className="w-3.5 h-3.5" />
                      {job.type}
                    </span>
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-[#1A1538]">
                    {job.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#9DA1C0] leading-relaxed">
                    {job.description}
                  </p>
                  <div className="text-xs font-bold text-[#8565FF]">
                    {job.salary}
                  </div>
                </div>

                <button
                  onClick={() => {
                    setSelectedRole(job);
                    setSubmitted(false);
                  }}
                  className="px-6 py-3 rounded-full bg-slate-50 border border-slate-200 text-[#1A1538] font-bold text-xs hover:bg-[#8565FF] hover:text-white hover:border-transparent transition-all shrink-0 cursor-pointer"
                >
                  Apply Now
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* Application Modal */}
        {selectedRole && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md">
            <div className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl border border-purple-100 space-y-6 text-left relative">
              <button
                onClick={() => setSelectedRole(null)}
                className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-600"
              >
                ✕
              </button>

              {submitted ? (
                <div className="text-center py-8 space-y-4">
                  <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-[#1A1538]">Application Received!</h3>
                  <p className="text-xs sm:text-sm text-[#9DA1C0]">
                    Thank you for applying for <span className="font-bold text-[#1A1538]">{selectedRole.title}</span>. Our recruitment team will review your profile within 48 hours.
                  </p>
                  <button
                    onClick={() => setSelectedRole(null)}
                    className="px-6 py-2.5 rounded-full bg-[#8565FF] text-white font-bold text-xs"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <>
                  <div className="space-y-1">
                    <span className="text-[11px] font-bold text-[#8565FF] uppercase">Apply for Role</span>
                    <h3 className="text-xl font-bold text-[#1A1538]">{selectedRole.title}</h3>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      setSubmitted(true);
                    }}
                    className="space-y-4"
                  >
                    <div>
                      <label className="block text-xs font-bold text-[#1A1538] mb-1">Full Name</label>
                      <input required type="text" placeholder="Alex Rivera" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:border-[#8565FF] outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1A1538] mb-1">Email Address</label>
                      <input required type="email" placeholder="alex@example.com" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:border-[#8565FF] outline-none" />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-[#1A1538] mb-1">LinkedIn / Portfolio URL</label>
                      <input required type="url" placeholder="https://linkedin.com/in/alex" className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-xs focus:border-[#8565FF] outline-none" />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 rounded-full bg-gradient-to-r from-[#A78FFF] to-[#8565FF] text-white font-bold text-xs shadow-lg shadow-purple-500/25 hover:opacity-95"
                    >
                      Submit Application
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        )}
      </main>

      <Footer />
    </div>
  );
}
