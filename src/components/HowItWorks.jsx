import React from 'react';
import { Check, Wifi } from 'lucide-react';
import pinkOrb from '../assets/pink-orb.png';
import purpleOrb from '../assets/purple-orb.png';

export default function HowItWorks() {
  const checkItems = [
    'Use the right sales structure',
    'Make decisions with data',
    'Invest in sales enablement',
    'Use the right sales structure',
    'Make decisions with data',
  ];

  return (
    <section id="how-it-works" className="pt-10 pb-20 md:pt-14 md:pb-28 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Checklist Column matching exact text in Figma screenshot */}
          <div className="lg:col-span-6 space-y-7">
            <h2 className="text-2xl sm:text-4xl lg:text-[48px] font-black text-[#1A1538] tracking-tight leading-tight break-words">
              How It Works?
            </h2>


            <p className="text-[#9DA1C0] text-sm sm:text-base leading-relaxed max-w-lg font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor, commodo. Amet, aliquam condimentum.
            </p>

            {/* Checklist */}
            <div className="space-y-4 pt-2">
              {checkItems.map((item, index) => (
                <div key={index} className="flex items-center gap-3.5 group">
                  <div className="w-6 h-6 rounded-full bg-[#FF8FA3] text-white flex items-center justify-center flex-shrink-0 shadow-sm shadow-pink-500/20 group-hover:scale-110 transition-transform">
                    <Check className="w-3.5 h-3.5 stroke-[3]" />
                  </div>
                  <span className="text-[#1A1538] text-sm sm:text-base font-semibold group-hover:text-[#8565FF] transition-colors">
                    {item}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right Floating Credit Cards Column (Figma Design Reproduction) */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-6 sm:py-10 overflow-hidden">
            
            {/* Top-Right Pink Orb Asset (Matching Hero Section size) */}
            <div className="absolute top-0 sm:top-2 right-2 sm:right-8 pointer-events-none z-0">
              <img
                src={pinkOrb}
                alt="Pink Orb"
                className="w-20 sm:w-32 h-auto object-contain opacity-100 filter-none"
              />
            </div>
            
            {/* Bottom-Left Purple Orb Asset (Matching Hero Section size) */}
            <div className="absolute bottom-0 sm:bottom-2 left-0 sm:left-6 pointer-events-none z-0">
              <img
                src={purpleOrb}
                alt="Purple Orb"
                className="w-16 sm:w-28 h-auto object-contain opacity-100 filter-none"
              />
            </div>

            <div className="relative w-full max-w-[480px] h-[310px] sm:h-[370px] flex items-center justify-center">
              
              {/* Card 1: Top Pink Card (Tilted clockwise to the right +14deg) */}
              <div className="absolute top-1 sm:top-2 left-0 sm:left-10 w-[210px] xs:w-[250px] sm:w-[335px] h-[135px] xs:h-[155px] sm:h-[200px] bg-gradient-to-tr from-[#FF8DA3] via-[#FFA1B5] to-[#FFB7C5] rounded-[20px] sm:rounded-[26px] p-3 sm:p-5 text-white shadow-xl shadow-pink-500/20 border border-white/40 transform rotate-[14deg] transition-transform duration-500 hover:rotate-[8deg] hover:scale-105 z-10 overflow-hidden">

                
                {/* Metallic Shimmer Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/15 to-transparent transform -skew-x-12 animate-shimmer" />

                <div className="flex justify-between items-start mb-2 sm:mb-4">
                  {/* Card Brand */}
                  <span className="text-base sm:text-xl font-black tracking-widest italic opacity-95">VISA</span>
                  
                  {/* Sub-brand MISLAND */}
                  <div className="flex items-center gap-1 opacity-90 text-[9px] sm:text-[10px] font-mono tracking-widest uppercase">
                    <span>MISLAND</span>
                    <div className="w-3 h-3 sm:w-3.5 sm:h-3.5 rounded-full border-2 border-white border-r-transparent transform rotate-45" />
                  </div>
                </div>

                {/* Silver EMV Chip */}
                <div className="w-7 h-5 sm:w-9 sm:h-7 rounded-md bg-gradient-to-br from-slate-200 via-slate-300 to-slate-100 border border-white/60 mb-3 sm:mb-5 shadow-inner" />

                {/* Cardholder Info */}
                <div className="space-y-0.5 sm:space-y-1">
                  <div className="text-[10px] sm:text-[11px] font-mono tracking-wider text-white/95 uppercase font-semibold">
                    S.MOSTAFA ESMAEILI
                  </div>
                  <div className="text-[11px] sm:text-xs font-mono tracking-[0.2em] sm:tracking-[0.25em] text-white/95">
                    6219 &nbsp; 86
                  </div>
                </div>
              </div>

              {/* Card 2: Bottom Purple Card (Tilted -9deg counter-clockwise, overlapping in front) */}
              <div className="absolute bottom-1 sm:bottom-2 right-1 sm:right-4 w-[230px] xs:w-[275px] sm:w-[370px] h-[145px] xs:h-[175px] sm:h-[220px] bg-gradient-to-br from-[#A58FFF] via-[#9172FF] to-[#7B59FF] rounded-[20px] sm:rounded-[28px] p-3 sm:p-6 text-white shadow-2xl shadow-purple-600/30 border border-white/30 transform -rotate-[9deg] transition-transform duration-500 hover:-rotate-[5deg] hover:scale-105 z-20 overflow-hidden">

                
                {/* Background Line Art Circle */}
                <div className="absolute -right-12 -bottom-12 w-36 sm:w-48 h-36 sm:h-48 rounded-full border-[10px] sm:border-[14px] border-white/10 pointer-events-none" />

                <div className="flex justify-between items-start mb-2 sm:mb-3">
                  {/* Wi-Fi Contactless Icon */}
                  <Wifi className="w-4 h-4 sm:w-5 sm:h-5 text-white/90 rotate-90" />

                  {/* Sub-brand MISLAND */}
                  <div className="flex items-center gap-1 opacity-90 text-[10px] sm:text-xs font-mono tracking-widest uppercase">
                    <span>MISLAND</span>
                    <div className="w-3.5 h-3.5 sm:w-4 sm:h-4 rounded-full border-2 border-white border-r-transparent transform rotate-45" />
                  </div>
                </div>

                {/* Silver EMV Chip */}
                <div className="w-7 h-5 sm:w-9 sm:h-7 rounded-md bg-gradient-to-br from-slate-200 via-slate-300 to-slate-100 border border-white/60 mb-2 sm:mb-3 shadow-inner" />

                {/* Card Number matching screenshot */}
                <div className="my-1.5 sm:my-2.5 text-xs xs:text-sm sm:text-[19px] font-mono tracking-[0.16em] sm:tracking-[0.22em] text-white font-semibold drop-shadow-sm">
                  6219 &nbsp; 8610 &nbsp; 2888 &nbsp; 8075
                </div>

                <div className="flex justify-between items-end pt-1">
                  {/* Name & Expiry matching screenshot */}
                  <div className="text-[10px] sm:text-sm font-mono tracking-wider text-white/95 font-semibold">
                    DJ.ANDERSON &nbsp;|&nbsp; 22/01
                  </div>
                  
                  {/* Translucent Overlapping Circles Logo */}
                  <div className="flex -space-x-2.5 opacity-90">
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/40 border border-white/20" />
                    <div className="w-5 h-5 sm:w-6 sm:h-6 rounded-full bg-white/70 border border-white/30" />
                  </div>
                </div>
              </div>

            </div>


          </div>

        </div>
      </div>
    </section>
  );
}


