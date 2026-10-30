import React from "react";

export default function Gallery({ gallery }) {
  return (
    <section id="galeria" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-amber-400 text-xs font-semibold tracking-wider uppercase">
            Resultados Reales
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold mt-2 mb-4">
            Galería Antes & Después
          </h2>
          <p className="text-slate-400">
            Casos documentados de nuestros pacientes post-tratamiento.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {gallery.map((item) => (
            <div
              key={item.id}
              className="bg-slate-800 rounded-2xl overflow-hidden border border-slate-700"
            >
              <div className="grid grid-cols-2 gap-1 p-2 bg-slate-950">
                <div className="relative">
                  <img
                    src={item.beforeImg}
                    alt="Antes"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <span className="absolute bottom-2 left-2 bg-black/70 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    Antes
                  </span>
                </div>
                <div className="relative">
                  <img
                    src={item.afterImg}
                    alt="Después"
                    className="w-full h-48 object-cover rounded-lg"
                  />
                  <span className="absolute bottom-2 left-2 bg-amber-600 text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    Después
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-bold text-lg text-amber-400 mb-2">
                  {item.treatment}
                </h3>
                <p className="text-xs text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
