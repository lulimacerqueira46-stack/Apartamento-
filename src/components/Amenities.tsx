import React, { useState } from 'react';
import { AMENITIES, Amenity, FORM_URL } from '../data/apartments';
import {
  Waves,
  Utensils,
  Dumbbell,
  Sparkles,
  Briefcase,
  ShoppingBag,
  ShieldCheck,
  Zap,
  ArrowUpRight
} from 'lucide-react';

export const Amenities: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todas as Áreas' },
    { id: 'Lazer & Spa', label: 'Lazer & Spa' },
    { id: 'Saúde & Esportes', label: 'Saúde & Bem-Estar' },
    { id: 'Conveniência', label: 'Conveniência 24h' },
    { id: 'Segurança & Tecnologia', label: 'Segurança & Sustentabilidade' }
  ];

  const filteredAmenities =
    activeTab === 'all'
      ? AMENITIES
      : AMENITIES.filter((a) => a.category === activeTab);

  const getAmenityIcon = (title: string) => {
    if (title.includes('Pool') || title.includes('Piscina')) return <Waves className="w-5 h-5 text-amber-400" />;
    if (title.includes('Gourmet')) return <Utensils className="w-5 h-5 text-amber-400" />;
    if (title.includes('Fitness')) return <Dumbbell className="w-5 h-5 text-amber-400" />;
    if (title.includes('Spa')) return <Sparkles className="w-5 h-5 text-amber-400" />;
    if (title.includes('Coworking')) return <Briefcase className="w-5 h-5 text-amber-400" />;
    if (title.includes('Market')) return <ShoppingBag className="w-5 h-5 text-amber-400" />;
    if (title.includes('Portaria')) return <ShieldCheck className="w-5 h-5 text-amber-400" />;
    return <Zap className="w-5 h-5 text-amber-400" />;
  };

  return (
    <section id="comodidades" className="py-24 bg-[#0d131f] border-t border-b border-white/10 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3">
            Comodidades & Experiência Resort
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white font-serif-display leading-tight mb-4">
            Mais de 2.500m² dedicados exclusivamente ao seu tempo livre.
          </h2>
          <p className="text-base text-slate-300 font-light leading-relaxed">
            Áreas de convivência entregues equipadas, climatizadas e com decoração assinada. Viva com a estrutura e o conforto dos melhores hotéis boutique do mundo.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-[#111927] border border-white/10 rounded-xl overflow-x-auto mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeTab === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
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

        {/* Amenities Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {filteredAmenities.map((item, idx) => (
            <div
              key={idx}
              className="bg-[#111927] border border-white/10 rounded-xl p-6 flex flex-col justify-between group hover:border-amber-400/40 hover:-translate-y-1 transition-all duration-300"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-amber-400/10 border border-amber-400/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  {getAmenityIcon(item.title)}
                </div>

                <div className="text-xs text-slate-400 font-medium mb-1">
                  {item.category}
                </div>

                <h3 className="text-lg font-semibold text-white font-serif-display mb-2">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-4 mt-4 border-t border-white/5 text-[11px] text-amber-300/80 font-medium">
                Entregue 100% equipado e decorado
              </div>
            </div>
          ))}
        </div>

        {/* Quick CTA Banner Inside Amenities */}
        <div className="bg-gradient-to-r from-[#141e2e] via-[#162338] to-[#141e2e] border border-amber-400/20 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
          <div>
            <h3 className="text-xl sm:text-2xl font-serif-display font-semibold text-white mb-2">
              Deseja conhecer todas as áreas comuns em um tour exclusivo?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Agende sua visita com um consultor e experimente a maquete interativa do empreendimento.
            </p>
          </div>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shrink-0 shadow-md"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
