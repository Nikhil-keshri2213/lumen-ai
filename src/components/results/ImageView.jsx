const ImageView = ({ image, title }) => {
  if (!image) return null;

  const src = image.startsWith("data:") ? image : `data:image/png;base64,${image}`;

  return (
    <div className="rounded-2xl border border-emerald-500/20 bg-zinc-900/60 p-4">
      {/* <h4 className="mb-3 text-sm font-semibold text-emerald-400">
        {title}
      </h4> */}
      <span className="inline-block underline mb-3 text-sm font-semibold text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00]">
        {title}
      </span>
      <img
        src={src}
        alt="ELA Output"
        className="w-full rounded-xl object-contain"
      />
    </div>
  );
};

export default ImageView;
