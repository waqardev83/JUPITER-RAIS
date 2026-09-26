import React from 'react';
import { ArrowRight } from 'lucide-react';

// Product Images Imports (Apne image path ke mutabiq replace kar lein)
import imgGateHinges from '../assets/Images/Product image.png';
import imgGateBands from '../assets/Images/Product image (1).png';
import imgGateEyes from '../assets/Images/Product image (2).png';
import imgGateHardware from '../assets/Images/Product image (3).png';

export default function GateAndFencingSection() {
  // Constant Array with Content
  const categories = [
    {
      id: 1,
      title: 'Gate Hinges',
      description: 'Strong and reliable hinges for gates.',
      image: imgGateHinges,
      link: '#gate-hinges',
      isFeatured: false,
    },
    {
      id: 2,
      title: 'Gate Bands',
      description: 'Durable bands for secure gate installation.',
      image: imgGateBands,
      link: '#gate-bands',
      isFeatured: false,
    },
    {
      id: 3,
      title: 'Gate Eyes',
      description: 'Essential fittings for gate assemblies.',
      image: imgGateEyes,
      link: '#gate-eyes',
      isFeatured: true, // Image me is card ke around slate border container hai
    },
    {
      id: 4,
      title: 'Gate Hardware',
      description: 'Latches, bolts, catches and more.',
      image: imgGateHardware,
      link: '#gate-hardware',
      isFeatured: false,
    },
  ];

  return (
    <section id="contact" className="w-full h-5/6 bg-[#fcfcfd] py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          {/* Top Subtitle with Lines on both sides */}
          <div className="flex items-center justify-center gap-3 mb-3">
            <span className="h-0.5 w-10 bg-[#ff4e00] inline-block"></span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-widest text-[#ff4e00] uppercase">
              GATE & FENCING
            </span>
            <span className="h-0.5 w-10 bg-[#ff4e00] inline-block"></span>
          </div>

          {/* Main Headline */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl  font-bold font-black text-[#0f172a] tracking-tight leading-tight">
            Everything You Need for <br />
            Your <span className="text-[#ff4e00] italic font-serif font-semibold">Gate & Fencing Projects</span>
          </h2>
        </div>

        {/* CARDS GRID SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Image Container */}
                <div
                  className={`w-full h-44 rounded-xl flex items-center justify-center p-4 mb-6 transition-transform duration-300 group-hover:scale-105 ${
                    item.isFeatured
                      ? 'border-2 border-slate-400/80 bg-white'
                      : 'bg-white'
                  }`}
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>

                {/* Text Content */}
                <h3 className="text-lg font-bold text-slate-900 mb-1">
                  {item.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-normal min-h-9">
                  {item.description}
                </p>
              </div>

              {/* Bottom Right Arrow Button */}
              <div className="flex justify-end mt-4">
                <a
                  href={item.link}
                  aria-label={`View ${item.title}`}
                  className="w-8 h-8 rounded-full border border-slate-100 bg-white text-[#ff4e00] flex items-center justify-center shadow-xs group-hover:bg-[#ff4e00] group-hover:text-white transition-colors duration-300"
                >
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}