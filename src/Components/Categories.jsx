import React from 'react';
import { ArrowRight, Box, Grid, ShieldCheck } from 'lucide-react';

// Main Banner/Product Image Import (Apna image path check kar lein)
import heroBgImg from '../assets/Images/imageA.png';

export default function RelianceHardwareSection() {
  const stats = [
    {
      id: 1,
      icon: Box,
      value: '150+',
      label: 'Hardware Products',
    },
    {
      id: 2,
      icon: Grid,
      value: '9+',
      label: 'Product Categories',
    },
    {
      id: 3,
      icon: ShieldCheck,
      value: 'Quality',
      label: 'Focused Range',
    },
  ];

  return (
    <section className="relative w-full min-h-[550px] lg:min-h-[620px] bg-white font-sans overflow-hidden flex items-center">
      
      {/* RIGHT SIDE BACKGROUND IMAGE CONTAINER */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBgImg}
          alt="Hardware Products Display"
          className="w-full h-full object-cover object-right lg:object-center"
        />
        {/* Soft Left Overlay Gradient for Mobile/Tablet readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 md:via-white/50 to-transparent lg:w-2/3" />
      </div>

      {/* FOREGROUND CONTENT LAYER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-10 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-7 space-y-6 max-w-2xl">
            
            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-4xl lg:text-[52px] font-bold font-black text-[#0a1128] leading-[1.12] tracking-tight">
              Hardware You Can <br />
              Rely On. Quality for <br />
              <span className="text-[#ff4e00] italic font-serif font-medium">Every Project.</span>
            </h1>

            {/* Paragraph Text */}
            <p className="text-xs sm:text-sm md:text-base text-slate-500 font-normal  max-w-xl">
              At Jupiter Rise International Ltd., we provide a wide range of ironmongery, builders hardware, gate and fencing accessories for building, renovation and property projects.
            </p>

            {/* Call to Action Button */}
            <div className="pt-2">
              <a
                href="#story"
                className="inline-flex items-center gap-3 bg-[#ff4e00] hover:bg-[#e04500] text-white font-bold text-xs sm:text-sm py-3.5 px-7 rounded-full shadow-lg shadow-[#ff4e00]/25 transition-all duration-300 active:scale-95"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* BOTTOM STATS / FEATURE CARDS */}
            <div className="grid grid-cols-3 gap-3 sm:gap-4 pt-6 max-w-lg">
              {stats.map((item) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.id}
                    className="bg-white/95 backdrop-blur-sm rounded-2xl p-3 sm:p-4 text-center border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                  >
                    {/* Icon Container */}
                    <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-orange-50 text-[#ff4e00] hover:bg-orange-300 flex items-center justify-center mx-auto mb-2">
                      <IconComponent className="w-4 h-4 stroke-[2]" />
                    </div>

                    {/* Value */}
                    <div className="text-sm sm:text-base font-black text-slate-900 leading-tight">
                      {item.value}
                    </div>

                    {/* Label */}
                    <div className="text-[10px] sm:text-[11px] font-medium text-slate-500 leading-tight mt-0.5">
                      {item.label}
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT COLUMN (Spacing placeholder for background layout on desktop) */}
          <div className="hidden lg:block lg:col-span-5" />

        </div>
      </div>

    </section>
  );
}