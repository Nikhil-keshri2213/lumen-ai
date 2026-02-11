const Loader = ({ label = "Processing forensic data…" }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-8 py-12">
      <div className="relative flex h-20 w-20 items-center justify-center">
        
        {/* 1. OUTER RING (Cyan - Slowest) */}
        <div className="absolute h-full w-full animate-[spin_3s_linear_infinite] rounded-full border-b-2 border-l-2 border-[#00FFFF] opacity-40" />
        
        {/* 2. MIDDLE RING (Magenta - Medium) */}
        <div className="absolute h-[70%] w-[70%] animate-[spin_2s_linear_infinite_reverse] rounded-full border-t-2 border-r-2 border-[#FF00FF] opacity-60" />
        
        {/* 3. INNER RING (Yellow - Fastest) */}
        <div className="absolute h-[40%] w-[40%] animate-[spin_1s_linear_infinite] rounded-full border-b-2 border-[#FFFF00]" />

        {/* 4. CORE LIGHT (White) */}
        <div className="h-1 w-1 rounded-full bg-white shadow-[0_0_15px_2px_white] animate-pulse" />
      </div>

      {/* TEXT SECTION */}
      <div className="flex flex-col items-center gap-2">
        <p className="text-[10px] font-black uppercase tracking-[0.4em] text-white">
          {label}
        </p>
        <div className="flex gap-1">
            <span className="h-1 w-1 bg-[#00FFFF] rounded-full animate-bounce [animation-delay:-0.3s]" />
            <span className="h-1 w-1 bg-[#FF00FF] rounded-full animate-bounce [animation-delay:-0.15s]" />
            <span className="h-1 w-1 bg-[#FFFF00] rounded-full animate-bounce" />
        </div>
      </div>
    </div>
  );
};

export default Loader;