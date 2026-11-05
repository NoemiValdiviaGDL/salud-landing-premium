import React, { useState } from "react";
import { ChevronDown, ChevronUp, Sparkles, HelpCircle } from "lucide-react";

export default function FAQ({ faq }) {
  const [openFaq, setOpenFaq] = useState(null);

  if (!faq) return null;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section
      id="faq"
      className="py-24 bg-slate-950 text-white relative overflow-hidden"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado FAQ */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-500/10 text-pink-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-pink-500/20 backdrop-blur-md mb-4 shadow-lg shadow-pink-500/10">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            Resuelve tus Dudas
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white leading-tight mb-4">
            Preguntas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-purple-300 to-indigo-300">
              Frecuentes
            </span>
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Todo lo que necesitas saber antes de tu primera consulta o
            tratamiento.
          </p>
        </div>

        {/* Lista de Acordeones */}
        <div className="space-y-4">
          {faq.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/80 backdrop-blur-xl rounded-2xl border border-purple-500/20 overflow-hidden transition-all duration-300 hover:border-pink-500/40"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 text-left font-bold text-white flex items-center justify-between gap-4 text-sm sm:text-base"
              >
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-pink-400 shrink-0" />
                  {item.question}
                </span>
                {openFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-pink-400 shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-slate-400 shrink-0" />
                )}
              </button>

              {openFaq === idx && (
                <div className="px-6 pb-6 text-slate-300 text-sm border-t border-purple-500/15 pt-4 leading-relaxed bg-purple-950/20">
                  {item.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
