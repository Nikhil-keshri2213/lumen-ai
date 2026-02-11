import clsx from "clsx";

const Button = ({
  children,
  onClick,
  type = "button",
  variant = "primary",
  size = "md",
  loading = false,
  disabled = false,
  className,
}) => {
  const baseStyles =
    "group relative overflow-hidden inline-flex items-center justify-center font-bold rounded-xl transition-all duration-300 focus:outline-none focus:ring-1 focus:ring-white/20 active:scale-95";

  const variants = {
    // Primary: White button that reveals CMY gradient on hover
    primary: "bg-white text-black border border-transparent",
    
    // Secondary: Cyan glow outline
    secondary: "bg-transparent text-white border border-white/10 hover:border-[#00FFFF] hover:shadow-[0_0_15px_rgba(0,255,255,0.2)]",
    
    danger: "bg-[#FF00FF]/10 text-[#FF00FF] border border-[#FF00FF]/20 hover:bg-[#FF00FF] hover:text-white",
    
    ghost: "bg-transparent text-zinc-400 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-xs uppercase tracking-widest",
    md: "px-6 py-3 text-sm uppercase tracking-[0.2em]",
    lg: "px-8 py-3.5 text-base uppercase tracking-[0.2em]", // Slightly reduced padding
  };

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={clsx(
        baseStyles,
        variants[variant],
        sizes[size],
        (disabled || loading) && "opacity-40 cursor-not-allowed grayscale",
        className
      )}
    >
      {/* Fixed: CMY Background Gradient overlay */}
      {variant === "primary" && !disabled && !loading && (
        <div className="absolute inset-0 bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      )}
      
      {loading && (
        <span className="mr-3 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent relative z-10" />
      )}
      
      <span className="relative z-10 flex items-center">{children}</span>
    </button>
  );
};

export default Button;