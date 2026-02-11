const ImagePreview = ({ file }) => {
  if (!file) return null;

  const imageUrl = URL.createObjectURL(file);

  return (
    <div className="mt-8 flex justify-center">
      <img
        src={imageUrl}
        alt="Preview"
        className="max-h-80 rounded-2xl border border-white object-contain shadow-lg"
        onLoad={() => URL.revokeObjectURL(imageUrl)}
      />
    </div>
  );
};

export default ImagePreview;
