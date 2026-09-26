import React from 'react';
import { ShieldCheck, Headphones, BarChart3, Truck, Grid, Users } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hardware() {
  const features = [
    {
      id: 1,
      title: 'Quality Products',
      description: 'Carefully selected hardware for dependable performance.',
      icon: ShieldCheck,
    },
    {
      id: 2,
      title: 'Reliable Service',
      description: 'Friendly and responsive support whenever you need us.',
      icon: Headphones,
    },
    {
      id: 3,
      title: 'Competitive Pricing',
      description: 'Great value across our extensive product range.',
      icon: BarChart3,
    },
    {
      id: 4,
      title: 'Fast Delivery',
      description: 'Get your products delivered quickly and conveniently.',
      icon: Truck,
    },
    {
      id: 5,
      title: 'Wide Product Range',
      description: 'From everyday essentials to specialist hardware.',
      icon: Grid,
    },
    {
      id: 6,
      title: 'Customer Support',
      description: "Need help finding something? We're here to assist.",
      icon: Users,
    },
  ];

  // Motion variants for smooth staggering
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
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
    <section className="w-full bg-[#fcfcfd] py-16 sm:py-20 px-4 sm:px-6 lg:px-8 font-sans overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* LEFT CONTENT COLUMN */}
          <motion.div
            className="lg:col-span-5 space-y-5"
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl sm:text-6xl md:text-[52px] font-black font-bold text-[#0b132b]  leading-[1.1] lg:pb6-4">
              Hardware You <br />
              <span className="text-[#ff4e00]">Can Rely On</span>
            </h2>

            <p className="text-[#64748b] text-base sm:text-lg font-normal sm:font-medium  max-w-md  pb-96 ">
              Whether you're working on a small repair or a larger building project, we're here to help you find the right products.
            </p>
          </motion.div>

          {/* RIGHT 6-CARDS GRID */}
          <motion.div
            className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {features.map((item) => {
              const IconComponent = item.icon;
              return (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  whileHover={{ y: -4 }}
                  className="bg-white rounded-2xl p-6 sm:p-7 border hover:bg-amber-600 border-slate-100 shadow-[0_10px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_35px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-start"
                >
                  {/* Soft Orange Rounded Icon Container */}
                  <div className="w-12 h-12 rounded-full bg-[#fff0e6] flex items-center justify-center mb-5 shrink-0">
                    <IconComponent className="w-6 h-6 text-[#ff4e00]" strokeWidth={2.2} />
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-semibold text-[#0b132b] mb-2 leading-tight">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p className="text-[#64748b] text-xs sm:text-sm font-medium ">
                    {item.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>

        </div>
      </div>
    </section>
  );
}