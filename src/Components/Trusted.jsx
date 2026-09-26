import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';

import bgImageFile from '../assets/Images/bgImage29.png';

const bgImage = bgImageFile;

const reviewsData = [
  [
    {
      id: 1,
      rating: 5,
      quote: "Great quality products andvery quick delivery. Exactly what we needed for our gate project.",
      initial: "J",
      author: "James R.",
      verified: true
    },
    {
      id: 2,
      rating: 5,
      quote: "Excellent range of ironmongery and very helpful customer service.",
      initial: "D",
      author: "David M.",
      verified: true
    },
    {
      id: 3,
      rating: 5,
      quote: "Good prices, quality hardware and everything arrived well packaged.",
      initial: "M",
      author: "Mark T.",
      verified: true
    }
  ],
  [
    {
      id: 4,
      rating: 5,
      quote: "Outstanding build quality and solid hinges. Made our timber gate renovation effortless.",
      initial: "S",
      author: "Sarah K.",
      verified: true
    },
    {
      id: 5,
      rating: 5,
      quote: "Fast dispatch, competitive prices, and top-tier durability. Will definitely order again.",
      initial: "A",
      author: "Andrew P.",
      verified: true
    },
    {
      id: 6,
      rating: 5,
      quote: "The heavy-duty latches exceeded expectations. Highly recommend for any property owner.",
      initial: "R",
      author: "Robert L.",
      verified: true
    }
  ],
  [
    {
      id: 7,
      rating: 5,
      quote: "Top notch ironmongery! Extremely sturdy fittings and clear order tracking throughout.",
      initial: "E",
      author: "Emily H.",
      verified: true
    },
    {
      id: 8,
      rating: 5,
      quote: "Superb value for money. The black coated hardware finish looks premium on our fencing.",
      initial: "C",
      author: "Chris B.",
      verified: true
    },
    {
      id: 9,
      rating: 5,
      quote: "Prompt support and robust products. Perfectly tailored for commercial builder needs.",
      initial: "T",
      author: "Thomas W.",
      verified: true
    }
  ]
];

const containerVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.12,
      delayChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

export default function App() {
  const [activeSlide, setActiveSlide] = useState(0);

  const currentReviews = reviewsData[activeSlide];

  return (
    <div className="relative min-h-screen w-full bg-slate-100 flex items-center justify-center p-4 sm:p-6 md:p-10 lg:p-16 font-sans antialiased overflow-hidden">
      
      {/* Background Image Container with Soft Light Gradient Mask */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat transition-all duration-700 pointer-events-none"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Soft white overlay gradient blending background softly like in reference image */}
        <div className="w-full h-full bg-gradient-to-b from-white/65 via-white/95 to-white/90 backdrop-blur-[2px]" />
      </div>

      {/* Main Review Section Box */}
      <div className="relative z-10 w-full max-w-6xl mx-auto py-8 sm:py-12 md:py-16">
        
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="flex flex-col items-center text-center"
        >
          
          {/* Sub-heading badge with horizontal line */}
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-2 sm:mb-3">
            <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#FF4D15] uppercase">
              CUSTOMER REVIEWS
            </span>
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: 32 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="h-[2.5px] bg-[#FF4700] rounded-full inline-block" 
            />
          </motion.div>

          {/* Main Heading */}
          <motion.h2 
            variants={itemVariants}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-[42px] font-bold text-[#0B132B] leading-[1.25] tracking-tight max-w-2xl mb-8 sm:mb-12"
          >
            Trusted by Builders & <br className="hidden sm:inline" /> Property Owner
          </motion.h2>

          {/* Testimonial Cards Grid */}
          <div className="w-full min-h-[310px] relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-7 text-left"
              >
                {currentReviews.map((review) => (
                  <motion.div
                    key={review.id}
                    variants={itemVariants}
                    whileHover={{ y: -6, boxShadow: '0 20px 35px -10px rgba(0, 0, 0, 0.08)' }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                    className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-7 md:p-8  flex flex-col justify-between transition-shadow duration-300 hover:bg-[#ff4e00]"
                  >
                    <div>
                      {/* 5 Stars Rating */}
                      <div className="flex items-center gap-1 mb-4 sm:mb-5">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star 
                            key={i} 
                            className="w-4 h-4 sm:w-5 sm:h-5 fill-[#FFA800] text-[#FFA800]" 
                          />
                        ))}
                      </div>

                      {/* Review Quote Text */}
                      <p className="text-slate-800 text-xs sm:text-sm md:text-[15px] font-medium leading-relaxed mb-6 sm:mb-8">
                        “ {review.quote}”
                      </p>
                    </div>

                    {/* Author Profile Information */}
                    <div className="flex items-center gap-3 pt-2">
                      {/* Circle Initial Avatar */}
                      <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-slate-100 flex items-center justify-center text-slate-800 font-bold text-sm sm:text-base shrink-0 border border-slate-200/60">
                        {review.initial}
                      </div>

                      {/* Name & Verified Badge */}
                      <div className="flex flex-col">
                        <span className="font-bold text-slate-900 text-xs sm:text-sm leading-tight">
                          {review.author}
                        </span>
                        
                        <div className="flex items-center gap-1 mt-1">
                          <CheckCircle2 className="w-3.5 h-3.5 fill-[#10B981] text-white" />
                          <span className="text-[11px] sm:text-xs font-semibold text-slate-400 leading-none">
                            Verified Customer
                          </span>
                        </div>
                      </div>
                    </div>

                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Pagination Indicators / Dots */}
          <motion.div 
            variants={itemVariants} 
            className="flex items-center justify-center gap-2.5 mt-8 sm:mt-10"
          >
            {reviewsData.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setActiveSlide(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                className={`rounded-full transition-all duration-300 cursor-pointer ${
                  activeSlide === index 
                    ? 'w-3 h-3 bg-[#FF4D15] shadow-sm shadow-[#FF4D15]/40' 
                    : 'w-2.5 h-2.5 bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to review slide ${index + 1}`}
              />
            ))}
          </motion.div>

        </motion.div>

      </div>

    </div>
  );
}