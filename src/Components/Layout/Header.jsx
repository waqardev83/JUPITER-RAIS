import React, { useState } from 'react';
import { 
  Search, 
  User, 
  ShoppingBag, 
  ChevronDown, 
  FileText, 
  ArrowRight, 
  Menu, 
  X 
} from 'lucide-react';

// Path apne project structure ke hisab se check kar lein
import logoImg from '../../assets/Images/logoimg.png'; 

export default function Header() {
  const [activeNav, setActiveNav] = useState('Home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);

  const navLinks = [
    { name: 'Home', href: '#top' },
    { name: 'Shop', href: '#shop' },
    { 
      name: 'Categories', 
      href: '#categories', 
      hasDropdown: true,
      subItems: ['Industrial Tools', 'Safety Equipment', 'Machinery', 'Electrical Supplies']
    },
    { name: 'About Us', href: '#about-us' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="w-full bg-white border-b border-slate-100 shadow-sm sticky top-0 z-50 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 gap-4">
          
          {/* Logo Section */}
          <div className="shrink-0 flex items-center cursor-pointer">
            <a href="#" className="flex items-center gap-2">
              <img 
                src={logoImg} 
                alt="Jupiter Rise Logo" 
                className="h-16 sm:h-16 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop & Laptop Navigation Menu (Large screens) */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = activeNav === link.name;
              
              if (link.hasDropdown) {
                return (
                  <div 
                    key={link.name} 
                    className="relative group"
                    onMouseEnter={() => setIsCategoryOpen(true)}
                    onMouseLeave={() => setIsCategoryOpen(false)}
                  >
                    <button 
                      className={`flex items-center gap-1 text-sm font-semibold transition-colors duration-200 py-1 cursor-pointer ${
                        isActive ? 'text-[#ff4500]' : 'text-slate-700 hover:text-[#ff4500]'
                      }`}
                    >
                      <span>{link.name}</span>
                      <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isCategoryOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {/* Dropdown Menu */}
                    {isCategoryOpen && (
                      <div className="absolute top-full left-0 w-48 bg-white border border-slate-100 rounded-lg shadow-xl py-2 z-50 animate-fadeIn">
                        {link.subItems.map((item, idx) => (
                          <a
                            key={idx}
                            href="#"
                            className="block px-4 py-2 text-xs font-medium text-slate-600 hover:text-[#ff4500] hover:bg-orange-50/50 transition-colors"
                          >
                            {item}
                          </a>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setActiveNav(link.name)}
                  className={`relative text-sm font-semibold transition-colors duration-200 py-1 ${
                    isActive ? 'text-[#ff4500] font-bold' : 'text-slate-700 hover:text-[#ff4500]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.75 bg-[#ff4500] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Right Section Controls */}
          <div className="hidden lg:flex items-center gap-6">
            
            {/* Search Input Bar */}
            <div className="relative w-48 xl:w-60">
              <input
                type="text"
                placeholder="Search products, SKU..."
                className="w-full bg-slate-100/80 text-xs text-slate-700 pl-10 pr-4 py-2.5 rounded-full border border-transparent focus:border-orange-300 focus:bg-white focus:outline-none transition-all duration-200"
              />
              <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
            </div>

            {/* Account Link */}
            <a 
              href="#" 
              className="flex flex-col items-center justify-center text-slate-700 hover:text-[#ff4500] transition-colors"
            >
              <User className="w-5 h-5" />
              <span className="text-[10px] font-medium mt-0.5">Account</span>
            </a>

            {/* Cart Icon with Counter Badge */}
            <a 
              href="#" 
              className="relative flex flex-col items-center justify-center text-slate-700 hover:text-[#ff4500] transition-colors"
            >
              <ShoppingBag className="w-5 h-5" />
              <span className="absolute -top-1 -right-1 bg-[#ff4500] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
              <span className="text-[10px] font-medium mt-0.5">Cart</span>
            </a>

            {/* Request a Quote Action Button */}
            <button className="group flex items-center gap-2 bg-[#ff4500] hover:bg-[#e03d00] text-white text-xs font-bold px-5 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
              <FileText className="w-4 h-4" />
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>

          </div>

          {/* Mobile & Tablet Toggle Menu Button (sm aur md screens ke liye responsive) */}
          <div className="flex lg:hidden items-center gap-3">
            <a href="#" className="relative p-2 text-slate-700">
              <ShoppingBag className="w-6 h-6" />
              <span className="absolute top-1 right-1 bg-[#ff4500] text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                0
              </span>
            </a>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2.5 rounded-xl bg-slate-50 hover:bg-orange-50 text-slate-700 hover:text-[#ff4500] border border-slate-200 transition-all duration-300 cursor-pointer focus:outline-none"
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Responsive Drawer Menu for Mobile & Tablet screens (sm & md) */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-4 pb-6 space-y-4 shadow-lg animate-fadeIn">
          {/* Mobile Search Bar */}
          <div className="relative w-full">
            <input
              type="text"
              placeholder="Search products, SKU..."
              className="w-full bg-slate-100 text-xs text-slate-700 pl-10 pr-4 py-2.5 rounded-full border border-slate-200 focus:outline-none"
            />
            <Search className="w-4 h-4 text-slate-500 absolute left-3.5 top-1/2 transform -translate-y-1/2" />
          </div>

          {/* Mobile Nav Links */}
          <div className="space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => {
                  setActiveNav(link.name);
                  setIsMobileMenuOpen(false);
                }}
                className={`block px-3 py-2.5 text-sm font-semibold rounded-lg transition-colors ${
                  activeNav === link.name 
                    ? 'text-[#ff4500] bg-orange-50/80 font-bold' 
                    : 'text-slate-700 hover:text-[#ff4500] hover:bg-slate-50'
                }`}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Account & Quote Action Buttons */}
          <div className="pt-2 border-t border-slate-100 space-y-3">
            <a 
              href="#" 
              className="flex items-center gap-3 px-3 py-2 text-sm font-medium text-slate-700 hover:text-[#ff4500]"
            >
              <User className="w-5 h-5" />
              <span>My Account</span>
            </a>

            <button className="w-full flex items-center justify-center gap-2 bg-[#ff4500] hover:bg-[#e03d00] text-white text-xs font-bold px-5 py-3 rounded-full shadow-md transition-all">
              <FileText className="w-4 h-4" />
              <span>Request a Quote</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}