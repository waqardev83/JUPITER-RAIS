import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, CheckCircle2, Loader2 } from 'lucide-react';

// Local image import for local project folder
import bgImageFile from '../assets/Images/image-38.png';

// High-quality fallback image matching the hardware door & stone background
const bgImage = bgImageFile || "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&q=80&w=1600";

export default function Jupitery() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState('idle'); // 'idle' | 'loading' | 'success' | 'error'
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      setErrorMessage('Please enter a valid email address');
      return;
    }

    setErrorMessage('');
    setStatus('loading');

    // Simulate API call delay
    setTimeout(() => {
      setStatus('success');
    }, 1200);
  };

  const handleReset = () => {
    setEmail('');
    setStatus('idle');
  };

  return (
    <div className="relative min-h-screen w-full bg-slate-100 flex items-center justify-center p-4 sm:p-6 md:p-10 lg:p-16 font-sans antialiased overflow-hidden">
      
      {/* Background Image Layer */}
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center sm:bg-right bg-no-repeat transition-all duration-700 pointer-events-none"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        {/* Subtle light vignette gradient overlay */}
        <div className="w-full h-full bg-gradient-to-r from-white/45 via-white/50 sm:via-white/15 to-transparent backdrop-blur-[1px]" />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 w-full max-w-6xl mx-auto py-8 sm:py-12 md:py-16 flex items-center">
        
        {}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="w-full max-w-2xl bg-white/85 sm:bg-white/90 backdrop-blur-md rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-white/60 text-left"
        >
          {/* Sub-heading Badge */}
          <div className="flex items-center gap-2.5 mb-3">
            <span className="text-xs sm:text-sm font-medium tracking-wider text-[#FF4D15] uppercase">
              STAY UPDATED
            </span>
            <motion.span 
              initial={{ width: 0 }}
              animate={{ width: 36 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="h-[2.5px] bg-[#FF4D15] rounded-full inline-block" 
            />
          </div>

          {/* Main Title */}
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[42px] font-abold text-[#0B132B] leading-[1.2] tracking-tight mb-3">
            Get the Latest From <br className="hidden sm:block" />
            <span className="text-[#FF4D15]">Jupiter Rise</span>
          </h2>

          {/* Description */}
          <p className="text-slate-600 text-sm sm:text-base font-normal leading-relaxed mb-6 sm:mb-8">
            Sign up for product updates, new arrivals and exclusive offers.
          </p>

          {}
          <AnimatePresence mode="wait">
            {status === 'success' ? (
              /* Success State Card */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-emerald-50 border border-emerald-200 rounded-xl sm:rounded-2xl p-5 sm:p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 text-emerald-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-base">You're subscribed!</h4>
                    <p className="text-slate-600 text-xs sm:text-sm">Thank you for subscribing to Jupiter Rise updates.</p>
                  </div>
                </div>

                <button
                  onClick={handleReset}
                  className="text-xs font-semibold text-slate-500 hover:text-slate-800 underline underline-offset-2 transition-colors shrink-0"
                >
                  Add another
                </button>
              </motion.div>
            ) : (
              /* Subscription Form Inputs */
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full"
              >
                {/* Input + Button Wrapper */}
                <div className="relative flex flex-col sm:flex-row items-stretch bg-white border border-slate-200 rounded-xl sm:rounded-2xl p-1.5 shadow-sm transition-all focus-within:border-[#FF4D15] focus-within:ring-2 focus-within:ring-[#FF4D15]/20">
                  
                  {/* Email Input Field with Icon */}
                  <div className="relative flex-1 flex items-center min-h-[48px] sm:min-h-[52px] px-3 sm:px-4">
                    <Mail className="w-5 h-5 text-slate-400 shrink-0 mr-3" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        if (errorMessage) setErrorMessage('');
                      }}
                      placeholder="Enter your email address"
                      className="w-full bg-transparent text-slate-800 placeholder-slate-400 text-sm sm:text-base outline-none font-medium"
                    />
                  </div>

                  {/* Submit Button */}
                  <motion.button
                    type="submit"
                    disabled={status === 'loading'}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="mt-2 sm:mt-0 bg-[#FF4D15] hover:bg-[#E03E08] text-white px-6 sm:px-8 py-3.5 sm:py-0 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base flex items-center justify-center gap-2 transition-all shadow-md shadow-[#FF4D15]/20 shrink-0 cursor-pointer disabled:opacity-80"
                  >
                    {status === 'loading' ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Subscribing...</span>
                      </>
                    ) : (
                      <>
                        <span>Subscribe</span>
                        <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 stroke-[2.5]" />
                      </>
                    )}
                  </motion.button>
                </div>

                {/* Validation Error Message */}
                {errorMessage && (
                  <motion.p 
                    initial={{ opacity: 0, y: -5 }} 
                    animate={{ opacity: 1, y: 0 }} 
                    className="text-red-500 text-xs font-semibold mt-2 ml-1"
                  >
                    {errorMessage}
                  </motion.p>
                )}

                {}
                <p className="text-[11px] sm:text-xs text-slate-400 font-medium mt-3.5 sm:mt-4 leading-normal">
                  By subscribing, you agree to receive updates from Quick Fit Building Solutions.
                </p>
              </motion.form>
            )}
          </AnimatePresence>

        </motion.div>

      </div>

    </div>
  );
}