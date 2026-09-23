import React, { useState } from 'react';
import { LANDMARKS, FORM_URL } from '../data/apartments';
import { MapPin, Navigation, Clock, Compass, ArrowUpRight } from 'lucide-react';

export const LocationSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tudo no Entorno' },
    { id: 'Lazer & Natureza', label: 'Natureza & Parques' },
    { id: 'Gastronomia', label: 'Alta Gastronomia' },
    { id: 'Educação & Saúde', label: 'Colégios & Hospitais' },
    { id: 'Acessos', label: 'Vias Expressas & Shoppings' }
  ];

  const filteredLandmarks =
    activeFilter === 'all'
      ? LANDMARKS
      : LANDMARKS.filter((l) => l.category === activeFilter);

  return (
    <section id="localizacao" className="py-24 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">
            Localização Estratégica
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white font-serif-display leading-tight mb-4">
            No centro de tudo o que importa, com a serenidade que você merece.
          </h2>
          <p className="text-base text-slate-300 font-light leading-relaxed">
            Situado no quadrilátero mais nobre da cidade, o Horizonte Prime permite fazer a vida a pé em ruas arborizadas, com acesso instantâneo aos melhores restaurantes, empórios e conveniências.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-2 p-1.5 bg-[#111927] border border-white/10 rounded-xl overflow-x-auto mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow-sm'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 2 Column Layout: Interactive Landmarks & Map Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Landmarks list (Span 7) */}
          <div className="lg:col-span-7 space-y-4">
            {filteredLandmarks.map((item, idx) => (
              <div
                key={idx}
                className="bg-[#111927] border border-white/10 rounded-xl p-5 sm:p-6 flex items-start gap-4 hover:border-amber-400/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center shrink-0">
                  <MapPin className="w-5 h-5 text-amber-400" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2 mb-1">
                    <h3 className="text-base sm:text-lg font-semibold text-white font-serif-display">
                      {item.title}
                    </h3>
                    <span className="text-xs font-semibold text-amber-400 flex items-center gap-1 shrink-0 tabular-nums">
                      <Clock className="w-3.5 h-3.5" />
                      {item.distance}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-2">
                    {item.detail}
                  </p>
                  <div className="text-[11px] text-slate-400">
                    {item.category}
                  </div>
                </div>
              </div>
            ))}

            <div className="pt-2">
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 hover:underline"
              >
                <span>Solicitar mapa completo e dossiê do bairro</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Interactive Styled Map / Radar Card (Span 5) */}
          <div className="lg:col-span-5 bg-[#111927] border border-white/10 rounded-2xl p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
            {/* Top info */}
            <div>
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-white/10 pb-4 mb-6">
                <span className="flex items-center gap-1.5 text-amber-300 font-medium">
                  <Compass className="w-4 h-4" />
                  Localização Nobre
                </span>
                <span className="text-slate-400">Jardins / Bairro Prime</span>
              </div>

              <h3 className="text-2xl font-serif-display font-semibold text-white mb-3">
                Mobilidade sem trânsito
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Você a poucos passos dos principais polos culturais, gastronômicos e corporativos da metrópole. Economize até 2 horas do seu dia em deslocamentos.
              </p>
            </div>

            {/* Simulated Radar / Aerial Map Visual */}
            <div className="relative aspect-square w-full rounded-xl bg-[#090d14] border border-white/10 p-4 flex items-center justify-center overflow-hidden my-4">
              {/* Aerial satellite photographic backdrop */}
              <img
                src="https://images.unsplash.com/photo-1519999482648-25049ddd37b1?auto=format&fit=crop&w=800&q=80"
                alt="Vista aérea do bairro nobre e parque adjacente"
                className="absolute inset-0 w-full h-full object-cover opacity-25 filter grayscale contrast-125"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#090d14] via-[#090d14]/60 to-[#090d14]/70" />

              {/* Concentric distance rings */}
              <div className="absolute w-4/5 h-4/5 rounded-full border border-dashed border-amber-400/20" />
              <div className="absolute w-3/5 h-3/5 rounded-full border border-dashed border-amber-400/30" />
              <div className="absolute w-2/5 h-2/5 rounded-full border border-amber-400/40" />

              {/* Central pulse (The Building) */}
              <div className="relative z-10 flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-amber-400 text-slate-950 flex items-center justify-center shadow-lg shadow-amber-400/40 font-bold text-xs animate-bounce">
                  <Navigation className="w-5 h-5 fill-current" />
                </div>
                <span className="mt-2 text-xs font-semibold text-white bg-slate-900/90 border border-white/10 px-2 py-0.5 rounded shadow">
                  Horizonte Prime
                </span>
              </div>

              {/* Surrounding points */}
              <div className="absolute top-6 left-8 bg-black/70 backdrop-blur-md px-2 py-1 rounded text-[10px] text-slate-200 border border-white/15 shadow">
                Parque Central (2 min)
              </div>
              <div className="absolute bottom-8 right-6 bg-black/70 backdrop-blur-md px-2 py-1 rounded text-[10px] text-slate-200 border border-white/15 shadow">
                Polo Gastronômico (4 min)
              </div>
              <div className="absolute top-10 right-8 bg-black/70 backdrop-blur-md px-2 py-1 rounded text-[10px] text-slate-200 border border-white/15 shadow">
                Shopping Iguatemi (6 min)
              </div>
            </div>

            {/* Tenho Interesse CTA Button */}
            <div className="pt-4 border-t border-white/10">
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 px-5 py-3.5 rounded-lg text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
              >
                <span>Tenho Interesse na Localização</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
