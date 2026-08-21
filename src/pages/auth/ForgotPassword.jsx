import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, ArrowLeft, CheckCircle2, KeyRound } from 'lucide-react';
import logo from '../../assets/branding/logo.png';
import purpleOrb from '../../assets/backgrounds/purple-orb.png';
import pinkOrb from '../../assets/backgrounds/pink-orb.png';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setIsSent(true);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white text-[#1A1538] flex flex-col justify-between relative overflow-hidden">
      
      {/* Background Decorative Floating Orbs */}
      <div className="absolute top-[-5%] left-[-5%] pointer-events-none z-0">
        <img src={purpleOrb} alt="" className="w-72 sm:w-96 h-auto opacity-70 blur-xs" />
      </div>
      <div className="absolute bottom-[-5%] right-[-5%] pointer-events-none z-0">
        <img src={pinkOrb} alt="" className="w-72 sm:w-96 h-auto opacity-70 blur-xs" />
      </div>

      {/* Top Header */}
      <header className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex items-center justify-between relative z-10">
        <Link to="/" className="flex items-center group focus:outline-none">
          <img src={logo} alt="Logo" className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105" />
        </Link>
      </header>

      {/* Main Content Form Wrapper */}
      <main className="flex-grow flex items-center justify-center px-4 py-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-[32px] p-8 sm:p-10 shadow-2xl shadow-purple-900/10 border border-slate-100"
        >
          {/* Back to Login button inside card */}
          <div className="mb-4">
            <Link
              to="/login"
              className="inline-flex items-center gap-2 text-xs font-semibold text-[#9DA1C0] hover:text-[#8565FF] transition-all py-1.5 px-3.5 rounded-full border border-slate-200/80 hover:border-[#8565FF]/40 bg-purple-50/40 hover:bg-purple-50 group shadow-2xs"
            >
              <ArrowLeft className="w-3.5 h-3.5 text-[#9DA1C0] group-hover:text-[#8565FF] group-hover:-translate-x-0.5 transition-transform" />
              <span>Back to Login</span>
            </Link>
          </div>

          {isSent ? (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-6 space-y-4"
            >
              <div className="w-16 h-16 bg-purple-100 text-[#8565FF] rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>

              <h2 className="text-2xl font-bold text-[#1A1538]">Reset Link Sent!</h2>
              <p className="text-xs sm:text-sm text-[#9DA1C0] leading-relaxed">
                We've sent password reset instructions to <span className="font-semibold text-[#1A1538]">{email}</span>.
              </p>

              <div className="pt-4 space-y-3">
                <Link
                  to="/reset-password"
                  className="block w-full py-3 px-6 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-[#A78FFF] to-[#8565FF] text-white shadow-lg shadow-purple-500/25 hover:opacity-95 transition-all text-center"
                >
                  Proceed to Reset Password Page
                </Link>

                <button
                  type="button"
                  onClick={() => setIsSent(false)}
                  className="text-xs font-semibold text-[#9DA1C0] hover:text-[#8565FF] transition-colors"
                >
                  Didn't receive email? Try again
                </button>
              </div>
            </motion.div>
          ) : (
            <>
              {/* Icon Header */}
              <div className="w-14 h-14 bg-purple-100 text-[#8565FF] rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                <KeyRound className="w-7 h-7" />
              </div>

              {/* Form Heading */}
              <div className="text-center space-y-2 mb-8">
                <h1 className="text-2xl sm:text-3xl font-black text-[#1A1538] tracking-tight">
                  Forgot Password?
                </h1>
                <p className="text-xs sm:text-sm text-[#9DA1C0] font-normal leading-relaxed">
                  Enter your registered email address and we'll send you instructions to reset your password.
                </p>
              </div>

              {/* Forgot Password Form */}
              <form onSubmit={handleSubmit} className="space-y-6">
                
                {/* Email Field */}
                <div>
                  <label className="block text-xs font-bold text-[#1A1538] mb-2 text-left">
                    Registered Email Address
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9DA1C0]">
                      <Mail className="w-4 h-4" />
                    </div>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="alex@example.com"
                      className="w-full pl-10 pr-4 py-3 rounded-2xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#8565FF] focus:ring-2 focus:ring-[#8565FF]/20 transition-all bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-[#A78FFF] to-[#8565FF] text-white shadow-lg shadow-purple-500/25 hover:opacity-95 transition-all duration-300 flex items-center justify-center cursor-pointer active:scale-95 disabled:opacity-70"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span>Send Reset Link</span>
                  )}
                </button>
              </form>

              {/* Back to Login */}
              <div className="mt-8 text-center">
                <Link
                  to="/login"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#8565FF] hover:underline"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Back to Login</span>
                </Link>
              </div>
            </>
          )}
        </motion.div>
      </main>

      {/* Footer copyright */}
      <footer className="py-4 text-center text-xs text-[#9DA1C0] relative z-10">
        © {new Date().getFullYear()} Digital Money Inc. All rights reserved.
      </footer>
    </div>
  );
}
