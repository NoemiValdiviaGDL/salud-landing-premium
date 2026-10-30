import React from "react";
import { Star } from "lucide-react";

export default function Reviews({ reviews }) {
  return (
    <section id="resenas" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
            Lo Que Dicen Nuestras Pacientes
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((rev) => (
            <div
              key={rev.id}
              className="bg-slate-50 p-8 rounded-2xl border border-slate-100 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-1 text-amber-500 mb-4">
                  {[...Array(rev.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-600 text-sm leading-relaxed mb-6">
                  "{rev.comment}"
                </p>
              </div>
              <div className="border-t border-slate-200/60 pt-4">
                <p className="font-bold text-slate-900 text-sm">{rev.name}</p>
                <p className="text-xs text-amber-700 mt-0.5">{rev.treatment}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
