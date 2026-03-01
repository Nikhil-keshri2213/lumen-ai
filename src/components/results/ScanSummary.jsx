const ScanSummary = ({
  result,
  accuracy,
  confidence,
  imageData,
  fileInfo,
  modelInfo,
}) => {
  if (!result || !imageData || !fileInfo || !modelInfo) return null;

  const isTampered =
    result?.toLowerCase() === "forged";

  const details = {
    ...imageData,
    ...fileInfo,
  };

  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-zinc-900/60 p-8 space-y-8">

      {/* ================= RESULT ================= */}
      <div>
        {/* <h4 className="mb-4 text-sm font-semibold text-emerald-400">
          Scan Result
        </h4> */}
        <span className="inline-block underline mb-3 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00]">
          Scan Result
        </span>

        <p
          className={`text-2xl font-bold ${
            isTampered ? "text-red-500" : "text-green-500"
          }`}
        >
          {result}
        </p>

        <div className="mt-4 space-y-1 text-sm text-zinc-300">
          <p>
            Model Accuracy:{" "}
            <span className="text-white">
              {typeof accuracy === "string" ? `${accuracy}%` : accuracy}
            </span>
          </p>

          <p>
            Prediction Confidence:{" "}
            <span className="text-white">
              {confidence?.toFixed(2)}%
            </span>
          </p>
        </div>
      </div>

      {/* ================= IMAGE DETAILS ================= */}
      <div>
        {/* <h4 className="mb-4 text-sm font-semibold text-emerald-400">
          Image Details
        </h4> */}
        <span className="inline-block underline mb-4 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00]">
          Image Details
        </span>

        <ul className="space-y-2 text-sm text-zinc-300">
          {Object.entries(details).map(([key, value]) => (
            <li key={key} className="flex justify-between">
              <span className="capitalize text-zinc-400">
                {key.replace(/_/g, " ")}
              </span>

              <span className="text-white">
                {key === "size_bytes"
                  ? `${(value / 1024).toFixed(2)} KB`
                  : value}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* ================= MODEL INFO ================= */}
      <div>
        {/* <h4 className="mb-4 text-sm font-semibold text-emerald-400">
          Model Information
        </h4> */}
        <span className="inline-block underline mb-4 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00]">
          Model Information
        </span>

        <ul className="space-y-2 text-sm text-zinc-300">
          <li className="flex justify-between">
            <span className="text-zinc-400">Model Name</span>
            <span className="text-white">{modelInfo.model_name}</span>
          </li>

          <li className="flex justify-between">
            <span className="text-zinc-400">Input Shape</span>
            <span className="text-white">
              {JSON.stringify(modelInfo.input_shape)}
            </span>
          </li>

          <li className="flex justify-between">
            <span className="text-zinc-400">Output Classes</span>
            <span className="text-white">
              {modelInfo.output_classes}
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ScanSummary;