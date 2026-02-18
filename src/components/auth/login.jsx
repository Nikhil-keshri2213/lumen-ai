import React from "react";

const LoginPage = () => {
  return (
    <div className="relative min-h-screen w-full bg-[#0a0a0a] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-6 py-10 lg:px-20 overflow-hidden font-sans">

      {/* Background Blobs */}
      <div className="absolute -bottom-32 -left-32 w-[400px] lg:w-[600px] h-[400px] lg:h-[500px] bg-[#FF00FF] opacity-20 blur-[120px] rotate-12"></div>
      <div className="absolute -top-32 -right-32 w-[400px] lg:w-[600px] h-[400px] lg:h-[500px] bg-[#FFFF00] opacity-20 blur-[120px] rotate-12"></div>
      <div className="absolute -bottom-32 -left-32 w-[400px] lg:w-[600px] h-[400px] lg:h-[500px] bg-[#00FFFF] opacity-20 blur-[120px] rotate-12"></div>
      <div className="absolute -bottom-32 -left-32 w-[400px] lg:w-[600px] h-[400px] lg:h-[500px] bg-[#FFFFFF] opacity-20 blur-[120px] rotate-12"></div>

      {/* Logo Section */}
      <div className="z-10 w-full lg:w-1/2 flex flex-col items-center lg:items-start text-center lg:text-left mb-14 lg:mb-0">
        <div className="flex items-center justify-center lg:justify-start gap-3 flex-wrap">
          
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black tracking-tighter">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00]">
              LUMEN
            </span>
          </h1>

          <div
            className="rounded-2xl px-4 py-3 text-white text-2xl sm:text-4xl lg:text-5xl font-black"
            style={{
              background: "linear-gradient(to right, #00FFFF, #FF00FF, #FFFF00)",
            }}>
            AI
          </div>
        </div>

        <p className="text-gray-500 font-medium tracking-[0.25em] uppercase mt-6 text-xs sm:text-sm">
          Image Forgery Detection
        </p>
      </div>

      {/* Login Card */}
      <div className="z-10 w-full max-w-md">
        <div className="relative w-full bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-10 shadow-2xl">

          {/* Glow Overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00FFFF]/5 to-[#FF00FF]/5 rounded-3xl pointer-events-none"></div>

          {/* Login Badge */}
          <div className="bg-white/10 border border-white/20 px-6 py-2 rounded-full mb-2 text-center">
            <span className="text-white text-lg sm:text-xl font-bold tracking-wide">
              Welcome Back!
            </span>
          </div>

          {/* Welcome Message */}
          <div className="px-4 py-2 rounded-2xl text-center mb-6">
            <p className="text-white text-md font-light">
              Please Login to Experience world of AI
            </p>
          </div>

          {/* Input Fields */}
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Username or Email"
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:border-[#00FFFF] focus:ring-1 focus:ring-[#00FFFF]/50 transition-all"
            />

            <input
              type="password"
              placeholder="Password"
              className="w-full bg-white/5 border border-white/10 rounded-full py-3 px-6 text-white placeholder-gray-500 text-sm sm:text-base focus:outline-none focus:border-[#FF00FF] focus:ring-1 focus:ring-[#FF00FF]/50 transition-all"
            />
          </div>

          {/* Login Button */}
          <div className="w-full mb-6">
            <button
              className="group relative w-full overflow-hidden rounded-full 
              bg-white py-3 sm:py-4 text-black font-bold text-xl sm:text-xl 
              transition-all duration-300 active:scale-95 hover:text-white">

              <span className="absolute inset-0 bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00] 
              opacity-0 group-hover:opacity-80 transition-opacity duration-300"></span>

              <span className="relative z-10">
                Login
              </span>
            </button>
          </div>

          {/* Social Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            {["Google", "Github"].map((provider) => (
              <button
                key={provider}
                className="w-full sm:flex-1 bg-white/5 border border-white/10 
                text-white py-3 rounded-full text-xs font-bold uppercase 
                tracking-wider transition-all duration-300 
                hover:bg-white/10 active:scale-95"
              >
                {provider}
              </button>
            ))}
          </div>

          {/* Register */}
          <p className="text-sm text-gray-400 text-center">
            Don’t have an account?{" "}
            <span className="font-semibold text-white cursor-pointer hover:text-[#00FFFF] transition-colors underline underline-offset-4">
              Register
            </span>
          </p>

        </div>
      </div>
    </div>
  );
};

export default LoginPage;
