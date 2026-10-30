import React from "react";
import {
  Sparkles,
  Gem,
  Activity,
  Zap,
  Feather,
  CheckCircle2,
  CreditCard,
} from "lucide-react";

const iconMap = { Sparkles, Gem, Activity, Zap, Feather };

export default function Services({ services }) {
  if (!services) return null;

  return (
    <section id="procedimientos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mb-4">
            Procedimientos Especializados
          </h2>
          <p className="text-slate-600">
            Tratamientos no invasivos diseñados con tecnología médica de
            vanguardia.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Sparkles;
            return (
              <div
                key={service.id}
                className="bg-gradient-to-b from-purple-50/30 to-pink-50/20 rounded-2xl overflow-hidden border border-pink-100 hover:shadow-xl hover:border-pink-200 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Encabezado con la imagen del servicio */}
                  {service.image && (
                    <div className="relative h-48 w-full overflow-hidden">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                      />
                      <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-md text-purple-700 rounded-xl flex items-center justify-center shadow-md">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <span className="text-xs font-semibold text-purple-600 uppercase tracking-wider">
                      {service.category}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-1 mb-3">
                      {service.name}
                    </h3>
                    <p className="text-slate-600 text-sm mb-6 leading-relaxed">
                      {service.shortDesc}
                    </p>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feat, idx) => (
                        <li
                          key={idx}
                          className="flex items-center text-xs text-slate-700 gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-purple-500 shrink-0" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-pink-100/80">
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-2xl font-bold font-serif text-purple-950">
                      {service.price}
                    </span>
                    <span className="text-xs text-slate-500 font-medium">
                      Duración: {service.duration}
                    </span>
                  </div>
                  <a
                    href={service.mpPaymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-purple-950 hover:bg-purple-800 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 text-sm transition-colors shadow-sm"
                  >
                    <CreditCard className="w-4 h-4" />
                    Reservar con Mercado Pago
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
