import React from "react";
import { Phone, MessageCircle } from "lucide-react";

export default function FloatingActions({ brand }) {
  const cleanPhone =
    brand?.whatsappNumber?.replace(/[^0-9]/g, "") || "3327825329";
  const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "¡Hola Dra. Valeria! Quisiera solicitar información sobre los tratamientos y disponibilidad de cita.",
  )}`;

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Botón Llamada */}
      <a
        href={`tel:+${cleanPhone}`}
        className="w-13 h-13 sm:w-14 sm:h-14 bg-[#3A2E4C] hover:bg-[#A782C8] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border border-white/20 group"
        aria-label="Llamar al consultorio"
        title="Llamar al consultorio"
      >
        <Phone className="w-6 h-6 text-white group-hover:rotate-12 transition-transform" />
      </a>

      {/* Botón WhatsApp */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-13 h-13 sm:w-14 sm:h-14 bg-gradient-to-r from-[#FFA5C4] to-[#A782C8] hover:from-[#ff8cb3] hover:to-[#966fc0] text-white rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-all duration-300 border border-white/30 group relative"
        aria-label="Enviar mensaje de WhatsApp"
        title="Enviar WhatsApp"
      >
        <MessageCircle className="w-7 h-7 text-white fill-current group-hover:scale-110 transition-transform" />
        <span className="absolute top-0 right-0 w-3.5 h-3.5 bg-emerald-400 border-2 border-white rounded-full" />
      </a>
    </div>
  );
}
