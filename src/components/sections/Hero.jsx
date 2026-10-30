import React from "react";
import {
  ShieldCheck,
  Star,
  Calendar,
  ArrowRight,
  Sparkles,
  Heart,
} from "lucide-react";
import { HERO_IMAGES } from "../../assets";

export const Hero = ({ onOpenBooking, onScrollToDoctors }) => {
  return (
    <section className="relative min-h-[90vh] bg-gradient-to-br from-purple-50 via-pink-50/60 to-purple-100/70 text-slate-800 flex items-center overflow-hidden py-12 lg:py-20">
      {/* Resplandores de fondo */}
      <div className="absolute top-12 left-1/4 w-96 h-96 bg-pink-200/40 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-purple-200/50 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Columna Izquierda: Mensaje Principal */}
          <div className="lg:col-span-5 space-y-8 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 border border-purple-200 text-purple-700 text-sm font-medium shadow-sm backdrop-blur-sm">
              <Sparkles size={16} className="text-pink-500" />
              <span>Clínica de Medicina Estética & Cosmetología</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-slate-900">
              Resalta tu belleza natural con{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-rose-400 bg-clip-text text-transparent">
                respaldo médico certificado.
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-slate-600 max-w-xl font-normal leading-relaxed mx-auto lg:mx-0">
              Cuidado facial avanzado y medicina estética personalizada.
              Experimenta atención de alto nivel guiada por nuestros 3
              especialistas.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                onClick={onOpenBooking}
                className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-semibold rounded-2xl shadow-lg shadow-pink-200 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-3 group cursor-pointer"
              >
                <Calendar size={20} />
                <span>Agendar Cita de Valoración</span>
                <ArrowRight
                  size={18}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button
                onClick={onScrollToDoctors}
                className="w-full sm:w-auto px-8 py-4 bg-white/90 hover:bg-white text-purple-800 border border-purple-200 font-semibold rounded-2xl shadow-sm transition-all flex items-center justify-center cursor-pointer"
              >
                Conocer a los Médicos
              </button>
            </div>

            <div className="pt-6 border-t border-purple-200/60 grid grid-cols-3 gap-4 text-center lg:text-left">
              <div>
                <div className="flex items-center justify-center lg:justify-start gap-1 text-amber-500">
                  <Star size={18} fill="currentColor" />
                  <span className="font-bold text-slate-800 text-lg">
                    4.9/5
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  +1,200 Pacientes Atendidas
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center lg:justify-start gap-1 text-purple-600">
                  <ShieldCheck size={18} />
                  <span className="font-bold text-slate-800 text-lg">
                    3 Médicos
                  </span>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Especialistas Certificados
                </p>
              </div>

              <div>
                <div className="font-bold text-slate-800 text-lg">100%</div>
                <p className="text-xs text-slate-500 mt-1">
                  Atención Personalizada
                </p>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Collage de las 7 Imágenes */}
          <div className="lg:col-span-7">
            <div className="relative mx-auto max-w-xl lg:max-w-none">
              <div className="absolute -inset-2 rounded-3xl bg-gradient-to-r from-purple-300 via-pink-300 to-purple-200 opacity-50 blur-xl pointer-events-none" />

              <div className="relative grid grid-cols-12 gap-3 items-center">
                {/* Columna 1 (Fotos 1 y 2) */}
                <div className="col-span-4 space-y-3">
                  <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white transform hover:scale-105 transition-all duration-300">
                    <img
                      src={HERO_IMAGES.main}
                      alt="Estética 1"
                      className="w-full h-32 sm:h-40 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white transform hover:scale-105 transition-all duration-300">
                    <img
                      src={HERO_IMAGES.photo2}
                      alt="Estética 2"
                      className="w-full h-40 sm:h-48 object-cover"
                    />
                  </div>
                </div>

                {/* Columna 2 (Fotos 3, 4 y 5 - Centro destacado) */}
                <div className="col-span-4 space-y-3">
                  <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white transform hover:scale-105 transition-all duration-300">
                    <img
                      src={HERO_IMAGES.photo3}
                      alt="Estética 3"
                      className="w-full h-28 sm:h-32 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white transform hover:scale-105 transition-all duration-300">
                    <img
                      src={HERO_IMAGES.photo4}
                      alt="Estética 4 Principal"
                      className="w-full h-44 sm:h-56 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white transform hover:scale-105 transition-all duration-300">
                    <img
                      src={HERO_IMAGES.photo5}
                      alt="Estética 5"
                      className="w-full h-28 sm:h-32 object-cover"
                    />
                  </div>
                </div>

                {/* Columna 3 (Fotos 6 y 7) */}
                <div className="col-span-4 space-y-3">
                  <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white transform hover:scale-105 transition-all duration-300">
                    <img
                      src={HERO_IMAGES.photo6}
                      alt="Estética 6"
                      className="w-full h-40 sm:h-48 object-cover"
                    />
                  </div>
                  <div className="rounded-2xl overflow-hidden shadow-md border-2 border-white transform hover:scale-105 transition-all duration-300">
                    <img
                      src={HERO_IMAGES.photo7}
                      alt="Estética 7"
                      className="w-full h-32 sm:h-40 object-cover"
                    />
                  </div>
                </div>

                {/* Badge Flotante */}
                <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 bg-white/95 backdrop-blur-md px-5 py-2.5 rounded-full shadow-xl border border-pink-100 flex items-center gap-2.5 whitespace-nowrap z-20">
                  <Heart
                    size={18}
                    fill="currentColor"
                    className="text-pink-500"
                  />
                  <span className="text-xs font-bold text-slate-800">
                    Resultados Estéticos Naturales
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
