import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import OnlinePlatform from './components/OnlinePlatform';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import FeatureModal from './components/FeatureModal';

import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ForgotPassword from './pages/ForgotPassword';
import ResetPassword from './pages/ResetPassword';

function LandingPage({ user, onLogout, setModalData }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1538] selection:bg-purple-500 selection:text-white overflow-x-hidden w-full max-w-full">

      {/* Navigation */}
      <Navbar user={user} onLogout={onLogout} />

      {/* Main Content Sections matching Figma design */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero
          onOpenModal={(data) => setModalData(data)}
        />

        {/* Section 2: Welcome To Our Online Platform */}
        <OnlinePlatform
          onOpenModal={(data) => setModalData(data)}
        />

        {/* Section 3: How It Works? */}
        <HowItWorks />

        {/* Section 4: Our Exclusive Features (Pricing) */}
        <Pricing
          onOpenModal={(data) => setModalData(data)}
        />

        {/* Section 5: Client Testimonial */}
        <Testimonials />
      </main>

      {/* Combined CTA Banner & Footer Page */}
      <Footer />
    </div>
  );
}

export default function App() {
  const [modalData, setModalData] = useState(null);
  const [user, setUser] = useState(null);

  const handleLoginSuccess = (userData) => {
    setUser(userData);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <Router>
      <Routes>
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
        <Route path="/login" element={<Login onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/signup" element={<SignUp onLoginSuccess={handleLoginSuccess} />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>

      {/* Interactive Feature Modal */}
      <FeatureModal
        modalData={modalData}
        onClose={() => setModalData(null)}
      />
    </Router>
  );
}




