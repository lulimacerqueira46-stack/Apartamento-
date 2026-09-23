import React from 'react';
import { SITE_IMAGES, handleImageError } from '../data/images';
import { FORM_URL } from '../data/apartments';
import { ArrowUpRight, Check } from 'lucide-react';

export const Highlights: React.FC = () => {
  return (
    <section id="sobre" className="py-24 bg-[#0d131f] border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">
            Conceito & Arquitetura
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white font-serif-display leading-tight mb-4">
            Uma obra de arte contemporânea concebida para o seu bem-estar.
          </h2>
          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed">
            Cada metro quadrado foi projetado por nomes consagrados do paisagismo e da arquitetura brasileira.
            Integração harmônica entre luz natural, madeira nobre, mármore e esquadrias de piso ao teto.
          </p>
        </div>

        {/* Bento Grid Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-16">
          {/* Card 1: Large Featured Living (Span 7) */}
          <div className="lg:col-span-7 bg-[#111927] border border-white/10 rounded-2xl overflow-hidden flex flex-col group hover:border-amber-400/40 transition-colors">
            <div className="relative aspect-[16/10] overflow-hidden bg-slate-900">
              <img
                src={SITE_IMAGES.living.src}
                onError={(e) => handleImageError(e, SITE_IMAGES.living.fallback)}
                alt={SITE_IMAGES.living.alt}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111927] via-transparent to-transparent opacity-80" />
            </div>
            <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-2">
                  01. Conforto & Convivência
                </p>
                <h3 className="text-2xl font-serif-display font-semibold text-white mb-3">
                  Living Integrado à Varanda Gourmet
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed mb-6">
                  Espaço social contínuo sem vigas aparentes, nivelamento de piso entre sala e varanda com churrasqueira a carvão e duto de exaustão individual. Ideal para receber com exclusividade e conforto acústico.
                </p>
              </div>

              <div className="pt-4 border-t border-white/10 flex flex-wrap items-center justify-between gap-4">
                <div className="text-xs text-slate-400 flex items-center gap-2">
                  <span>Pé-direito livre de 2,80m</span>
                  <span aria-hidden="true">·</span>
                  <span>Atenuação acústica</span>
                  <span aria-hidden="true">·</span>
                  <span>Piso nivelado</span>
                </div>
                <a
                  href={FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-semibold text-amber-400 hover:text-amber-300 inline-flex items-center gap-1 group-hover:underline"
                >
                  <span>Ver detalhes desta unidade</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          </div>

          {/* Column with 2 stacked cards (Span 5) */}
          <div className="lg:col-span-5 flex flex-col gap-8">
            {/* Card 2: Rooftop Infinity Pool */}
            <div className="bg-[#111927] border border-white/10 rounded-2xl overflow-hidden flex flex-col group hover:border-amber-400/40 transition-colors">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                <img
                  src={SITE_IMAGES.pool.src}
                  onError={(e) => handleImageError(e, SITE_IMAGES.pool.fallback)}
                  alt={SITE_IMAGES.pool.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111927] via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                  02. Rooftop Sky Club
                </p>
                <h3 className="text-xl font-serif-display font-semibold text-white mb-2">
                  Piscina Climatizada no 32º Andar
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Borda infinita debruçada sobre o horizonte da cidade, com lounges aquecidos, solarium em madeira nobre e serviço de apoio exclusivo para moradores.
                </p>
              </div>
            </div>

            {/* Card 3: Master Suite */}
            <div className="bg-[#111927] border border-white/10 rounded-2xl overflow-hidden flex flex-col group hover:border-amber-400/40 transition-colors">
              <div className="relative aspect-[16/9] overflow-hidden bg-slate-900">
                <img
                  src={SITE_IMAGES.suite.src}
                  onError={(e) => handleImageError(e, SITE_IMAGES.suite.fallback)}
                  alt={SITE_IMAGES.suite.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#111927] via-transparent to-transparent opacity-80" />
              </div>
              <div className="p-6">
                <p className="text-xs font-semibold text-amber-400 uppercase tracking-wider mb-1">
                  03. Refúgio Particular
                </p>
                <h3 className="text-xl font-serif-display font-semibold text-white mb-2">
                  Suíte Master com Closet & Sala de Banho
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  Janelas do piso ao teto com persianas blackout motorizadas, espaço dedicado para closet amplo e banheiro privativo com acabamentos em mármore e cuba dupla.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Essential Differentials Strip */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-8 border-t border-white/10">
          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="flex items-center gap-2 mb-2 text-amber-400">
              <Check className="w-4 h-4" />
              <h4 className="font-semibold text-white text-sm">Privacidade Absoluta</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Manta acústica nas lajes e tubulações para isolamento acústico superior de ruídos de impacto e aéreos.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="flex items-center gap-2 mb-2 text-amber-400">
              <Check className="w-4 h-4" />
              <h4 className="font-semibold text-white text-sm">Mobilidade Elétrica</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Infraestrutura individualizada para carregamento rápido de veículos elétricos em todas as vagas.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="flex items-center gap-2 mb-2 text-amber-400">
              <Check className="w-4 h-4" />
              <h4 className="font-semibold text-white text-sm">Sustentabilidade Ativa</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Energia solar para áreas comuns, reuso de água pluvial e certificação Green Building de eficiência.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-white/[0.03] border border-white/5">
            <div className="flex items-center gap-2 mb-2 text-amber-400">
              <Check className="w-4 h-4" />
              <h4 className="font-semibold text-white text-sm">Personalização de Planta</h4>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              Acompanhamento direto com arquitetos para personalizar acabamentos e layout antes da entrega.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
