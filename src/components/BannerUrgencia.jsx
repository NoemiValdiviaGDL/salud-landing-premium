import React from "react";
import { Sparkles, Clock } from "lucide-react";

export default function BannerUrgencia() {
  return (
    <div className="bg-gradient-to-r from-purple-900 via-pink-700 to-purple-900 text-white py-2.5 px-4 text-center text-xs sm:text-sm font-medium flex items-center justify-center gap-2 shadow-inner">
      <Sparkles className="w-4 h-4 text-pink-300 animate-pulse shrink-0" />
      <span>
        <strong>Promoción de Lanzamiento:</strong> Agenda tu valoración este mes
        y obtén <strong>$500 MXN abonables</strong> a tu tratamiento.
      </span>
      <span className="hidden md:inline-flex items-center gap-1 bg-white/20 px-2 py-0.5 rounded-full text-[11px] ml-2">
        <Clock className="w-3 h-3" /> Pocos cupos disponibles
      </span>
    </div>
  );
}
