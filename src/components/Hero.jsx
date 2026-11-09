import React from "react";
import {
  Calendar,
  Star,
  ShieldCheck,
  ArrowRight,
  Sparkles,
} from "lucide-react";

export default function Hero({ hero, brand }) {
  if (!hero) return null;

  return (
    <section className="relative py-20 lg:py-28 bg-[#FFF4F8] overflow-hidden">
      {/* Resplandores difuminados con la paleta */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-gradient-to-tr from-[#FFA5C4]/20 via-[#8A96C7]/20 to-[#A782C8]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Copywriter de Conversión */}
          <div>
            <div className="inline-flex items-center gap-2 bg-white/90 text-[#A782C8] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full mb-6 border border-[#A782C8]/30 shadow-sm backdrop-blur-md">
              <Sparkles className="w-4 h-4 text-[#FFA5C4]" />
              {hero.badge}
            </div>

            {/* Título de Impacto con brillo difuminado */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-black text-[#3A2E4C] leading-[1.15] mb-6 tracking-tight">
              Recupera la frescura y juventud de tu piel{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#A782C8] via-[#FFA5C4] to-[#8A96C7] drop-shadow-[0_2px_15px_rgba(255,165,196,0.5)]">
                sin perder tu esencia
              </span>
            </h1>

            <p className="text-base sm:text-lg text-[#3A2E4C]/80 mb-8 leading-relaxed font-sans font-medium">
              Tratamientos médicos no invasivos con resultados visibles desde la
              primera sesión. Diseñados a la medida de tus necesidades
              cosmetológicas.
            </p>

            {/* Micro-prueba social */}
            <div className="flex items-center gap-3 mb-8 bg-white/80 backdrop-blur-md p-3.5 rounded-2xl border border-[#DCE2E9] shadow-sm max-w-md">
              <div className="flex -space-x-2">
                <img
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120"
                  alt="Paciente"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                  alt="Paciente"
                />
                <img
                  className="w-10 h-10 rounded-full border-2 border-white object-cover shadow-sm"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=120"
                  alt="Paciente"
                />
              </div>
              <div className="text-xs text-[#3A2E4C] font-semibold">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="ml-1.5 font-bold text-[#3A2E4C]">
                    4.9 / 5.0
                  </span>
                </div>
                <span className="text-[#3A2E4C]/70">
                  Más de 1,200 pacientes felices en Zapopan
                </span>
              </div>
            </div>

            {/* CTA Principal de Embudo */}
            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#agendar"
                className="bg-gradient-to-r from-[#A782C8] to-[#FFA5C4] hover:from-[#966fc0] hover:to-[#ff8cb3] text-white font-extrabold px-8 py-4 rounded-2xl text-center shadow-lg shadow-[#FFA5C4]/30 hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 group text-base uppercase tracking-wider"
              >
                <Calendar className="w-5 h-5 text-white" />
                Agendar Cita Directa
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex items-center gap-6 text-xs font-bold text-[#3A2E4C]/70">
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A782C8]" /> Cita 100%
                Personalizada
              </span>
              <span className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A782C8]" /> Sin
                Incapacidad
              </span>
            </div>
          </div>

          {/* Fotografía Destacada */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-white bg-white">
              <img
                src={hero.heroImage}
                alt={brand?.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Tag Flotante Persuasivo */}
            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-xl z-20 max-w-xs border border-[#DCE2E9]">
              <p className="text-xs font-black text-[#A782C8] uppercase tracking-widest mb-1">
                Resultado Natural
              </p>
              <p className="text-xs text-[#3A2E4C]/80 leading-relaxed font-medium">
                "Suavizamos líneas de expresión manteniendo tu gesticulación
                natural."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
