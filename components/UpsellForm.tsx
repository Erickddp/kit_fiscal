"use client";

import { useState } from 'react';

/**
 * Form for requesting additional personalised advisory beyond the included
 * support. Similar to the SupportForm but posts to a separate API route. The
 * order ID is optional and the category allows the user to specify the area
 * they need help with. After submission a short message encourages the
 * requester to await contact via email.
 */
export default function UpsellForm() {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    message: '',
    website: '',
    consent: false,
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [feedbackMsg, setFeedbackMsg] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const target = e.target as HTMLInputElement;
    const { name, value, type, checked } = target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.contact || !formData.message) {
      setStatus('error');
      setFeedbackMsg('Por favor completa todos los campos.');
      return;
    }
    if (!formData.consent) {
      setStatus('error');
      setFeedbackMsg('Debes aceptar ser contactado.');
      return;
    }
    setStatus('loading');

    // Map to the legacy API contract for Make
    const payload = {
      name: formData.name,
      email: formData.contact,
      subject: 'Upsell',
      category: 'Upsell',
      description: formData.message,
      orderId: '',
      website: formData.website,
      consent: formData.consent,
    };
    try {
      const res = await fetch('/api/upsell', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus('success');
        setFeedbackMsg('¡Solicitud recibida! Te contactaremos a la brevedad.');
        setFormData({
          name: '',
          contact: '',
          message: '',
          website: '',
          consent: false,
        });
      } else {
        const data = await res.json();
        throw new Error(data?.error || 'Error al enviar la solicitud');
      }
    } catch (err: any) {
      console.error(err);
      setStatus('error');
      setFeedbackMsg(err.message || 'Ocurrió un error al enviar la solicitud');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5 max-w-full mx-auto p-1 text-left">
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
        <label htmlFor="name" className="block text-sm font-medium text-primary mb-1 pl-1">
          Nombre completo
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="block w-full rounded-xl border-gray-200 shadow-sm focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-20 transition-all px-4 py-3 bg-gray-50 text-primary"
          required
        />
      </div>
      <div>
        <label htmlFor="contact" className="block text-sm font-medium text-primary mb-1 pl-1">
          Email o WhatsApp
        </label>
        <input
          type="text"
          id="contact"
          name="contact"
          value={formData.contact}
          onChange={handleChange}
          className="block w-full rounded-xl border-gray-200 shadow-sm focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-20 transition-all px-4 py-3 bg-gray-50 text-primary"
          required
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-primary mb-1 pl-1">
          ¿En qué necesitas ayuda?
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={3}
          className="block w-full rounded-xl border-gray-200 shadow-sm focus:border-accent focus:ring focus:ring-accent focus:ring-opacity-20 transition-all px-4 py-3 bg-gray-50 text-primary resize-none"
          required
        ></textarea>
      </div>

      <div className="flex items-start bg-gray-50 p-3 rounded-xl border border-gray-100">
        <input
          id="consentUpsell"
          name="consent"
          type="checkbox"
          checked={formData.consent}
          onChange={handleChange}
          className="mt-0.5 h-4 w-4 text-accent focus:ring-accent border-gray-300 rounded transition-colors"
        />
        <label htmlFor="consentUpsell" className="ml-3 text-sm text-muted">
          Al enviar este formulario acepto ser contactado para recibir una cotización de mi asesoría 1:1.
        </label>
      </div>

      {status === 'error' && (
        <p className="text-red-500 text-sm font-medium animate-pulse">{feedbackMsg}</p>
      )}
      {status === 'success' && (
        <div className="bg-green-50 text-green-700 p-4 rounded-xl text-sm font-medium border border-green-200">
          {feedbackMsg}
        </div>
      )}

      <div>
        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full bg-primary text-white font-semibold py-3.5 px-4 rounded-xl shadow-soft hover:bg-primary-light active:scale-[0.98] disabled:opacity-70 disabled:active:scale-100 transition-all duration-200 flex justify-center items-center"
        >
          {status === 'loading' ? (
            <span className="animate-pulse">Enviando solicitud...</span>
          ) : (
            'Contactar un experto'
          )}
        </button>
      </div>
    </form>
  );
}