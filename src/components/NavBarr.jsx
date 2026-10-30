import React from "react";

export default function Navbar({ brand }) {
  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-pink-100/60 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        <span className="text-xl font-serif font-bold tracking-tight text-purple-950">
          {brand.logoText}
        </span>
        <nav className="hidden md:flex items-center space-x-8 text-sm font-medium text-slate-600">
          <a
            href="#procedimientos"
            className="hover:text-pink-600 transition-colors"
          >
            Procedimientos
          </a>
          <a href="#galeria" className="hover:text-pink-600 transition-colors">
            Antes y Después
          </a>
          <a href="#sobre-mi" className="hover:text-pink-600 transition-colors">
            Sobre Mí
          </a>
          <a href="#resenas" className="hover:text-pink-600 transition-colors">
            Reseñas
          </a>
          <a href="#faq" className="hover:text-pink-600 transition-colors">
            FAQ
          </a>
        </nav>
        <a
          href="#agendar"
          className="bg-purple-950 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-pink-600 transition-colors shadow-sm"
        >
          Agendar Cita
        </a>
      </div>
    </header>
  );
}
