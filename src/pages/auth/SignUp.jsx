import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff, ArrowLeft, CheckCircle2, ShieldCheck } from 'lucide-react';
import logo from '../../assets/branding/logo.png';
import purpleOrb from '../../assets/backgrounds/purple-orb.png';
import pinkOrb from '../../assets/backgrounds/pink-orb.png';

export default function SignUp({ onLoginSuccess }) {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const [agreeTerms, setAgreeTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setErrorMsg('Passwords do not match');
      return;
    }
    if (!agreeTerms) {
      setErrorMsg('Please accept the Terms & Conditions');
      return;
    }

    // Check if user already exists in localStorage
    const existingUsers = JSON.parse(localStorage.getItem('registered_users') || '[]');
    const userExists = existingUsers.some(
      (u) => u.email.toLowerCase() === email.trim().toLowerCase()
    );

    if (userExists) {
      setErrorMsg('An account with this email already exists. Please log in.');
      return;
    }

    // Save new user to localStorage
    const newUser = {
      fullName: fullName.trim(),
      email: email.trim().toLowerCase(),
      password: password,
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=250&q=80',
    };

    localStorage.setItem('registered_users', JSON.stringify([...existingUsers, newUser]));

    setErrorMsg('');
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setSuccess(true);
      if (onLoginSuccess) {
        onLoginSuccess({
          name: newUser.fullName,
          email: newUser.email,
          avatar: newUser.avatar,
        });
      }
      setTimeout(() => {
        navigate('/');
      }, 1200);
    }, 1000);
  };


  return (
    <div className="min-h-screen bg-white text-[#1A1538] flex flex-col justify-between relative overflow-hidden">
      
      {/* Background Decorative Floating Orbs */}
      <div className="absolute top-[-5%] right-[-5%] pointer-events-none z-0">
        <img src={purpleOrb} alt="" className="w-72 sm:w-96 h-auto opacity-70 blur-xs" />
      </div>
      <div className="absolute bottom-[-5%] left-[-5%] pointer-events-none z-0">
        <img src={pinkOrb} alt="" className="w-72 sm:w-96 h-auto opacity-70 blur-xs" />
      </div>

      {/* Top Header */}
      <header className="max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex items-center justify-between relative z-10">
        <Link to="/" className="flex items-center group focus:outline-none">
          <img src={logo} alt="Logo" className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105" />
        </Link>
      </header>

      {/* Main Content Form Wrapper */}
      <main className="flex-grow flex items-center justify-center px-4 py-10 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="w-full max-w-md bg-white/90 backdrop-blur-md rounded-[32px] p-8 sm:p-10 shadow-2xl shadow-purple-900/10 border border-slate-100"
        >
          {/* Back to Home button at top-left inside card */}
          {!success && (
            <div className="mb-4">
              <Link
                to="/"
                className="inline-flex items-center gap-2 text-xs font-semibold text-[#9DA1C0] hover:text-[#8565FF] transition-all py-1.5 px-3.5 rounded-full border border-slate-200/80 hover:border-[#8565FF]/40 bg-purple-50/40 hover:bg-purple-50 group shadow-2xs"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#9DA1C0] group-hover:text-[#8565FF] group-hover:-translate-x-0.5 transition-transform" />
                <span>Back to Home</span>
              </Link>
            </div>
          )}

          {success ? (
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-8 space-y-4"
            >
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h3 className="text-2xl font-bold text-[#1A1538]">Account Created!</h3>
              <p className="text-xs sm:text-sm text-[#9DA1C0]">
                Your Digital Money account is ready. Redirecting to login...
              </p>
            </motion.div>
          ) : (
            <>
              {/* Form Heading */}
              <div className="text-center space-y-2 mb-6">
                <h1 className="text-2xl sm:text-3xl font-black text-[#1A1538] tracking-tight">
                  Create Account
                </h1>
                <p className="text-xs sm:text-sm text-[#9DA1C0] font-normal">
                  Join thousands managing digital payments globally
                </p>
              </div>

              {errorMsg && (
                <div className="mb-4 p-3 rounded-xl bg-red-50 text-red-600 text-xs font-semibold text-center border border-red-100">
                  {errorMsg}
                </div>
              )}

              {/* Sign Up Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Full Name Field */}
                <div>
                  <label className="block text-xs font-bold text-[#1A1538] mb-1.5 text-left">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-[#9DA1C0]">
                      <User className="w-4 h-4" />
                    </div>
                    <input
                      type="text"
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Alex Rivera"
                      className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#8565FF] focus:ring-2 focus:ring-[#8565FF]/20 transition-all bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Email Field */}
                <div>
                  <label className="block text-xs font-bold text-[#1A1538] mb-1.5 text-left">
                    Email Address
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
                      className="w-full pl-10 pr-4 py-2.5 rounded-2xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#8565FF] focus:ring-2 focus:ring-[#8565FF]/20 transition-all bg-slate-50/50"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-xs font-bold text-[#1A1538] mb-1.5 text-left">
                    Password
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
                      className="w-full pl-10 pr-10 py-2.5 rounded-2xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#8565FF] focus:ring-2 focus:ring-[#8565FF]/20 transition-all bg-slate-50/50"
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

                {/* Confirm Password Field */}
                <div>
                  <label className="block text-xs font-bold text-[#1A1538] mb-1.5 text-left">
                    Confirm Password
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
                      className="w-full pl-10 pr-10 py-2.5 rounded-2xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:border-[#8565FF] focus:ring-2 focus:ring-[#8565FF]/20 transition-all bg-slate-50/50"
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


                {/* Terms Checkbox */}
                <div className="pt-1">
                  <label className="flex items-start gap-2 cursor-pointer text-xs text-[#9DA1C0] select-none text-left">
                    <input
                      type="checkbox"
                      checked={agreeTerms}
                      onChange={(e) => setAgreeTerms(e.target.checked)}
                      className="w-4 h-4 mt-0.5 rounded text-[#8565FF] focus:ring-[#8565FF] border-slate-300"
                    />
                    <span>
                      I agree to the{' '}
                      <span className="font-semibold text-[#1A1538] hover:underline">Terms of Service</span> and{' '}
                      <span className="font-semibold text-[#1A1538] hover:underline">Privacy Policy</span>
                    </span>
                  </label>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-3.5 px-6 rounded-full font-bold text-xs sm:text-sm bg-gradient-to-r from-[#A78FFF] to-[#8565FF] text-white shadow-lg shadow-purple-500/25 hover:opacity-95 transition-all duration-300 flex items-center justify-center cursor-pointer active:scale-95 disabled:opacity-70 mt-2"
                >
                  {isLoading ? (
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  ) : (
                    <span>Create Account</span>
                  )}
                </button>
              </form>

              {/* Divider */}
              <div className="relative my-6 text-center">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-slate-100" />
                </div>
                <span className="relative px-3 bg-white text-[11px] text-[#9DA1C0] uppercase font-semibold">
                  Or sign up with
                </span>
              </div>

              {/* Social Signup Options */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => {
                    const defaultUser = {
                      name: 'Sarah Jenkins',
                      email: 'sarah.jenkins@gmail.com',
                      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=250&q=80',
                      role: 'VIP Member',
                    };
                    setIsLoading(true);
                    setTimeout(() => {
                      setIsLoading(false);
                      setSuccess(true);
                      if (onLoginSuccess) onLoginSuccess(defaultUser);
                      setTimeout(() => navigate('/'), 1200);
                    }, 800);
                  }}
                  className="py-2.5 px-4 rounded-xl border border-slate-200/80 text-xs font-semibold text-[#1A1538] hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"/>
                  </svg>
                  <span>Google</span>
                </button>

                <button
                  type="button"
                  onClick={() => {
                    const defaultUser = {
                      name: 'Alex Morgan',
                      email: 'alex.morgan@icloud.com',
                      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=250&q=80',
                      role: 'Private Investor',
                    };
                    setIsLoading(true);
                    setTimeout(() => {
                      setIsLoading(false);
                      setSuccess(true);
                      if (onLoginSuccess) onLoginSuccess(defaultUser);
                      setTimeout(() => navigate('/'), 1200);
                    }, 800);
                  }}
                  className="py-2.5 px-4 rounded-xl border border-slate-200/80 text-xs font-semibold text-[#1A1538] hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 cursor-pointer active:scale-95"
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.36c.66-.8 1.11-1.92.99-3.04-.96.04-2.12.64-2.8 1.44-.6.7-1.13 1.84-.99 2.94 1.07.08 2.15-.54 2.8-1.34z"/>
                  </svg>
                  <span>Apple</span>
                </button>
              </div>

              {/* Switch to Login */}
              <div className="mt-6 text-center text-xs text-[#9DA1C0]">
                Already have an account?{' '}
                <Link to="/login" className="font-bold text-[#8565FF] hover:underline">
                  Log In
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
