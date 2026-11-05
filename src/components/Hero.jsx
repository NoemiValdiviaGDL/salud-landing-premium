import React from "react";
import { Sparkles, ArrowRight, ShieldCheck, Star } from "lucide-react";
export default function Hero({ hero, brand }) {
  return (
    <section className="relative bg-purple-50 text-slate-800 py-20 lg:py-28 overflow-hidden border-b border-purple-100">
      {/* Resplandor ambiental suave de fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-pink-200/40 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna Izquierda: Mensaje y CTA */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Tag Superior */}
            <div className="inline-flex items-center gap-2 bg-white/80 text-purple-900 text-xs font-semibold tracking-wider uppercase px-4 py-1.5 rounded-full border border-purple-200/60 backdrop-blur-md shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              <span>
                {hero?.tagline || "Cosmetología Médica & Estética Avanzada"}
              </span>
            </div>

            {/* Titular Principal */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-purple-950 leading-[1.15] tracking-tight">
              {hero?.title ||
                "Realza tu belleza natural con tratamientos médicos personalizados."}
            </h1>

            {/* Subtítulo / Descripción */}
            <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
              {hero?.description ||
                "Protocolos clínicos diseñados para rejuvenecer, cuidar y resaltar la salud de tu piel de forma segura y duradera."}
            </p>

            {/* Botones de Acción */}
            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
              <a
                href="#agendar"
                className="w-full sm:w-auto bg-purple-950 hover:bg-purple-900 text-white font-bold px-7 py-3.5 rounded-full text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                <span>Agendar Valoración</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#procedimientos"
                className="w-full sm:w-auto bg-white/80 hover:bg-white text-purple-950 font-semibold px-7 py-3.5 rounded-full text-sm transition-all border border-purple-200 text-center shadow-sm"
              >
                Ver Procedimientos
              </a>
            </div>

            {/* Sellos de Confianza */}
            <div className="pt-6 border-t border-purple-200/60 grid grid-cols-2 sm:flex sm:items-center justify-center lg:justify-start gap-6 text-xs text-slate-600">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-purple-800" />
                <span>Atención Médica Especializada</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                </div>
                <span className="font-semibold text-slate-700">
                  +200 Pacientes Satisfechos
                </span>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Tarjeta de Fotografía */}
          <div className="lg:col-span-5 relative flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-3xl overflow-hidden border border-purple-200/80 bg-white shadow-xl aspect-[4/5]">
                <img
                  src={hero.image}
                  alt={brand?.doctorName || "Dra. Valeria Munguía"}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent opacity-90" />

                {/* Badge flotante con nombre de la doctora */}
                <div className="absolute bottom-5 left-5 right-5 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-purple-100 shadow-md">
                  <p className="font-serif font-bold text-purple-950 text-sm">
                    {brand?.doctorName || "Dra. Valeria Munguía"}
                  </p>
                  <p className="text-xs text-slate-500">
                    {brand?.specialty ||
                      "Especialista en Medicina Estética & Antienvejecimiento"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
