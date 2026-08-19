import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();
  
  const companyLinks = [
    { name: 'About', href: '/about' },
    { name: 'Features', href: '/features' },
    { name: 'Works', href: '/works' },
    { name: 'Career', href: '/careers' },
  ];

  const helpLinks = [
    { name: 'Customer Support', href: '/support' },
    { name: 'Delivery Details', href: '/delivery-details' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
  ];

  const resourcesLinks = [
    { name: 'Free eBooks', href: '/ebooks' },
    { name: 'Development Tutorial', href: '/tutorials' },
    { name: 'How to - Blog', href: '/blog' },
    { name: 'Youtube Playlist', href: '/youtube' },
  ];

  const quickLinks = [
    { name: 'Free eBooks', href: '/ebooks' },
    { name: 'Development Tutorial', href: '/tutorials' },
    { name: 'How to - Blog', href: '/blog' },
    { name: 'Youtube Playlist', href: '/youtube' },
  ];

  return (
    <footer className="bg-white pt-10 pb-16 relative overflow-hidden max-w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Integrated Purple CTA Banner matching Figma design */}
        <div className="mb-20 rounded-[28px] bg-gradient-to-r from-[#A58FFF] via-[#9879FF] to-[#8C65FF] p-8 sm:p-12 md:p-14 shadow-2xl shadow-purple-600/20 flex flex-col md:flex-row items-center justify-between gap-8 text-left relative overflow-hidden">
          
          {/* Ambient Shimmer Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 pointer-events-none" />

          {/* Heading text matching design */}
          <h3 className="text-2xl sm:text-3xl md:text-[36px] lg:text-[40px] font-bold text-white leading-[1.2] tracking-tight max-w-xl z-10">
            Grow your business fast <br className="hidden sm:inline" /> with Sark SaaS Landing.
          </h3>

          {/* Download Now Button */}
          <button
            onClick={() => navigate('/signup')}
            className="z-10 bg-white text-[#8565FF] px-8 sm:px-10 py-3.5 sm:py-4 rounded-full font-bold text-sm hover:bg-slate-50 transition-all duration-300 shadow-lg cursor-pointer active:scale-95 flex-shrink-0"
          >
            Download Now
          </button>
        </div>

        {/* 4 Footer Columns Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 md:gap-12 text-left px-2 sm:px-6">
          
          {/* Column 1: Company */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-[#1A1538] mb-5 tracking-tight">
              Company
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-[#9DA1C0] font-normal">
              {companyLinks.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.href} className="hover:text-[#8565FF] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 2: Help */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-[#1A1538] mb-5 tracking-tight">
              Help
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-[#9DA1C0] font-normal">
              {helpLinks.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.href} className="hover:text-[#8565FF] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Resources */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-[#1A1538] mb-5 tracking-tight">
              Resources
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-[#9DA1C0] font-normal">
              {resourcesLinks.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.href} className="hover:text-[#8565FF] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Links */}
          <div>
            <h4 className="text-sm sm:text-base font-bold text-[#1A1538] mb-5 tracking-tight">
              Links
            </h4>
            <ul className="space-y-3.5 text-xs sm:text-sm text-[#9DA1C0] font-normal">
              {quickLinks.map((item, idx) => (
                <li key={idx}>
                  <Link to={item.href} className="hover:text-[#8565FF] transition-colors">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

        </div>

      </div>
    </footer>
  );
}
