import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import ScrollToTop from './components/layout/ScrollToTop';
import LandingPage from './pages/LandingPage';
import AboutPage from './pages/AboutPage';
import FeaturesPage from './pages/FeaturesPage';
import WorksPage from './pages/WorksPage';
import CareersPage from './pages/CareersPage';
import SupportPage from './pages/SupportPage';
import DeliveryDetailsPage from './pages/DeliveryDetailsPage';
import TermsPage from './pages/TermsPage';
import PrivacyPage from './pages/PrivacyPage';
import EbooksPage from './pages/EbooksPage';
import TutorialsPage from './pages/TutorialsPage';
import BlogPage from './pages/BlogPage';
import YoutubePage from './pages/YoutubePage';

import Login from './pages/auth/Login';
import SignUp from './pages/auth/SignUp';
import ForgotPassword from './pages/auth/ForgotPassword';
import ResetPassword from './pages/auth/ResetPassword';
import FeatureModal from './components/ui/FeatureModal';

// Animated Tab Title Marquee
function AnimatedTabTitle() {
  const location = useLocation();

  useEffect(() => {
    let titleText = "Digital Money - Fastest Money Transfer & Online Shopping Platform 💳 ⚡ • ";
    const path = location.pathname.toLowerCase();

    if (path === '/login') {
      titleText = "Sign In | Digital Money 🔐 • Smart FinTech Banking • ";
    } else if (path === '/signup') {
      titleText = "Get Started Free | Digital Money 💳 • Instant Global Transfers • ";
    } else if (path === '/forgot-password') {
      titleText = "Reset Password | Digital Money 🔑 • Security Center • ";
    } else if (path === '/reset-password') {
      titleText = "New Password | Digital Money 🔒 • Set Your Password • ";
    } else if (path === '/about') {
      titleText = "About Us | Digital Money 🌐 • Transforming Modern Banking • ";
    } else if (path === '/features' || path === '/services') {
      titleText = "Smart Features & Solutions | Digital Money 💳 • ";
    } else if (path === '/works' || path === '/how-it-works') {
      titleText = "How It Works | Digital Money ⚡ • Seamless Banking Workflow • ";
    } else if (path === '/careers' || path === '/career') {
      titleText = "Careers & Jobs | Join Digital Money 💼 • ";
    } else if (path === '/support') {
      titleText = "Customer Support 24/7 | Digital Money 💬 • ";
    }

    let pos = 0;
    const interval = setInterval(() => {
      document.title = titleText.substring(pos) + titleText.substring(0, pos);
      pos = (pos + 1) % titleText.length;
    }, 240);

    return () => clearInterval(interval);
  }, [location.pathname]);

  return null;
}

export default function App() {
  const [modalData, setModalData] = useState(null);
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('money_auth_user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const handleLoginSuccess = (userData) => {
    setUser(userData);
    try {
      localStorage.setItem('money_auth_user', JSON.stringify(userData));
    } catch {
      // ignore
    }
  };

  const handleLogout = () => {
    setUser(null);
    try {
      localStorage.removeItem('money_auth_user');
    } catch {
      // ignore
    }
  };

  return (
    <Router>
      <ScrollToTop />
      <AnimatedTabTitle />
      <Routes>
        {/* Main Landing Page */}
        <Route
          path="/"
          element={
            <LandingPage
              user={user}
              onLogout={handleLogout}
              setModalData={setModalData}
            />
          }
        />

        {/* Company Pages */}
        <Route path="/about" element={<AboutPage user={user} onLogout={handleLogout} />} />
        <Route path="/features" element={<FeaturesPage user={user} onLogout={handleLogout} />} />
        <Route path="/services" element={<FeaturesPage user={user} onLogout={handleLogout} />} />
        <Route path="/works" element={<WorksPage user={user} onLogout={handleLogout} />} />
        <Route path="/how-it-works" element={<WorksPage user={user} onLogout={handleLogout} />} />
        <Route path="/careers" element={<CareersPage user={user} onLogout={handleLogout} />} />
        <Route path="/career" element={<CareersPage user={user} onLogout={handleLogout} />} />

        {/* Help & Support Pages */}
        <Route path="/support" element={<SupportPage user={user} onLogout={handleLogout} />} />
        <Route path="/help" element={<SupportPage user={user} onLogout={handleLogout} />} />
        <Route path="/delivery-details" element={<DeliveryDetailsPage user={user} onLogout={handleLogout} />} />
        <Route path="/terms" element={<TermsPage user={user} onLogout={handleLogout} />} />
        <Route path="/privacy" element={<PrivacyPage user={user} onLogout={handleLogout} />} />

        {/* Resources & Educational Pages */}
        <Route path="/ebooks" element={<EbooksPage user={user} onLogout={handleLogout} />} />
        <Route path="/resources/ebooks" element={<EbooksPage user={user} onLogout={handleLogout} />} />
        <Route path="/tutorials" element={<TutorialsPage user={user} onLogout={handleLogout} />} />
        <Route path="/resources/tutorials" element={<TutorialsPage user={user} onLogout={handleLogout} />} />
        <Route path="/blog" element={<BlogPage user={user} onLogout={handleLogout} />} />
        <Route path="/resources/blog" element={<BlogPage user={user} onLogout={handleLogout} />} />
        <Route path="/youtube" element={<YoutubePage user={user} onLogout={handleLogout} />} />
        <Route path="/resources/youtube" element={<YoutubePage user={user} onLogout={handleLogout} />} />

        {/* Authentication Pages */}
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/signup" element={<SignUp onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>

      {/* Global Interactive Feature Modal */}
      <FeatureModal
        modalData={modalData}
        onClose={() => setModalData(null)}
      />
    </Router>
  );
}
