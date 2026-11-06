import React, { useState } from "react";
import { Menu, X, Sparkles } from "lucide-react";

export default function Navbar({ brand }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    { name: "Procedimientos", href: "#procedimientos" },
    { name: "Antes y Después", href: "#galeria" },
    { name: "Sobre Mí", href: "#sobre-mi" },
    { name: "Reseñas", href: "#resenas" },
    { name: "FAQ", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-purple-100/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-pink-500" />
          <span className="text-lg sm:text-xl font-serif font-bold tracking-tight text-purple-950">
            {brand?.logoText || "Dra. Valeria Munguía"}
          </span>
        </a>

        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-pink-600 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#agendar"
            className="bg-purple-950 hover:bg-purple-900 text-white px-6 py-2.5 rounded-full text-sm font-bold transition-all shadow-sm"
          >
            Agendar Cita
          </a>
        </div>

        <div className="flex md:hidden items-center">
          <button
            onClick={toggleMenu}
            type="button"
            className="p-2 rounded-xl bg-purple-50 text-purple-950 focus:outline-none border border-purple-100"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-pink-600" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white/95 border-b border-purple-100 backdrop-blur-md px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="block px-3 py-2 rounded-xl text-base font-medium text-slate-700 hover:text-purple-950 hover:bg-purple-50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#agendar"
              onClick={closeMenu}
              className="block w-full text-center bg-purple-950 text-white py-3 rounded-xl text-sm font-bold shadow-sm"
            >
              Agendar Cita
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
