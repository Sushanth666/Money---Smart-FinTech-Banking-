import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Pricing({ onOpenModal }) {
  const navigate = useNavigate();
  const [hoveredCardId, setHoveredCardId] = useState('basic');


  const plans = [
    {
      id: 'starter',
      name: 'Starter Plan',
      price: '29',
      period: '/month',
      description: 'This package is suitable for teams 1-15 people.',
      features: [
        '10 GB Dedicated Hosting Free',
        'Best for Developers, Freelancers',
        '1 Year Support',
      ],
      buttonText: 'Read More',
    },
    {
      id: 'basic',
      name: 'Basic Plan',
      price: '79',
      period: '/month',
      description: 'This package is suitable for teams 1-50 people.',
      features: [
        '15 GB Dedicated Hosting Free',
        'Best for Developers, Freelancers',
        '5 Year Support',
        'Free Custom Domain',
        'Basic Statistics',
      ],
      buttonText: 'Buy Now',
    },
    {
      id: 'premium',
      name: 'Premium Plan',
      price: '129',
      period: '', // No /month text in Figma screenshot for Premium Plan
      description: 'This package is suitable for teams 1-100 people.',
      features: [
        '20 GB Dedicated Hosting Free',
        'Best for Developers, Freelancers',
        'Unlimited Support',
        'Free Custom Domain',
        'Full Statistics',
      ],
      buttonText: 'Read More',
    },
  ];

  return (
    <section id="pricing" className="pt-10 pb-20 md:pt-14 md:pb-28 bg-white relative overflow-hidden max-w-full">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-purple-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header matching Figma screenshot */}
        <div className="max-w-3xl mx-auto space-y-4 mb-16">
          <h2 className="text-2xl sm:text-4xl lg:text-[46px] font-black text-[#1A1538] tracking-tight leading-[1.18] break-words">
            Our Exclusive Features
          </h2>

          <p className="text-[#9DA1C0] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor, commodo. Amet, aliquam condimentum.
          </p>
        </div>

        {/* 3 Pricing Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-6xl mx-auto">
          {plans.map((plan) => {
            const isHovered = hoveredCardId === plan.id;

            return (
              <div
                key={plan.id}
                onMouseEnter={() => setHoveredCardId(plan.id)}
                className={`rounded-[28px] p-8 sm:p-9 flex flex-col text-left transition-all duration-300 relative cursor-pointer ${
                  isHovered
                    ? 'bg-gradient-to-br from-[#A58FFF] via-[#9172FF] to-[#7B59FF] text-white shadow-2xl shadow-purple-600/30 md:scale-105 z-10'
                    : 'bg-white text-[#1A1538] shadow-xl shadow-slate-100/90 border border-slate-100/70 hover:shadow-2xl hover:shadow-purple-900/10'
                }`}
              >
                {/* Plan Header */}
                <div className="mb-4">
                  <h3 className={`text-sm font-semibold mb-3 ${isHovered ? 'text-purple-100' : 'text-[#1A1538]/70'}`}>
                    {plan.name}
                  </h3>
                  
                  {/* Price */}
                  <div className="flex items-baseline gap-1 my-2">
                    <span className={`text-4xl sm:text-[44px] font-black tracking-tight ${isHovered ? 'text-white' : 'text-[#1A1538]'}`}>
                      ${plan.price}
                    </span>
                    {plan.period && (
                      <span className={`text-sm font-medium ${isHovered ? 'text-purple-200' : 'text-[#9DA1C0]'}`}>
                        {plan.period}
                      </span>
                    )}
                  </div>

                  {/* Target text / Description */}
                  <p className={`text-xs sm:text-sm leading-relaxed font-normal my-3 ${isHovered ? 'text-purple-100/90' : 'text-[#9DA1C0]'}`}>
                    {plan.description}
                  </p>
                </div>

                {/* What's included Section */}
                <div className="space-y-3 mb-8 flex-grow">
                  <div className={`text-xs font-bold ${isHovered ? 'text-white' : 'text-[#1A1538]'}`}>
                    What's included:
                  </div>

                  <div className="space-y-3 pt-1">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <span className={`text-xs sm:text-sm font-medium ${isHovered ? 'text-white' : 'text-slate-600'}`}>
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Card Action Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    if (isHovered) {
                      navigate('/signup');
                    } else {
                      onOpenModal({
                        title: `${plan.name} Details`,
                        content: `Upgrade to the ${plan.name}. ${plan.description}`,
                      });
                    }
                  }}

                  className={`w-full py-3.5 px-6 rounded-full font-semibold text-xs sm:text-sm transition-all duration-300 flex items-center justify-center cursor-pointer active:scale-95 ${
                    isHovered
                      ? 'bg-white text-[#8565FF] shadow-md hover:bg-slate-50'
                      : 'border-1.5 border-[#C4B5FF] text-[#8565FF] bg-transparent hover:bg-gradient-to-r hover:from-[#A78FFF] hover:to-[#8565FF] hover:text-white hover:border-transparent'
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}


