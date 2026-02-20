import React from "react";

const FEATURES = [
  {
    icon: "ri-brain-line",
    title: "AI-Powered Detection",
    desc: "Advanced deep learning models analyze images at pixel level to detect even highly sophisticated forgeries.",
    color: "#00FFFF", // Cyan
  },
  {
    icon: "ri-shield-check-line",
    title: "High Accuracy",
    desc: "Our system achieves industry-grade accuracy through training on diverse and real-world datasets.",
    color: "#FF00FF", // Magenta
  },
  {
    icon: "ri-flashlight-line",
    title: "ELA Visualization",
    desc: "Error Level Analysis highlights compression inconsistencies to visually expose manipulation regions.",
    color: "#FFFF00", // Yellow
  },
  {
    icon: "ri-dashboard-line",
    title: "Detailed Analytics",
    desc: "Get confidence scores, pixel distribution graphs, and model performance metrics in one report.",
    color: "#00FFFF", // Cyan
  },
  {
    icon: "ri-time-line",
    title: "Real-Time Processing",
    desc: "Fast AI inference delivers results in seconds, ideal for quick verification workflows.",
    color: "#FF00FF", // Magenta
  },
  {
    icon: "ri-file-list-3-line",
    title: "Multiple Formats",
    desc: "Supports JPG, PNG, and TIFF image formats for broad compatibility.",
    color: "#FFFF00", // Yellow
  },
];

const Features = () => {
  return (
    <section className="relative py-32 px-6 bg-black overflow-hidden" id="features-p">
      {/* Dynamic CMY Background Glows */}
      <div className="absolute top-0 right-0 h-[500px] w-[500px] bg-[#00FFFF]/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 h-[500px] w-[500px] bg-[#FF00FF]/5 blur-[120px] rounded-full translate-y-1/2 -translate-x-1/2" />
      
      <div className="relative z-10 mx-auto max-w-7xl" id="features">
        <div className="text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">
            Capabilities
          </h2>
          <h3 className="mt-4 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Advanced Image <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00]">Forensics</span>
          </h3>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Lumen AI utilizes cutting-edge neural networks to ensure every pixel tells the truth.
          </p>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((item) => (
            <div
              key={item.title}
              style={{ '--hover-color': item.color }}
              className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-8 transition-all duration-300 hover:-translate-y-2 hover:bg-zinc-900/80"
            >
              {/* Custom border color on hover using inline style for dynamic color */}
              <div 
                className="absolute inset-0 border-2 border-transparent transition-colors duration-300 group-hover:border-[var(--hover-color)] opacity-20 rounded-2xl" 
                style={{ borderColor: item.color }}
              />

              {/* Card Spotlight Effect */}
              <div 
                className="absolute -inset-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: `radial-gradient(circle at center, ${item.color}15 0%, transparent 70%)` }}
              />
              
              <div className="relative z-10">
                <div 
                  style={{ backgroundColor: `${item.color}15`, color: item.color, border: `1px solid ${item.color}33` }}
                  className="inline-flex h-12 w-12 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-110"
                >
                  <i className={`${item.icon} text-2xl`} />
                </div>
                
                <h3 className="mt-6 text-xl font-bold text-white transition-colors group-hover:text-white">
                  {item.title}
                </h3>
                
                <p className="mt-3 text-zinc-400 leading-relaxed transition-colors group-hover:text-zinc-200">
                  {item.desc}
                </p>
              </div>

              {/* Decorative Corner Light */}
              <div 
                className="absolute -bottom-8 -right-8 h-24 w-24 blur-2xl transition-opacity opacity-0 group-hover:opacity-40" 
                style={{ backgroundColor: item.color }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;