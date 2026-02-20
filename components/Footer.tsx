import Link from 'next/link';

interface FooterProps {
  checkoutUrl: string;
}

/**
 * Simple footer with repeated calls‑to‑action and legal information. It
 * emphasises the personalised attention included, and provides a link to the
 * success page for those who have already purchased. A legal disclaimer
 * reminds visitors that the material is informativo and does not replace
 * professional advice. Finally, it states that the content is provided by a
 * Contador Público without exposing personal details.
 */
export default function Footer({ checkoutUrl }: FooterProps) {
  return (
    <footer className="bg-primary-dark text-white pt-16 pb-12 mt-4 rounded-t-3xl shadow-[0_-8px_30px_rgba(0,0,0,0.12)]">
      <div className="container mx-auto px-6 text-center space-y-8 flex flex-col items-center">
        <div>
          <h3 className="text-2xl font-bold tracking-tight mb-2">¿Listo para empezar?</h3>
          <p className="text-primary-light text-sm max-w-sm mx-auto">Consigue acceso inmediato al kit y obtén soporte profesional.</p>
        </div>
        <a
          href={checkoutUrl || '#'}
          className="w-full sm:w-auto max-w-xs mx-auto text-center inline-block bg-white text-primary font-bold text-lg px-8 py-4 rounded-xl shadow-soft hover:shadow-float hover:bg-gray-50 active:scale-[0.98] transition-all duration-300"
        >
          Comprar ahora
        </a>

        <div className="border-t border-primary-light/30 w-full pt-8 mt-8 flex flex-col items-center gap-4">
          <p className="text-xs font-semibold text-primary-light uppercase tracking-wider">
            Soporte brindado por Contador Público
          </p>
          <p className="text-[11px] text-gray-500 max-w-md mx-auto leading-relaxed">
            Material informativo. No sustituye asesoría formal; los resultados dependen de cada caso. No se ofrece representación ante autoridades ni se garantizan resultados específicos.
          </p>
          <p className="text-[11px] text-gray-500 font-medium mt-2">
            &copy; {new Date().getFullYear()} KIT Fiscal Contable. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}