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
    <footer className="bg-black/80 backdrop-blur-md text-white pt-24 pb-16 mt-16 border-t border-white/10">
      <div className="container mx-auto px-6 text-center space-y-12 flex flex-col items-center">
        <div className="max-w-md">
          <h3 className="text-3xl font-bold tracking-tight mb-4 text-glow">¿Listo para integrar el Ecosistema?</h3>
          <p className="text-primary-muted text-base leading-relaxed">Implementa infraestructura de última generación y potencia tu práctica profesional con protocolos de élite.</p>
        </div>
        <a
          href={checkoutUrl || '#'}
          className="w-full sm:w-auto px-12 py-5 text-center inline-block bg-white text-black font-black text-xl rounded-2xl shadow-premium hover:shadow-glow hover:scale-[1.05] active:scale-[0.98] transition-all duration-300"
        >
          Poner en Marcha
        </a>

        <div className="border-t border-white/5 w-full pt-12 mt-12 flex flex-col items-center gap-6">
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em]">Validated by</span>
            <p className="text-sm font-bold text-white/80 uppercase tracking-widest px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
              Contador Público Colegiado
            </p>
          </div>
          <p className="text-[11px] text-primary-muted max-w-lg mx-auto leading-relaxed opacity-60">
            Material informativo de uso profesional. No sustituye asesoría formal; los resultados dependen de la correcta aplicación técnica. No se ofrece representación jurídica ni garantías sobre criterios de autoridad.
          </p>
          <div className="flex flex-col items-center gap-4">
            <p className="text-[11px] text-primary-muted/40 font-bold tracking-widest uppercase">
              &copy; {new Date().getFullYear()} erickddp.com — Platform
            </p>
            <div className="flex gap-6 opacity-40">
              <Link href="/privacy" className="text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors">Privacidad</Link>
              <Link href="/terms" className="text-[10px] uppercase font-bold tracking-widest hover:text-white transition-colors">Términos</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}