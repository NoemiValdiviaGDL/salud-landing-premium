import React, { useEffect, useState } from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import {
  Calendar as CalendarIcon,
  ShieldCheck,
  Clock,
  CheckCircle2,
  CreditCard,
  ArrowRight,
  Sparkles,
  BadgePercent,
  CircleDollarSign,
  MessageSquare,
} from "lucide-react";

export default function BookingAndPayment({ payment, brand, services }) {
  const [paymentMode, setPaymentMode] = useState("deposit");
  const [selectedServiceId, setSelectedServiceId] = useState(
    services?.[0]?.id || "",
  );

  const currentService =
    services?.find((s) => s.id === selectedServiceId) || services?.[0];

  useEffect(() => {
    (async function () {
      try {
        const cal = await getCalApi();
        cal("ui", {
          theme: "dark",
          styles: {
            branding: {
              brandColor: "#ec4899",
            },
          },
          hideEventTypeDetails: false,
          layout: "month_view",
        });
      } catch (err) {
        console.error("Error al inicializar Cal.com:", err);
      }
    })();
  }, []);

  const handlePaymentAndWhatsApp = () => {
    const paymentUrl =
      paymentMode === "deposit"
        ? payment?.directPaymentLink
        : currentService?.mpPaymentLink || payment?.directPaymentLink;

    const selectedTitle =
      paymentMode === "deposit"
        ? `Anticipo de Cita (${payment?.mpDepositAmount || "$500 MXN"})`
        : `Pago Total: ${currentService?.name || "Tratamiento"}`;

    const messageText = `*NUEVO AGENDAMIENTO Y PAGO* 🌸
--------------------------------
*Concepto:* ${selectedTitle}
*Tratamiento Seleccionado:* ${currentService?.name || "Consulta General"}

_He seleccionado mi horario en el calendario y procedo a realizar mi pago por Mercado Pago para congelar la cita._`;

    const cleanPhone = brand?.whatsappNumber?.replace(/[^0-9]/g, "") || "";
    const whatsappUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(messageText)}`;

    window.open(paymentUrl, "_blank");

    setTimeout(() => {
      window.open(whatsappUrl, "_blank");
    }, 800);
  };

  // Extraer únicamente el enlace corto o identificador de la URL de Cal.com
  const getCalCleanLink = () => {
    if (!brand?.calComUrl) return "demo/30min";
    return brand.calComUrl
      .replace("https://cal.com/", "")
      .replace("http://cal.com/", "");
  };

  return (
    <section
      id="agendar"
      className="py-24 bg-gradient-to-b from-slate-900 via-purple-950 to-slate-950 text-white relative overflow-hidden"
    >
      {/* Resplandor de fondo */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-pink-500/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Encabezado Principal de la Sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-pink-500/10 text-pink-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-pink-500/20 backdrop-blur-md mb-4 shadow-lg shadow-pink-500/10">
            <Sparkles className="w-3.5 h-3.5 text-pink-400" />
            Reserva Directa
          </div>
          <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white leading-tight mb-4">
            {payment?.title || "Agenda Tu Cita en Línea"}
          </h2>
          <p className="text-slate-300 text-base sm:text-lg">
            Selecciona tu horario disponible en la agenda e ingresa tu anticipo
            vía Mercado Pago para asegurar tu espacio en la clínica.
          </p>
        </div>

        {/* Contenedor principal en 2 columnas fijas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Columna 1: Calendario Cal.com Embed */}
          <div className="lg:col-span-7 bg-slate-900/80 backdrop-blur-xl rounded-3xl p-6 border border-purple-500/20 shadow-2xl flex flex-col min-h-[600px]">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-purple-500/20">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-xl bg-pink-500/20 text-pink-400 flex items-center justify-center border border-pink-500/30 font-bold">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-white text-lg">
                    Selecciona Fecha y Hora
                  </h3>
                  <p className="text-xs text-slate-400">
                    Disponibilidad sincronizada en vivo
                  </p>
                </div>
              </div>
              <span className="hidden sm:flex items-center gap-1 text-[11px] font-semibold text-pink-300 bg-pink-500/10 px-3 py-1 rounded-full border border-pink-500/20">
                <Clock className="w-3.5 h-3.5 text-pink-400" /> Tiempo real
              </span>
            </div>

            <div className="w-full flex-grow rounded-2xl bg-slate-950 overflow-hidden border border-purple-500/10 min-h-[520px]">
              <Cal
                calLink={getCalCleanLink()}
                style={{
                  width: "100%",
                  height: "100%",
                  minHeight: "520px",
                  overflow: "scroll",
                }}
                config={{ layout: "month_view", theme: "dark" }}
              />
            </div>
          </div>

          {/* Columna 2: Pago en Mercado Pago & WhatsApp */}
          <div className="lg:col-span-5 bg-slate-900/80 backdrop-blur-xl rounded-3xl p-8 border border-purple-500/20 shadow-2xl">
            <div className="flex items-center gap-3 border-b border-purple-500/20 pb-4 mb-6">
              <div className="w-9 h-9 rounded-xl bg-purple-500/20 text-purple-300 flex items-center justify-center border border-purple-500/30 font-bold">
                2
              </div>
              <div>
                <h3 className="font-bold text-white text-lg">
                  Confirma Tu Reserva
                </h3>
                <p className="text-xs text-slate-400">
                  Anticipo seguro con Mercado Pago
                </p>
              </div>
            </div>

            {/* Selector de Anticipo vs Pago Total */}
            <div className="grid grid-cols-2 gap-2 bg-slate-950 p-1.5 rounded-2xl border border-purple-500/20 mb-6">
              <button
                type="button"
                onClick={() => setPaymentMode("deposit")}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  paymentMode === "deposit"
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <BadgePercent className="w-4 h-4" />
                Anticipo ($500)
              </button>

              <button
                type="button"
                onClick={() => setPaymentMode("full")}
                className={`py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-1.5 ${
                  paymentMode === "full"
                    ? "bg-gradient-to-r from-pink-600 to-purple-600 text-white shadow-md"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                <CircleDollarSign className="w-4 h-4" />
                Pago Total
              </button>
            </div>

            {/* Caja de Información de Cobro */}
            {paymentMode === "deposit" ? (
              <div className="bg-gradient-to-r from-pink-500/20 via-purple-600/20 to-pink-500/10 rounded-2xl p-6 mb-6 border border-pink-500/30">
                <p className="text-xs font-bold text-pink-300 uppercase tracking-wider">
                  Monto de Anticipo
                </p>
                <p className="text-4xl font-serif font-extrabold text-white mt-2">
                  {payment?.mpDepositAmount || "$500 MXN"}
                </p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  {payment?.depositNote}
                </p>
              </div>
            ) : (
              <div className="bg-gradient-to-r from-purple-600/20 via-pink-500/20 to-purple-600/10 rounded-2xl p-6 mb-6 border border-purple-500/30">
                <label className="text-xs font-bold text-purple-300 uppercase tracking-wider block mb-2">
                  Tratamiento a Liquidar:
                </label>
                <select
                  value={selectedServiceId}
                  onChange={(e) => setSelectedServiceId(e.target.value)}
                  className="w-full bg-slate-950 text-white text-xs font-semibold rounded-xl p-3 border border-purple-500/30 focus:outline-none mb-3"
                >
                  {services?.map((serv) => (
                    <option key={serv.id} value={serv.id}>
                      {serv.name} — {serv.price}
                    </option>
                  ))}
                </select>
                <div className="flex items-baseline justify-between border-t border-purple-500/20 pt-3">
                  <span className="text-xs text-slate-300">
                    Total a abonar:
                  </span>
                  <span className="text-3xl font-serif font-extrabold text-pink-300">
                    {currentService?.price}
                  </span>
                </div>
              </div>
            )}

            {/* Métodos Aceptados */}
            <div className="space-y-3 mb-8">
              <p className="text-xs font-bold text-slate-400 uppercase tracking-wider">
                Aceptados vía Mercado Pago:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {payment?.acceptedMethods?.map((method, idx) => (
                  <div
                    key={idx}
                    className="bg-purple-950/40 p-3 rounded-xl text-xs font-medium text-slate-200 flex items-center gap-2 border border-purple-500/15"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-pink-400 shrink-0" />
                    <span className="truncate">{method}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Botón de Acción */}
            <button
              type="button"
              onClick={handlePaymentAndWhatsApp}
              className="w-full bg-gradient-to-r from-pink-600 to-purple-600 hover:from-pink-500 hover:to-purple-500 text-white font-extrabold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-pink-500/20 transition-all text-sm sm:text-base border border-pink-400/30 mb-4"
            >
              <CreditCard className="w-5 h-5" />
              Pagar $500 y Enviar WhatsApp
              <ArrowRight className="w-5 h-5" />
            </button>

            <div className="bg-purple-950/40 p-3.5 rounded-xl border border-purple-500/15">
              <p className="text-[11px] text-slate-300 leading-relaxed text-center flex items-center justify-center gap-1.5">
                <MessageSquare className="w-4 h-4 text-emerald-400 shrink-0" />
                Se abrirá Mercado Pago y tu mensaje de confirmación al instante.
              </p>
            </div>

            <p className="text-[11px] text-center text-slate-400 mt-4 flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-emerald-400" /> Transacción
              100% encriptada y segura
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
