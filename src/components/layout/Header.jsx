import { useState } from "react";
import logo from "../../assets/logos/image.png";

const Header = () => {
  const [open, setOpen] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const links = [
    { label: "Scan", id: "scan", color: "#00FFFF" },        
    { label: "Features", id: "features", color: "#FF00FF" }, 
    { label: "How to Use", id: "how-to-use", color: "#FFFF00" }, 
    { label: "About Us", id: "about", color: "#FFFFFF" },    
  ];

  const scrollToTop = () => {
    setOpen(false);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const yOffset = -80;
    const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
    window.history.replaceState(null, "", window.location.pathname);
    setOpen(false);
  };

  return (
    <header 
      style={{ backgroundColor: "rgba(0, 0, 0, 0.9)", borderColor: "rgba(255, 255, 255, 0.1)" }} 
      className="fixed top-0 z-50 w-full border-b backdrop-blur-md"
    >
      <div className="flex items-center px-4 py-3">
        
        {/* Logo Section - Leftmost with individual padding */}
        <div className="flex-grow flex justify-start">
          <img
          src={logo}
          alt="Lumen Ai Logo"
          onClick={scrollToTop}
          className="cursor-pointer h-14 w-auto"
        />
        </div>


        {/* Desktop Navigation - Stays in original relative position */}
        <nav className="hidden md:flex items-center gap-4 pr-6">
          {links.map((link) => (
            <button
              key={link.id}
              onClick={() => handleScroll(link.id)}
              onMouseEnter={() => setHoveredId(link.id)}
              onMouseLeave={() => setHoveredId(null)}
              style={{
                backgroundColor: hoveredId === link.id ? link.color : "transparent",
                color: hoveredId === link.id ? "#000000" : "#FFFFFF",
                transition: "all 0.2s ease-in-out"
              }}
              className="px-4 py-2 rounded-lg text-sm font-bold uppercase tracking-widest"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setOpen(!open)}
          style={{ color: "#FFFFFF" }}
          className="md:hidden text-2xl pr-4"
        >
          {open ? "✕" : "☰"}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div style={{ backgroundColor: "#000000", borderTop: "1px solid rgba(255, 255, 255, 0.1)" }} className="md:hidden">
          <div className="flex flex-col px-6 py-6 gap-4">
            {links.map((link) => (
              <button
                key={link.id}
                onClick={() => handleScroll(link.id)}
                onMouseEnter={() => setHoveredId(link.id)}
                onMouseLeave={() => setHoveredId(null)}
                style={{
                  backgroundColor: hoveredId === link.id ? link.color : "transparent",
                  color: hoveredId === link.id ? "#000000" : "#FFFFFF",
                  transition: "all 0.2s ease-in-out",
                  textAlign: "left"
                }}
                className="w-full px-4 py-3 rounded-lg text-sm font-bold uppercase tracking-widest"
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
