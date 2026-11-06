import React from "react";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function Gallery({ gallery }) {
  if (!gallery) return null;

  return (
    <section
      id="galeria"
      className="py-24 bg-gradient-to-b from-slate-950 via-purple-950 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Luces de fondo decorativas en violeta y rosa pastel */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado Principal */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-500/10 text-pink-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-pink-500/20 backdrop-blur-md mb-4 shadow-lg shadow-pink-500/10 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            Resultados Reales & Comprobados
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white leading-tight mb-4">
            Transformaciones{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300">
              Antes & Después
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Casos reales documentados de nuestras pacientes post-tratamiento.
          </p>
        </div>

        {/* Grid de Casos */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="bg-slate-900/80 backdrop-blur-xl rounded-3xl overflow-hidden border border-purple-500/20 shadow-2xl hover:border-pink-500/40 hover:shadow-pink-500/10 transition-all duration-300 flex flex-col justify-between group"
            >
              {/* Contenedor de la Imagen Unificada */}
              <div className="relative h-72 w-full overflow-hidden bg-slate-950">
                <img
                  src={item.beforeImg || item.afterImg || item.image}
                  alt={`Caso de ${item.treatment}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />

                {/* Badge Flotante "Antes & Después" */}
                <span className="absolute top-3 right-3 bg-gradient-to-r from-pink-600 via-purple-600 to-pink-600 text-white text-[11px] font-extrabold px-3.5 py-1 rounded-full uppercase shadow-lg border border-white/20 tracking-wider">
                  Antes & Después
                </span>
              </div>

              {/* Contenido descriptivo del tratamiento */}
              <div className="p-6 bg-gradient-to-b from-purple-950/40 to-slate-900/90 flex-1 flex flex-col justify-between border-t border-purple-500/10">
                <div>
                  <h3 className="font-serif font-bold text-xl text-transparent bg-clip-text bg-gradient-to-r from-pink-300 to-purple-200 mb-2">
                    {item.treatment}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-between">
                  <span className="text-[11px] text-pink-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-pink-400" />{" "}
                    Resultado Natural
                  </span>
                  <a
                    href="#agendar"
                    className="text-[11px] font-bold text-white bg-purple-900/80 hover:bg-pink-600 px-3.5 py-1.5 rounded-xl border border-purple-500/30 transition-all shadow-sm hover:shadow-pink-500/20 flex items-center gap-1"
                  >
                    Quiero este cambio
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
