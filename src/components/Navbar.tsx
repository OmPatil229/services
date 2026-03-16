"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Automation", href: "#automation" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#E6E7EE]/90 backdrop-blur-md shadow-neu-card"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <a
          href="#"
          className="font-sora font-bold text-2xl text-[#1F2937]"
        >
          <span className="text-[#5B6EF5]">Om</span> Patil
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-[#1F2937] font-medium hover:text-[#5B6EF5] transition-colors duration-200 text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="hidden md:block px-5 py-2.5 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#5B6EF5] to-[#7C3AED] hover:opacity-90 transition-all duration-200"
          style={{ boxShadow: "4px 4px 10px #C8C8C8, -2px -2px 6px #FFFFFF" }}
        >
          Start Project
        </a>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-xl neu-raised"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-[#E6E7EE] border-t border-[#C8C8C8]/40 px-6 pb-6"
          >
            <div className="flex flex-col gap-4 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-[#1F2937] font-medium hover:text-[#5B6EF5] transition-colors py-2"
                  onClick={() => setMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="#contact"
                className="mt-2 text-center px-5 py-3 rounded-xl font-semibold text-sm text-white bg-gradient-to-r from-[#5B6EF5] to-[#7C3AED]"
                onClick={() => setMenuOpen(false)}
              >
                Start Project
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
