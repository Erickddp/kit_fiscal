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
    <section id="faq" className="py-16 bg-background relative z-0">
      <div className="container mx-auto px-5">
        <h2 className="text-3xl font-bold text-center mb-10 text-primary tracking-tight">Preguntas frecuentes</h2>
        <div className="max-w-2xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-surface border border-gray-100 rounded-2xl shadow-sm overflow-hidden transition-all duration-300">
              <button
                type="button"
                className="flex justify-between items-center w-full min-h-[60px] text-left font-semibold text-primary p-5 focus:outline-none focus:bg-gray-50 active:bg-gray-50 cursor-pointer select-none"
                onClick={() => toggle(index)}
                aria-expanded={openIndex === index}
              >
                <span className="pr-4 leading-snug text-[15px]">{faq.question}</span>
                <span className={`flex-shrink-0 w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-accent transition-transform duration-300 ${openIndex === index ? 'rotate-180 bg-accent/10 border-transparent shadow-inner' : ' border border-gray-200'}`}>
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </span>
              </button>
              {openIndex === index && (
                <div
                  className="px-5 pb-5"
                  style={{ animation: 'fadeIn 0.3s ease-out forwards' }}
                >
                  <p className="text-muted text-[14px] leading-relaxed relative pt-4 border-t border-gray-50">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{
        __html: `
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}} />
    </section>
  );
}