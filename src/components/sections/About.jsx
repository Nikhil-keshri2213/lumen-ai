const About = () => {
  const stats = [
    { value: "90%+", label: "Accuracy", color: "text-[#00FFFF]", border: "border-[#00FFFF]" },   // Cyan
    { value: "10K+", label: "Images Analyzed", color: "text-[#FF00FF]", border: "border-[#FF00FF]" }, // Magenta
    { value: "24/7", label: "Availability", color: "text-[#FFFF00]", border: "border-[#FFFF00]" },    // Yellow
    { value: "100%", label: "Secure", color: "text-white", border: "border-white" },             // White
  ];

  return (
    <section id="about" className="py-24 px-6 bg-black">
      <div className="mx-auto max-w-7xl grid gap-14 lg:grid-cols-2">
        
        {/* Text */}
        <div>
          <h2 className="text-3xl font-bold text-white tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00]">LUMEN</span> Ai
          </h2>

          <p className="mt-6 text-white text-lg">
            <span className="text-transparent font-bold bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00]">LUMEN</span> Ai is
            built to combat digital misinformation by providing reliable image
            authenticity verification.
          </p>

          <p className="mt-4 text-zinc-400 leading-relaxed">
            Our system combines Error Level Analysis with deep neural networks to
            deliver accurate, explainable, and fast image forensics.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className={`rounded-2xl border ${stat.border} bg-zinc-900/40 p-6 text-center backdrop-blur-sm transition-transform hover:scale-105`}
            >
              <p className={`text-3xl font-bold ${stat.color}`}>
                {stat.value}
              </p>
              <p className="mt-1 text-sm font-medium text-zinc-500 uppercase tracking-wider">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;