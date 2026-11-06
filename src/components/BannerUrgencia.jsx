import React from "react";
import { Sparkles, Clock } from "lucide-react";

export default function BannerUrgencia() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-purple-950 via-purple-900 to-pink-900 text-white py-5.5 px-4 text-center text-xs sm:text-sm font-medium flex items-center justify-center gap-2 shadow-sm border-b border-pink-400/20">
      {/* Efecto de Destello / Shine de luz animado */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/15 to-transparent -skew-x-12 -translate-x-full animate-[shine_4s_infinite_ease-in-out]" />
      </div>

      {/* Contenido del Banner */}
      <Sparkles className="w-4 h-4 text-pink-300 animate-pulse shrink-0 relative z-10" />

      <span className="relative z-10">
        <strong className="text-pink-200">Promoción de Lanzamiento:</strong>{" "}
        Agenda tu valoración este mes y obtén{" "}
        <strong className="text-pink-200 underline decoration-pink-400/50 underline-offset-2">
          $500 MXN abonables
        </strong>{" "}
        a tu tratamiento.
      </span>

      <span className="hidden md:inline-flex items-center gap-1 bg-white/15 backdrop-blur-sm px-10.5 py-0.5 rounded-full text-[11px] ml-2 border border-white/10 relative z-10">
        <Clock className="w-3 h-3 text-pink-300" /> Pocos cupos disponibles
      </span>

      {/* Definición de la animación de destello para Tailwind */}
      <style>{`
        @keyframes shine {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          30% {
            transform: translateX(250%) skewX(-12deg);
          }
          100% {
            transform: translateX(250%) skewX(-12deg);
          }
        }
      `}</style>
    </div>
  );
}
