import React from "react";
import { motion } from "motion/react";
import { Maximize2, Sparkles } from "lucide-react";

const BENTO_ITEMS = [
  {
    title: "Snow wash Motorcycle",
    description: "Deep wash and engine detailing to restore showroom shine.",
    image: "https://images.unsplash.com/photo-1571568495363-99048b36777b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwY2xlYW58ZW58MXx8fHwxNzczMjEyODI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    colSpan: "md:col-span-2",
    rowSpan: "md:row-span-2",
    badge: "Most Popular",
  },
  {
    title: "Sneaker Sole & Care",
    description: "Complete restoration: midsole unyellowing and deep material clean.",
    image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1080",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    title: "Classic Sneaker Detail",
    description: "Gentle wash for canvas and delicate materials.",
    image: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?auto=format&fit=crop&q=80&w=1080",
    colSpan: "md:col-span-1",
    rowSpan: "md:row-span-1",
  },
  {
    title: "Sport Sneaker Refresh",
    description: "Odor removal and deep knit cleaning for active footwear.",
    image: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&q=80&w=1080",
    colSpan: "md:col-span-3",
    rowSpan: "md:row-span-1",
  }
];

export function BentoGrid() {
  return (
    <section id="gallery" className="py-32 relative z-10 bg-[#121212]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-16 md:mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-6xl font-black text-white mb-6 tracking-tight leading-tight"
            >
              Transformations <br /> <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#B026FF]">That Speak.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 text-lg md:text-xl font-light leading-relaxed"
            >
              Our high-fidelity before and after results showcase the dedication, precision, and premium chemicals we bring to every item.
            </motion.p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 auto-rows-[320px] gap-6">
          {BENTO_ITEMS.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`relative group rounded-[2rem] overflow-hidden bg-white/[0.02] border border-white/[0.05] backdrop-blur-2xl shadow-[inset_0_0_20px_rgba(255,255,255,0.01)] cursor-pointer ${item.colSpan} ${item.rowSpan}`}
            >
              {item.badge && (
                <div className="absolute top-6 left-6 z-20 px-4 py-1.5 rounded-full bg-[#121212]/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-[#00E5FF] flex items-center gap-2">
                  <Sparkles size={12} />
                  {item.badge}
                </div>
              )}
              
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-70 group-hover:opacity-90"
              />
              
              {/* Premium Glassmorphism Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/50 to-transparent opacity-90 transition-opacity duration-500 group-hover:opacity-100" />
              
              <div className="absolute inset-0 p-8 md:p-10 flex flex-col justify-end z-10">
                <div className="transform translate-y-6 group-hover:translate-y-0 transition-transform duration-500 ease-out">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-3 tracking-tight">{item.title}</h3>
                  <p className="text-gray-300 text-base opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-md font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
                
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 hover:bg-[#00E5FF] hover:text-[#121212] hover:scale-110 border border-white/20 text-white shadow-2xl">
                  <Maximize2 size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
