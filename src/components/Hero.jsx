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
    <section className="py-24 bg-gradient-to-b from-slate-300 via-purple-950 to-slate-900 text-white relative overflow-hidden">
      {/* Luz ambiental sutil en el fondo */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-pink-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 bg-white/80 text-purple-900 text-xs font-bold tracking-wider uppercase px-3.5 py-1.5 rounded-full mb-6 border border-purple-200/60 shadow-sm">
              <Sparkles className="w-3.5 h-3.5 text-pink-500" />
              {hero.badge}
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-extrabold text-purple-950 leading-[1.15] mb-6">
              Recupera la frescura y juventud de tu piel{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-800 via-pink-600 to-purple-600">
                sin perder tu esencia
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-100 mb-8 leading-relaxed">
              Tratamientos médicos no invasivos con resultados visibles desde la
              primera sesión.
            </p>

            <div className="flex items-center gap-3 mb-8 bg-white/70 backdrop-blur-sm p-3 rounded-2xl border border-purple-100 shadow-sm max-w-md">
              <div className="flex -space-x-2">
                <img
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=120"
                  alt="Paciente"
                />
                <img
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120"
                  alt="Paciente"
                />
                <img
                  className="w-9 h-9 rounded-full border-2 border-white object-cover"
                  src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=120"
                  alt="Paciente"
                />
              </div>
              <div className="text-xs text-slate-700 font-medium">
                <div className="flex items-center text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" />
                  ))}
                  <span className="ml-1.5 font-bold text-purple-950">
                    4.9/5
                  </span>
                </div>
                <span>Más de 1,200 pacientes felices en Zapopan</span>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-10">
              <a
                href="#agendar"
                className="bg-purple-950 hover:bg-purple-900 text-white font-bold px-8 py-4 rounded-xl text-center shadow-md transition-all flex items-center justify-center gap-2 group text-base"
              >
                <Calendar className="w-5 h-5 text-pink-200" />
                Agendar Cita Directa
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </div>

            <div className="flex items-center gap-6 text-xs font-semibold text-slate-300">
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-purple-300" /> Reserva 100%
                Segura
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-purple-300" /> Sin
                Incapacidad
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-xl relative z-10 border-4 border-white bg-white">
              <img
                src={hero.heroImage}
                alt={brand?.name}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-4 sm:-left-6 bg-white/95 backdrop-blur-md p-5 rounded-2xl shadow-lg z-20 max-w-xs border border-purple-100">
              <p className="text-xs font-bold text-purple-950 uppercase tracking-wider mb-1">
                Resultado Natural
              </p>
              <p className="text-xs text-slate-600 leading-relaxed">
                "Suavizamos líneas de expresión sin congelar el rostro ni
                alterar tu mirada."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
