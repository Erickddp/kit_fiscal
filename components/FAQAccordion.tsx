"use client";

import { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: '¿Para quién es este kit?',
    answer:
      'Está diseñado para personas físicas y morales en México, incluyendo aquellos bajo el régimen RESICO. Contiene herramientas y materiales aplicables a distintos perfiles.',
  },
  {
    question: '¿Cómo recibo el kit?',
    answer:
      'Al completar tu compra serás redirigido al proveedor de pago donde podrás descargar el archivo ZIP. También recibirás un correo con el enlace de descarga.',
  },
  {
    question: '¿Qué tipo de actualizaciones incluye?',
    answer:
      'Se incluyen actualizaciones de calculadoras y materiales cuando la legislación fiscal cambia. Recibirás notificaciones por correo si hay nuevo contenido disponible.',
  },
  {
    question: '¿Cómo funciona la atención personalizada incluida?',
    answer:
      'La compra del kit incluye una solicitud de soporte personalizada. Podrás enviar una duda, corrección o solicitud de actualización a través del formulario. La respuesta llega en un máximo de 48 horas hábiles.',
  },
  {
    question: '¿Qué no incluye el soporte?',
    answer:
      'No cubre la presentación completa de declaraciones, representación ante el SAT ni llamadas telefónicas. Estos servicios se ofrecen como asesoría aparte.',
  },
  {
    question: '¿Hay devoluciones?',
    answer:
      'Al tratarse de contenido digital no se ofrecen devoluciones. Te recomendamos revisar la información y alcances antes de comprar.',
  },
  {
    question: '¿Cómo se protege mi información?',
    answer:
      'Utilizamos los datos que proporciones únicamente para procesar tu compra y responder a tus solicitudes. Consulta nuestra política de privacidad para más detalles.',
  },
];

/**
 * Accordion component to display frequently asked questions. Only one item
 * expands at a time; clicking on another question collapses the previous.
 */
export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-background relative z-0">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-white tracking-tight text-glow">
          Protocolo de <span className="text-accent">Consultas (FAQ)</span>
        </h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className={`glass-card transition-all duration-300 ${openIndex === index ? 'bg-surface/80 border-accent/20 shadow-glow' : 'hover:bg-white/5'}`}>
              <button
                type="button"
                className="flex justify-between items-center w-full min-h-[70px] text-left font-bold text-white/90 p-6 focus:outline-none cursor-pointer select-none"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 leading-snug text-[16px]">{faq.question}</span>
                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full transition-all duration-300 ${openIndex === index ? 'rotate-180 bg-accent text-white' : 'bg-white/5 text-accent border border-white/10'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div
                  className="px-6 pb-6 animate-in fade-in slide-in-from-top-2 duration-300"
                >
                  <p className="text-primary-muted text-[15px] leading-relaxed relative pt-5 border-t border-white/10">
                    {faq.answer.replace(/kit/g, 'ecosistema').replace(/soporte/g, 'asistencia técnica')}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}