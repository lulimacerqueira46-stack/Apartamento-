import React from 'react';
import { FORM_URL } from '../data/apartments';
import { ArrowUpRight, Sparkles, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <section className="py-20 bg-[#0b0f17] relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-amber-500/10 blur-[130px] pointer-events-none rounded-full" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-gradient-to-b from-[#131c2b] to-[#0f1724] border border-amber-400/30 rounded-3xl p-8 sm:p-12 lg:p-16 text-center shadow-2xl relative overflow-hidden">
          {/* Subtle top decoration badge without pills */}
          <div className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-amber-300 uppercase tracking-widest mb-6">
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Condições Exclusivas de Pré-Lançamento</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white font-serif-display leading-tight mb-6 max-w-3xl mx-auto text-balance">
            Dê o primeiro passo para viver no endereço mais nobre da cidade.
          </h2>

          <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed mb-10 max-w-2xl mx-auto">
            Cadastre-se agora para receber o book arquitetônico detalhado, tabela de valores de primeiro lote e atendimento exclusivo de um especialista.
          </p>

          {/* Prominent Primary CTA Button */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-3 px-10 py-5 rounded-xl text-base sm:text-lg font-bold text-slate-950 bg-gradient-to-r from-amber-400 via-amber-300 to-amber-400 hover:from-amber-300 hover:to-amber-200 transition-all duration-200 shadow-2xl shadow-amber-500/30 hover:shadow-amber-500/40 active:scale-[0.98] w-full sm:w-auto"
            >
              <span>Tenho Interesse</span>
              <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>

          {/* Trust points */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs sm:text-sm text-slate-400 pt-6 border-t border-white/10">
            <span className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-amber-400" />
              Retorno ágil em até 10 minutos
            </span>
            <span className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-amber-400" />
              Seus dados 100% seguros e confidenciais
            </span>
            <span className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-amber-400" />
              Sem compromisso de compra
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};
