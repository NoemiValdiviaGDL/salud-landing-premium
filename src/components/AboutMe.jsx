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
      className="py-24 bg-[#FFF4F8] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Foto Especialista */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl border-4 border-white relative z-10 bg-[#DCE2E9]">
                <img
                  src={aboutMe.image}
                  alt={aboutMe.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-5 rounded-2xl border border-[#DCE2E9] shadow-xl z-20 flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#A782C8] to-[#FFA5C4] flex items-center justify-center text-white shrink-0 shadow-md">
                  <Award className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs text-[#A782C8] font-black uppercase tracking-wider">
                    Trayectoria
                  </p>
                  <p className="text-sm font-black text-[#3A2E4C]">
                    8+ Años de Excelencia
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Credenciales */}
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-white text-[#A782C8] text-xs font-bold tracking-widest uppercase px-4 py-2 rounded-full border border-[#DCE2E9] shadow-sm mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#FFA5C4]" />
              Especialista Certificada
            </div>

            <h2 className="text-3xl sm:text-5xl font-serif font-black text-[#3A2E4C] mb-2">
              {aboutMe.name}
            </h2>
            <p className="text-sm sm:text-base font-bold text-[#A782C8] mb-6">
              {aboutMe.role}
            </p>

            <p className="text-[#3A2E4C]/80 text-sm sm:text-base leading-relaxed mb-8 bg-white p-6 rounded-2xl border border-[#DCE2E9] shadow-sm font-medium">
              {aboutMe.bio}
            </p>

            <div className="space-y-3 mb-8">
              <p className="text-xs font-black uppercase tracking-wider text-[#3A2E4C] mb-2 flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#A782C8]" /> Respaldada
                por Cédula & Certificaciones:
              </p>
              {aboutMe.credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-xs sm:text-sm text-[#3A2E4C] bg-white p-3.5 rounded-xl border border-[#DCE2E9] shadow-sm font-medium"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#FFA5C4] shrink-0" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-[#DCE2E9] flex items-center gap-4">
              <div className="flex items-center gap-2 text-xs text-[#3A2E4C]/70 font-bold">
                <HeartHandshake className="w-4 h-4 text-[#FFA5C4]" />
                <span>Atención cálida, personalizada y 100% segura</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
