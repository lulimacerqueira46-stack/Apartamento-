import React, { useState, useEffect } from 'react';
import { FORM_URL } from '../data/apartments';
import { ArrowUpRight } from 'lucide-react';

export const MobileStickyCta: React.FC = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after user scrolls past the hero section (e.g., > 350px)
      setVisible(window.scrollY > 350);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!visible) return null;

  return (
    // Strictly adheres to the < 15% mobile viewport height cap
    <aside
      aria-label="Barra de ação rápida"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0b0f17]/95 backdrop-blur-md border-t border-white/10 px-4 py-2.5 shadow-2xl animate-in slide-in-from-bottom duration-300"
    >
      <div className="flex items-center justify-between gap-3 max-w-md mx-auto">
        <div className="truncate">
          <span className="text-[11px] text-slate-400 block truncate">
            Horizonte Prime · 58 a 210m²
          </span>
          <span className="text-xs font-semibold text-amber-300 block truncate">
            A partir de R$ 685.000
          </span>
        </div>

        <a
          href={FORM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-lg text-xs font-bold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors shrink-0 shadow-md active:scale-95"
        >
          <span>Tenho Interesse</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </aside>
  );
};
