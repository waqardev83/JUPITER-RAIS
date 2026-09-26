import React from "react";
import { motion } from "framer-motion";
import {
    Phone,
    Mail,
    MessageCircle,
    Globe,
} from "lucide-react";

import footerImg from "../../assets/Images/Footerimg.png";

export default function Footer() {
    return (
        <footer
            className="relative w-full bg-[#0D1525] px-4 py-6 font-sans text-slate-400 sm:px-6 sm:py-8 lg:px-8"
        >
            <div className="relative z-10 mx-auto max-w-7xl">

                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="grid grid-cols-1 gap-6 border-b border-slate-800/70 pb-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-12"
                >

                    {/* Brand */}
                    <div className="lg:col-span-4">
                        <div className="flex items-center gap-2 mt-1">
                            <img
                                src={footerImg}
                                alt="Jupiter Rise Logo"
                                className="h-10 w-12 rotate-1 object-cover"
                            />
                        </div>

                        <p className="mt-3 max-w-sm text-xs text-slate-300 leading-relaxed">
                            Quality ironmongery, builders hardware, gate and fencing
                            accessories for your next project.
                        </p>

                        <div className="mt-4 flex gap-2.5">
                            <a
                                href="https://www.facebook.com/share/1BTDz4BRZx/"
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#162238] text-slate-100 transition hover:bg-[#FF4D15]"
                            >
                                <Globe className="h-3.5 w-3.5" />
                            </a>

                            <a
                                href="https://www.instagram.com/skskdidjdkxdjd?stkn=MW05OGNvNHpjd3E4bw=="
                                
                                className="flex h-8 w-8 items-center justify-center rounded-full bg-[#162238] text-slate-100 transition hover:bg-[#FF4D15]"
                            >
                                <MessageCircle className="h-3.5 w-3.5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="mb-3 text-sm font-bold text-white relative inline-block after:content-[''] after:block after:w-10 after:h-0.5 after:bg-[#FF4D15] after:mt-1">
                            Quick Links
                        </h3>

                        <ul className="space-y-1.5 text-xs">
                            <li className="hover:text-white cursor-pointer transition"><a href="#top">Home</a></li>
                            <li className="hover:text-white cursor-pointer transition"><a href="#shop">Shop</a></li>
                            <li className="hover:text-white cursor-pointer transition"><a href="#categories">Categories</a></li>
                            <li className="hover:text-white cursor-pointer transition"><a href="#about-us">About Us</a></li>
                            <li className="hover:text-white cursor-pointer transition"><a href="#contact">Contact Us</a></li>
                            <li className="hover:text-white cursor-pointer transition">FAQs</li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="lg:col-span-2">
                        <h3 className="mb-3 text-sm font-bold text-white relative inline-block after:content-[''] after:block after:w-16 after:h-0.5 after:bg-[#FF4D15] after:mt-1">
                            Customer Support
                        </h3>

                        <ul className="space-y-1.5 text-xs">
                            <li className="hover:text-white cursor-pointer transition">Delivery Information</li>
                            <li className="hover:text-white cursor-pointer transition">Returns</li>
                            <li className="hover:text-white cursor-pointer transition">Order Support</li>
                            <li className="hover:text-white cursor-pointer transition">Contact Support</li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="lg:col-span-2">
                        <h3 className="mb-3 text-sm font-bold text-white relative inline-block after:content-[''] after:block after:w-6 after:h-0.5 after:bg-[#FF4D15] after:mt-1">
                            Contact
                        </h3>

                        <div className="space-y-2.5 text-xs">
                            <div className="flex items-center gap-2.5">
                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#162238] text-slate-200">
                                    <Phone className="h-3.5 w-3.5" />
                                </div>
                                <span>+44 XXX XXX XXXX</span>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#162238] text-slate-200">
                                    <Mail className="h-3.5 w-3.5" />
                                </div>
                                <span>sales@example.com</span>
                            </div>

                            <div className="flex items-center gap-2.5">
                                <div className="flex h-7 w-7 items-center justify-center rounded-full bg-[#162238] text-slate-200">
                                    <MessageCircle className="h-3.5 w-3.5" />
                                </div>
                                <span>WhatsApp</span>
                            </div>
                        </div>
                    </div>

                    {/* Legal */}
                    <div className="lg:col-span-2">
                        <h3 className="mb-3 text-sm font-bold text-white relative inline-block after:content-[''] after:block after:w-5 after:h-0.5 after:bg-[#FF4D15] after:mt-1">
                            Legal
                        </h3>

                        <ul className="space-y-1.5 text-xs">
                            <li className="hover:text-white cursor-pointer transition">Privacy Policy</li>
                            <li className="hover:text-white cursor-pointer transition">Terms & Conditions</li>
                            <li className="hover:text-white cursor-pointer transition">Cookie Policy</li>
                        </ul>
                    </div>

                </motion.div>

                {/* Bottom Bar */}
                <div className="mt-4 flex flex-col items-center justify-between gap-2 text-xs text-slate-400 sm:flex-row">
                    <p>© 2024 Quick Fit Building Solutions. All rights reserved.</p>

                    <p className="text-slate-300">
                        Built for Builders. Trusted by Professionals
                    </p>
                </div>

            </div>
        </footer>
    );
}