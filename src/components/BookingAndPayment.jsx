import React from "react";
import { Calendar, CreditCard, CheckCircle2, ArrowRight } from "lucide-react";

export default function BookingAndPayment({ payment, brand }) {
  if (!payment) return null;

  return (
    <section
      id="agendar"
      className="py-20 bg-gradient-to-b from-purple-50/40 to-pink-50/30 border-t border-pink-100"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-purple-600 font-semibold text-xs uppercase tracking-wider">
            Reserva en Línea
          </span>
          <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-2 mb-4">
            {payment.title}
          </h2>
          <p className="text-slate-600">{payment.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 shadow-xl border border-pink-100 min-h-[600px] flex flex-col">
            <div className="flex items-center gap-3 border-b border-pink-50 pb-4 mb-4">
              <Calendar className="w-5 h-5 text-purple-600" />
              <h3 className="font-bold text-slate-900">
                1. Selecciona Fecha y Hora
              </h3>
            </div>
            <iframe
              src={brand?.calComUrl}
              title="Agenda tu cita"
              className="w-full h-[550px] border-0 rounded-2xl"
            ></iframe>
          </div>

          <div className="lg:col-span-5 bg-white rounded-3xl p-8 shadow-xl border border-pink-100">
            <div className="flex items-center gap-3 border-b border-pink-50 pb-4 mb-6">
              <CreditCard className="w-5 h-5 text-purple-600" />
              <h3 className="font-bold text-slate-900">
                2. Anticipo o Pago Total
              </h3>
            </div>

            <div className="bg-gradient-to-r from-pink-50 to-purple-50 rounded-2xl p-6 mb-6 border border-pink-100">
              <p className="text-xs font-semibold text-purple-800 uppercase tracking-wider">
                Monto de Anticipo Sugerido
              </p>
              <p className="text-4xl font-serif font-bold text-purple-950 mt-2">
                {payment.mpDepositAmount}
              </p>
              <p className="text-xs text-purple-900/80 mt-2 leading-relaxed">
                {payment.depositNote}
              </p>
            </div>

            <div className="space-y-4 mb-8">
              <p className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                Métodos aceptados vía Mercado Pago:
              </p>
              <div className="grid grid-cols-2 gap-2">
                {payment.acceptedMethods.map((method, idx) => (
                  <div
                    key={idx}
                    className="bg-slate-50 p-3 rounded-xl text-xs font-medium text-slate-700 flex items-center gap-2 border border-pink-50"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-purple-500 shrink-0" />
                    <span>{method}</span>
                  </div>
                ))}
              </div>
            </div>

            <a
              href={payment.directPaymentLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 shadow-lg shadow-purple-200 transition-all text-base"
            >
              Pagar Anticipo en Mercado Pago
              <ArrowRight className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
