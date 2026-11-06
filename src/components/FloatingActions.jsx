import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingActions({ brand }) {
  const cleanPhone =
    brand?.whatsappNumber?.replace(/[^0-9]/g, "") || "3327825329";
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "¡Hola Dra. Valeria! Quisiera más información sobre los tratamientos y disponibilidad de citas.",
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Botón de Llamada Telefónica */}
      <a
        href={`tel:+${cleanPhone}`}
        className="w-13 h-13 sm:w-14 sm:h-14 bg-purple-950 hover:bg-purple-900 text-pink-200 rounded-full flex items-center justify-center shadow-lg shadow-purple-950/30 border border-purple-700/40 transition-all hover:scale-110 group"
        aria-label="Llamar al consultorio"
        title="Llamar al consultorio"
      >
        <Phone className="w-6 h-6 text-pink-300 group-hover:rotate-12 transition-transform" />
      </a>

      {/* Botón de WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full flex items-center justify-center shadow-lg shadow-pink-500/30 border border-pink-300/40 transition-all hover:scale-110 group relative"
        aria-label="Enviar mensaje de WhatsApp"
        title="Enviar mensaje por WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white fill-current group-hover:scale-110 transition-transform" />

        {/* Indicador de estado en vivo */}
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
      </a>
    </div>
  );
}
