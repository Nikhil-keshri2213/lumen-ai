import { useEffect, useState } from "react";
import Button from "../common/Button";
import ProgressBar from "../common/ProgressBar";

const ScanButton = ({ onScan, file, loading }) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (!loading) {
      setProgress(0);
      return;
    }

    const timer = setInterval(() => {
      setProgress((p) => (p < 90 ? p + 10 : p));
    }, 400);

    return () => clearInterval(timer);
  }, [loading]);

  return (
    <div className="mt-4 w-full max-w-xs mx-auto space-y-4">

      {/* 🔹 Show Button Only When NOT Loading */}
      {!loading && (
        <Button
          size="lg"
          variant="primary"
          disabled={!file}
          onClick={() => onScan(file)}
          className="w-full shadow-[0_0_20px_rgba(255,255,255,0.05)] hover:text-white"
        >
          Scan Image
        </Button>
      )}

      {/* 🔹 Show Progress Only When Loading */}
      {loading && (
        <div className="animate-in fade-in slide-in-from-top-2">
          <div className="flex justify-between mb-2">
            <span className="text-[10px] text-white font-semibold">
              Analyzing Pixels...
            </span>
            <span className="text-[10px] text-white font-mono">
              {progress}%
            </span>
          </div>

          <ProgressBar value={progress} />
        </div>
      )}

    </div>
  );
};

export default ScanButton;