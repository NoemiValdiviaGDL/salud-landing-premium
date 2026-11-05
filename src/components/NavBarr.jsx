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
    { name: "Preguntas Frecuentes", href: "#faq" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-md border-b border-purple-500/20 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Logo / Nombre de Marca */}
        <a href="#" className="flex items-center gap-2">
          <Sparkles className="w-5 h-5 text-pink-400" />
          <span className="text-lg sm:text-xl font-serif font-bold tracking-tight text-white">
            {brand?.logoText || "Dra. Valeria Munguía"}
          </span>
        </a>

        {/* Navegación Escritorio (Pantallas medianas en adelante) */}
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-pink-400 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Botón CTA Escritorio */}
        <div className="hidden md:block">
          <a
            href="#agendar"
            className="bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white px-5 py-2.5 rounded-full text-sm font-bold transition-all shadow-md shadow-pink-500/10 border border-pink-400/30"
          >
            Agendar Cita
          </a>
        </div>

        {/* Botón Hamburguesa para Móviles */}
        <div className="flex md:hidden items-center">
          <button
            onClick={toggleMenu}
            type="button"
            className="p-2 rounded-xl bg-slate-900 border border-purple-500/30 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Abrir menú de navegación"
          >
            {isOpen ? (
              <X className="w-6 h-6 text-pink-400" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Menú Desplegable Móvil */}
      {isOpen && (
        <div className="md:hidden bg-slate-900/95 border-b border-purple-500/20 backdrop-blur-xl px-4 pt-2 pb-6 space-y-3 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={closeMenu}
              className="block px-3 py-2.5 rounded-xl text-base font-medium text-slate-200 hover:text-white hover:bg-purple-950/50 transition-colors"
            >
              {link.name}
            </a>
          ))}
          <div className="pt-2">
            <a
              href="#agendar"
              onClick={closeMenu}
              className="block w-full text-center bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white py-3 rounded-xl text-sm font-bold transition-all shadow-md shadow-pink-500/20 border border-pink-400/30"
            >
              Agendar Cita
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
