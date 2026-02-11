import React from "react";

const STEPS = [
  {
    step: "01",
    title: "Upload Your Image",
    desc: "Choose or drag & drop your image. Supported formats include JPG, PNG, and TIFF.",
    color: "#00FFFF", // Cyan
  },
  {
    step: "02",
    title: "Preview & Confirm",
    desc: "Verify the uploaded image before initiating analysis to ensure the best results.",
    color: "#FF00FF", // Magenta
  },
  {
    step: "03",
    title: "Scan the Image",
    desc: "Click scan to run LUMEN AI’s deep learning models and forensic checks in real time.",
    color: "#FFFF00", // Yellow
  },
  {
    step: "04",
    title: "Review Results",
    desc: "View authenticity verdict, ELA visualization, and detailed confidence scores.",
    color: "#FFFFFF", // White
  },
];

const HowToUse = () => {
  const handleStartScan = () => {
    const scanSection = document.getElementById("scan");
    if (scanSection) {
      scanSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-32 px-6 bg-black">
      <div className="relative z-10 mx-auto max-w-4xl">
        <div className="mb-24 text-center" id="how-to-use">
          <h2 className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">
            Process
          </h2>
          <h3 className="mt-4 text-4xl font-extrabold text-white">
            How It <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00]">Works</span>
          </h3>
        </div>

        <div className="relative">
          {/* THE VERTICAL LINE - Updated with distinct stops for all 4 colors */}
          <div
            className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] -translate-x-1/2 z-0 bg-gradient-to-b from-[#00FFFF] via-[#FF00FF] via-[#FFFF00] to-white"
            style={{
              background:
                "linear-gradient(to bottom, #00FFFF 0%, #FF00FF 33%, #FFFF00 66%, #FFFFFF 100%)",
            }}
          />

          <div className="space-y-24">
            {STEPS.map((item, index) => (
              <div
                key={item.step}
                className={`relative flex items-center justify-between md:flex-row ${
                  index % 2 !== 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content */}
                <div className="flex-1 ml-16 md:ml-0 md:w-1/2">
                  <div
                    className={`${index % 2 !== 0 ? "md:text-left md:pl-16" : "md:text-right md:pr-16"}`}
                  >
                    <h3 className="text-2xl font-bold text-white mb-3 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-zinc-400 leading-relaxed text-base">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Step Circle */}
                <div
                  style={{
                    borderColor: item.color,
                    boxShadow: `0 0 15px ${item.color}66`,
                  }}
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 flex h-12 w-12 z-10 items-center justify-center rounded-full bg-black border-2 transition-all duration-500"
                >
                  <span
                    style={{ color: item.color }}
                    className="font-bold text-sm transition-colors duration-500"
                  >
                    {item.step}
                  </span>
                  <div
                    style={{ borderColor: item.color }}
                    className="absolute inset-0 rounded-full border animate-ping opacity-20"
                  />
                </div>

                <div className="hidden md:block md:flex-1" />
              </div>
            ))}
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-24 text-center">
          <button
            onClick={handleStartScan}
            className="group relative inline-flex items-center gap-3 overflow-hidden rounded-full bg-white px-10 py-4 text-black font-bold transition-all hover:text-white border-2 border-white active:scale-95 hover:scale-110"
          >
            {/* Instant Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <span className="relative z-10">Start Your First Scan</span>
            <i className="ri-arrow-right-line relative z-10 text-xl transition-transform group-hover:translate-x-1"></i>
          </button>
        </div>
      </div>
    </section>
  );
};

export default HowToUse;
