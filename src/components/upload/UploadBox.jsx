import { useEffect, useRef, useState } from "react";
import ImagePreview from "./ImagePreview";
import ScanButton from "./ScanButton";
import { checkHealth } from "../../api/ImageApi";

const UploadBox = ({ onScan, loading }) => {
  // FIX: Moved state and effect inside the component
  const [isHealthy, setIsHealthy] = useState(null);
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    const fetchHealth = async () => {
      try {
        const res = await checkHealth();
        setIsHealthy(res.status === "healthy");
      } catch (err) {
        setIsHealthy(false);
      }
    };

    fetchHealth();
  }, []);

  const handleSelect = (e) => {
    const selected = e.target.files[0];
    if (!selected) return;
    setFile(selected);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    if (file) return;
    setIsDragging(false);
    const dropped = e.dataTransfer.files[0];
    if (dropped) setFile(dropped);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    if (file) return;
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  return (
    <section
      id="scan-p"
      className="relative h-screen px-6 bg-black flex flex-col items-center justify-center overflow-hidden"
    >
      {/* 1. CYBER GRID BACKGROUND */}
      <div
        className="absolute inset-0 z-0 opacity-20"
        style={{
          backgroundImage: `linear-gradient(#ffffff05 1px, transparent 1px), linear-gradient(90deg, #ffffff05 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
        id="scan"
      />

      {/* 2. ENHANCED CMY GLOWS */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#00FFFF]/10 blur-[120px] rounded-full pointer-events-none animate-pulse" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[400px] h-[400px] bg-[#FF00FF]/15 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute top-[-10%] left-[-5%] w-[400px] h-[400px] bg-[#FFFF00]/15 blur-[100px] rounded-full pointer-events-none" />

      <div className="relative z-10 w-full max-w-2xl" id="scan-2">
        {/* Header Section */}
        <div className="mb-12 text-center">
          <h2 className="text-sm font-bold tracking-[0.2em] text-zinc-500 uppercase">
            Magic
          </h2>
          <h3 className="mt-4 text-4xl md:text-5xl font-extrabold text-white tracking-tight">
            Analysis{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00]">
              Portal
            </span>
          </h3>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-zinc-400">
            Forensic Image Verification
          </p>
        </div>

        {/* Upload Area */}
        {!file && (
          <div
            onClick={() => inputRef.current.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`relative group cursor-pointer rounded-[2.5rem] border-2 border-dashed transition-all duration-700 p-8 text-center overflow-hidden
              ${isDragging ? "scale-[1.03] border-white shadow-[0_0_50px_rgba(255,255,255,0.1)]" : "border-zinc-800 hover:border-zinc-600"}
            `}
            style={{
              background: isDragging
                ? "radial-gradient(circle at center, rgba(255,255,255,0.05) 0%, transparent 70%)"
                : "rgba(10, 10, 10, 0.4)",
            }}
          >
            {/* Animated Scanning Line */}
            {isDragging && (
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-[#00FFFF]/10 to-transparent h-1/2 w-full animate-scan-move" />
            )}

            {/* Enhanced Corner Brackets */}
            <div className="absolute top-8 left-8 w-10 h-10 border-t-2 border-l-2 border-[#00FFFF]/30 group-hover:border-[#00FFFF] transition-all" />
            <div className="absolute top-8 right-8 w-10 h-10 border-t-2 border-r-2 border-[#FF00FF]/30 group-hover:border-[#FF00FF] transition-all" />
            <div className="absolute bottom-8 left-8 w-10 h-10 border-b-2 border-l-2 border-[#FFFF00]/30 group-hover:border-[#FFFF00] transition-all" />
            <div className="absolute bottom-8 right-8 w-10 h-10 border-b-2 border-r-2 border-white/20 group-hover:border-white transition-all" />

            <div className="relative">
              <div
                className={`mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl relative transition-all duration-500 
                  ${isDragging ? "rotate-12 scale-110" : "bg-zinc-900 group-hover:rotate-6"}
                `}
              >
                <div
                  className="absolute -inset-[2px] rounded-[1.6rem] transition-opacity duration-500"
                  style={{
                    background: isDragging
                      ? "white"
                      : "linear-gradient(135deg, #00FFFF, #FF00FF, #FFFF00, #FFFFFF)",
                    padding: "2px",
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMask:
                      "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                  }}
                />

                <i
                  className={`${isDragging ? "ri-download-2-line text-white" : "ri-upload-cloud-2-line text-[#FFFFFF]"} text-3xl`}
                />
              </div>

              <h4 className="text-2xl font-black text-white uppercase tracking-tight">
                {isDragging ? "Release Image" : "Upload Image"}
              </h4>
              <p className="mt-3 text-zinc-500 text-sm font-medium">
                Drag forensic evidence or{" "}
                {/* <span className="text-[#00FFFF] font-bold group-hover:underline cursor-pointer">
                  source filesystem
                </span> */}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00]">
                  source filesystem
                </span>
              </p>

              <div className="mt-10 flex items-center justify-center gap-4">
                {["RAW", "PNG", "JPEG"].map((ext) => (
                  <span
                    key={ext}
                    className="text-[10px] font-black tracking-widest border border-zinc-800 px-3 py-1 rounded-full text-zinc-600 group-hover:text-[#FFFF00] group-hover:border-[#FFFF00]/30 transition-all"
                  >
                    {ext}
                  </span>
                ))}
              </div>
            </div>
            <input
              ref={inputRef}
              type="file"
              accept="image/jpeg,image/png,image/tiff"
              className="hidden"
              onChange={handleSelect}
            />
          </div>
        )}

        {/* Enhanced Preview Container */}
        {file && (
          <div className="w-full flex flex-col items-center animate-in fade-in zoom-in-95 slide-in-from-bottom-10 duration-700">
            
            <div className="p-[2px] rounded-2xl bg-gradient-to-tr from-[#00FFFF] via-[#FF00FF] to-[#FFFF00]">
              <div className="rounded-xl bg-black overflow-hidden p-2">
                <ImagePreview
                  file={file}
                  className="max-h-[250px] w-auto rounded-lg transition-transform duration-300"
                />
              </div>
            </div>

            <div className="mt-4 flex flex-col items-center">
              <div className="group flex items-center gap-4 px-6 py-3 rounded-2xl border border-white/5 bg-zinc-900/40 backdrop-blur-sm mb-2 hover:border-white/20 transition-all">
                <div className="relative flex h-3 w-3">
                  {isHealthy === true && (
                    <>
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                    </>
                  )}

                  {isHealthy === false && (
                    <>
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </>
                  )}
                </div>

                <span className="text-xs text-white font-mono tracking-wider">
                  {isHealthy === true && "Online"}
                  {isHealthy === false && "Offline"}

                  <span className="text-white mx-2">|</span>
                  <span className="font-semibold">Forensic Check</span>
                </span>
              </div>

              <button
                onClick={() => setFile(null)}
                className="group text-base text-zinc-500 hover:text-red-500 transition-all flex items-center gap-1">
                <i className="ri-close-circle-line text-sm group-hover:text-red-500"></i>
                Clear Selection
              </button>
            </div>

          </div>
        )}

        {isHealthy === false && (
          <div className="mt-2 text-center">
            <p className="text-red-500 text-sm font-semibold">
              Server Unreachable. Please Try Again Later.
            </p>
          </div>
        )}

        {file && isHealthy === true && (
          <div className="mt-1">
            <div className="flex justify-center">
              <ScanButton file={file} loading={loading} onScan={onScan} />
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes scan-move {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
        .animate-scan-move {
          animation: scan-move 2s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default UploadBox;
