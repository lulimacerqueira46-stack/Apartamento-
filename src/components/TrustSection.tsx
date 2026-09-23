import React from 'react';
import { FORM_URL } from '../data/apartments';
import { ShieldCheck, Award, Building, CheckCircle, ArrowUpRight } from 'lucide-react';

export const TrustSection: React.FC = () => {
  return (
    <section className="py-24 bg-[#0b0f17] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">
            Credibilidade & Segurança Jurídica
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white font-serif-display leading-tight mb-4">
            A tranquilidade de investir com uma das construtoras mais sólidas do país.
          </h2>
          <p className="text-base text-slate-300 font-light leading-relaxed">
            Mais do que construir edifícios premiados, garantimos solidez financeira, governança transparente e respeito absoluto aos prazos contratuais.
          </p>
        </div>

        {/* Quantified Track Record Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <div className="bg-[#111927] border border-white/10 rounded-xl p-6">
            <span className="text-3xl sm:text-4xl font-bold text-amber-400 font-serif-display block mb-1 tabular-nums">
              28 Anos
            </span>
            <span className="text-sm font-semibold text-white block mb-1">
              De Tradição & Solidez
            </span>
            <p className="text-xs text-slate-400">
              Histórico comprovado no segmento residencial de alto e altíssimo padrão.
            </p>
          </div>

          <div className="bg-[#111927] border border-white/10 rounded-xl p-6">
            <span className="text-3xl sm:text-4xl font-bold text-amber-400 font-serif-display block mb-1 tabular-nums">
              42 Obras
            </span>
            <span className="text-sm font-semibold text-white block mb-1">
              Entregues com Excelência
            </span>
            <p className="text-xs text-slate-400">
              Mais de 4.800 famílias vivendo com conforto e valorização patrimonial.
            </p>
          </div>

          <div className="bg-[#111927] border border-white/10 rounded-xl p-6">
            <span className="text-3xl sm:text-4xl font-bold text-amber-400 font-serif-display block mb-1 tabular-nums">
              100%
            </span>
            <span className="text-sm font-semibold text-white block mb-1">
              Pontualidade Contratual
            </span>
            <p className="text-xs text-slate-400">
              Todas as unidades concluídas rigorosamente dentro do cronograma acordado.
            </p>
          </div>

          <div className="bg-[#111927] border border-white/10 rounded-xl p-6">
            <span className="text-3xl sm:text-4xl font-bold text-amber-400 font-serif-display block mb-1">
              Nível A
            </span>
            <span className="text-sm font-semibold text-white block mb-1">
              PBQP-H & ISO 9001
            </span>
            <p className="text-xs text-slate-400">
              Máxima certificação nacional e internacional de gestão da qualidade.
            </p>
          </div>
        </div>

        {/* Legal & Construction Guarantees Banner */}
        <div className="bg-gradient-to-r from-[#111927] via-[#141f30] to-[#111927] border border-white/10 rounded-2xl p-8 lg:p-10 flex flex-col lg:flex-row lg:items-center justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-3 text-amber-400">
              <ShieldCheck className="w-6 h-6 shrink-0" />
              <h3 className="text-xl sm:text-2xl font-serif-display font-semibold text-white">
                Patrimônio de Afetação Constituído
              </h3>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed">
              Todos os recursos financeiros aportados no empreendimento são mantidos em conta exclusiva e vinculados unicamente à construção do Horizonte Prime (Lei Federal nº 10.931/04), com auditoria independente permanente.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400 pt-2">
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                Seguro de Término de Obra
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                Matrícula Individualizada
              </span>
              <span className="flex items-center gap-1.5 text-slate-300">
                <CheckCircle className="w-4 h-4 text-amber-400" />
                Auditoria Trimestral
              </span>
            </div>
          </div>

          <div className="shrink-0 flex flex-col items-start lg:items-end gap-3">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shadow-md"
            >
              <span>Tenho Interesse e quero falar com a construtora</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
            <span className="text-[11px] text-slate-400">
              Atendimento com corretores credenciados pelo CRECI
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
