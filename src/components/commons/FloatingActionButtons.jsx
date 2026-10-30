import React from "react";
import { Calendar, MessageCircle, MapPin } from "lucide-react";

export const FloatingActionButtons = ({ onOpenBooking }) => {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3">
      {/* Botón directo a WhatsApp */}
      <a
        href="https://wa.me/TU_NUMERO_AQUI?text=Hola,%20me%20gustaria%20informacion%20sobre%20sus%20tratamientos"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 bg-emerald-500 text-white rounded-full shadow-lg hover:bg-emerald-600 transition-all hover:scale-105"
        title="Contacto WhatsApp"
      >
        <MessageCircle size={26} />
      </a>

      {/* Botón para abrir Modal de Agendamiento / Pago */}
      <button
        onClick={onOpenBooking}
        className="flex items-center justify-center px-5 h-14 bg-rose-600 text-white font-medium rounded-full shadow-xl hover:bg-rose-700 transition-all hover:scale-105 gap-2"
      >
        <Calendar size={22} />
        <span className="hidden sm:inline">Reservar Cita</span>
      </button>
    </div>
  );
};
