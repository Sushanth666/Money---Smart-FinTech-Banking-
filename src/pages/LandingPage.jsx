import React from 'react';
import Navbar from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import OnlinePlatform from '../components/sections/OnlinePlatform';
import HowItWorks from '../components/sections/HowItWorks';
import Pricing from '../components/sections/Pricing';
import Testimonials from '../components/sections/Testimonials';

export default function LandingPage({ user, onLogout, setModalData }) {
  return (
    <div className="min-h-screen flex flex-col bg-white text-[#1A1538] selection:bg-purple-500 selection:text-white overflow-x-hidden w-full max-w-full">
      {/* Navigation Bar */}
      <Navbar user={user} onLogout={onLogout} />

      {/* Main Content Sections */}
      <main className="flex-grow">
        {/* Section 1: Hero */}
        <Hero onOpenModal={(data) => setModalData(data)} />

        {/* Section 2: Welcome To Our Online Platform */}
        <OnlinePlatform onOpenModal={(data) => setModalData(data)} />

        {/* Section 3: How It Works */}
        <HowItWorks />

        {/* Section 4: Our Exclusive Features & Pricing */}
        <Pricing onOpenModal={(data) => setModalData(data)} />

        {/* Section 5: Client Testimonials */}
        <Testimonials />
      </main>

      {/* Combined CTA Banner & Footer */}
      <Footer />
    </div>
  );
}
