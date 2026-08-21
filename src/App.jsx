import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
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
