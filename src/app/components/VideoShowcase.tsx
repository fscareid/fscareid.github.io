import React from "react";
import { motion } from "motion/react";
import { Play } from "lucide-react";

const VIDEOS = [
  {
    id: 1,
    title: "The Ultimate Shoe Deep Clean",
    duration: "2:45",
    thumbnail: "https://images.unsplash.com/photo-1734956093501-811018732398?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXJ0eSUyMHNuZWFrZXJzfGVufDF8fHx8MTc3MzIxMjgyNnww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 2,
    title: "Motorcycle Wash & Wax Process",
    duration: "4:20",
    thumbnail: "https://images.unsplash.com/photo-1571568495363-99048b36777b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwY2xlYW58ZW58MXx8fHwxNzczMjEyODI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 3,
    title: "Helmet Restoration Magic",
    duration: "1:30",
    thumbnail: "https://images.unsplash.com/photo-1611004061856-ccc3cbe944b2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3RvcmN5Y2xlJTIwaGVsbWV0fGVufDF8fHx8MTc3MzE0NDMwOHww&ixlib=rb-4.1.0&q=80&w=1080",
  },
  {
    id: 4,
    title: "Premium Leather Treatment",
    duration: "3:15",
    thumbnail: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&q=80&w=1080",
  }
];

export function VideoShowcase() {
  return (
    <section id="process" className="py-32 relative overflow-hidden bg-[#121212] border-y border-white/[0.05]">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-[#00E5FF]/5 blur-[200px] pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 mb-16 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white mb-4 tracking-tight"
            >
              Behind the <span className="text-[#00E5FF]">Process.</span>
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-gray-400 max-w-xl text-lg font-light"
            >
              Watch our meticulous cinematic processes. Transparency and care in every brushstroke.
            </motion.p>
          </div>
          <motion.button 
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-sm font-bold tracking-widest uppercase text-[#00E5FF] hover:text-white transition-colors hidden md:flex items-center gap-2 group"
          >
            View All Series
            <span className="w-8 h-[1px] bg-[#00E5FF] group-hover:bg-white group-hover:w-12 transition-all duration-300" />
          </motion.button>
        </div>
      </div>

      {/* Horizontal Carousel */}
      <div className="w-full overflow-x-auto pb-12 snap-x snap-mandatory hide-scrollbar pl-6 md:pl-12 pr-6 relative z-10">
        <div className="flex gap-6 md:gap-8 w-max">
          {VIDEOS.map((video, idx) => (
            <motion.div
              key={video.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="relative w-[320px] md:w-[500px] aspect-[16/9] rounded-[2rem] overflow-hidden snap-center group cursor-pointer border border-white/[0.05] flex-shrink-0 shadow-2xl bg-[#121212]"
            >
              <img
                src={video.thumbnail}
                alt={video.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105 opacity-60 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212] via-[#121212]/30 to-transparent transition-opacity duration-500" />
              
              {/* Cinematic Play Button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-20 h-20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-500 ease-out">
                  <div className="absolute inset-0 bg-[#00E5FF]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative w-16 h-16 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 flex items-center justify-center text-white group-hover:bg-[#00E5FF] group-hover:border-[#00E5FF] group-hover:text-[#121212] transition-all duration-300 shadow-[0_8px_32px_rgba(0,0,0,0.4)]">
                    <Play fill="currentColor" size={24} className="ml-1.5" />
                  </div>
                </div>
              </div>

              {/* Title & Duration */}
              <div className="absolute bottom-0 left-0 right-0 p-8 md:p-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#121212]/80 backdrop-blur-md border border-white/10 text-[#00E5FF] text-xs font-bold tracking-wide">
                    {video.duration}
                  </span>
                </div>
                <h3 className="text-white font-bold text-xl md:text-2xl drop-shadow-lg tracking-tight">{video.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
