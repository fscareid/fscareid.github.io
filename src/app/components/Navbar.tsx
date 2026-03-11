import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-[#121212]/60 backdrop-blur-2xl border-b border-white/[0.08] shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-4"
          : "bg-transparent py-8"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-4 group">
          <div className="w-12 h-12 rounded-full bg-gradient-to-tr from-[#00E5FF] to-[#B026FF] flex items-center justify-center p-[2px] shadow-[0_0_20px_rgba(0,229,255,0.4)] group-hover:shadow-[0_0_30px_rgba(176,38,255,0.6)] transition-all duration-500">
            <div className="w-full h-full bg-[#121212] rounded-full flex items-center justify-center">
              <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#00E5FF] to-[#B026FF] font-black text-xl leading-none">F</span>
            </div>
          </div>
          <span className="font-bold text-xl tracking-tight text-white hidden sm:block">
            Fresh Sole <span className="text-[#00E5FF]">&</span> Care
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {["Services", "Gallery", "Process", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-sm font-medium text-gray-400 hover:text-white transition-colors relative group py-2"
            >
              {item}
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-gradient-to-r from-[#00E5FF] to-[#B026FF] transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
          <a
            href="https://wa.me/628999540040"
            target="_blank"
            rel="noopener noreferrer"
            className="relative px-7 py-2.5 rounded-full overflow-hidden group bg-white/[0.03] border border-white/10 hover:border-[#00E5FF]/50 transition-all duration-500 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#00E5FF]/20 to-[#B026FF]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <span className="relative text-sm font-semibold text-white group-hover:text-[#00E5FF] transition-colors duration-300 drop-shadow-md">
              Book Now
            </span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-white p-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden bg-[#121212]/95 backdrop-blur-3xl border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-6 gap-6">
              {["Services", "Gallery", "Process", "Contact"].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-lg font-medium text-gray-300 hover:text-[#00E5FF] transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
