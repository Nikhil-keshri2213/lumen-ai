import React, { useState, useEffect, useRef } from 'react';
import * as THREE from 'three';
import RINGS from 'vanta/dist/vanta.rings.min';

const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(null);
  const vantaRef = useRef(null);
  const [hoveredBtn, setHoveredBtn] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        RINGS({
          el: vantaRef.current,
          THREE: THREE,
          mouseControls: false,
          touchControls: false,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          scaleMobile: 0.5,
          // CMYK VANTA COLORS (Using hex integers)
          backgroundColor: 0x000000, 
          color8: 0x00FFFF,      // Cyan
          ringColor: 0xFF00FF    // Magenta
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);


  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -80; // header height
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    window.history.replaceState(null, "", window.location.pathname);
  };
  return (
    <section 
      ref={vantaRef} 
      className="relative flex min-h-screen items-center justify-start overflow-hidden bg-black px-8 md:px-20 font-sans"
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0" />
      
      {/* Background Glows - Switched to Cyan and Magenta */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-[#00FFFF]/10 blur-[120px]" />
        <div className="absolute bottom-1/4 left-1/4 h-64 w-64 rounded-full bg-[#FF00FF]/5 blur-[100px]" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-4xl">
        <h1 className="text-5xl md:text-7xl font-black tracking-tight text-white leading-tight">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00]">LUMEN</span>
          <span 
            className="ml-3 rounded-2xl px-4 py-4 inline-block text-white text-4xl md:text-5xl align-top"
            style={{ background: "linear-gradient(to right, #00FFFF, #FF00FF, #FFFF00)" }}>
            Ai
          </span>
        </h1>

        <p className="mt-8 text-xl md:text-2xl text-zinc-300 max-w-2xl">
          Reveal the unseen truth in digital images using
          <span className="font-bold text-white"> AI-Powered Forensics</span>
        </p>

        <p className="mt-4 text-lg text-zinc-400">
          Shedding light on digital truth.
        </p>

       
        <div className="mt-12 flex flex-wrap justify-start gap-5">
          <button
            onClick={() => handleScroll("scan")}
            onMouseEnter={() => setHoveredBtn('scan')}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{ 
              backgroundColor: hoveredBtn === 'scan' ? '#00FFFF' : '#FFFFFF',
              color: '#000000',
              transition: "all 0.2s ease-in-out"
            }}
            className="rounded-xl px-10 py-4 font-black uppercase tracking-tighter hover:scale-105"
          >
            Scan Image Now
          </button>

          <button
            onClick={() => handleScroll("features")}
            onMouseEnter={() => setHoveredBtn('features')}
            onMouseLeave={() => setHoveredBtn(null)}
            style={{ 
              borderColor: '#FF00FF',
              backgroundColor: hoveredBtn === 'features' ? '#FF00FF' : 'transparent',
              color: hoveredBtn === 'features' ? '#000000' : '#FF00FF',
              transition: "all 0.2s ease-in-out"
            }}
            className="rounded-xl border-2 px-10 py-4 font-bold uppercase tracking-widest backdrop-blur-md hover:scale-105"
          >
            Explore Technology
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[2px] flex">
        <div style={{ backgroundColor: "#00FFFF" }} className="flex-1"></div>
        <div style={{ backgroundColor: "#FF00FF" }} className="flex-1"></div>
        <div style={{ backgroundColor: "#FFFF00" }} className="flex-1"></div>
        <div style={{ backgroundColor: "#FFFFFF" }} className="flex-1"></div>
      </div>
    </section>
  );
};

export default Hero;