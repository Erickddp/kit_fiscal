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
    <section id="hero" className="relative overflow-hidden py-24 lg:py-32 bg-background pt-32">
      {/* Premium Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-accent/5 blur-[120px] rounded-full -z-10" />

      <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-16">
        <div className="w-full lg:w-3/5 flex flex-col items-center text-center lg:items-start lg:text-left z-10">
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-accent/5 border border-white/10 text-accent text-[10px] font-bold tracking-[0.3em] uppercase mb-10 backdrop-blur-md">
            Protocolo Fiscal 2026
          </div>
          <h1 className="text-5xl sm:text-6xl lg:text-8xl font-black text-white mb-8 tracking-[-0.04em] leading-[0.95] text-glow">
            Infraestructura <br /> <span className="text-accent">Legal y Fiscal</span>
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-primary-muted mb-12 max-w-2xl mx-auto lg:mx-0 leading-relaxed tracking-[-0.01em]">
            Sistema de alto rendimiento para la gestión contable avanzada. <br className="hidden md:block" />
            <span className="text-white/80">Protocolos y activos digitales de grado consultoría.</span>
          </p>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto items-center gap-6">
            <a
              href={checkoutUrl || '#'}
              className="w-full sm:w-auto text-center bg-white text-black font-black text-lg px-12 py-5 rounded-xl shadow-premium hover:shadow-glow hover:scale-[1.05] active:scale-[0.95] transition-all duration-300 uppercase tracking-widest"
            >
              Adquirir KIT — $99
            </a>
            <div className="flex flex-col items-center sm:items-start">
              <span className="text-[10px] font-bold text-accent uppercase tracking-[0.2em] mb-1">Status</span>
              <span className="text-xs font-bold text-white uppercase tracking-widest flex items-center gap-2">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                Sincronizado c/ SAT 2026
              </span>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-2/5 flex justify-center mt-8 lg:mt-0 relative">
          <div className="absolute inset-0 bg-accent/20 blur-[100px] opacity-30 -z-10 rounded-full" />
          <div className="relative p-1.5 glass-card">
            <Image
              src={imageSrc}
              alt="Ecosistema EDDP"
              width={600}
              height={400}
              className="rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 hover:scale-[1.01]"
              sizes="(min-width: 1024px) 40vw, 90vw"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}