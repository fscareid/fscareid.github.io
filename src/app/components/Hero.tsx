import React, { useState } from "react";
import { motion } from "motion/react";
import { Sparkles, ArrowRight, X } from "lucide-react";

export function Hero() {
  const [showPricing, setShowPricing] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 bg-[#121212]">
      {/* High-Fidelity Background Noise & Grid */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none mix-blend-overlay z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none z-0" />

      {/* Cinematic Glowing Orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0 flex items-center justify-center">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -top-[10%] -left-[10%] w-[40rem] h-[40rem] bg-[#B026FF] rounded-full mix-blend-screen filter blur-[140px] opacity-40"
        />
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute top-[20%] -right-[10%] w-[45rem] h-[45rem] bg-[#00E5FF] rounded-full mix-blend-screen filter blur-[160px] opacity-30"
        />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10 text-center flex flex-col items-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl mb-10 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]"
        >
          <Sparkles className="w-4 h-4 text-[#00E5FF]" />
          <span className="text-xs md:text-sm font-semibold text-gray-300 tracking-wide uppercase">
            Premium Care for Your Gear
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl lg:text-[5.5rem] font-black text-white tracking-tighter leading-[1.05] max-w-5xl"
        >
          Revive the{" "}
          <span className="relative inline-block">
            <span className="absolute -inset-2 bg-gradient-to-r from-[#00E5FF] to-[#B026FF] blur-2xl opacity-40" />
            <span className="relative text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] via-[#5b8cff] to-[#B026FF]">
              Freshness
            </span>
          </span>{" "}
          of Your Journey
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="mt-8 text-lg md:text-xl text-gray-400 max-w-2xl font-light leading-relaxed"
        >
          Expert detailing and deep cleaning for your beloved sneakers, helmets, and motorcycles. Experience the peak of pristine care.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12 flex flex-col sm:flex-row gap-5"
        >
          <a
            href="https://wa.me/628999540040"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative px-9 py-4 rounded-full bg-gradient-to-r from-[#00E5FF] to-[#00b3cc] text-[#121212] font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 shadow-[0_0_30px_rgba(0,229,255,0.4)] hover:shadow-[0_0_50px_rgba(0,229,255,0.6)] flex items-center justify-center gap-3"
          >
            <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative z-10">Schedule Service</span>
            <ArrowRight className="w-5 h-5 relative z-10 group-hover:translate-x-1.5 transition-transform duration-300" />
          </a>
          
          <button
            onClick={() => setShowPricing(true)}
            className="px-9 py-4 rounded-full bg-white/[0.03] border border-white/[0.08] text-white font-medium text-lg hover:bg-white/[0.08] transition-all duration-300 backdrop-blur-xl cursor-pointer hover:border-white/20 shadow-[inset_0_0_20px_rgba(255,255,255,0.02)]"
          >
            View Pricing
          </button>
        </motion.div>
      </div>

      {/* Pricing Modal */}
      {showPricing && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#121212]/90 backdrop-blur-2xl"
          onClick={() => setShowPricing(false)}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative max-w-2xl w-full flex items-center justify-center"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowPricing(false)}
              className="absolute -top-16 right-0 p-3 bg-white/10 hover:bg-white/20 rounded-full text-white transition-colors border border-white/20 backdrop-blur-md cursor-pointer group"
            >
              <X size={24} className="group-hover:rotate-90 transition-transform duration-300" />
            </button>
            <div className="w-full h-auto p-2 rounded-3xl bg-white/[0.02] border border-white/[0.05] backdrop-blur-3xl shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1607083206968-13611e3d76d6?auto=format&fit=crop&q=80&w=1200"
                alt="Pricing List"
                className="w-full h-auto max-h-[80vh] object-cover rounded-2xl"
              />
            </div>
          </motion.div>
        </div>
      )}
    </section>
  );
}
