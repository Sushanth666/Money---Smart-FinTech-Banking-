import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, ChevronDown, LogOut, User as UserIcon } from 'lucide-react';
import logo from '../../assets/branding/logo.png';

export default function Navbar({ user, onLogout, onOpenSignUp }) {
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [businessDropdownOpen, setBusinessDropdownOpen] = useState(false);
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-4'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="flex items-center group focus:outline-none">
            <img 
              src={logo} 
              alt="Money Logo" 
              className="h-8 sm:h-9 w-auto object-contain transition-transform duration-200 group-hover:scale-105" 
            />
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden md:flex items-center space-x-10 text-sm font-medium text-slate-700">
            <a
              href="#home"
              className="hover:text-[#8C69FF] transition-colors"
            >
              Home
            </a>
            <a
              href="#services"
              className="hover:text-[#8C69FF] transition-colors"
            >
              Service
            </a>
            
            {/* Business Dropdown */}
            <div className="relative group/dropdown">
              <button
                onClick={() => setBusinessDropdownOpen(!businessDropdownOpen)}
                onMouseEnter={() => setBusinessDropdownOpen(true)}
                className="flex items-center gap-1.5 hover:text-[#8C69FF] transition-colors cursor-pointer py-1"
              >
                <span>Business</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${businessDropdownOpen ? 'rotate-180 text-[#8C69FF]' : ''}`} />
              </button>

              {businessDropdownOpen && (
                <div
                  onMouseLeave={() => setBusinessDropdownOpen(false)}
                  className="absolute top-full left-0 mt-2 w-48 bg-white rounded-2xl shadow-xl border border-slate-100 py-3 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <a
                    href="#how-it-works"
                    className="block px-4 py-2.5 text-xs text-slate-600 hover:text-[#8C69FF] hover:bg-purple-50 rounded-xl transition-colors font-medium"
                  >
                    Enterprise Solutions
                  </a>
                  <a
                    href="#pricing"
                    className="block px-4 py-2.5 text-xs text-slate-600 hover:text-[#8C69FF] hover:bg-purple-50 rounded-xl transition-colors font-medium"
                  >
                    Merchant Gateway
                  </a>
                  <a
                    href="#testimonials"
                    className="block px-4 py-2.5 text-xs text-slate-600 hover:text-[#8C69FF] hover:bg-purple-50 rounded-xl transition-colors font-medium"
                  >
                    Case Studies
                  </a>
                </div>
              )}
            </div>

            <a
              href="#pricing"
              className="hover:text-[#8C69FF] transition-colors"
            >
              Help
            </a>
          </nav>

          {/* Desktop Section: User Profile if Logged In, otherwise Log In & Sign Up buttons */}
          {user ? (
            <div className="hidden md:block relative">
              <button
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
                className="flex items-center gap-3 p-1.5 pr-3 rounded-full hover:bg-purple-50/70 border border-slate-100 transition-colors cursor-pointer"
              >
                <div className="w-9 h-9 rounded-full bg-gradient-to-tr from-[#7552FF] to-[#A78FFF] text-white flex items-center justify-center font-extrabold text-sm shadow-md shadow-purple-500/25 border-2 border-white select-none">
                  {(user.name ? user.name.trim().charAt(0) : (user.email ? user.email.trim().charAt(0) : 'U')).toUpperCase()}
                </div>
                <div className="text-left">
                  <div className="text-xs font-bold text-[#1A1538] leading-tight">{user.name}</div>
                  <div className="text-[10px] text-[#8565FF] font-semibold">Active Account</div>
                </div>
                <ChevronDown className={`w-4 h-4 text-slate-400 transition-transform ${profileDropdownOpen ? 'rotate-180 text-[#8565FF]' : ''}`} />
              </button>

              {/* Profile Dropdown */}
              {profileDropdownOpen && (
                <div
                  onMouseLeave={() => setProfileDropdownOpen(false)}
                  className="absolute right-0 top-full mt-2 w-56 bg-white rounded-2xl shadow-xl border border-slate-100 py-2.5 px-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200"
                >
                  <div className="px-3 py-2.5 border-b border-slate-100 mb-1 flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#7552FF] to-[#A78FFF] text-white flex items-center justify-center font-extrabold text-xs shadow-sm select-none shrink-0">
                      {(user.name ? user.name.trim().charAt(0) : (user.email ? user.email.trim().charAt(0) : 'U')).toUpperCase()}
                    </div>
                    <div className="overflow-hidden">
                      <p className="text-xs font-bold text-[#1A1538] truncate">{user.name}</p>
                      <p className="text-[11px] text-[#9DA1C0] truncate">{user.email}</p>
                    </div>
                  </div>

                  <button
                    onClick={() => {
                      setProfileDropdownOpen(false);
                      onLogout();
                    }}
                    className="w-full text-left flex items-center gap-2 px-3 py-2 text-xs font-semibold text-red-600 hover:bg-red-50 rounded-xl transition-colors cursor-pointer"
                  >
                    <LogOut className="w-4 h-4" />
                    <span>Log Out</span>
                  </button>
                </div>
              )}
            </div>
          ) : (
            <div className="hidden md:flex items-center gap-4">
              <Link
                to="/login"
                className="text-sm font-semibold text-[#1A1538] hover:text-[#8C69FF] transition-colors px-3 py-2"
              >
                Log In
              </Link>

              <button
                onClick={() => navigate('/signup')}
                className="px-7 py-2.5 rounded-full bg-gradient-to-r from-[#A48BFE] to-[#8C69FF] text-white hover:opacity-95 text-sm font-semibold transition-all duration-300 shadow-md shadow-purple-500/20 hover:shadow-lg hover:shadow-purple-500/30 cursor-pointer active:scale-95"
              >
                Sign up
              </button>
            </div>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-slate-700 hover:text-[#8C69FF] transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-slate-100 px-6 py-6 space-y-4 shadow-xl">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-700 hover:text-[#8C69FF]"
          >
            Home
          </a>

          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-700 hover:text-[#8C69FF]"
          >
            Service
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-700 hover:text-[#8C69FF]"
          >
            Business
          </a>
          <a
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base font-medium text-slate-700 hover:text-[#8C69FF]"
          >
            Help
          </a>
          
          <div className="pt-2 border-t border-slate-100 space-y-3">
            {user ? (
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-2 bg-slate-50 rounded-2xl">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#7552FF] to-[#A78FFF] text-white flex items-center justify-center font-extrabold text-base shadow-md shadow-purple-500/25 border-2 border-white select-none shrink-0">
                    {(user.name ? user.name.trim().charAt(0) : (user.email ? user.email.trim().charAt(0) : 'U')).toUpperCase()}
                  </div>
                  <div className="text-left overflow-hidden">
                    <div className="text-sm font-bold text-[#1A1538] truncate">{user.name}</div>
                    <div className="text-xs text-[#9DA1C0] truncate">{user.email}</div>
                  </div>
                </div>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onLogout();
                  }}
                  className="w-full py-2.5 rounded-full bg-red-50 text-red-600 font-semibold text-sm flex items-center justify-center gap-2"
                >
                  <LogOut className="w-4 h-4" />
                  <span>Log Out</span>
                </button>
              </div>
            ) : (
              <>
                <Link
                  to="/login"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full py-2.5 text-center font-semibold text-sm text-[#1A1538] hover:text-[#8C69FF]"
                >
                  Log In
                </Link>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    navigate('/signup');
                  }}
                  className="w-full py-3 rounded-full bg-gradient-to-r from-[#A48BFE] to-[#8C69FF] text-white font-semibold text-sm shadow-md shadow-purple-500/20"
                >
                  Sign up
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}


