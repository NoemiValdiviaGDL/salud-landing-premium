import React from "react";
import { Star, Sparkles, Quote, CheckCircle2 } from "lucide-react";

export default function Reviews({ reviews }) {
  if (!reviews) return null;

  return (
    <section
      id="resenas"
      className="py-24 bg-gradient-to-b from-slate-950 via-purple-950 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Luz ambiental central */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado Principal */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-500/10 text-pink-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-pink-500/20 backdrop-blur-md mb-4 shadow-lg shadow-pink-500/10">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            Experiencias Reales
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white leading-tight mb-4">
            Lo Que Dicen Nuestros{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300">
              Pacientes
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            La confianza y tranquilidad de quienes ya transformaron su piel con
            nosotros.
          </p>
        </div>

        {/* Grid de Reseñas / Tarjetas Glassmorphic */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 shadow-2xl hover:border-pink-500/40 hover:shadow-pink-500/10 transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-purple-500/10 group-hover:text-pink-500/20 transition-colors pointer-events-none" />

              <div>
                {/* Calificación en Estrellas */}
                <div className="flex items-center gap-1 text-amber-400 mb-6 bg-slate-950/60 px-3 py-1.5 rounded-full w-max border border-purple-500/20">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-bold text-white ml-1">5.0</span>
                </div>

                {/* Comentario */}
                <p className="text-slate-300 text-sm leading-relaxed mb-6 italic">
                  "{rev.comment}"
                </p>
              </div>

              {/* Info de la Paciente */}
              <div className="pt-4 border-t border-slate-800/80 flex items-center justify-between">
                <div>
                  <p className="font-bold text-white text-base">{rev.name}</p>
                  <p className="text-xs text-pink-400 font-semibold mt-0.5">
                    {rev.treatment}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-emerald-400 font-medium bg-emerald-500/10 px-2.5 py-1 rounded-full border border-emerald-500/20">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  Verificada
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
