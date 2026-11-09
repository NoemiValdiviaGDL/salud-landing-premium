import React, { useState } from "react";
import { ChevronDown, ChevronUp, Sparkles, HelpCircle } from "lucide-react";

export default function FAQ({ faq }) {
  const [openFaq, setOpenFaq] = useState(null);

  if (!faq) return null;

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-[#FFF4F8] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white text-[#A782C8] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-[#DCE2E9] shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFA5C4]" />
            Resuelve tus Dudas
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#3A2E4C]">
            Preguntas{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A782C8] via-[#FFA5C4] to-[#8A96C7] drop-shadow-[0_2px_10px_rgba(255,165,196,0.5)]">
              Frecuentes
            </span>
          </h2>
          <p className="text-[#3A2E4C]/80 text-base sm:text-lg mt-3 font-medium">
            Todo lo que necesitas saber antes de tu primera consulta.
          </p>
        </div>

        <div className="space-y-4">
          {faq.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl border border-[#DCE2E9] shadow-sm overflow-hidden transition-all duration-300 hover:border-[#FFA5C4]"
            >
              <button
                onClick={() => toggleFaq(idx)}
                className="w-full p-6 text-left font-bold text-[#3A2E4C] flex items-center justify-between gap-4 text-sm sm:text-base font-serif"
              >
                <span className="flex items-center gap-3">
                  <HelpCircle className="w-5 h-5 text-[#A782C8] shrink-0" />
                  {item.question}
                </span>
                {openFaq === idx ? (
                  <ChevronUp className="w-5 h-5 text-[#FFA5C4] shrink-0" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-[#8A96C7] shrink-0" />
                )}
              </button>

              {openFaq === idx && (
                <div className="px-6 pb-6 text-[#3A2E4C]/80 text-sm border-t border-[#DCE2E9] pt-4 leading-relaxed font-medium bg-[#FFF4F8]/40">
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
