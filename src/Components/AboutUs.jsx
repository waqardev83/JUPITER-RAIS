import React, { useState } from 'react';
import { ArrowRight, Heart, ShoppingCart, Star } from 'lucide-react';

// Product Images Imports (Apne path ke mutabiq adjust kar lein)
import imgTHinge from '../assets/Images/Hardware photo (3).png';
import imgGateLatch from '../assets/Images/Hardware photo (4).png';
import imgGateHinge from '../assets/Images/Hardware photo (5).png';
import imgDoorHandle from '../assets/Images/Hardware photo (7).png';

export default function FeaturedProductsSection() {
  const [activeSlide, setActiveSlide] = useState(0);

  // Exact image Content Object
  const products = [
    {
      id: 1,
      title: 'Black Antique T-Hinge',
      sku: 'SKU: QF-TH-102',
      price: '£24.95',
      image: imgTHinge,
      type: 'sizes',
      label: 'Available in:',
      options: ['12"', '18"', '24"'],
    },
    {
      id: 2,
      title: 'Heavy Duty Gate Latch',
      sku: 'SKU: QF-GL-204',
      price: '£18.50',
      image: imgGateLatch,
      type: 'finish',
      label: 'Finish:',
      options: ['Black Antique'],
    },
    {
      id: 3,
      title: 'Decorative Gate Hinge',
      sku: 'SKU: QF-GH-118',
      price: '£29.95',
      image: imgGateHinge,
      type: 'sizes',
      label: 'Available in:',
      options: ['12"', '18"'],
    },
    {
      id: 4,
      title: 'Black Antique Door Ha...',
      sku: 'SKU: QF-DH-310',
      price: '£21.99',
      image: imgDoorHandle,
      type: 'finish',
      label: 'Finish:',
      options: ['Black Antique'],
    },
  ];

  return (
    <section className="w-full bg-[#fcfcfd] py-8 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* HEADER SECTION */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-4">
          <div>
            {/* Top Subtitle with Line */}
            <div className="flex items-center gap-2 mb-2">
              <span className="text-[11px] font-semibold tracking-widest text-[#ff4e00] uppercase">
                FEATURED PRODUCTS
              </span>
              <span className="h-[2px] w-8 bg-[#ff4e00] inline-block"></span>
            </div>

            {/* Main Heading */}
            <h2 className="text-3xl sm:text-5xl font-black font-bold text-[#0f172a] tracking-tight">
              Quality Hardware, <br />
              <span className="text-[#ff4e00]">Ready to Order</span>
            </h2>

            {/* Subheading */}
            <p className="text-slate-500 text-xs sm:text-sm font-normal mt-2">
              Explore some of our most popular hardware and ironmongery products.
            </p>
          </div>

          {/* View All Products Button */}
          <div>
            <a
              href="#products"
              className="inline-flex items-center gap-2.5 bg-[#ff4e00] hover:bg-[#e04500] text-white font-bold text-xs sm:text-sm py-3 px-6 rounded-full shadow-md shadow-[#ff4e00]/20 transition-all duration-300 active:scale-95"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* PRODUCTS GRID SECTION */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Product Image & Wishlist Button */}
                <div className="relative h-52 w-full bg-slate-100 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-500"
                  />
                  <button
                    type="button"
                    aria-label="Add to wishlist"
                    className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-slate-700 hover:text-[#ff4e00] hover:bg-white shadow-sm transition-colors cursor-pointer"
                  >
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                {/* Product Text Details */}
                <div className="p-5">
                  <h3 className="text-sm font-bold text-slate-900 line-clamp-1">
                    {item.title}
                  </h3>
                  <p className="text-[11px] font-medium text-slate-400 mt-0.5 mb-2">
                    {item.sku}
                  </p>

                  {/* Rating Stars */}
                  <div className="flex items-center gap-0.5 text-amber-500 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Product Price */}
                  <div className="text-lg font-black text-slate-900 mb-3">
                    {item.price}
                  </div>

                  {/* Options (Sizes OR Finish) */}
                  <div className="space-y-1.5 min-h-[44px]">
                    <span className="text-[10px] font-bold text-slate-700 block">
                      {item.label}
                    </span>
                    
                    {item.type === 'sizes' ? (
                      /* Size Badges */
                      <div className="flex flex-wrap gap-1.5">
                        {item.options.map((size, idx) => (
                          <span
                            key={idx}
                            className="text-[10px] font-bold text-slate-700 bg-slate-100 px-2 py-0.5 rounded-sm"
                          >
                            {size}
                          </span>
                        ))}
                      </div>
                    ) : (
                      /* Finish Circle Dot */
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-slate-900 inline-block"></span>
                        <span className="text-[10px] font-semibold text-slate-700">
                          {item.options[0]}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="p-5 pt-0">
                <button 
                  type="button"
                  className="w-full bg-[#ff4e00] hover:bg-[#e04500] text-white font-bold text-xs py-2.5 px-4 rounded-xl flex items-center justify-center gap-2 shadow-sm transition-all duration-300 active:scale-95 cursor-pointer"
                >
                  <ShoppingCart className="w-3.5 h-3.5" />
                  <span>Add to Cart</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* BOTTOM PAGINATION DOTS */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {[0, 1, 2, 3].map((idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveSlide(idx)}
              aria-label={`Go to page ${idx + 1}`}
              className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                activeSlide === idx
                  ? 'w-2.5 bg-[#ff4e00]'
                  : 'w-2.5 bg-slate-200 hover:bg-slate-300'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}