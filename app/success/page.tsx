import Hero from '@/components/Hero';
import UpsellForm from '@/components/UpsellForm';
import Footer from '@/components/Footer';

/**
 * Success page displayed after a successful purchase. It provides
 * instructions on how to download the kit and how to use the included support
 * request. It also offers an upsell section for additional advisory. The
 * checkout URL is still passed to the footer CTA in case visitors wish to
 * purchase again.
 */
export default function SuccessPage() {
  const checkoutUrl = process.env.NEXT_PUBLIC_CHECKOUT_URL || '#';
  const supportEmail = process.env.NEXT_PUBLIC_SUPPORT_EMAIL || '';

  return (
    <main>
      <section className="py-12 md:py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <h1 className="text-3xl md:text-4xl font-bold text-primary mb-6 text-center">¡Gracias por tu compra!</h1>
          <p className="mb-4 text-gray-700 text-center">
            Tu transacción se ha procesado correctamente. A continuación encontrarás las instrucciones para descargar tu kit y aprovechar el soporte incluido.
          </p>
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">¿Cómo descargar tu kit?</h2>
              <ul className="list-disc pl-5 text-gray-700 space-y-2">
                <li>Revisa el correo electrónico que utilizaste en la compra. El proveedor de pagos te enviará un enlace de descarga directamente a tu bandeja de entrada.</li>
                <li>Por favor, guarda el archivo en un lugar seguro para futuras consultas y evitar pérdida de acceso.</li>
              </ul>
            </div>
            {/* End Download Section */}
            <div>
              <h2 className="text-xl font-semibold mb-2">¿Necesitas asesoría adicional?</h2>
              <p className="text-gray-700 mb-4">
                Si requieres ayuda para aplicar las herramientas del kit a tu caso particular, puedes solicitar una asesoría personalizada. Nuestro equipo revisará tu solicitud y te contactará con la propuesta correspondiente.
              </p>
              <UpsellForm />
            </div>
            {supportEmail && (
              <div>
                <h2 className="text-xl font-semibold mb-2">Contacto</h2>
                <p className="text-gray-700">Si tienes cualquier otra duda, puedes escribirnos a <a href={`mailto:${supportEmail}`} className="text-primary underline">{supportEmail}</a>.</p>
              </div>
            )}
          </div>
        </div>
      </section>
      <Footer checkoutUrl={checkoutUrl} />
    </main>
  );
}