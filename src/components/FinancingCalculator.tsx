import React, { useState, useMemo } from 'react';
import { FORM_URL } from '../data/apartments';
import { Calculator, ArrowUpRight, Check, HelpCircle } from 'lucide-react';

export const FinancingCalculator: React.FC = () => {
  const [propertyPrice, setPropertyPrice] = useState<number>(980000);
  const [downPaymentPercent, setDownPaymentPercent] = useState<number>(30); // 30%
  const [termMonths, setTermMonths] = useState<number>(360); // 30 years
  const [system, setSystem] = useState<'SAC' | 'PRICE'>('SAC');

  const annualRate = 0.098; // 9.8% a.a.
  const monthlyRate = annualRate / 12;

  const calculations = useMemo(() => {
    const downPayment = (propertyPrice * downPaymentPercent) / 100;
    const loanAmount = propertyPrice - downPayment;

    let firstPayment = 0;
    let lastPayment = 0;

    if (system === 'SAC') {
      const amortization = loanAmount / termMonths;
      const firstInterest = loanAmount * monthlyRate;
      firstPayment = amortization + firstInterest;
      const lastInterest = amortization * monthlyRate;
      lastPayment = amortization + lastInterest;
    } else {
      // PRICE
      const pmt =
        (loanAmount *
          (monthlyRate * Math.pow(1 + monthlyRate, termMonths))) /
        (Math.pow(1 + monthlyRate, termMonths) - 1);
      firstPayment = pmt;
      lastPayment = pmt;
    }

    return {
      downPayment,
      loanAmount,
      firstPayment,
      lastPayment
    };
  }, [propertyPrice, downPaymentPercent, termMonths, system]);

  const formatCurrency = (val: number) => {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
      maximumFractionDigits: 0
    }).format(val);
  };

  return (
    <section id="simulador" className="py-24 bg-[#0d131f] border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">
            Planejamento Financeiro & Simulação
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white font-serif-display leading-tight mb-4">
            Simule seu plano de pagamento personalizado.
          </h2>
          <p className="text-base text-slate-300 font-light leading-relaxed">
            Consulte uma estimativa de entrada e parcelas para a unidade dos seus sonhos. Flexibilidade no fluxo durante a construção e condições bancárias facilitadas.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="bg-[#111927] border border-white/10 rounded-2xl p-6 sm:p-8 lg:p-10 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Controls Column (Span 7) */}
          <div className="lg:col-span-7 space-y-7">
            {/* Property Value Slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-slate-200">
                  Valor da Unidade
                </label>
                <span className="text-lg font-bold text-amber-400 font-serif-display tabular-nums">
                  {formatCurrency(propertyPrice)}
                </span>
              </div>
              <input
                type="range"
                min={685000}
                max={2500000}
                step={25000}
                value={propertyPrice}
                onChange={(e) => setPropertyPrice(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 tabular-nums">
                <span>R$ 685.000 (Studio)</span>
                <span>R$ 1.590.000 (3 Suítes)</span>
                <span>R$ 2.450.000+ (Penthouse)</span>
              </div>
            </div>

            {/* Down payment slider */}
            <div>
              <div className="flex items-center justify-between mb-2">
                <label className="text-sm font-medium text-slate-200">
                  Entrada ({downPaymentPercent}%)
                </label>
                <span className="text-base font-semibold text-white tabular-nums">
                  {formatCurrency(calculations.downPayment)}
                </span>
              </div>
              <input
                type="range"
                min={20}
                max={60}
                step={5}
                value={downPaymentPercent}
                onChange={(e) => setDownPaymentPercent(Number(e.target.value))}
                className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-amber-400"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1">
                <span>20% (Mínimo padrão)</span>
                <span>30% (Recomendado na obra)</span>
                <span>60% (Alta amortização)</span>
              </div>
            </div>

            {/* Term & System selection */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-medium text-slate-300 block mb-2">
                  Prazo de Financiamento
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {[180, 240, 360].map((months) => (
                    <button
                      key={months}
                      onClick={() => setTermMonths(months)}
                      className={`py-2 px-2 text-xs font-medium rounded-lg border transition-colors cursor-pointer tabular-nums ${
                        termMonths === months
                          ? 'bg-amber-400/10 border-amber-400 text-amber-300 font-semibold'
                          : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
                      }`}
                    >
                      {months / 12} anos
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-xs font-medium text-slate-300 block mb-2">
                  Sistema de Amortização
                </label>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setSystem('SAC')}
                    className={`py-2 px-2 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                      system === 'SAC'
                        ? 'bg-amber-400/10 border-amber-400 text-amber-300 font-semibold'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
                    }`}
                  >
                    SAC (Decrescente)
                  </button>
                  <button
                    onClick={() => setSystem('PRICE')}
                    className={`py-2 px-2 text-xs font-medium rounded-lg border transition-colors cursor-pointer ${
                      system === 'PRICE'
                        ? 'bg-amber-400/10 border-amber-400 text-amber-300 font-semibold'
                        : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
                    }`}
                  >
                    PRICE (Fixa)
                  </button>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2 text-xs text-slate-400 pt-2">
              <HelpCircle className="w-4 h-4 text-amber-400/80 shrink-0" />
              <span>
                Taxa de juros de referência simulada: 9,8% a.a. O FGTS pode ser utilizado na entrada.
              </span>
            </div>
          </div>

          {/* Results Summary Card (Span 5) */}
          <div className="lg:col-span-5 bg-[#090d14] border border-amber-400/30 rounded-xl p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative">
            <div className="space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <span className="text-xs font-medium text-amber-300 uppercase tracking-wider flex items-center gap-1.5">
                  <Calculator className="w-4 h-4" />
                  Resultado da Simulação
                </span>
                <span className="text-xs text-slate-400">Pré-Aprovação Ágil</span>
              </div>

              {/* Numbers */}
              <div className="space-y-4">
                <div>
                  <span className="text-xs text-slate-400 block mb-1">
                    Entrada Facilitada no Período de Obras
                  </span>
                  <span className="text-2xl sm:text-3xl font-bold font-serif-display text-white tabular-nums">
                    {formatCurrency(calculations.downPayment)}
                  </span>
                  <span className="text-[11px] text-slate-400 block mt-0.5">
                    Pode ser parcelada diretamente com a construtora
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-white/10">
                  <div>
                    <span className="text-xs text-slate-400 block mb-1">
                      {system === 'SAC' ? '1ª Parcela (Estimada)' : 'Parcela Mensal'}
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-amber-400 tabular-nums">
                      {formatCurrency(calculations.firstPayment)}
                    </span>
                  </div>

                  <div>
                    <span className="text-xs text-slate-400 block mb-1">
                      {system === 'SAC' ? 'Última Parcela' : 'Saldo Financiado'}
                    </span>
                    <span className="text-lg sm:text-xl font-bold text-slate-200 tabular-nums">
                      {system === 'SAC'
                        ? formatCurrency(calculations.lastPayment)
                        : formatCurrency(calculations.loanAmount)}
                    </span>
                  </div>
                </div>
              </div>

              {/* Guarantees */}
              <div className="space-y-2 pt-2 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Financiamento com todos os grandes bancos</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Possibilidade de usar FGTS</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-3.5 h-3.5 text-amber-400 shrink-0" />
                  <span>Assessoria de crédito imobiliário gratuita</span>
                </div>
              </div>
            </div>

            {/* Tenho Interesse CTA Button directly to Google Forms */}
            <div className="pt-6 mt-6 border-t border-white/10">
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-lg text-sm font-semibold text-slate-950 bg-gradient-to-r from-amber-400 to-amber-300 hover:from-amber-300 hover:to-amber-200 transition-colors shadow-lg shadow-amber-500/20 active:scale-[0.98]"
              >
                <span>Tenho Interesse nesta Simulação</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="text-[11px] text-slate-400 block text-center mt-2">
                Receba a proposta oficial com taxa personalizada no formulário
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
