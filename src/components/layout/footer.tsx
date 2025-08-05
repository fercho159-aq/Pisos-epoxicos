
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-card border-t w-full">
      <div className="container mx-auto px-4 md:px-6 py-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2 mb-2">
                <Image src="/images/logo.png" alt="LEXFOR Logo" width={100} height={50} className="object-contain" />
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm">
                Proporcionando soluciones de pisos de alto rendimiento para los entornos más exigentes de México.
            </p>
          </div>
          <div className="md:col-span-2 grid grid-cols-2 sm:grid-cols-3 gap-8">
            <div>
              <h4 className="font-bold mb-4">Navegación</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/products" className="text-muted-foreground hover:text-primary">Productos</Link></li>
                <li><Link href="/services" className="text-muted-foreground hover:text-primary">Servicios</Link></li>
                <li><Link href="/case-studies" className="text-muted-foreground hover:text-primary">Casos de Éxito</Link></li>
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contacto</Link></li>
              </ul>
            </div>
             <div>
              <h4 className="font-bold mb-4">Soporte</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/contact" className="text-muted-foreground hover:text-primary">Contacto</Link></li>
                <li><Link href="/quote" className="text-muted-foreground hover:text-primary">Solicitar Presupuesto</Link></li>
              </ul>
            </div>
             <div>
              <h4 className="font-bold mb-4">Legal</h4>
              <ul className="space-y-2 text-sm">
                <li><Link href="/terms" className="text-muted-foreground hover:text-primary">Términos de Servicio</Link></li>
                <li><Link href="/privacy" className="text-muted-foreground hover:text-primary">Política de Privacidad</Link></li>
              </ul>
            </div>
          </div>
        </div>
        <div className="border-t mt-8 pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} LEXFOR S.A DE C.V. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
