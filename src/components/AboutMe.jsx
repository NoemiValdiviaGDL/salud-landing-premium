import React from "react";
import {
  Sparkles,
  CheckCircle2,
  Award,
  HeartHandshake,
  ShieldCheck,
} from "lucide-react";

export default function AboutMe({ aboutMe }) {
  if (!aboutMe) return null;

  return (
    <section
      id="sobre-mi"
      className="py-24 bg-gradient-to-b from-slate-950 via-purple-950 to-slate-900 text-white relative overflow-hidden"
    >
      {/* Resplandores de luz de fondo */}
      <div className="absolute top-1/3 -right-24 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 -left-24 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Fotografía de la Especialista */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-2 border-pink-500/30 relative z-10 bg-slate-900">
                <img
                  src={aboutMe.image}
                  alt={aboutMe.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-950/80 via-transparent to-transparent" />
              </div>

              {/* Insignia Flotante de Experiencia */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-slate-900/90 backdrop-blur-xl p-4 sm:p-5 rounded-2xl border border-pink-500/30 shadow-xl shadow-pink-500/10 z-20 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-pink-500 to-purple-600 flex items-center justify-center text-white shrink-0 shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-pink-300 font-bold uppercase tracking-wider">
                    Trayectoria
                  </p>
                  <p className="text-sm font-extrabold text-white">
                    8+ Años de Excelencia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Biografía & Credenciales */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-pink-500/10 text-pink-300 text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full border border-pink-500/20 backdrop-blur-md mb-4 shadow-lg shadow-pink-500/10">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              Especialista Certificada
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-extrabold text-white leading-tight mb-3">
              {aboutMe.name}
            </h2>
            <p className="text-sm sm:text-base font-semibold text-transparent bg-clip-text bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 mb-6">
              {aboutMe.role}
            </p>

            <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 bg-slate-900/60 p-6 rounded-2xl border border-purple-500/20 backdrop-blur-sm">
              {aboutMe.bio}
            </p>

            <div className="space-y-3 mb-8">
              <p className="text-xs font-bold uppercase tracking-wider text-pink-400 mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" /> Respaldada por Cédula &
                Certificaciones:
              </p>
              {aboutMe.credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-xs sm:text-sm text-slate-200 bg-purple-950/40 p-3 rounded-xl border border-purple-500/15"
                >
                  <CheckCircle2 className="w-4 h-4 text-pink-400 shrink-0" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-800/80 flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-slate-400">
                <HeartHandshake className="w-4 h-4 text-pink-400" />
                <span>Atención cálida, personalizada y 100% segura</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
