const ProgressBar = ({ value = 0 }) => {
  return (
    <div className="relative w-full overflow-hidden rounded-full bg-zinc-900 h-2.5 border border-white/5">
      {/* 1. THE GRADIENT BAR */}
      <div
        className="relative h-full rounded-full transition-all duration-500 ease-out"
        style={{ 
          width: `${value}%`,
          background: 'linear-gradient(90deg, #00FFFF 0%, #FF00FF 50%, #FFFF00 100%)',
          boxShadow: '0 0 15px rgba(0, 255, 255, 0.3)'
        }}
      >
        {/* 2. THE "LEADING EDGE" LIGHT (White tip) */}
        <div className="absolute right-0 top-0 h-full w-2 bg-white blur-[2px] opacity-80" />
        
        {/* 3. SHIMMER EFFECT OVER THE COLORS */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent w-full h-full animate-shimmer" 
             style={{ backgroundSize: '200% 100%' }} />
      </div>

      {/* TAILWIND SHIMMER ANIMATION */}
      <style>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite linear;
        }
      `}</style>
    </div>
  );
};

export default ProgressBar;