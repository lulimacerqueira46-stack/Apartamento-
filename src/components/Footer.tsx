import React from 'react';
import { FORM_URL } from '../data/apartments';
import { ArrowUpRight, Phone, Mail, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080c13] border-t border-white/10 pt-16 pb-24 md:pb-16 text-slate-400 text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-12">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <a
              href="#"
              className="text-2xl font-serif-display font-semibold text-white hover:text-amber-200 transition-colors block"
            >
              Horizonte Prime
            </a>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Apartamentos de alto padrão que redefinem o conceito de sofisticação, conforto e bem-estar na melhor localização da cidade.
            </p>
            <div className="pt-2">
              <a
                href={FORM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-semibold text-slate-950 bg-amber-400 hover:bg-amber-300 transition-colors"
              >
                <span>Tenho Interesse</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          {/* Nav Links */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Navegação
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#sobre" className="hover:text-amber-400 transition-colors">
                  O Empreendimento
                </a>
              </li>
              <li>
                <a href="#plantas" className="hover:text-amber-400 transition-colors">
                  Plantas & Valores
                </a>
              </li>
              <li>
                <a href="#comodidades" className="hover:text-amber-400 transition-colors">
                  Áreas de Lazer
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-amber-400 transition-colors">
                  Localização Nobre
                </a>
              </li>
              <li>
                <a href="#simulador" className="hover:text-amber-400 transition-colors">
                  Simulador de Parcelas
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-amber-400 transition-colors">
                  Perguntas Frequentes
                </a>
              </li>
            </ul>
          </div>

          {/* Plantas */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Unidades
            </h4>
            <ul className="space-y-2.5">
              <li>
                <a href="#plantas" className="hover:text-amber-400 transition-colors">
                  Studio 58 m²
                </a>
              </li>
              <li>
                <a href="#plantas" className="hover:text-amber-400 transition-colors">
                  Conforto 88 m²
                </a>
              </li>
              <li>
                <a href="#plantas" className="hover:text-amber-400 transition-colors">
                  Grand Family 142 m²
                </a>
              </li>
              <li>
                <a href="#plantas" className="hover:text-amber-400 transition-colors">
                  Penthouse Duplex 210 m²
                </a>
              </li>
            </ul>
          </div>

          {/* Contato & Atendimento */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-white mb-4">
              Central de Atendimento
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <span>(11) 4004-9800</span>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-amber-400 shrink-0" />
                <span>vendas@horizonteprime.com.br</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <span>Espaço de Vendas & Decorado: Av. das Magnólias, 1200</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Legal Disclaimer & Memorial de Incorporação */}
        <div className="pt-8 border-t border-white/10 text-[11px] text-slate-300 leading-relaxed space-y-2">
          <p>
            Memorial de Incorporação Imobiliária devidamente registrado sob o R-3 na Matrícula nº 128.450 junto ao 4º Cartório de Registro de Imóveis da Comarca. Empreendimento com Patrimônio de Afetação legalmente instituído sob a égide da Lei Federal nº 10.931/2004.
          </p>
          <p>
            Perspectivas artísticas e plantas ilustrativas sujeitas a pequenas variações executivas conforme memorial descritivo. Os móveis, decorações e eletrodomésticos têm caráter puramente sugestivo e não integram o contrato de compra e venda padrão. CRECI Construtora e Incorporadora nº 34.567-J.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-between pt-4 border-t border-white/5 text-slate-300 text-xs">
            <span>© 2026 Horizonte Prime Residences. Todos os direitos reservados.</span>
            <div className="flex items-center gap-4 mt-2 sm:mt-0">
              <a href={FORM_URL} target="_blank" rel="noopener noreferrer" className="hover:text-amber-400 transition-colors">
                Formulário de Interesse
              </a>
              <span>·</span>
              <span className="hover:text-slate-400 cursor-default">Termos & Privacidade</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
