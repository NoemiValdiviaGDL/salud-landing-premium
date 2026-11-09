import React from "react";
import { Sparkles, Clock } from "lucide-react";

export default function BannerUrgencia() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-[#A782C8] via-[#FFA5C4] to-[#A782C8] text-white py-3 px-4 text-center text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-md">
      {/* Destello animado */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="w-1/2 h-full bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full animate-[shine_4s_infinite_ease-in-out]" />
      </div>

      <Sparkles className="w-4 h-4 text-white animate-pulse shrink-0 relative z-10" />

      <span className="relative z-10 text-white font-medium">
        <strong className="font-extrabold uppercase tracking-wider text-white">
          Promoción de Lanzamiento:
        </strong>{" "}
        Agenda tu valoración este mes y obtén{" "}
        <strong className="underline decoration-white/70 underline-offset-4 font-black">
          $500 MXN abonables
        </strong>{" "}
        a tu tratamiento.
      </span>

      <span className="hidden md:inline-flex items-center gap-1 bg-white/20 backdrop-blur-md px-3 py-1 rounded-full text-[11px] font-bold ml-2 border border-white/30 relative z-10 text-white">
        <Clock className="w-3.5 h-3.5" /> ÚLTIMOS CUPOS
      </span>

      <style>{`
        @keyframes shine {
          0% { transform: translateX(-100%) skewX(-12deg); }
          30% { transform: translateX(250%) skewX(-12deg); }
          100% { transform: translateX(250%) skewX(-12deg); }
        }
      `}</style>
    </div>
  );
}
