import Image from 'next/image';

/**
 * The hero section is the first thing visitors see on the landing page. It
 * communicates the product name, a short tagline and the price. A call‑to‑action
 * button directs users to the configured checkout URL. An abstract image
 * reinforces the accounting/finance theme without using any text inside the
 * artwork. Adjust the image file in the public folder as needed.
 */
export default function Hero({
  checkoutUrl,
  imageSrc,
}: {
  checkoutUrl: string;
  imageSrc: string;
}) {
  return (
    <section className="relative overflow-hidden py-12 sm:py-20 bg-background pt-20">
      <div className="container mx-auto px-5 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="w-full md:w-1/2 flex flex-col items-center text-center md:items-start md:text-left z-10" data-testid="hero-text">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-accent/10 border border-accent/20 text-accent text-xs font-semibold tracking-wide uppercase mb-6">
            Lanzamiento 2026
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-primary mb-5 tracking-tight leading-[1.1]">
            KIT Fiscal <br /> Contable
          </h1>
          <p className="text-lg sm:text-xl font-medium text-muted mb-8 max-w-sm mx-auto md:mx-0 leading-relaxed">
            Calculadoras, formatos, contratos y biblioteca digital en un solo lugar.
          </p>
          <div className="flex flex-col w-full sm:w-auto items-center md:items-start gap-4 mb-4">
            <a
              href={checkoutUrl || '#'}
              className="w-full sm:w-auto text-center bg-primary text-white font-semibold text-lg px-8 py-4 rounded-xl shadow-soft hover:shadow-float hover:bg-primary-light active:scale-[0.98] transition-all duration-300"
            >
              Comprar ahora — $99 MXN
            </a>
            <p className="text-xs font-medium text-muted text-center w-full">Pago único. Acceso inmediato.</p>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-2 relative" data-testid="hero-image">
          <div className="absolute inset-0 bg-gradient-to-tr from-accent/20 to-transparent blur-3xl opacity-50 -z-10 rounded-full" />
          <Image
            src={imageSrc}
            alt="Ilustración abstracta de contabilidad"
            width={600}
            height={400}
            className="rounded-2xl shadow-float transition-transform duration-700 hover:scale-[1.02]"
            sizes="(min-width: 768px) 50vw, 100vw"
            priority
          />
        </div>
      </div>
    </section>
  );
}