const ModelMetrics = ({ metrics }) => {
  if (!metrics) return null;

  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-zinc-900/60 p-6">
      <h4 className="mb-4 text-sm font-semibold text-emerald-400">
        Model Metrics
      </h4>

      <ul className="space-y-2 text-sm text-zinc-300">
        <li>Train Accuracy: <span className="text-white">{metrics.train_accuracy}</span></li>
        <li>Validation Accuracy: <span className="text-white">{metrics.val_accuracy}</span></li>
        <li>Train Loss: <span className="text-white">{metrics.train_loss}</span></li>
        <li>Validation Loss: <span className="text-white">{metrics.val_loss}</span></li>
      </ul>
    </div>
  );
};

export default ModelMetrics;
