"use client";

import { useState } from 'react';

interface TabDefinition {
  label: string;
  key: string;
  items: string[];
}

const tabs: TabDefinition[] = [
  {
    label: 'Calculadoras',
    key: 'calculadoras',
    items: [
      'Personas Físicas y Morales',
      'Nómina y Plataformas Tecnológicas',
      'Contabilidad y Finanzas',
      'Tarifas e indicadores',
      'RESICO PF y PM',
      'Actualización de calculadoras',
    ],
  },
  {
    label: 'Biblioteca Digital',
    key: 'biblioteca',
    items: [
      'Compilaciones jurídicas y legislación',
      'Estudios prácticos y análisis fiscal',
      'Planeación y Defensa Fiscal',
      'Cursos: Análisis fiscal y CFDI 4.0',
      'Cursos: Personas Físicas, Morales y RESICO',
      'Cursos: Nómina y Recursos Humanos',
    ],
  },
  {
    label: 'Formatos',
    key: 'formatos',
    items: [
      'Autotransporte y Carta Porte',
      'REPSE y Laborales',
      'Fiscales y Juicio de nulidad',
      'Actas sociales y Cartas poder',
      'PROFECO e IMPI',
    ],
  },
  {
    label: 'Contratos',
    key: 'contratos',
    items: [
      'Contratos en general',
      'Civiles',
      'Mercantiles',
    ],
  },
];

/**
 * Tabbed interface used to highlight the various categories of content included
 * in the kit. Each tab displays a list of items summarising the materials
 * available. The component maintains local state for the active tab.
 */
export default function Tabs() {
  const [activeKey, setActiveKey] = useState(tabs[0].key);

  return (
    <section className="py-16 md:py-24" id="contenido">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold tracking-tight text-center mb-10 text-primary">¿Qué incluye?</h2>

        {/* Pills / Tabs navigation */}
        <div className="flex overflow-x-auto pb-6 -mx-5 px-5 sm:mx-0 sm:px-0 sm:flex-wrap sm:justify-center gap-3 snap-x touch-pan-x" style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
          {tabs.map((tab) => (
            <button
              key={tab.key}
              type="button"
              className={`snap-center flex-shrink-0 px-6 py-3 min-h-[48px] rounded-full text-[15px] font-semibold transition-all duration-200 cursor-pointer select-none border ${activeKey === tab.key
                  ? 'bg-primary border-primary text-white shadow-soft scale-[1.02]'
                  : 'bg-surface border-gray-200 text-muted opacity-90 hover:opacity-100 hover:border-gray-300 hover:text-primary active:scale-[0.98]'
                }`}
              onClick={() => setActiveKey(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab content area */}
        <div className="bg-surface rounded-2xl shadow-float p-6 sm:p-10 border border-gray-50 min-h-[300px] max-w-4xl mx-auto">
          {tabs.map((tab) => (
            activeKey === tab.key && (
              <div
                key={tab.key}
                style={{ animation: 'fadeIn 0.3s ease-out forwards' }}
              >
                <h3 className="text-xl font-bold text-primary mb-6 border-b border-gray-100 pb-4 pr-4 pl-1 inline-block">{tab.label}</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  {tab.items.map((item) => (
                    <li key={item} className="flex items-start">
                      <span className="flex-shrink-0 w-6 h-6 flex items-center justify-center rounded-full bg-accent text-white mr-3 shadow-sm mt-0.5">
                        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                      <span className="text-gray-800 leading-snug">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        ::-webkit-scrollbar { display: none; }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}