import React from "react";
import {
  Sparkles,
  Gem,
  Activity,
  Zap,
  Feather,
  CheckCircle2,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const iconMap = { Sparkles, Gem, Activity, Zap, Feather };

export default function Services({ services, brand }) {
  if (!services) return null;

  // Limpiar el número de teléfono para la URL de WhatsApp
  const cleanPhone =
    brand?.whatsappNumber?.replace(/[^0-9]/g, "") || "523300000000";

  return (
    <section id="procedimientos" className="py-24 relative overflow-hidden">
      {/* Resplandor suave de difuminación */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-pink-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-purple-900 font-bold text-xs uppercase tracking-widest bg-white px-3.5 py-1.5 rounded-full border border-purple-200 shadow-sm">
            Catálogo de Transformación
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-300 mt-4 mb-4">
            Elige el Tratamiento Ideal para Tu Piel
          </h2>
          <p className="text-slate-200 text-sm sm:text-base">
            Protocolos médicos y estéticos no invasivos diseñados a tu medida
            con resultados naturales.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Sparkles;

            // Mensaje prellenado específico para cada tratamiento
            const whatsappMessage = `¡Hola Dra. Valeria! Quisiera solicitar información y agendar cita para el procedimiento: *${service.name}*.`;
            const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(whatsappMessage)}`;

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-purple-100 shadow-md hover:shadow-2xl hover:border-pink-300 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {service.image && (
                    <div className="relative h-52 w-full overflow-hidden bg-purple-50">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3 bg-purple-950/80 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full">
                        {service.category}
                      </div>
                      <div className="absolute top-3 right-3 w-10 h-10 bg-white/90 backdrop-blur-md text-purple-700 rounded-xl flex items-center justify-center shadow-md">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-slate-900 mb-2">
                      {service.name}
                    </h3>
                    <p className="text-slate-600 text-xs sm:text-sm mb-6 leading-relaxed">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-2 mb-6">
                      <p className="text-[11px] font-bold text-purple-900 uppercase tracking-wider">
                        Beneficios Clave:
                      </p>
                      {service.features?.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-xs text-slate-700 gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-purple-700 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-purple-100 bg-purple-50/30">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-xs text-slate-400 block font-medium">
                        Inversión:
                      </span>
                      <span className="text-2xl font-bold font-serif text-purple-950">
                        {service.price}
                      </span>
                    </div>
                    <span className="text-[11px] font-semibold text-purple-800 bg-purple-100 px-2.5 py-1 rounded-full border border-purple-200">
                      Duración: {service.duration}
                    </span>
                  </div>

                  {/* Botón directo a WhatsApp */}
                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-purple-950 hover:bg-purple-900 text-white font-bold py-3.5 rounded-xl flex items-center justify-center gap-2 text-sm shadow-md transition-all group-hover:shadow-purple-200"
                  >
                    Quiero este cambio
                    <ArrowRight className="w-4 h-4" />
                  </a>

                  <p className="text-[10px] text-center text-slate-400 mt-2 flex items-center justify-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-purple-700" /> Atención
                    médica directa vía WhatsApp
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
