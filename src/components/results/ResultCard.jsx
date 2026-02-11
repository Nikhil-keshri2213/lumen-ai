const ResultCard = ({ result, accuracy, confidence }) => {
  const isTampered = result?.toLowerCase() === "tampered";

  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-zinc-900/60 p-6">
      <h4 className="mb-4 text-sm font-semibold text-emerald-400">
        Scan Result
      </h4>

      <p
        className={`text-2xl font-bold ${
          isTampered ? "text-red-500" : "text-emerald-400"
        }`}
      >
        {result}
      </p>

      <div className="mt-4 space-y-1 text-sm text-zinc-300">
        <p>Accuracy: <span className="text-white">{accuracy}%</span></p>
        <p>Confidence: <span className="text-white">{confidence}</span></p>
      </div>
    </div>
  );
};

export default ResultCard;
