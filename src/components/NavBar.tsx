import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, PanelLeft } from "lucide-react";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`sticky top-0 z-50 border-b transition-all duration-300 ${
        scrolled
          ? "border-tech-nostrPurple/30 bg-terminal-background/90 backdrop-blur"
          : "border-transparent"
      }`}
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex items-center justify-between h-16">
          {/* Logo on the left */}
          <div className="flex items-center">
            <Link
              to="/"
              className="flex items-center space-x-2 font-mono font-bold text-xl after:hidden"
            >
              <PanelLeft className="h-6 w-6 text-tech-nostrPurple" />
              <span className="text-tech-nostrPurple">&gt;</span>
              <span>⚡andrea@lawallet.ar</span>
            </Link>
          </div>

          {/* Navigation links moved to the right */}
          <div className="hidden md:flex items-center">
            <div className="flex space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-mono text-sm hover:text-tech-nostrPurple transition-colors ${
                    location.pathname === link.path
                      ? "text-tech-nostrPurple"
                      : "text-terminal-foreground"
                  }`}
                >
                  ~/{link.name.toLowerCase()}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="text-terminal-foreground hover:text-tech-nostrPurple"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-64 opacity-100 border-b border-tech-nostrPurple/30"
            : "max-h-0 opacity-0 overflow-hidden"
        }`}
      >
        <div className="container mx-auto px-4 py-2 space-y-2">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`block py-2 font-mono text-sm hover:text-tech-nostrPurple transition-colors ${
                location.pathname === link.path
                  ? "text-tech-nostrPurple"
                  : "text-terminal-foreground"
              }`}
            >
              <span className="text-terminal-green">$</span> cd {link.name.toLowerCase()}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavBar;