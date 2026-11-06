import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { Sparkles, Clock, Calendar as CalendarIcon } from "lucide-react";

export default function BookingAndPayment({ brand }) {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi();
        cal("ui", {
          theme: "light",
          styles: {
            branding: {
              brandColor: brand?.accentColor || "#d8b4fe",
            },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (err) {
        console.error("Error al inicializar Cal.com:", err);
      }
    })();
  }, [brand?.accentColor]);

  const getCalCleanLink = () => {
    if (!brand?.calComUrl) return "demo/30min";
    return brand.calComUrl
      .replace("https://cal.com/", "")
      .replace("http://cal.com/", "");
  };

  return (
    <section id="agendar" className="py-20 lg:py-24 relative overflow-hidden">
      {/* Resplandor suave de difuminación */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-200/30 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white text-purple-900 text-xs font-bold tracking-wider uppercase px-4 py-1.5 rounded-full border border-purple-200 shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-pink-500" />
            <span>Reserva Tu Espacio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-slate-300leading-tight mb-4">
            Agenda Tu Cita en Línea
          </h2>

          <p className="text-slate-300 text-base sm:text-lg font-medium leading-relaxed">
            Selecciona el día y la hora de tu preferencia en el calendario para
            agendar tu valoración.
          </p>
        </div>

        {/* Tarjeta contenedora limpia */}
        <div className="bg-white rounded-3xl p-4 sm:p-8 border border-purple-100 shadow-xl shadow-purple-900/5">
          <div className="flex items-center justify-between pb-4 mb-4 border-b border-purple-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-900 flex items-center justify-center border border-purple-200">
                <CalendarIcon className="w-5 h-5 text-purple-900" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base sm:text-lg">
                  Calendario de Disponibilidad
                </h3>
                <p className="text-xs text-slate-500">
                  Selección directa de horario
                </p>
              </div>
            </div>
            <span className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-purple-950 bg-purple-100/80 px-3 py-1.5 rounded-full border border-purple-200">
              <Clock className="w-3.5 h-3.5 text-pink-500" /> Tiempo Real
            </span>
          </div>

          <div className="w-full rounded-2xl bg-white overflow-hidden border border-purple-100 min-h-[550px]">
            <Cal
              calLink={getCalCleanLink()}
              style={{
                width: "100%",
                height: "100%",
                minHeight: "550px",
                overflow: "scroll",
              }}
              config={{ layout: "month_view", theme: "light" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
