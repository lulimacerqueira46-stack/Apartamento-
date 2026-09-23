import React, { useState } from 'react';
import { GALLERY_ITEMS, handleImageError, ImageAsset } from '../data/images';
import { FORM_URL } from '../data/apartments';
import { Camera, ArrowUpRight, Maximize2, X } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedPhoto, setSelectedPhoto] = useState<ImageAsset | null>(null);

  const categories = [
    { id: 'all', label: 'Todas as Fotos' },
    { id: 'fachada', label: 'Fachada' },
    { id: 'interiores', label: 'Apartamento & Interiores' },
    { id: 'lazer', label: 'Lazer & Áreas Comuns' }
  ];

  const filteredPhotos =
    activeCategory === 'all'
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  return (
    <section id="galeria" className="py-24 bg-[#0b0f17] relative border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <p className="text-xs font-semibold tracking-widest text-amber-400 uppercase mb-3 flex items-center gap-1.5">
              <Camera className="w-4 h-4" />
              Galeria de Imagens do Empreendimento
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold text-white font-serif-display leading-tight">
              Conheça cada ângulo do seu futuro endereço.
            </h2>
          </div>
          <p className="text-sm text-slate-300 max-w-md">
            Registros fotorrealistas e detalhes de acabamentos assinados que tornam o Horizonte Prime um marco arquitetônico.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex items-center gap-2 p-1.5 bg-[#111927] border border-white/10 rounded-xl overflow-x-auto mb-10 scrollbar-none">
          {categories.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
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

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {filteredPhotos.map((photo, index) => (
            <div
              key={index}
              onClick={() => setSelectedPhoto(photo)}
              className="group relative bg-[#111927] border border-white/10 rounded-2xl overflow-hidden cursor-pointer hover:border-amber-400/50 transition-all duration-300 hover:-translate-y-1 shadow-lg"
            >
              <div className="aspect-[16/10] overflow-hidden bg-slate-900 relative">
                <img
                  src={photo.src}
                  onError={(e) => handleImageError(e, photo.fallback)}
                  alt={photo.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f17]/90 via-[#0b0f17]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-black/50 backdrop-blur-sm border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <Maximize2 className="w-4 h-4" />
                </div>
              </div>

              <div className="p-5">
                <h3 className="text-base font-serif-display font-semibold text-white group-hover:text-amber-300 transition-colors">
                  {photo.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1 line-clamp-1">
                  {photo.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="text-center p-8 rounded-2xl bg-[#111927] border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h3 className="text-xl font-serif-display font-semibold text-white mb-1">
              Gostou do que viu? Venha visitar o decorado presencialmente.
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Dispomos de sala de imersão virtual e maquete física em escala real no showroom.
            </p>
          </div>
          <a
            href={FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-lg text-sm font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shrink-0 shadow-md"
          >
            <span>Tenho Interesse</span>
            <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          onClick={() => setSelectedPhoto(null)}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4 animate-in fade-in duration-200"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-5xl w-full bg-[#111927] border border-white/15 rounded-2xl overflow-hidden shadow-2xl"
          >
            <button
              onClick={() => setSelectedPhoto(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white hover:bg-white/20 transition-colors"
              aria-label="Fechar foto ampliada"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="relative aspect-[16/10] bg-black">
              <img
                src={selectedPhoto.src}
                onError={(e) => handleImageError(e, selectedPhoto.fallback)}
                alt={selectedPhoto.alt}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 bg-[#0d131f]">
              <div>
                <h3 className="text-lg font-serif-display font-semibold text-white">
                  {selectedPhoto.title}
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  {selectedPhoto.subtitle}
                </p>
              </div>
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shrink-0"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
