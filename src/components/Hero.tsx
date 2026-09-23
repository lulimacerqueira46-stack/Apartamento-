import React from 'react';
import { FORM_URL } from '../data/apartments';
import heroImg from '../assets/images/hero_luxury_apartment_1790202353822.jpg';
import { ArrowUpRight, ChevronDown, Sparkles, Shield, Compass } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-20 overflow-hidden">
      {/* Background Photography with Sophisticated Cinematic Overlay Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImg}
          alt="Fachada arquitetônica contemporânea do Horizonte Prime Residences ao entardecer"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse [animation-duration:8s]"
          referrerPolicy="no-referrer"
        />
        {/* Multi-layer gradient scrim to ensure 4.5:1 WCAG AA contrast */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17] via-[#0b0f17]/70 to-[#0b0f17]/40" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0b0f17]/90 via-[#0b0f17]/40 to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="max-w-3xl">
          {/* Subtle editorial kicker without pills */}
          <div className="flex items-center gap-2 text-xs sm:text-sm font-medium tracking-wider uppercase text-amber-300/90 mb-4">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Lançamento Exclusivo no Bairro Mais Valorizado da Cidade</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white font-serif-display leading-[1.08] mb-6 text-balance">
            O privilégio de viver onde o design encontra a sua melhor versão.
          </h1>

          {/* Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-slate-300 font-light leading-relaxed mb-8 max-w-2xl">
            Apartamentos nobres de <strong className="font-semibold text-white">58m² a 210m²</strong> com 1 a 4 suítes,
            varanda gourmet integrada e vista panorâmica permanente. Conheça um projeto desenhado para quem exige sofisticação sem concessões.
          </p>

          {/* Clean Unboxed Metadata Strip (Anti-Pill Rule) */}
          <div className="flex flex-wrap items-center gap-y-2 gap-x-3 text-xs sm:text-sm text-slate-300 mb-9 pb-6 border-b border-white/15">
            <span className="font-medium text-white">58m² a 210m²</span>
            <span aria-hidden="true" className="text-amber-400">·</span>
            <span className="font-medium text-white">1 a 4 Suítes</span>
            <span aria-hidden="true" className="text-amber-400">·</span>
            <span className="font-medium text-white">1 a 3 Vagas Cobertas</span>
            <span aria-hidden="true" className="text-amber-400">·</span>
            <span className="font-medium text-white">Rooftop Sky Pool</span>
            <span aria-hidden="true" className="text-amber-400">·</span>
            <span className="text-amber-300">Condições Especiais de Lançamento</span>
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-lg text-base font-semibold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all duration-200 shadow-xl shadow-amber-500/20 hover:shadow-amber-500/30 active:scale-[0.98]"
            >
              <span>Tenho Interesse</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>

            <a
              href="#plantas"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg text-base font-medium text-slate-200 hover:text-white bg-white/10 hover:bg-white/15 border border-white/15 transition-colors backdrop-blur-sm"
            >
              <span>Ver Plantas & Valores</span>
              <ChevronDown className="w-4 h-4" />
            </a>
          </div>

          {/* Trust points */}
          <div className="grid grid-cols-3 gap-4 pt-10 mt-6 max-w-xl text-slate-300 text-xs sm:text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Patrimônio de Afetação</span>
            </div>
            <div className="flex items-center gap-2">
              <Compass className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Localização Privilegiada</span>
            </div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400 shrink-0" />
              <span>Acabamento Premium</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
