import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Eye, EyeOff, ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react';
import logo from '../../assets/branding/logo.png';
import purpleOrb from '../../assets/backgrounds/purple-orb.png';
import pinkOrb from '../../assets/backgrounds/pink-orb.png';

export default function ResetPassword() {
  const navigate = useNavigate();
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password.length < 6) {
      setErrorMsg('Password must be at least 6 characters');
      return;
    }
    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match');
      return;
    }

    setErrorMsg('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      setTimeout(() => {
        navigate('/login');
      }, 1500);
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


        <Link
          to="/login"
          className="flex items-center gap-2 text-xs sm:text-sm font-semibold text-[#9DA1C0] hover:text-[#8565FF] transition-colors py-2 px-4 rounded-full border border-slate-200/80 hover:border-[#8565FF]/40 bg-white/80 backdrop-blur-sm"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Login</span>
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
          {success ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8 space-y-4"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1538]">Password Reset!</h3>
              <p className="text-xs sm:text-sm text-[#9DA1C0]">
                Your password has been successfully updated. Redirecting to login...
              </p>
            </motion.div>
          ) : (
            <>
              {/* Form Heading */}
              <div className="text-center space-y-2 mb-8">
                <h1 className="text-2xl sm:text-3xl font-black text-[#1A1538] tracking-tight">
                  Set New Password
                </h1>
                <p className="text-xs sm:text-sm text-[#9DA1C0] font-normal leading-relaxed">
                  Your new password must be different from previously used passwords.
                </p>
              </div>

              {errorMsg && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-600 text-xs font-semibold text-center border border-red-100">
                  {errorMsg}
                </div>
              )}

              {/* Reset Password Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                
                {/* New Password Field */}
                <div>
                  <label className="block text-xs font-bold text-[#1A1538] mb-2 text-left">
                    New Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9DA1C0]">
                      <Lock className="w-4 h-4" />
                    </div>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      required
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-10 py-3 rounded-2xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#8565FF] focus:ring-2 focus:ring-[#8565FF]/20 transition-all bg-slate-50/50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#9DA1C0] hover:text-[#8565FF] transition-colors"
                    >
                      {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>

                {/* Confirm New Password Field */}
                <div>
                  <label className="block text-xs font-bold text-[#1A1538] mb-2 text-left">
                    Confirm New Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9DA1C0]">
                      <ShieldCheck className="w-4 h-4" />
                    </div>
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      required
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="••••••••"
                      className="w-full pl-10 pr-10 py-3 rounded-2xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#8565FF] focus:ring-2 focus:ring-[#8565FF]/20 transition-all bg-slate-50/50"
                    />
                    <button
                      type="button"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-[#9DA1C0] hover:text-[#8565FF] transition-colors"
                    >
                      {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                  </div>
                </div>


                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-[#A78FFF] to-[#8565FF] text-white shadow-lg shadow-purple-500/25 hover:opacity-95 transition-all duration-300 flex items-center justify-center cursor-pointer active:scale-95 disabled:opacity-70 mt-4"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span>Reset Password</span>
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
