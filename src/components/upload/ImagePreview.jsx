const ImagePreview = ({ file, className = "" }) => {
  if (!file) return null;

  const imageUrl = URL.createObjectURL(file);

  return (
    <div className="flex justify-center">
      <img
        src={imageUrl}
        alt="Preview"
        className={`w-auto object-contain ${className}`}
        onLoad={() => URL.revokeObjectURL(imageUrl)}
      />
    </div>
  );
};

export default ImagePreview;
