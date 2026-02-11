const ImageDetails = ({ details }) => {
  if (!details) return null;

  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-zinc-900/60 p-6">
      <h4 className="mb-4 text-sm font-semibold text-emerald-400">
        Image Details
      </h4>

      <ul className="space-y-2 text-sm text-zinc-300">
        {Object.entries(details).map(([key, value]) => (
          <li key={key} className="flex justify-between">
            <span className="capitalize text-zinc-400">
              {key.replace("_", " ")}
            </span>
            <span className="text-white">{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImageDetails;
