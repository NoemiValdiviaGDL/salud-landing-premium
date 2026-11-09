import React from "react";
import { Star, Sparkles, Quote, CheckCircle2 } from "lucide-react";

export default function Reviews({ reviews }) {
  if (!reviews) return null;

  return (
    <section
      id="resenas"
      className="py-24 bg-[#FFF4F8] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-[#A782C8] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-[#DCE2E9] shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFA5C4]" />
            Experiencias Reales
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#3A2E4C]">
            Lo Que Dicen Nuestras{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A782C8] via-[#FFA5C4] to-[#8A96C7] drop-shadow-[0_2px_10px_rgba(255,165,196,0.5)]">
              Pacientes
            </span>
          </h2>
          <p className="text-[#3A2E4C]/80 text-base sm:text-lg mt-3 font-medium">
            La tranquilidad de quienes ya renovaron su piel con nosotros.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-white rounded-3xl p-8 border border-[#DCE2E9] shadow-md hover:shadow-2xl hover:border-[#FFA5C4] transition-all duration-300 flex flex-col justify-between relative group"
            >
              <Quote className="absolute top-6 right-6 w-10 h-10 text-[#8A96C7]/20 group-hover:text-[#FFA5C4]/30 transition-colors pointer-events-none" />

              <div>
                <div className="flex items-center gap-1 text-amber-400 mb-6 bg-[#FFF4F8] px-3 py-1.5 rounded-full w-max border border-[#DCE2E9]">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                  <span className="text-xs font-black text-[#3A2E4C] ml-1">
                    5.0
                  </span>
                </div>

                <p className="text-[#3A2E4C]/80 text-sm leading-relaxed mb-6 italic font-medium">
                  "{rev.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-[#DCE2E9] flex items-center justify-between">
                <div>
                  <p className="font-serif font-extrabold text-[#3A2E4C] text-base">
                    {rev.name}
                  </p>
                  <p className="text-xs text-[#A782C8] font-bold mt-0.5">
                    {rev.treatment}
                  </p>
                </div>
                <div className="flex items-center gap-1 text-[11px] text-[#A782C8] font-extrabold bg-[#FFF4F8] px-3 py-1 rounded-full border border-[#DCE2E9]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#FFA5C4]" />{" "}
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
