import React from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BentoGrid } from "./components/BentoGrid";
import { VideoShowcase } from "./components/VideoShowcase";
import { FloatingCS } from "./components/FloatingCS";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-[#121212] font-sans selection:bg-cyan-500/30 selection:text-cyan-200">
      <Navbar />
      
      <main>
        <Hero />
        <BentoGrid />
        <VideoShowcase />
      </main>

      <Footer />
      <FloatingCS />

      <style>{`
        /* Global Styles applied inside standard React component wrapper to avoid touching index.css config */
        body {
          background-color: #121212;
          font-family: 'Space Grotesk', sans-serif;
        }
        
        /* Hide scrollbar for the horizontal video section */
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
