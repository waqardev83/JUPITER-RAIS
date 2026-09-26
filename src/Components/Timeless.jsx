import React from 'react';
import { ArrowRight, ShieldCheck, Gem, Wrench } from 'lucide-react';
import { motion } from 'framer-motion';

// Main Background Image (Right side cover image)
import heroBannerImg from '../assets/Images/image-32.png';

// Sub-Category Images
import imgHandles from '../assets/Images/imgB.png';
import imgHinges from '../assets/Images/imgC.png';
import imgLatches from '../assets/Images/imgD.png';
import imgBolts from '../assets/Images/imgF.png';
import imgHooks from '../assets/Images/imgG.png';
import imgDecorative from '../assets/Images/imgH.png';

export default function Timeless() {
  const subCategories = [
    { id: 1, title: 'Handles', image: imgHandles, link: '#handles' },
    { id: 2, title: 'Hinges', image: imgHinges, link: '#hinges' },
    { id: 3, title: 'Latches', image: imgLatches, link: '#latches' },
    { id: 4, title: 'Bolts', image: imgBolts, link: '#bolts' },
    { id: 5, title: 'Hooks', image: imgHooks, link: '#hooks' },
    { id: 6, title: 'Decorative Hardware', image: imgDecorative, link: '#decorative' },
  ];

  // Animation Variants (Left Content)
  const containerVariants = {
    hidden: { opacity: 0, x: -60 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <section 
      className="relative w-full py-16 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden bg-white bg-no-repeat bg-right-bottom sm:bg-right bg-[size:100%_auto] lg:bg-contain"
      style={{ backgroundImage: `url(${heroBannerImg})` }}
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center min-h-[480px]">

          {/* LEFT CONTENT COLUMN WITH ANIMATION */}
          <motion.div
            className="lg:col-span-6 space-y-6 z-10"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {/* Main Title */}
            <motion.h2
              variants={itemVariants}
              className="text-3xl sm:text-4xl md:text-5xl font-black font-bold text-[#0a1128] tracking-tight leading-[1.15]"
            >
              Timeless Hardware. <br />
              <span className="text-[#ff4e00]">Built to Last.</span>
            </motion.h2>

            {/* Sub-text */}
            <motion.p
              variants={itemVariants}
              className="text-slate-500 text-xs sm:text-sm font-semibold  max-w-sm"
            >
              Give your doors, gates and outdoor spaces a distinctive traditional finish  with our Black Antique collection.
            </motion.p>

            {/* 6 Sub-Category Cards */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-3 sm:gap-4 max-w-lg pt-2"
            >
              {subCategories.map((item) => (
                <motion.a
                  key={item.id}
                  href={item.link}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className="bg-white/90 backdrop-blur-xs rounded-xl p-3 border border-slate-100 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between h-28 group"
                >
                  <div className="w-full h-14 flex items-center justify-center p-1">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>

                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[11px] font-bold text-slate-800 line-clamp-1 leading-tight">
                      {item.title}
                    </span>
                    <ArrowRight className="w-3 h-3 text-[#ff4e00] shrink-0 transform group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* Button */}
            <motion.div variants={itemVariants} className="pt-2">
              <a
                href="#explore-black-antique"
                className="inline-flex items-center gap-2.5 bg-[#ff4e00] hover:bg-[#e04500] text-white font-bold text-xs sm:text-sm py-3.5 px-7 rounded-2xl shadow-md shadow-[#ff4e00]/20 transition-all duration-300 active:scale-95"
              >
                <span>Explore Black Antique</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>

          {/* RIGHT SIDE WITH FLOATING BADGE */}
          <div className="lg:col-span-6 relative flex flex-col justify-end items-end h-full pt-20 lg:pt-0">
            {/* BOTTOM FLOATING FEATURE BADGE */}
            <div className="w-full max-w-[480px] bg-white/85 backdrop-blur-md rounded-2xl p-3 border border-white/60 shadow-xl flex items-center justify-around text-center">

              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-slate-800" />
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-900 leading-tight">Premium</p>
                  <p className="text-[9px] text-slate-500 font-medium leading-tight">Quality</p>
                </div>
              </div>

              <div className="h-6 w-[1px] bg-slate-200" />

              <div className="flex items-center gap-2">
                <Gem className="w-4 h-4 text-slate-800" />
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-900 leading-tight">Classic</p>
                  <p className="text-[9px] text-slate-500 font-medium leading-tight">Aesthetic</p>
                </div>
              </div>

              <div className="h-6 w-[1px] bg-slate-200" />

              <div className="flex items-center gap-2">
                <Wrench className="w-4 h-4 text-slate-800" />
                <div className="text-left">
                  <p className="text-[10px] font-bold text-slate-900 leading-tight">Built for</p>
                  <p className="text-[9px] text-slate-500 font-medium leading-tight">Everyday Use</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}