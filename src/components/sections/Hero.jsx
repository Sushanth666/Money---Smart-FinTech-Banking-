import React from 'react';
import { useNavigate } from 'react-router-dom';
import moneySack from '../../assets/icons/money-sack.png';
import coinStack from '../../assets/icons/coin-stack.png';
import globe from '../../assets/icons/globe.png';
import pinkFluid from '../../assets/backgrounds/pink-fluid.png';
import purpleFluid from '../../assets/backgrounds/purple-fluid.png';
import pinkOrb from '../../assets/backgrounds/pink-orb.png';
import purpleOrb from '../../assets/backgrounds/purple-orb.png';

export default function Hero({ onOpenModal }) {
  const navigate = useNavigate();

  return (
    <section id="home" className="relative bg-white pt-28 pb-8 md:pt-40 md:pb-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Text Content Column */}
          <div className="lg:col-span-6 space-y-5 sm:space-y-7 text-left">
            
            {/* Title */}
            <h1 className="text-2xl xs:text-3xl sm:text-5xl lg:text-[54px] leading-[1.15] font-black text-[#1A1538] tracking-tight break-words">
              Fastest Money Transfer, Shopping From One Account
            </h1>


            {/* Subtitle matching exact text in screenshot */}
            <p className="text-[#9DA1C0] text-xs sm:text-base leading-relaxed max-w-md font-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae sit est quisque.
            </p>

            {/* Action Buttons matching screenshot ("Read More" & "Get a Quote") */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2 sm:pt-3">
              <button
                onClick={() => navigate('/signup')}
                className="px-7 sm:px-9 py-3 sm:py-3.5 rounded-full bg-gradient-to-r from-[#A78FFF] to-[#8565FF] text-white font-semibold text-xs sm:text-base shadow-lg shadow-purple-500/25 hover:opacity-95 hover:shadow-xl hover:scale-[1.02] transition-all duration-300 cursor-pointer active:scale-95"
              >
                Read More
              </button>

              <button
                onClick={() => onOpenModal({ title: 'Get a Quote', content: 'Our team will guide you through instant pricing and custom setups.' })}
                className="px-7 sm:px-9 py-3 sm:py-3.5 rounded-full border-1.5 border-[#C4B5FF] text-[#8565FF] hover:bg-[#F6F3FF] font-semibold text-xs sm:text-base transition-all duration-300 cursor-pointer active:scale-95"
              >
                Get a Quote
              </button>
            </div>

          </div>

          {/* Right Visual Column (Using Exported Figma Assets with Prominent Orbs & Badges) */}
          <div className="lg:col-span-6 relative flex justify-center items-center py-4 sm:py-6 w-full max-w-full overflow-hidden">
            <div className="relative z-10 w-full max-w-[280px] xs:max-w-[340px] sm:max-w-[460px] lg:max-w-[500px] h-[260px] xs:h-[320px] sm:h-[460px] flex items-center justify-center">
              
              {/* Top-Left Purple Orb Asset */}
              <div className="absolute top-0 left-0 sm:-left-6 z-0 pointer-events-none">
                <img
                  src={purpleOrb}
                  alt="Purple Orb"
                  className="w-12 xs:w-16 sm:w-28 h-auto object-contain opacity-100 filter-none"
                />
              </div>

              {/* Bottom-Right Pink Orb Asset */}
              <div className="absolute bottom-0 right-0 sm:-right-8 z-0 pointer-events-none">
                <img
                  src={pinkOrb}
                  alt="Pink Orb"
                  className="w-14 xs:w-18 sm:w-30 h-auto object-contain opacity-100 filter-none"
                />
              </div>

              {/* Pink Fluid Background Asset */}
              <img
                src={pinkFluid}
                alt="Pink Fluid Blob"
                className="absolute top-2 left-2 sm:left-12 w-[130px] xs:w-[170px] sm:w-[270px] lg:w-[300px] h-auto pointer-events-none z-10 object-contain"
              />

              {/* Main Purple Fluid Asset */}
              <div className="relative z-20 flex items-center justify-center">
                <img
                  src={purpleFluid}
                  alt="Purple Fluid Shape"
                  className="w-[180px] xs:w-[240px] sm:w-[370px] lg:w-[410px] h-auto object-contain drop-shadow-xl"
                />

                {/* Badge 1: Top Left Money Sack inside White Rounded Card Border */}
                <div className="absolute top-[18%] left-0 sm:-left-4 animate-float z-30 transition-transform duration-300 hover:scale-110">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-2.5 shadow-lg shadow-purple-900/10 border border-slate-100/90 flex items-center justify-center">
                    <img
                      src={moneySack}
                      alt="Money Sack Icon"
                      className="w-5 h-5 sm:w-9 sm:h-9 object-contain"
                    />
                  </div>
                </div>

                {/* Badge 2: Bottom Left Coin Stack inside White Rounded Card Border */}
                <div className="absolute bottom-[14%] left-1 sm:left-6 animate-float-reverse z-30 transition-transform duration-300 hover:scale-110">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-2.5 shadow-lg shadow-purple-900/10 border border-slate-100/90 flex items-center justify-center">
                    <img
                      src={coinStack}
                      alt="Coin Stack Icon"
                      className="w-5 h-5 sm:w-9 sm:h-9 object-contain"
                    />
                  </div>
                </div>

                {/* Badge 3: Bottom Right Globe inside White Rounded Card Border */}
                <div className="absolute bottom-[12%] right-0 sm:right-2 animate-float z-30 transition-transform duration-300 hover:scale-110">
                  <div className="bg-white rounded-xl sm:rounded-2xl p-1 sm:p-2.5 shadow-lg shadow-purple-900/10 border border-slate-100/90 flex items-center justify-center">
                    <img
                      src={globe}
                      alt="Globe Icon"
                      className="w-5 h-5 sm:w-9 sm:h-9 object-contain"
                    />
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



