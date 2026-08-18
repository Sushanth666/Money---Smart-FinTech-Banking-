import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      id: 0,
      name: 'Johnson Mark',
      role: 'Calefornia, USA',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&q=80',
      quote:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor, commodo. Amet, aliquam condimentum.',
      pos: { top: '4%', left: '0%' },
      size: 'w-14 h-14',
    },
    {
      id: 1,
      name: 'Sarah Jenkins',
      role: 'London, UK',
      avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80',
      quote:
        'Transferring money internationally used to take days. With Digital Money, transactions execute in seconds with zero hassle!',
      pos: { top: '6%', left: '16%' },
      size: 'w-13 h-13',
    },
    {
      id: 2,
      name: 'Michael Chang',
      role: 'Singapore',
      avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=300&q=80',
      quote:
        'The security features and biometric verification give me total peace of mind for all our payout flows. Outstanding platform.',
      pos: { top: '34%', left: '6%' },
      size: 'w-12 h-12',
    },
    {
      id: 3,
      name: 'Elena Rostova',
      role: 'Berlin, Germany',
      avatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=300&q=80',
      quote:
        'Managing both my personal wallet and store payments from a single unified dashboard is an unbelievable game changer.',
      pos: { top: '56%', left: '-2%' },
      size: 'w-16 h-16',
    },
    {
      id: 4,
      name: 'David Miller',
      role: 'Sydney, Australia',
      avatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=300&q=80',
      quote:
        'Customer support responded in under 2 minutes when I needed help with wire transfers. 10/10 experience!',
      pos: { top: '78%', left: '8%' },
      size: 'w-12 h-12',
    },
    {
      id: 5,
      name: 'Jessica Alba',
      role: 'Toronto, Canada',
      avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=300&q=80',
      quote:
        'The real-time currency conversion rates save our business thousands of dollars every quarter on cross-border invoices.',
      pos: { top: '8%', right: '2%' },
      size: 'w-14 h-14',
    },
    {
      id: 6,
      name: 'Alex Rivera',
      role: 'Madrid, Spain',
      avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=300&q=80',
      quote:
        'Sleek user interface, lightning-fast transactions, and rock-solid reliability. Highly recommended for modern finance.',
      pos: { top: '40%', right: '-2%' },
      size: 'w-15 h-15',
    },
    {
      id: 7,
      name: 'Kevin Smith',
      role: 'New York, USA',
      avatar: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=300&q=80',
      quote:
        'Digital Money eliminated all hidden bank fees for our remote engineering team. Exceptional service and speed.',
      pos: { top: '76%', right: '6%' },
      size: 'w-12 h-12',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const activeTestimonial = testimonials[currentIndex];

  return (
    <section id="testimonials" className="pt-10 pb-20 md:pt-14 md:pb-28 bg-white relative overflow-hidden max-w-full">
      
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[800px] h-[500px] bg-purple-100/30 rounded-full blur-3xl -z-10 pointer-events-none" />



      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* Section Header matching Figma screenshot */}
        <div className="max-w-3xl mx-auto space-y-4 mb-14">
          <h2 className="text-2xl sm:text-4xl lg:text-[46px] font-black text-[#1A1538] tracking-tight leading-[1.18] break-words">
            Client Testimonial
          </h2>

          <p className="text-[#9DA1C0] text-sm sm:text-base leading-relaxed max-w-2xl mx-auto font-normal">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Luctus cum purus bibendum risus nibh cursus integer dolor, commodo. Amet, aliquam condimentum.
          </p>
        </div>

        {/* Floating Constellation & Testimonial Card Wrapper */}
        <div className="relative min-h-[480px] flex flex-col items-center justify-center max-w-[1100px] mx-auto px-4">
          
          {/* Outer Satellite Floating Avatars (Positioned far outward so they don't hide behind center card) */}
          <div className="hidden lg:block absolute inset-0 pointer-events-none z-20">
            {testimonials.map((item, index) => {
              const isActive = index === currentIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => setCurrentIndex(index)}
                  style={{
                    top: item.pos.top,
                    left: item.pos.left,
                    right: item.pos.right,
                  }}
                  className={`absolute ${item.size} rounded-full p-0.5 bg-white shadow-lg shadow-purple-900/10 pointer-events-auto transition-all duration-300 hover:scale-125 cursor-pointer ${
                    isActive ? 'scale-110 opacity-100 shadow-xl' : 'opacity-90 hover:opacity-100'
                  }`}

                  title={`View testimonial from ${item.name}`}
                >
                  <img
                    src={item.avatar}
                    alt={item.name}
                    className="w-full h-full rounded-full object-cover"
                  />
                </div>
              );
            })}
          </div>

          {/* Featured Center Avatar */}
          <div className="w-20 h-20 sm:w-24 sm:h-24 mx-auto mb-6 relative z-20">
            <img
              src={activeTestimonial.avatar}
              alt={activeTestimonial.name}
              className="w-full h-full rounded-full object-cover shadow-2xl shadow-purple-500/20 border-4 border-white transition-all duration-500"
            />
          </div>

          {/* Central Active Testimonial Card */}
          <div className="relative z-10 w-full max-w-2xl bg-white rounded-[28px] p-8 sm:p-10 shadow-xl shadow-slate-100/90 border border-slate-100/70 text-center mb-8 transition-all duration-300">
            
            {/* Soft Purple Quote Mark Graphic */}
            <div className="flex justify-center mb-2">
              <Quote className="w-10 h-10 text-[#C4B5FF]/40 fill-[#C4B5FF]/20 transform rotate-180" />
            </div>

            {/* Testimonial Quote */}
            <p className="text-[#1A1538] text-sm sm:text-base leading-relaxed max-w-xl mx-auto font-normal">
              {activeTestimonial.quote}
            </p>
          </div>

          {/* User Name, Role & Arrow Controls */}
          <div className="relative z-20 flex items-center justify-center gap-6 sm:gap-8">
            {/* Left Pink Arrow */}
            <button
              onClick={handlePrev}
              className="w-9 h-9 rounded-full bg-[#FF8FA3] text-white flex items-center justify-center shadow-md shadow-pink-500/20 hover:bg-[#FF7580] hover:scale-110 transition-all cursor-pointer active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5 stroke-[2.5]" />
            </button>

            {/* Name & Location */}
            <div className="text-center min-w-[160px]">
              <h4 className="text-base sm:text-lg font-bold text-[#1A1538] transition-all">
                {activeTestimonial.name}
              </h4>
              <p className="text-xs sm:text-sm text-[#9DA1C0] font-normal mt-0.5 transition-all">
                {activeTestimonial.role}
              </p>
            </div>

            {/* Right Pink Arrow */}
            <button
              onClick={handleNext}
              className="w-9 h-9 rounded-full bg-[#FF8FA3] text-white flex items-center justify-center shadow-md shadow-pink-500/20 hover:bg-[#FF7580] hover:scale-110 transition-all cursor-pointer active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5 stroke-[2.5]" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}



