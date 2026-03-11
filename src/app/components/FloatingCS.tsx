import React from "react";
import { MessageSquare } from "lucide-react";
import { motion } from "motion/react";

export function FloatingCS() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.5, type: "spring", stiffness: 200, damping: 20 }}
      className="fixed bottom-8 right-8 z-[90]"
    >
      <div className="relative group">
        {/* Animated Glow Rings */}
        <div className="absolute -inset-2 bg-gradient-to-tr from-[#00E5FF] to-[#B026FF] rounded-full blur-xl opacity-40 group-hover:opacity-70 animate-pulse transition-opacity duration-500" />
        
        {/* FAB Button - Glass Orb */}
        <a 
          href="https://wa.me/628999540040" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="relative w-[72px] h-[72px] rounded-full bg-[#121212]/80 backdrop-blur-2xl border border-white/[0.15] shadow-[0_8px_32px_rgba(0,0,0,0.5),inset_0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center text-white hover:text-[#121212] hover:bg-[#00E5FF] transition-all duration-500 overflow-hidden transform hover:-translate-y-1"
        >
          <MessageSquare size={28} className="relative z-10 transition-transform duration-300 group-hover:scale-110" />
        </a>
        
        {/* Sleek Tooltip */}
        <div className="absolute right-[calc(100%+1rem)] top-1/2 -translate-y-1/2 px-5 py-2.5 rounded-2xl bg-[#121212]/90 backdrop-blur-xl border border-white/[0.08] text-white text-sm font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-4 group-hover:translate-x-0 pointer-events-none whitespace-nowrap shadow-2xl">
          Live Chat Support
        </div>
      </div>
    </motion.div>
  );
}
