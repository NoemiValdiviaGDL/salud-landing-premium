import React from "react";
import { Calendar, Star } from "lucide-react";

export default function Hero({ hero, brand }) {
  if (!hero) return null;

  return (
    <section className="relative py-20 lg:py-28 bg-gradient-to-b from-pink-50/60 via-purple-50/30 to-slate-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block bg-pink-100 text-purple-900 text-xs font-semibold tracking-wider uppercase px-3 py-1 rounded-full mb-4 border border-pink-200">
              {hero.badge}
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-slate-900 leading-tight mb-6">
              {hero.title}
            </h1>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              {hero.subtitle}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#agendar"
                className="bg-purple-600 hover:bg-purple-700 text-white font-medium px-8 py-4 rounded-xl text-center shadow-lg shadow-purple-200 transition-all flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                {hero.primaryCtaText}
              </a>
              <a
                href="#procedimientos"
                className="bg-white border border-pink-200 text-purple-950 font-medium px-8 py-4 rounded-xl text-center hover:bg-pink-50/50 transition-colors"
              >
                {hero.secondaryCtaText}
              </a>
            </div>
            <div className="grid grid-cols-3 gap-6 border-t border-purple-100/80 pt-8">
              {hero.stats.map((stat, idx) => (
                <div key={idx}>
                  <p className="text-2xl sm:text-3xl font-bold text-purple-950 font-serif">
                    {stat.value}
                  </p>
                  <p className="text-xs text-purple-400 font-medium uppercase tracking-wider mt-1">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl relative z-10 border-4 border-white">
              <img
                src={hero.heroImage}
                alt={brand?.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl z-20 max-w-xs border border-pink-100">
              <div className="flex items-center gap-1 text-pink-400 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-sm font-medium text-slate-800">
                "Los mejores tratamientos y atención súper personalizada."
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
