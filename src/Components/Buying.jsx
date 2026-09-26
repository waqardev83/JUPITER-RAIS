import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { User, Mail, Phone, Package, BarChart3, FileText, ArrowRight, CheckCircle2 } from 'lucide-react';

// LOCAL IMAGE IMPORT
// Replace './bg-door.jpg' with your actual image path in your local project
import bgImageFile from '../assets/Images/image-32.png';

// Fallback image URL so the live preview renders immediately if local image isn't loaded yet
const bgImage = bgImageFile || <img src={bgImageFile} alt="Background" />;

const containerVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: [0.22, 1, 0.36, 1],
      staggerChildren: 0.07,
      delayChildren: 0.15
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

export default function App() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    productSku: '',
    quantity: '',
    message: ''
  });

  const [activeInput, setActiveInput] = useState(null);
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API request smoothly
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 700);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      productSku: '',
      quantity: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-slate-100 flex items-center justify-center p-3 sm:p-6 md:p-8 lg:p-12 font-sans text-slate-800 antialiased overflow-x-hidden">
      
      {/* Outer Card Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full max-w-6xl rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl bg-white flex flex-col lg:flex-row min-h-[640px]"
      >
        
        {/* Background Image Panel for Desktop (Right side) & Mobile Header */}
        <motion.div 
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="lg:absolute lg:inset-0 w-full h-52 sm:h-64 lg:h-full bg-cover bg-center lg:bg-right transition-all duration-500"
          style={{ backgroundImage: `url(${bgImage})` }}
        >
          {/* Soft White Gradient Overlay to integrate form seamlessly */}
          <div className="w-full h-full bg-gradient-to-t from-black/50 via-black/20 to-transparent lg:bg-gradient-to-r lg:from-white lg:via-white/15 lg:to-transparent" />
        </motion.div>

        {/* Form & Content Container */}
        <div className="relative z-10 w-full lg:w-[58%] xl:w-[54%] p-5 sm:p-8 md:p-10 lg:p-12 xl:p-14 bg-white/95 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none flex flex-col justify-center">
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full"
          >
            {/* Header Section */}
            <div className="mb-5 sm:mb-7">
              
              {/* Sub-heading badge with horizontal line */}
              <motion.div variants={itemVariants} className="flex items-center gap-2 mb-2 sm:mb-3">
                <span className="text-xs sm:text-sm font-semibold tracking-wider text-[#FF4D15] uppercase">
                  NEED A QUOTE?
                </span>
                <motion.span 
                  initial={{ width: 0 }}
                  animate={{ width: 32 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="h-[2px] bg-[#FF4D15] rounded-full inline-block" 
                />
              </motion.div>

              {/* Main Heading */}
              <motion.h1 
                variants={itemVariants} 
                className="text-2xl sm:text-3xl md:text-4xl xl:text-[38px] font-bold text-slate-900 leading-[1.2] tracking-tight mb-2.5"
              >
                Buying in Bulk or Looking {' '}
                <span className="text-[#FF4D15] inline-block">
                   for Something Specific?
                </span>
              </motion.h1>

              {/* Paragraph Description */}
              <motion.p variants={itemVariants} className="text-xs sm:text-sm  text-slate-500 max-w-md ">
                Tell us what you need and our team will get back to you with the right solution.
              </motion.p>
            </div>

            <motion.div 
              variants={itemVariants}
              whileHover={{ y: -2 }}
              transition={{ duration: 0.2 }}
              className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-7 shadow-[0_10px_30px_rgba(0,0,0,0.06)] border border-slate-100/90 transition-shadow duration-300 hover:shadow-[0_18px_40px_rgba(0,0,0,0.1)]"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  /* Animated Success State */
                  <motion.div 
                    key="success"
                    initial={{ opacity: 0, scale: 0.92, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.92, y: -10 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="py-10 text-center flex flex-col items-center justify-center space-y-3"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 220, damping: 14, delay: 0.1 }}
                    >
                      <CheckCircle2 className="w-16 h-16 text-emerald-500" />
                    </motion.div>
                    
                    <h3 className="text-xl font-bold text-slate-900">Enquiry Submitted!</h3>
                    <p className="text-xs sm:text-sm text-slate-500 max-w-xs leading-relaxed">
                      Thank you for your enquiry. Our sales team will get back to you promptly.
                    </p>

                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={handleReset}
                      className="mt-3 text-xs font-bold text-[#FF4D15] hover:text-[#e03e08] underline underline-offset-4 cursor-pointer"
                    >
                      Submit Another Requirement
                    </motion.button>
                  </motion.div>
                ) : (
                  /* Form Input Fields Grid */
                  <motion.form 
                    key="form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit} 
                    className="space-y-3.5 sm:space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                      
                      {/* Full Name */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-700">Full Name</label>
                        <div className="relative flex items-center">
                          <User className={`absolute left-3.5 w-4 h-4 transition-colors duration-200 pointer-events-none ${activeInput === 'fullName' ? 'text-[#FF4D15]' : 'text-slate-400'}`} />
                          <input
                            type="text"
                            name="fullName"
                            value={formData.fullName}
                            onChange={handleChange}
                            onFocus={() => setActiveInput('fullName')}
                            onBlur={() => setActiveInput(null)}
                            required
                            placeholder="Enter your name"
                            className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#FF4D15] focus:ring-2 focus:ring-[#FF4D15]/15 transition-all duration-200"
                          />
                        </div>
                      </div>

                      {/* Email Address */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-700">Email Address</label>
                        <div className="relative flex items-center">
                          <Mail className={`absolute left-3.5 w-4 h-4 transition-colors duration-200 pointer-events-none ${activeInput === 'email' ? 'text-[#FF4D15]' : 'text-slate-400'}`} />
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setActiveInput('email')}
                            onBlur={() => setActiveInput(null)}
                            required
                            placeholder="you@example.com"
                            className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#FF4D15] focus:ring-2 focus:ring-[#FF4D15]/15 transition-all duration-200"
                          />
                        </div>
                      </div>

                      {/* Phone Number */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-700">Phone Number</label>
                        <div className="relative flex items-center">
                          <Phone className={`absolute left-3.5 w-4 h-4 transition-colors duration-200 pointer-events-none ${activeInput === 'phone' ? 'text-[#FF4D15]' : 'text-slate-400'}`} />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            onFocus={() => setActiveInput('phone')}
                            onBlur={() => setActiveInput(null)}
                            placeholder="Your phone number"
                            className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#FF4D15] focus:ring-2 focus:ring-[#FF4D15]/15 transition-all duration-200"
                          />
                        </div>
                      </div>

                      {/* Product / SKU */}
                      <div className="flex flex-col gap-1.5">
                        <label className="text-xs font-semibold text-slate-700">Product / SKU</label>
                        <div className="relative flex items-center">
                          <Package className={`absolute left-3.5 w-4 h-4 transition-colors duration-200 pointer-events-none ${activeInput === 'productSku' ? 'text-[#FF4D15]' : 'text-slate-400'}`} />
                          <input
                            type="text"
                            name="productSku"
                            value={formData.productSku}
                            onChange={handleChange}
                            onFocus={() => setActiveInput('productSku')}
                            onBlur={() => setActiveInput(null)}
                            placeholder="What product are you looking for?"
                            className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#FF4D15] focus:ring-2 focus:ring-[#FF4D15]/15 transition-all duration-200"
                          />
                        </div>
                      </div>

                      {/* Quantity */}
                      <div className="flex flex-col gap-1.5 sm:col-span-1">
                        <label className="text-xs font-semibold text-slate-700">Quantity</label>
                        <div className="relative flex items-center">
                          <BarChart3 className={`absolute left-3.5 w-4 h-4 rotate-90 transition-colors duration-200 pointer-events-none ${activeInput === 'quantity' ? 'text-[#FF4D15]' : 'text-slate-400'}`} />
                          <input
                            type="text"
                            name="quantity"
                            value={formData.quantity}
                            onChange={handleChange}
                            onFocus={() => setActiveInput('quantity')}
                            onBlur={() => setActiveInput(null)}
                            placeholder="Enter quantity"
                            className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#FF4D15] focus:ring-2 focus:ring-[#FF4D15]/15 transition-all duration-200"
                          />
                        </div>
                      </div>

                      {/* Message */}
                      <div className="flex flex-col gap-1.5 sm:col-span-2">
                        <label className="text-xs font-semibold text-slate-700">Message</label>
                        <div className="relative flex items-start">
                          <FileText className={`absolute left-3.5 top-3 w-4 h-4 transition-colors duration-200 pointer-events-none ${activeInput === 'message' ? 'text-[#FF4D15]' : 'text-slate-400'}`} />
                          <textarea
                            name="message"
                            rows={2}
                            value={formData.message}
                            onChange={handleChange}
                            onFocus={() => setActiveInput('message')}
                            onBlur={() => setActiveInput(null)}
                            placeholder="Tell us about your requirements..."
                            className="w-full pl-10 pr-3.5 py-2.5 bg-white border border-slate-200 rounded-lg text-xs sm:text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#FF4D15] focus:ring-2 focus:ring-[#FF4D15]/15 transition-all duration-200 resize-none"
                          />
                        </div>
                      </div>

                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.015, backgroundColor: '#e03e08' }}
                      whileTap={{ scale: 0.985 }}
                      transition={{ duration: 0.2 }}
                      className="w-full mt-2 bg-[#FF4D15] text-white font-bold py-3 px-6 rounded-lg text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-shadow duration-200 cursor-pointer disabled:opacity-80"
                    >
                      {isSubmitting ? (
                        <motion.div 
                          animate={{ rotate: 360 }}
                          transition={{ repeat: Infinity, duration: 1, ease: "linear" }}
                          className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        />
                      ) : (
                        <>
                          <span>Submit Enquiry</span>
                          <motion.div
                            animate={{ x: [0, 4, 0] }}
                            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
                          >
                            <ArrowRight className="w-4 h-4 stroke-[2.5]" />
                          </motion.div>
                        </>
                      )}
                    </motion.button>

                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>

          </motion.div>

        </div>

      </motion.div>

    </div>
  );
}