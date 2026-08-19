import React from 'react';
import trackIcon from '../../assets/icons/move-feature.png';
import supportIcon from '../../assets/icons/support.png';
import securityIcon from '../../assets/icons/security.png';
import guideIcon from '../../assets/icons/guide.png';

export default function OnlinePlatform({ onOpenModal }) {
  const features = [
    {
      id: 'track-move',
      title: 'Track Your Move',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.',
      iconAsset: trackIcon,
    },
    {
      id: 'lifetime-support',
      title: 'Lifetime Support',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.',
      iconAsset: supportIcon,
    },
    {
      id: 'top-security',
      title: 'Top Security',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.',
      iconAsset: securityIcon,
    },
    {
      id: 'professional-guide',
      title: 'Professionals Guide',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet tempus felis vitae.',
      iconAsset: guideIcon,
    },
  ];

  return (
    <section id="services" className="pt-10 pb-16 md:pt-14 md:pb-20 bg-white relative overflow-hidden max-w-full">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[700px] h-[400px] bg-purple-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header matching exact text in Figma screenshot */}
        <div className="max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-10 sm:mb-14">
          <h2 className="text-2xl xs:text-3xl sm:text-4xl lg:text-[46px] font-black text-[#1A1538] tracking-tight leading-[1.2] break-words">
            Welcome To <br className="inline" /> Our Online Platform
          </h2>
          <p className="text-[#9DA1C0] text-xs sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor, commodo. Amet, aliquam condimentum.
          </p>
        </div>


        {/* 4 Feature Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {features.map((item) => {
            return (
              <div
                key={item.id}
                className="bg-white rounded-[28px] p-8 flex flex-col items-center text-center shadow-xl shadow-slate-100/90 border border-slate-100/70 hover:shadow-2xl hover:shadow-purple-900/10 hover:-translate-y-2 transition-all duration-300 relative group"
              >
                {/* Icon Badge Asset */}
                <div className="w-16 h-16 sm:w-20 sm:h-20 mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <img
                    src={item.iconAsset}
                    alt={item.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-[#1A1538] mb-3">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-[#9DA1C0] text-xs sm:text-sm leading-relaxed mb-8 flex-grow font-normal">
                  {item.description}
                </p>

                {/* Button (Uniform outline button for all 4 cards, solid purple on hover) */}
                <button
                  onClick={() =>
                    onOpenModal({
                      title: item.title,
                      content: `${item.description} Access advanced features, real-time telemetry, and dedicated support tools.`,
                    })
                  }
                  className="w-full py-3 px-6 rounded-full font-semibold text-xs sm:text-sm border-1.5 border-[#C4B5FF] text-[#8565FF] bg-transparent hover:bg-gradient-to-r hover:from-[#A78FFF] hover:to-[#8565FF] hover:text-white hover:border-transparent hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center justify-center cursor-pointer active:scale-95"
                >
                  <span>Read More</span>
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}



