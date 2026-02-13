import { useState, useEffect, useRef } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";

const aboutSubLinks = [
  { label: "Values", href: "/#values" },
  { label: "Skills", href: "/#skills" },
  { label: "Experience", href: "/#experience" },
  { label: "Contact", href: "/#contact" },
];

const mainLinks = [
  { label: "Projects", href: "/projects" },
  { label: "Gallery", href: "/gallery" },
  { label: "Shop", href: "/shop" },
];

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const aboutRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close dropdown on click outside
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (aboutRef.current && !aboutRef.current.contains(e.target as Node)) {
        setIsAboutOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const linkClass =
    "text-sm font-medium text-muted-foreground hover:text-foreground transition-colors relative group";

  const handleHashClick = (href: string) => {
    setIsMobileMenuOpen(false);
    setIsAboutOpen(false);
    if (location.pathname === "/" && href.startsWith("/#")) {
      const el = document.querySelector(href.replace("/", ""));
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-background/80 backdrop-blur-lg border-b border-border shadow-soft"
            : "bg-transparent"
        }`}
      >
        <div className="section-container">
          <div className="flex items-center justify-between h-16 md:h-20">
            <Link to="/" className="font-display text-xl md:text-2xl font-medium">
              Ankit<span className="text-primary">.</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {/* About Dropdown */}
              <div ref={aboutRef} className="relative">
                <button
                  onClick={() => setIsAboutOpen(!isAboutOpen)}
                  className={`${linkClass} inline-flex items-center gap-1`}
                >
                  About
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${isAboutOpen ? "rotate-180" : ""}`} />
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </button>
                <AnimatePresence>
                  {isAboutOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.2 }}
                      className="absolute top-full mt-2 left-0 min-w-[160px] py-2 bg-background/95 backdrop-blur-lg border border-border rounded-xl shadow-elevated"
                    >
                      {aboutSubLinks.map((link) => (
                        <a
                          key={link.href}
                          href={link.href}
                          onClick={() => handleHashClick(link.href)}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-colors"
                        >
                          {link.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {mainLinks.map((link) => (
                <Link key={link.href} to={link.href} className={linkClass}>
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden w-10 h-10 flex items-center justify-center rounded-full bg-muted"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-x-0 top-16 z-40 bg-background/95 backdrop-blur-lg border-b border-border shadow-elevated md:hidden"
          >
            <div className="section-container py-6">
              <div className="flex flex-col gap-2">
                <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider px-2 mb-1">About</p>
                {aboutSubLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => handleHashClick(link.href)}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2 pl-4"
                  >
                    {link.label}
                  </a>
                ))}
                <div className="border-t border-border my-2" />
                {mainLinks.map((link) => (
                  <Link
                    key={link.href}
                    to={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-muted-foreground hover:text-foreground transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
