import React from "react";
import { Sparkles, CheckCircle2, ArrowRight } from "lucide-react";

export default function Gallery({ gallery }) {
  if (!gallery) return null;

  return (
    <section
      id="galeria"
      className="py-24 bg-[#FFF4F8] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-[#A782C8] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-[#DCE2E9] shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFA5C4]" />
            Resultados Comprobados
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#3A2E4C]">
            Transformaciones{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A782C8] via-[#FFA5C4] to-[#8A96C7] drop-shadow-[0_2px_10px_rgba(255,165,196,0.5)]">
              Antes & Después
            </span>
          </h2>
          <p className="text-[#3A2E4C]/80 text-base sm:text-lg mt-3 font-medium">
            Casos reales documentados de nuestras pacientes post-tratamiento.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#DCE2E9] shadow-md hover:shadow-2xl hover:border-[#FFA5C4] transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="relative h-72 w-full overflow-hidden bg-[#DCE2E9]/30">
                <img
                  src={item.beforeImg || item.afterImg || item.image}
                  alt={`Caso de ${item.treatment}`}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 right-4 bg-gradient-to-r from-[#A782C8] to-[#FFA5C4] text-white text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-widest shadow-md">
                  Antes & Después
                </span>
              </div>

              <div className="p-6 bg-white flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif font-extrabold text-xl text-[#3A2E4C] mb-2">
                    {item.treatment}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3A2E4C]/70 leading-relaxed font-medium">
                    {item.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DCE2E9] flex items-center justify-between">
                  <span className="text-[11px] text-[#A782C8] font-bold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FFA5C4]" />{" "}
                    Resultado Natural
                  </span>
                  <a
                    href="#agendar"
                    className="text-xs font-extrabold text-white bg-[#3A2E4C] hover:bg-[#A782C8] px-4 py-2 rounded-xl transition-all shadow-sm flex items-center gap-1.5 uppercase"
                  >
                    Quiero esto
                    <ArrowRight className="w-3.5 h-3.5" />
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
