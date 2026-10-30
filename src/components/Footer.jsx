import React from "react";
import { MapPin, Clock, Phone, MessageCircle } from "lucide-react";

export default function Footer({ brand, footer }) {
  if (!footer) return null;

  return (
    <footer className="bg-purple-950 text-purple-200/80 py-16 border-t border-purple-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <h3 className="text-white font-serif text-xl font-bold mb-4">
              {brand?.name}
            </h3>
            <p className="text-sm text-purple-200/70 leading-relaxed mb-6">
              {brand?.tagline}
            </p>
            <div className="flex items-center space-x-4">
              <a
                href={footer.socials.instagram}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-purple-900/60 rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a
                href={footer.socials.facebook}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-purple-900/60 rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href={footer.socials.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-purple-900/60 rounded-full flex items-center justify-center hover:bg-pink-500 hover:text-white transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-pink-300 text-sm font-bold uppercase tracking-wider mb-4">
              Contacto & Ubicación
            </h4>
            <p className="flex items-start gap-3 text-sm">
              <MapPin className="w-5 h-5 text-pink-400 shrink-0 mt-0.5" />
              <span>{footer.address}</span>
            </p>
            <p className="flex items-center gap-3 text-sm">
              <Clock className="w-5 h-5 text-pink-400 shrink-0" />
              <span>{footer.schedule}</span>
            </p>
            <p className="flex items-center gap-3 text-sm">
              <Phone className="w-5 h-5 text-pink-400 shrink-0" />
              <span>{footer.phone}</span>
            </p>
          </div>

          <div>
            <h4 className="text-pink-300 text-sm font-bold uppercase tracking-wider mb-4">
              Navegación
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="#procedimientos"
                  className="hover:text-pink-300 transition-colors"
                >
                  Tratamientos
                </a>
              </li>
              <li>
                <a
                  href="#galeria"
                  className="hover:text-pink-300 transition-colors"
                >
                  Galería
                </a>
              </li>
              <li>
                <a
                  href="#agendar"
                  className="hover:text-pink-300 transition-colors"
                >
                  Agendar & Pagar
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  className="hover:text-pink-300 transition-colors"
                >
                  Preguntas Frecuentes
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-purple-900/80 pt-8 text-center text-xs text-purple-300/50">
          {footer.copyright}
        </div>
      </div>
    </footer>
  );
}
