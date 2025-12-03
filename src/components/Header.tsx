"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Inicio", href: "#home" },
  { name: "Nosotros", href: "#nosotros" },
  { name: "Productos", href: "#productos" },
  { name: "Clientes", href: "#clientes" },
  { name: "Contacto", href: "#contacto" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuVariants = {
    closed: { opacity: 0, y: "-100%" },
    open: { opacity: 1, y: "0" },
  };

  const navTextColor = isScrolled ? "text-slate-700" : "text-white";
  const logoColor = isScrolled ? "text-slate-800" : "text-white";

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-white/70 backdrop-blur-lg shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            <a
              href="#home"
              className={`font-serif text-3xl font-bold tracking-wide transition-colors duration-300 ${logoColor}`}
            >
              Arrecife
            </a>
            <nav className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={`font-medium hover:text-sky-500 transition-colors duration-300 ${navTextColor}`}
                >
                  {link.name}
                </a>
              ))}
            </nav>
            <div className="md:hidden">
              <button onClick={() => setIsOpen(true)} aria-label="Abrir menú">
                <Menu
                  className={`w-8 h-8 transition-colors duration-300 ${navTextColor}`}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-sky-50 z-50 md:hidden"
          >
            <div className="container mx-auto px-4 h-full flex flex-col">
              <div className="flex justify-between items-center h-20">
                <a
                  href="#home"
                  className="font-serif text-3xl font-bold text-slate-800"
                  onClick={() => setIsOpen(false)}
                >
                  Arrecife
                </a>
                <button
                  onClick={() => setIsOpen(false)}
                  aria-label="Cerrar menú"
                >
                  <X className="w-8 h-8 text-slate-700" />
                </button>
              </div>
              <nav className="flex flex-col items-center justify-center flex-grow space-y-8">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-3xl font-bold text-slate-700 hover:text-sky-500 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {link.name}
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;
