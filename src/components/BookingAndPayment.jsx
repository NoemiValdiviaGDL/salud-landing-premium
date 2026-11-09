import React, { useEffect } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import {
  Sparkles,
  Clock,
  Calendar as CalendarIcon,
  MessageCircle,
  Phone,
  ShieldCheck,
  CheckCircle2,
} from "lucide-react";

export default function BookingAndPayment({ brand }) {
  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi();
        cal("ui", {
          theme: "light",
          styles: {
            branding: {
              brandColor: brand?.accentColor || "#A782C8",
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

  const cleanPhone =
    brand?.whatsappNumber?.replace(/[^0-9]/g, "") || "3327825329";

  const whatsappBookingUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
    "¡Hola Dra. Valeria! Revisé la disponibilidad en la página y me gustaría agendar una cita de valoración.",
  )}`;

  return (
    <section
      id="agendar"
      className="py-24 bg-[#FFF4F8] relative overflow-hidden"
    >
      {/* Resplandor de fondo con la paleta */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-[#A782C8]/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado enfocado en Disponibilidad */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-white text-[#A782C8] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-[#DCE2E9] shadow-sm mb-4">
            <Sparkles className="w-3.5 h-3.5 text-[#FFA5C4]" />
            <span>Horarios en Tiempo Real</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#3A2E4C] leading-tight mb-4">
            Consulta Nuestra{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A782C8] via-[#FFA5C4] to-[#8A96C7] drop-shadow-[0_2px_10px_rgba(255,165,196,0.4)]">
              Disponibilidad
            </span>
          </h2>

          <p className="text-[#3A2E4C]/80 text-base sm:text-lg font-medium leading-relaxed">
            Explora los días y horas disponibles en el calendario interactivo.
            LOS HORARIOS QUE VES EN PANTALLA SON LOS ESPACIOS DISPONIBLES Una
            vez que encuentres tu horario ideal, **confírmalo directamente por
            WhatsApp o llamada** para asegurar tu espacio.
          </p>
        </div>

        {/* Tarjeta Contenedora Principal */}
        <div className="bg-white rounded-3xl p-4 sm:p-8 border border-[#DCE2E9] shadow-xl">
          {/* Barra Superior Informativa */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 mb-6 border-b border-[#DCE2E9] gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-[#FFF4F8] text-[#A782C8] flex items-center justify-center border border-[#DCE2E9] shrink-0">
                <CalendarIcon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold font-serif text-[#3A2E4C] text-base sm:text-lg">
                  Agenda de la Doctora
                </h3>
                <p className="text-xs text-[#3A2E4C]/60 font-semibold">
                  Sincronización en vivo
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <span className="flex items-center gap-1.5 text-xs font-extrabold text-[#A782C8] bg-[#FFF4F8] px-3.5 py-1.5 rounded-full border border-[#DCE2E9]">
                <Clock className="w-3.5 h-3.5 text-[#FFA5C4]" /> 100%
                Actualizado
              </span>
            </div>
          </div>

          {/* Embed de Cal.com solo para visualización de horarios */}
          <div className="w-full rounded-2xl bg-white overflow-hidden border border-[#DCE2E9] min-h-[500px] mb-8">
            <Cal
              calLink={getCalCleanLink()}
              style={{
                width: "100%",
                height: "100%",
                minHeight: "500px",
                overflow: "scroll",
              }}
              config={{ layout: "month_view", theme: "light" }}
            />
          </div>

          {/* Bloque CTA de Confirmación Directa (Filtro Anti-Spam) */}
          <div className="bg-[#FFF4F8] rounded-2xl p-6 border border-[#DCE2E9] text-center">
            <h4 className="font-serif font-black text-[#3A2E4C] text-lg sm:text-xl mb-2">
              ¿Encontraste un horario conveniente?
            </h4>
            <p className="text-xs sm:text-sm text-[#3A2E4C]/80 mb-6 font-medium max-w-xl mx-auto">
              Haz clic abajo para apartar tu lugar al instante. Coordinamos tus
              datos directamente para garantizar atención personalizada.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {/* Botón WhatsApp */}
              <a
                href={whatsappBookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto bg-gradient-to-r from-[#FFA5C4] to-[#A782C8] hover:from-[#ff8cb3] hover:to-[#966fc0] text-white font-extrabold px-8 py-4 rounded-2xl flex items-center justify-center gap-2.5 text-sm shadow-lg shadow-[#FFA5C4]/30 hover:shadow-xl transition-all duration-300 uppercase tracking-wider"
              >
                <MessageCircle className="w-5 h-5 fill-current" />
                Agendar por WhatsApp
              </a>

              {/* Botón Llamada Directa */}
              <a
                href={`tel:+${cleanPhone}`}
                className="w-full sm:w-auto bg-[#3A2E4C] hover:bg-[#A782C8] text-white font-extrabold px-8 py-4 rounded-2xl flex items-center justify-center gap-2.5 text-sm shadow-md transition-all duration-300 uppercase tracking-wider"
              >
                <Phone className="w-4 h-4" />
                Llamar al Consultorio
              </a>
            </div>

            <div className="mt-4 flex flex-wrap items-center justify-center gap-4 text-[11px] font-bold text-[#3A2E4C]/70">
              <span className="flex items-center gap-1">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#FFA5C4]" />{" "}
                Respuesta inmediata
              </span>
              <span className="flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5 text-[#A782C8]" /> Sin
                agendamientos no deseados
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
