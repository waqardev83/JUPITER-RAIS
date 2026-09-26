import React, { useState } from 'react';
import { 
  ArrowRight, 
  FileText, 
  ShieldCheck, 
  Truck, 
  Tag, 
  Headphones,
  MessageSquareText,
  PhoneCall
} from 'lucide-react';

// Background / Main Banner Image Path Import
import bgimg from "../assets/Images/image 24.jpg";

export default function HeroSection() {
  const [showQuoteCard, setShowQuoteCard] = useState(false);

  const features = [
    {
      icon: ShieldCheck,
      title: "Quality",
      subtitle: "Products",
    },
    {
      icon: Truck,
      title: "Fast",
      subtitle: "Delivery",
    },
    {
      icon: Tag,
      title: "Competitive",
      subtitle: "Prices",
    },
    {
      icon: Headphones,
      title: "Customer",
      subtitle: "Support",
    },
  ];

  return (
    <section className="relative w-full min-h-[500px] lg:min-h-[580px] bg-slate-60 overflow-hidden font-sans flex items-center">
      
      {/* BACKGROUND IMAGE CONTAINER */}
      <div className="absolute inset-0 z-10">
        <img
          src={bgimg}
          alt=" Hero Products "
          className="w-full h-full object-cover object-left lg:object-center"
        />
      </div>

      {/* FOREGROUND CONTENT LAYER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full py-8 lg:py-8 lg:pb-12  ">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <div className="lg:col-span-6 space-y-6 lg:pr-2">
            
            {/* Subtitle Category */}
            <div className="text-[8px] sm:text-xs font-semibold tracking-wider text-slate-500 ">
              IRONMONGERY <span className="mx-1 text-slate-300">|</span> BUILDERS HARDWARE <span className="mx-1 text-slate-300">|</span> GATE & FENCING ACCESSORIES
            </div>

            {/* Headline */}
            <h1 className="text-3xl sm:text-2xl lg:text-[48px] font-black text-[#0f172a]  font-Inter font-bold leading-[1.08] tracking-tight">
              Quality <br />
              Ironmongery & <br />
              <span className="text-[#ff4e00]">Builders Hardware</span>
            </h1>

            {/* Description */}
            <p className="text-xs sm:text-sm text-slate-600 font-normal  max-w-md">
              Reliable hardware, ironmongery, gate and fencing accessories for building, renovation and property projects.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="#shop"
                className="bg-[#ff4e00] hover:bg-[#e04500] text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-lg flex items-center gap-2.5 shadow-md shadow-[#ff4e00]/25 transition-all duration-300 active:scale-95"
              >
                <span>Shop Now</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <div
                className="relative"
                onMouseEnter={() => setShowQuoteCard(true)}
                onMouseLeave={() => setShowQuoteCard(false)}
              >
                <button
                  type="button"
                  onClick={() => setShowQuoteCard((prev) => !prev)}
                  className="bg-white hover:bg-slate-50 text-slate-900 font-bold text-xs sm:text-sm py-3 px-6 rounded-lg border border-slate-300 hover:border-[#ff4e00] flex items-center gap-2 transition-all duration-300 active:scale-95 shadow-sm"
                >
                  <FileText className="w-4 h-4 text-slate-700" />
                  <span>Request a Quote</span>
                </button>

                {showQuoteCard && (
                  <div className="absolute left-0 top-full z-20 mt-2 w-72 rounded-xl border border-slate-200 bg-white p-3 shadow-xl shadow-slate-200/70">
                    <div className="flex items-center gap-2 border-b border-slate-100 pb-2">
                      <div className="flex h-8 w-8 items-center justify-center rounded-full bg-orange-50 text-[#ff4e00]">
                        <MessageSquareText className="h-4 w-4" />
                      </div>
                      <div>
                        <p className="text-xs font-bold text-slate-900">Need a custom quote?</p>
                        <p className="text-[10px] text-slate-500">We reply quickly.</p>
                      </div>
                    </div>

                    <div className="mt-3 space-y-2 text-[11px] text-slate-600">
                      <div className="flex items-center gap-2">
                        <PhoneCall className="h-3.5 w-3.5 text-[#ff4e00]" />
                        <span>+44 XXX XXX XXXX</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-3.5 w-3.5 text-[#ff4e00]" />
                        <span>sales@example.com</span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* BOTTOM FEATURE BADGES */}
            <div className="pt-6 grid grid-cols-2 sm:grid-cols-4 gap-3 border-t border-slate-300/60 mt-12 max-w-lg">
              {features.map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-2 pr-2 border-r last:border-r-0 border-slate-300/60">
                    <div className="w-8 h-8 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-700 shrink-0 shadow-xs">
                      <Icon className="w-3.5 h-3.5 stroke-[1.75]" />
                    </div>
                    <div className="flex flex-col text-left">
                      <span className="text-[11px] font-bold text-slate-900 leading-tight">
                        {item.title}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-600 leading-tight">
                        {item.subtitle}
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>

          </div>

          {/* RIGHT COLUMN (EMPTY / SPACER FOR IMAGE DISPLAY) */}
          <div className="hidden lg:block lg:col-span-6" />

        </div>
      </div>
    </section>
  );
}