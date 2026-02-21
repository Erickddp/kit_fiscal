import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeatureGrid from '@/components/FeatureGrid';
import FAQAccordion from '@/components/FAQAccordion';
import UpsellForm from '@/components/UpsellForm';
import Footer from '@/components/Footer';

/**
 * Home page (landing) that showcases the product, its contents, support
 * offering and upsell opportunities. It ties together multiple components
 * including the hero section, bento grid of features, personalised support
 * information, and FAQs.
 */
export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL || '#';
  return (
    <>
      <Navbar />
      <main className="relative">
        {/* Hero section */}
        <Hero
          checkoutUrl={checkoutUrl}
          imageSrc="/hero.png"
        />

        {/* Bento Grid section for kit contents */}
        <FeatureGrid />

        {/* Upsell advisory section (Premium Overlay) */}
        <section id="asesoria" className="py-24 px-6 relative z-10 w-full overflow-hidden">
          <div className="absolute inset-0 bg-accent/5 -z-10 blur-[100px] rounded-full translate-y-1/2" />
          <div className="max-w-2xl mx-auto glass-card p-10 sm:p-16 border-white/5 relative">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-accent/40 to-transparent" />
            <div className="mb-10 text-center">
              <span className="text-accent text-[10px] font-bold uppercase tracking-[0.3em] mb-4 block">Consultoría Directa</span>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.02em] text-white mb-4 text-glow">Protocolo de Asesoría</h2>
              <p className="text-primary-muted text-sm leading-relaxed max-w-sm mx-auto">
                Acceso a consultoría estratégica 1:1 para la implementación de activos fiscales en escenarios complejos.
              </p>
            </div>
            <UpsellForm />
          </div>
        </section>

        {/* FAQ section */}
        <FAQAccordion />

        {/* Footer with CTA */}
        <Footer checkoutUrl={checkoutUrl} />
      </main>
    </>
  );
}