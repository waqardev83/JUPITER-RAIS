import React from 'react';
import { ArrowRight } from 'lucide-react';

// Card Images
import imgIronmongery from '../assets/Images/Product image6.png';
import imgBlackAntique from '../assets/Images/Product image1.png';
import imgFieldGate from '../assets/Images/Product image2.png';
import imgBrass from '../assets/Images/Product image3.png';
import imgAluminium from '../assets/Images/Product image4.png';
import imgPlastic from '../assets/Images/Product image5.png';

export default function ShopByCategory() {
  const categories = [
    {
      id: 1,
      title: 'Ironmongery',
      description: 'Essential hardware for doors, gates and general building projects.',
      buttonText: 'Shop Ironmongery',
      image: imgIronmongery,
      link: '#ironmongery',
    },
    {
      id: 2,
      title: 'Black Antique',
      description: 'Traditional-style decorative hardware with a timeless finish.',
      buttonText: 'Explore Collection',
      image: imgBlackAntique,
      link: '#black-antique',
    },
    {
      id: 3,
      title: 'Field Gate & Fencing',
      description: 'Reliable fittings and accessories for gates and fencing.',
      buttonText: 'Shop Collection',
      image: imgFieldGate,
      link: '#field-gate',
    },
    {
      id: 4,
      title: 'Brass',
      description: 'Durable brass hardware for a premium finish.',
      buttonText: 'Shop Brass',
      image: imgBrass,
      link: '#brass',
    },
    {
      id: 5,
      title: 'Aluminium',
      description: 'Lightweight and durable hardware for everyday applications.',
      buttonText: 'Shop Aluminium',
      image: imgAluminium,
      link: '#aluminium',
    },
    {
      id: 6,
      title: 'Plastic',
      description: 'Practical plastic fittings and accessories.',
      buttonText: 'Shop Plastic',
      image: imgPlastic,
      link: '#plastic',
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="text-center mb-12">
          {/* Top Subtitle with Line */}
          <div className="flex items-center justify-center gap-2 mb-2">
            <span className="text-[11px] font-semibold tracking-widest text-[#ff4e00] uppercase">
              EXPLORE OUR RANGE
            </span>
            <span className="h-0.5 w-8 bg-[#ff4e00] inline-block"></span>
          </div>

          {/* Main Title */}
          <h2 className="text-4xl sm:text-5xl font-black text-[#0f172a] tracking-tight">
            Shop by <span className="text-[#ff4e00]">Category</span>
          </h2>

          {/* Subheading */}
          <p className="text-slate-500 text-sm sm:text-base font-normal mt-3">
            Find the right hardware for every building, renovation and property project.
          </p>
        </div>

        {/* CATEGORIES GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className="group relative h-56 rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 border border-slate-100 flex items-center"
            >
              {/* Background Image */}
              <div className="absolute inset-0 z-0">
                <img
                  src={cat.image}
                  alt={cat.title}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* White Overlay Gradient (Left white to transparent right) */}
              <div className="absolute inset-0 z-10 bg-linear-to-r from-white via-white/90 to-transparent w-3/4 sm:w-2/3" />

              {/* Text Content */}
              <div className="relative z-20 w-3/5 sm:w-7/12 p-6 flex flex-col justify-between h-full">
                <div>
                  <h3 className="text-lg font-bold text-slate-900 leading-snug mb-1.5">
                    {cat.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-normal line-clamp-3">
                    {cat.description}
                  </p>
                </div>

                {/* Bottom CTA Link */}
                <a
                  href={cat.link}
                  className="inline-flex items-center gap-2 text-[11px] font-bold text-slate-700 hover:text-[#ff4e00] transition-colors mt-4 group/btn"
                >
                  <span>{cat.buttonText}</span>
                  <div className="w-5 h-5 rounded-full bg-[#ff4e00] text-white flex items-center justify-center transition-transform group-hover/btn:translate-x-1">
                    <ArrowRight className="w-3 h-3" />
                  </div>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* PAGINATION DOTS */}
        <div className="flex items-center justify-center gap-2 mt-10">
          <span className="w-2.5 h-2.5 rounded-full bg-[#ff4e00] cursor-pointer"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-orange-200 cursor-pointer hover:bg-orange-300 transition-colors"></span>
          <span className="w-2.5 h-2.5 rounded-full bg-orange-200 cursor-pointer hover:bg-orange-300 transition-colors"></span>
        </div>

      </div>
    </section>
  );
}