const Footer = () => {
  return (
    <footer className="bg-black border-t border-zinc-800 font-sans">
      <div className="mx-auto max-w-7xl px-6 py-14 grid gap-10 md:grid-cols-4">
        {/* Brand */}
        <div>
          <h3 className="text-lg font-semibold text-white tracking-tight">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00]">LUMEN</span> Ai
          </h3>
          <p className="mt-3 text-sm text-zinc-400">
            Advanced AI-powered image authentication platform.
          </p>
          <p className="mt-2 text-xs italic text-zinc-500">
            "Bringing Light to Digital Truth"
          </p>

          <div className="mt-4 flex gap-4 text-xl text-zinc-400">
            <a
              href="https://www.linkedin.com/in/nikhil-keshri2213/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#00FFFF] transition-colors"
            >
              <i className="ri-linkedin-fill"></i>
            </a>
            <a
              href="https://github.com/Nikhil-keshri2213"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#FF00FF] transition-colors"
            >
              <i className="ri-github-fill"></i>
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Quick Links</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>
              <a
                href="#features"
                className="hover:text-[#00FFFF] transition-colors"
              >
                Features
              </a>
            </li>
            <li>
              <a
                href="#how-to-use"
                className="hover:text-[#FF00FF] transition-colors"
              >
                How to Use
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-[#FFFF00] transition-colors"
              >
                About
              </a>
            </li>
            <li>
              <a href="#scan" className="hover:text-white transition-colors">
                Scan Image
              </a>
            </li>
          </ul>
        </div>

        {/* Resources */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Resources</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>Documentation</li>
            <li>API Reference</li>
            <li>Support</li>
            <li>FAQ</li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h4 className="mb-3 text-sm font-semibold text-white">Legal</h4>
          <ul className="space-y-2 text-sm text-zinc-400">
            <li>Privacy Policy</li>
            <li>Terms of Service</li>
            <li>Cookie Policy</li>
            <li>Contact</li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-zinc-900 py-6 text-center text-xs text-zinc-500">
        <p>© 2025 LUMEN AI. All rights reserved.</p>
        <p className="mt-1">Built with ❤️ for a truthful digital world</p>
        <p className="mt-1">
          Developed by
          <a
            href="https://nikhil-keshri2213.github.io/MyPortfolio/"
            target="_blank"
            rel="noreferrer"
            className="group ml-1 inline-block text-white font-bold transition-all"
          >
            <span className="hover:text-transparent transition-all bg-clip-text bg-gradient-to-r from-[#00FFFF] via-[#FF00FF] to-[#FFFF00]">Nikhil Keshri</span>
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
