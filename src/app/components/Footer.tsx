import React from "react";
import { Instagram, MapPin, Phone, Mail, Facebook } from "lucide-react";

export function Footer() {
  return (
    <footer id="contact" className="relative pt-32 pb-16 overflow-hidden bg-[#121212] border-t border-white/[0.05]">
      {/* Background Accents */}
      <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-[#B026FF]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-12 mb-20">
          
          {/* Brand Col */}
          <div className="col-span-1 md:col-span-5">
            <a href="#" className="flex items-center gap-4 mb-8 inline-flex group">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#00E5FF] to-[#B026FF] flex items-center justify-center p-[2px] shadow-[0_0_20px_rgba(0,229,255,0.3)] transition-shadow duration-500 group-hover:shadow-[0_0_40px_rgba(176,38,255,0.5)]">
                <div className="w-full h-full bg-[#121212] rounded-full flex items-center justify-center">
                  <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#00E5FF] to-[#B026FF] font-black text-2xl leading-none">F</span>
                </div>
              </div>
              <span className="font-black text-3xl tracking-tight text-white">
                Fresh Sole & Care
              </span>
            </a>
            <p className="text-gray-400 max-w-sm mb-10 text-lg font-light leading-relaxed">
              Premium detailing and deep cleaning service. We breathe new life into your sneakers, helmets, and motorcycles.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Mail].map((Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  className="w-12 h-12 rounded-full bg-white/[0.02] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-[#121212] hover:bg-[#00E5FF] hover:border-[#00E5FF] transition-all duration-300 shadow-lg transform hover:-translate-y-1"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 md:col-span-3">
            <h4 className="text-white font-bold text-lg mb-8 tracking-wide">Quick Links</h4>
            <ul className="flex flex-col gap-5">
              {["Services", "Pricing", "About Us", "FAQs"].map((link) => (
                <li key={link}>
                  <a href="#" className="text-gray-400 hover:text-[#00E5FF] transition-colors text-base font-medium flex items-center gap-2 group">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00E5FF]/50 group-hover:bg-[#00E5FF] transition-colors" />
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Col */}
          <div className="col-span-1 md:col-span-4">
            <h4 className="text-white font-bold text-lg mb-8 tracking-wide">Contact Us</h4>
            <ul className="flex flex-col gap-8">
              <li className="flex items-start gap-5 text-gray-400 text-base group">
                <div className="w-12 h-12 shrink-0 rounded-full bg-white/[0.02] border border-white/[0.08] flex items-center justify-center group-hover:border-[#B026FF]/50 group-hover:text-[#B026FF] group-hover:bg-[#B026FF]/10 transition-all duration-300">
                  <MapPin size={20} />
                </div>
                <span className="leading-relaxed pt-2 font-light">
                  Jalan Selat Madura No. 14 RT. 08<br />
                  Tanjung Laut, Kota Bontang
                </span>
              </li>
              <li className="flex items-center gap-5 text-gray-400 text-base group">
                <div className="w-12 h-12 shrink-0 rounded-full bg-white/[0.02] border border-white/[0.08] flex items-center justify-center group-hover:border-[#00E5FF]/50 group-hover:text-[#00E5FF] group-hover:bg-[#00E5FF]/10 transition-all duration-300">
                  <Phone size={20} />
                </div>
                <span className="pt-1 font-medium tracking-wider">+62 8999 5400 40</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-10 border-t border-white/[0.05] text-gray-500 text-sm font-medium">
          <p>© {new Date().getFullYear()} Fresh Sole & Care. All rights reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
