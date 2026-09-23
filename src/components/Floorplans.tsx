import React, { useState } from 'react';
import { TYPOLOGIES, FORM_URL, Typology } from '../data/apartments';
import {
  Maximize2,
  BedDouble,
  Car,
  Bath,
  ArrowUpRight,
  CheckCircle2,
  Sparkles,
  Layers
} from 'lucide-react';

export const Floorplans: React.FC = () => {
  const [selectedId, setSelectedId] = useState<string>(TYPOLOGIES[1].id); // default to Conforto 88m²

  const selectedTypology: Typology =
    TYPOLOGIES.find((t) => t.id === selectedId) || TYPOLOGIES[0];

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="plantas" className="py-24 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">
              Plantas & Metragens
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white font-serif-display leading-tight">
              Escolha a dimensão ideal para o seu estilo de vida.
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md">
            Unidades inteligentes projetadas com circulação funcional, ventilação cruzada e amplas varandas gourmet.
          </p>
        </div>

        {/* Interactive Segmented Filter Controls */}
        <div className="flex items-center gap-2 p-1.5 bg-[#111927] border border-white/10 rounded-xl overflow-x-auto mb-10 scrollbar-none">
          {TYPOLOGIES.map((typology) => {
            const isActive = typology.id === selectedId;
            return (
              <button
                key={typology.id}
                onClick={() => setSelectedId(typology.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs sm:text-sm font-medium whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-amber-400 text-slate-950 font-semibold shadow-md'
                    : 'text-slate-300 hover:text-white hover:bg-white/5'
                }`}
              >
                <span>{typology.area} m²</span>
                <span className="opacity-70 font-normal">· {typology.bedrooms} {typology.bedrooms === 1 ? 'dorm.' : 'dormitórios'}</span>
              </button>
            );
          })}
        </div>

        {/* Selected Typology Detail Card */}
        <div className="bg-[#111927] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Architectural Schematic / Floorplan Representation (Span 6) */}
          <div className="lg:col-span-6 flex flex-col items-center justify-center">
            <div className="w-full aspect-[4/3] bg-[#090d14] rounded-xl border border-white/10 p-6 relative flex flex-col justify-between overflow-hidden shadow-inner group">
              {/* Subtle Grid Blueprint background */}
              <div
                className="absolute inset-0 opacity-15 pointer-events-none"
                style={{
                  backgroundImage:
                    'radial-gradient(circle at 1px 1px, rgba(251, 191, 36, 0.4) 1px, transparent 0)',
                  backgroundSize: '24px 24px'
                }}
              />

              {/* Top bar of the floorplan viewer */}
              <div className="relative z-10 flex items-center justify-between text-xs text-slate-400 border-b border-white/10 pb-3">
                <span className="font-mono uppercase tracking-wider text-amber-300/80 flex items-center gap-1.5">
                  <Layers className="w-3.5 h-3.5" />
                  Planta Arquitetônica Oficial
                </span>
                <span className="font-mono">{selectedTypology.area} m² privativos</span>
              </div>

              {/* Graphic Blueprint Layout Visual */}
              <div className="relative z-10 my-4 flex-1 flex items-center justify-center">
                <div className="w-full h-full max-h-56 border-2 border-dashed border-amber-400/30 rounded-lg p-3 flex flex-col justify-between bg-amber-400/[0.02]">
                  {/* Living and Gourmet */}
                  <div className="h-1/2 border border-white/15 rounded bg-white/[0.03] p-2 flex items-center justify-between mb-2">
                    <div className="text-left">
                      <span className="text-[11px] font-semibold text-white block">Living & Jantar</span>
                      <span className="text-[10px] text-slate-400">Piso em porcelanato 120x120</span>
                    </div>
                    <div className="bg-amber-400/10 border border-amber-400/30 px-2 py-1 rounded text-right">
                      <span className="text-[10px] text-amber-300 font-medium block">Varanda Gourmet</span>
                      <span className="text-[9px] text-slate-400">Churrasqueira a carvão</span>
                    </div>
                  </div>

                  {/* Private Suites */}
                  <div className="h-1/2 grid grid-cols-2 gap-2">
                    <div className="border border-white/15 rounded bg-white/[0.03] p-2">
                      <span className="text-[11px] font-semibold text-white block">Suíte Master</span>
                      <span className="text-[9px] text-slate-400">Closet + Banheiro privativo</span>
                    </div>
                    <div className="border border-white/15 rounded bg-white/[0.03] p-2">
                      <span className="text-[11px] font-semibold text-white block">
                        {selectedTypology.suites > 1 ? 'Suíte 2' : 'Cozinha Gourmet'}
                      </span>
                      <span className="text-[9px] text-slate-400">Ponto para lava-louças e coifa</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom floorplan notes */}
              <div className="relative z-10 flex items-center justify-between text-[11px] text-slate-400 pt-3 border-t border-white/10">
                <span>{selectedTypology.floorplanType}</span>
                <span className="text-amber-400 font-medium">Acesso com Biometria</span>
              </div>
            </div>

            <p className="text-xs text-slate-400 mt-3 text-center">
              Plantas com possibilidade de layout flexível e personalização de acabamentos.
            </p>
          </div>

          {/* Details & Specs (Span 6) */}
          <div className="lg:col-span-6 flex flex-col justify-between">
            <div>
              {/* Unboxed category & metadata */}
              <div className="flex items-center gap-2 text-xs text-amber-400 font-medium tracking-wide mb-2">
                <Sparkles className="w-4 h-4" />
                <span>{selectedTypology.floorplanType}</span>
                <span aria-hidden="true">·</span>
                <span className="text-slate-400">{selectedTypology.idealFor}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-serif-display font-semibold text-white mb-3">
                {selectedTypology.name}
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                {selectedTypology.description}
              </p>

              {/* Numeric Specs Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-6 p-4 bg-[#0d131f] border border-white/10 rounded-xl">
                <div className="flex items-center gap-2.5">
                  <Maximize2 className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">Área Privativa</span>
                    <span className="text-sm font-semibold text-white tabular-nums">
                      {selectedTypology.area} m²
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <BedDouble className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">Dormitórios</span>
                    <span className="text-sm font-semibold text-white tabular-nums">
                      {selectedTypology.bedrooms} ({selectedTypology.suites} {selectedTypology.suites === 1 ? 'suíte' : 'suítes'})
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Bath className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">Banheiros</span>
                    <span className="text-sm font-semibold text-white tabular-nums">
                      {selectedTypology.bathrooms} banheiros
                    </span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5">
                  <Car className="w-5 h-5 text-amber-400 shrink-0" />
                  <div>
                    <span className="text-xs text-slate-400 block">Vagas</span>
                    <span className="text-sm font-semibold text-white tabular-nums">
                      {selectedTypology.parkingSpots} cobertas
                    </span>
                  </div>
                </div>
              </div>

              {/* Key Features bullet points */}
              <div className="space-y-2.5 mb-8">
                {selectedTypology.features.map((feature, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-300">
                    <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Price & Action Block */}
            <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 block">Investimento a partir de</span>
                <span className="text-2xl sm:text-3xl font-bold font-serif-display text-white tabular-nums">
                  {formatCurrency(selectedTypology.startingPrice)}
                </span>
                <span className="text-[11px] text-slate-400 block mt-0.5">
                  Fluxo facilitado durante o período de obras
                </span>
              </div>

              {/* Dedicated "Tenho Interesse" Button with the required link */}
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-all duration-200 shadow-lg shadow-amber-500/20 active:scale-[0.98] whitespace-nowrap"
              >
                <span>Tenho Interesse nesta Unidade</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
