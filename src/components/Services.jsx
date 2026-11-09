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

  const cleanPhone =
    brand?.whatsappNumber?.replace(/[^0-9]/g, "") || "3327825329";

  return (
    <section
      id="procedimientos"
      className="py-24 bg-[#FFF4F8] relative overflow-hidden"
    >
      {/* Difuminado de transición */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#8A96C7]/15 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado Llamativo */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-[#A782C8] font-black text-xs uppercase tracking-widest bg-white px-4 py-2 rounded-full border border-[#DCE2E9] shadow-sm inline-block mb-3">
            Catálogo de Transformación
          </span>
          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#3A2E4C] leading-tight">
            Elige el Tratamiento Ideal{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A782C8] via-[#FFA5C4] to-[#8A96C7] drop-shadow-[0_2px_10px_rgba(167,130,200,0.4)]">
              para Tu Piel
            </span>
          </h2>
          <p className="text-[#3A2E4C]/80 text-base sm:text-lg mt-3 font-medium">
            Protocolos médicos y cosmetológicos de alta precisión adaptados a
            tus objetivos de belleza.
          </p>
        </div>

        {/* Grid de 6 Tarjetas Perfectamente Balanceadas */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const IconComponent = iconMap[service.icon] || Sparkles;

            const whatsappMessage = `¡Hola Dra. Valeria! Quisiera solicitar información y agendar cita para el procedimiento: *${service.name}*.`;
            const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(whatsappMessage)}`;

            return (
              <div
                key={service.id}
                className="bg-white rounded-3xl overflow-hidden border border-[#DCE2E9] shadow-md hover:shadow-2xl hover:border-[#FFA5C4] transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {service.image && (
                    <div className="relative h-56 w-full overflow-hidden bg-[#DCE2E9]/40">
                      <img
                        src={service.image}
                        alt={service.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-4 left-4 bg-[#3A2E4C]/90 backdrop-blur-md text-white text-[11px] font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider">
                        {service.category}
                      </div>
                      <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md text-[#A782C8] rounded-2xl flex items-center justify-center shadow-md">
                        <IconComponent className="w-5 h-5" />
                      </div>
                    </div>
                  )}

                  <div className="p-6">
                    <h3 className="text-xl font-bold font-serif text-[#3A2E4C] mb-2">
                      {service.name}
                    </h3>
                    <p className="text-[#3A2E4C]/70 text-xs sm:text-sm mb-6 leading-relaxed font-medium">
                      {service.shortDesc}
                    </p>

                    <div className="space-y-2 mb-6">
                      <p className="text-[11px] font-black text-[#A782C8] uppercase tracking-wider">
                        Beneficios Clave:
                      </p>
                      {service.features?.map((feat, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-xs text-[#3A2E4C]/90 font-medium gap-2"
                        >
                          <CheckCircle2 className="w-4 h-4 text-[#FFA5C4] shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Pie con WhatsApp Directo */}
                <div className="px-6 pb-6 pt-4 border-t border-[#DCE2E9] bg-[#FFF4F8]/50">
                  <div className="flex items-baseline justify-between mb-4">
                    <div>
                      <span className="text-xs text-[#3A2E4C]/60 font-semibold block">
                        Inversión:
                      </span>
                      <span className="text-2xl font-black font-serif text-[#3A2E4C]">
                        {service.price}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-[#A782C8] bg-white px-3 py-1 rounded-full border border-[#DCE2E9] shadow-sm">
                      {service.duration}
                    </span>
                  </div>

                  <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-[#3A2E4C] hover:bg-[#A782C8] text-white font-extrabold py-3.5 rounded-2xl flex items-center justify-center gap-2 text-sm shadow-md transition-all duration-300 uppercase tracking-wider"
                  >
                    Quiero este cambio
                    <ArrowRight className="w-4 h-4 text-[#FFA5C4]" />
                  </a>

                  <p className="text-[10px] text-center text-[#3A2E4C]/60 mt-2.5 flex items-center justify-center gap-1 font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#A782C8]" />{" "}
                    Consulta directa por WhatsApp
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
