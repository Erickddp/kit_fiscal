import Hero from '@/components/Hero';
import Tabs from '@/components/Tabs';
import FAQAccordion from '@/components/FAQAccordion';
import UpsellForm from '@/components/UpsellForm';
import Footer from '@/components/Footer';

/**
 * Home page (landing) that showcases the product, its contents, support
 * offering and upsell opportunities. It ties together multiple components
 * including the hero section, tabbed lists of materials, personalised support
 * information, and FAQs. Forms are embedded towards the bottom of the page.
 */
export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL || '#';
  return (
    <main>
      {/* Hero section */}
      <Hero
        checkoutUrl={checkoutUrl}
        imageSrc="/hero.png"
      />
      {/* Tabs section for kit contents */}
      <Tabs />
      {/* Upsell advisory section (Mobile-First) */}
      <section id="asesoria" className="py-12 px-4 bg-surface rounded-t-3xl shadow-float -mt-4 relative z-10 w-full">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-bold tracking-tight text-primary mb-3 text-center">Asesoría Premium</h2>
          <p className="text-muted text-sm text-center mb-6 leading-relaxed">
            ¿Necesitas ayuda para aplicar las herramientas a tu caso? Nuestro equipo ofrece asesoría 1:1. Solicita contacto directo.
          </p>
          <UpsellForm />
        </div>
      </section>
      {/* FAQ section */}
      <FAQAccordion />
      {/* Footer with CTA */}
      <Footer checkoutUrl={checkoutUrl} />
    </main>
  );
}