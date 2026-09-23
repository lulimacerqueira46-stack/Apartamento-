import React, { useState } from 'react';
import { FAQS, FORM_URL } from '../data/apartments';
import { ChevronDown, HelpCircle, ArrowUpRight } from 'lucide-react';

export const FaqSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First open by default

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-24 bg-[#0d131f] border-t border-white/10 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3 flex items-center justify-center gap-1.5">
            <HelpCircle className="w-4 h-4" />
            Tire Suas Dúvidas
          </p>
          <h2 className="text-3xl sm:text-4xl font-semibold text-white font-serif-display leading-tight mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-sm sm:text-base text-slate-300 font-light">
            Transparência total para você tomar a melhor decisão com segurança e tranquilidade.
          </p>
        </div>

        {/* Accordion list */}
        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className={`bg-[#111927] border rounded-xl overflow-hidden transition-colors ${
                  isOpen ? 'border-amber-400/40 bg-[#121c2c]' : 'border-white/10 hover:border-white/20'
                }`}
              >
                <button
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg font-medium text-white font-serif-display">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-amber-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180' : ''
                    }`}
                  />
                </button>
                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-slate-300 leading-relaxed border-t border-white/5 animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Form link callout below FAQ */}
        <div className="mt-12 text-center p-6 rounded-xl bg-white/[0.02] border border-white/5">
          <p className="text-sm text-slate-300 mb-3">
            Ainda tem alguma pergunta específica sobre metragens, vagas ou fluxo financeiro?
          </p>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm font-semibold text-amber-400 hover:text-amber-300 hover:underline"
          >
            <span>Falar com nosso consultor via formulário oficial</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
