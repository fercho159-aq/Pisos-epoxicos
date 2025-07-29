import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function PrivacyPolicyPage() {
  return (
    <div className="bg-background w-full py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="font-headline text-3xl md:text-4xl">Política de Privacidad</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <p className="text-muted-foreground">
              LEXFOR S.A DE C.V. ("nosotros", "nuestro") opera el sitio web pisosepoxicoslexfor.com (el "Servicio"). Esta página le informa de nuestras políticas sobre la recopilación, uso y divulgación de datos personales cuando utiliza nuestro Servicio y las opciones que ha asociado con esos datos.
            </p>

            <div className="space-y-2">
                <h2 className="font-headline text-xl font-bold pt-4 text-foreground">1. Recopilación y Uso de la Información</h2>
                <p className="text-muted-foreground">
                Recopilamos varios tipos de información para diversos fines para proporcionar y mejorar nuestro Servicio. La información que recopilamos a través de nuestro formulario de contacto (nombre, empresa, correo electrónico, teléfono, detalles del proyecto) se utiliza únicamente para responder a sus solicitudes y proporcionar la información solicitada.
                </p>
            </div>
            
            <div className="space-y-2">
                <h2 className="font-headline text-xl font-bold pt-4 text-foreground">2. Uso de los Datos</h2>
                <p className="text-muted-foreground">
                Utilizamos los datos recopilados para diversos fines:
                </p>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    <li>Para comunicarnos con usted en respuesta a sus consultas.</li>
                    <li>Para proporcionar atención al cliente.</li>
                    <li>Para proporcionarle información sobre nuestros productos y servicios.</li>
                </ul>
            </div>

            <div className="space-y-2">
                <h2 className="font-headline text-xl font-bold pt-4 text-foreground">3. Seguridad de los Datos</h2>
                <p className="text-muted-foreground">
                La seguridad de sus datos es importante para nosotros, pero recuerde que ningún método de transmisión por Internet o método de almacenamiento electrónico es 100% seguro. Si bien nos esforzamos por utilizar medios comercialmente aceptables para proteger sus Datos personales, no podemos garantizar su seguridad absoluta.
                </p>
            </div>

            <div className="space-y-2">
                <h2 className="font-headline text-xl font-bold pt-4 text-foreground">4. Cambios en esta Política de Privacidad</h2>
                <p className="text-muted-foreground">
                Podemos actualizar nuestra Política de Privacidad de vez en cuando. Le notificaremos cualquier cambio publicando la nueva Política de Privacidad en esta página. Se le aconseja que revise esta Política de Privacidad periódicamente para detectar cualquier cambio.
                </p>
            </div>

            <div className="space-y-2">
                <h2 className="font-headline text-xl font-bold pt-4 text-foreground">5. Contacto</h2>
                <p className="text-muted-foreground">
                Si tiene alguna pregunta sobre esta Política de Privacidad, por favor <Link href="/contact" className="text-primary hover:underline">contáctenos</Link>.
                </p>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}