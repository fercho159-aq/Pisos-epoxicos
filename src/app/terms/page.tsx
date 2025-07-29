import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function TermsOfServicePage() {
  return (
    <div className="bg-background w-full py-12 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        <Card className="max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="font-headline text-3xl md:text-4xl">Términos y Condiciones de Servicio</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <p className="text-sm text-muted-foreground">Última actualización: {new Date().toLocaleDateString('es-MX', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            
            <div className="space-y-2">
                <h2 className="font-headline text-xl font-bold pt-4 text-foreground">1. Aceptación de los Términos</h2>
                <p className="text-muted-foreground">
                Al acceder y utilizar nuestro sitio web, usted acepta estar sujeto a estos Términos y Condiciones de Servicio y a nuestra Política de Privacidad. Si no está de acuerdo con alguno de estos términos, tiene prohibido usar o acceder a este sitio.
                </p>
            </div>
            
            <div className="space-y-2">
                <h2 className="font-headline text-xl font-bold pt-4 text-foreground">2. Uso del Sitio Web</h2>
                <p className="text-muted-foreground">
                El contenido de este sitio web es para su información general y uso exclusivo. Está sujeto a cambios sin previo aviso. Ni nosotros ni ningún tercero ofrecemos garantía en cuanto a la exactitud, puntualidad, rendimiento, integridad o idoneidad de la información y los materiales que se encuentran u ofrecen en este sitio web para un propósito particular.
                </p>
            </div>

            <div className="space-y-2">
                <h2 className="font-headline text-xl font-bold pt-4 text-foreground">3. Propiedad Intelectual</h2>
                <p className="text-muted-foreground">
                Este sitio web contiene material que es de nuestra propiedad o para el que tenemos licencia. Este material incluye, entre otros, el diseño, la maquetación, el aspecto, la apariencia y los gráficos. La reproducción está prohibida salvo de conformidad con el aviso de derechos de autor, que forma parte de estos términos y condiciones.
                </p>
            </div>

            <div className="space-y-2">
                <h2 className="font-headline text-xl font-bold pt-4 text-foreground">4. Limitación de Responsabilidad</h2>
                <p className="text-muted-foreground">
                En ningún caso LEXFOR S.A DE C.V. o sus proveedores serán responsables de los daños (incluidos, entre otros, los daños por pérdida de datos o beneficios, o por interrupción del negocio) que surjan del uso o la imposibilidad de usar los materiales en el sitio web de LEXFOR S.A DE C.V.
                </p>
            </div>

            <div className="space-y-2">
                <h2 className="font-headline text-xl font-bold pt-4 text-foreground">5. Contacto</h2>
                <p className="text-muted-foreground">
                Si tiene alguna pregunta sobre estos Términos, por favor <Link href="/contact" className="text-primary hover:underline">contáctenos</Link>.
                </p>
            </div>

          </CardContent>
        </Card>
      </div>
    </div>
  );
}
