import React from "react";
import { CheckCircle2 } from "lucide-react";

export default function AboutMe({ aboutMe }) {
  return (
    <section id="sobre-mi" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <span className="text-amber-600 font-semibold text-xs uppercase tracking-wider">
              Conoce a tu especialista
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-slate-900 mt-2 mb-4">
              {aboutMe.name}
            </h2>
            <p className="text-sm font-medium text-amber-700 mb-6">
              {aboutMe.role}
            </p>
            <p className="text-slate-600 leading-relaxed mb-6">{aboutMe.bio}</p>
            <div className="space-y-3">
              {aboutMe.credentials.map((cred, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-3 text-sm text-slate-700"
                >
                  <CheckCircle2 className="w-5 h-5 text-amber-600 shrink-0" />
                  <span>{cred}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <div className="rounded-3xl overflow-hidden border-8 border-slate-100 shadow-2xl">
              <img
                src={aboutMe.image}
                alt={aboutMe.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
