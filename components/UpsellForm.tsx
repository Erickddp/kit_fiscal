"use client";

import { useState, useTransition } from 'react';
import { submitContactForm, type ContactFormData } from '@/app/actions';

/**
 * Form for requesting additional personalised advisory beyond the included
 * support. It defines a "Terminal" entry experience for the brand EDDP.
 * Now integrated with Next.js Server Actions for secure submission.
 */
export default function UpsellForm() {
  const [isPending, startTransition] = useTransition();
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    contact: '',
    message: '',
    website: '',
    consent: false,
  });
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    setStatus('idle');
    setFeedbackMsg('');

    startTransition(async () => {
      try {
        const result = await submitContactForm(formData);

        if (!result.success) {
          setStatus('error');
          setFeedbackMsg(result.message);
        } else {
          setStatus('success');
          setFeedbackMsg(result.message);
          setFormData({
            name: '',
            contact: '',
            message: '',
            website: '',
            consent: false,
          });
        }
      } catch (err) {
        setStatus('error');
        setFeedbackMsg('FATAL: Excepción crítica en el flujo de datos.');
      }
    });
  };

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6 px-1">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/40" />
          <div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/40" />
        </div>
        <span className="text-[10px] font-bold text-white/30 uppercase tracking-[0.2em]">Consulting_Request_Terminal</span>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6 text-left">
        {/* Honeypot field */}
        <div className="hidden" aria-hidden="true" style={{ display: 'none' }}>
          <label htmlFor="website">Website</label>
          <input
            type="text"
            id="website"
            name="website"
            value={formData.website}
            onChange={handleChange}
            tabIndex={-1}
            autoComplete="off"
          />
        </div>
        <div>
          <label htmlFor="name" className="block text-[10px] font-bold text-accent mb-2 pl-1 uppercase tracking-[0.2em]">
            $ identificador_usuario
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="block w-full glass-input px-5 py-4 text-white placeholder:text-white/10 outline-none font-mono text-sm border-white/5"
            placeholder="Introduce tu nombre completo..."
            required
          />
        </div>
        <div>
          <label htmlFor="contact" className="block text-[10px] font-bold text-accent mb-2 pl-1 uppercase tracking-[0.2em]">
            $ canal_comunicacion
          </label>
          <input
            type="text"
            id="contact"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
            className="block w-full glass-input px-5 py-4 text-white placeholder:text-white/10 outline-none font-mono text-sm border-white/5"
            placeholder="ejemplo@terminal.eddp"
            required
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-[10px] font-bold text-accent mb-2 pl-1 uppercase tracking-[0.2em]">
            $ buffer_descripcion
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={4}
            className="block w-full glass-input px-5 py-4 text-white placeholder:text-white/10 resize-none outline-none font-mono text-sm border-white/5"
            placeholder="Define el alcance de tu consulta..."
            required
          ></textarea>
        </div>

        <div className="flex items-start bg-accent/5 p-4 rounded-xl border border-accent/10 backdrop-blur-sm">
          <input
            id="consentUpsell"
            name="consent"
            type="checkbox"
            checked={formData.consent}
            onChange={handleChange}
            className="mt-1 h-4 w-4 text-accent focus:ring-accent/20 border-white/10 bg-black/40 rounded transition-all"
          />
          <label htmlFor="consentUpsell" className="ml-3 text-[11px] text-primary-muted leading-tight font-bold uppercase tracking-tight opacity-70">
            Confirmo solicitud de contacto comercial y procesamiento de datos.
          </label>
        </div>

        {status === 'error' && (
          <p className="text-red-400 text-[10px] font-bold animate-pulse px-1 font-mono uppercase tracking-widest">{`> error: ${feedbackMsg}`}</p>
        )}
        {status === 'success' && (
          <div className="bg-green-500/10 text-green-400 p-5 rounded-xl text-[11px] font-bold border border-green-500/20 backdrop-blur-md font-mono uppercase tracking-widest">
            {`> SUCCESS: ${feedbackMsg}`}
          </div>
        )}

        <div>
          <button
            type="submit"
            disabled={isPending}
            className="w-full bg-accent text-white font-bold py-5 px-6 rounded-xl shadow-glow hover:bg-accent-hover hover:scale-[1.01] active:scale-[0.98] disabled:opacity-50 disabled:active:scale-100 transition-all duration-300 flex justify-center items-center text-xs uppercase tracking-[0.3em]"
          >
            {isPending ? (
              <span className="flex items-center gap-3">
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                </svg>
                EXEC_REQUEST_BLOCK...
              </span>
            ) : (
              'Solicitar Acceso 1:1'
            )}
          </button>
        </div>
      </form>
    </div>
  );
}