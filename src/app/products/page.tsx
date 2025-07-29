import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { CheckCircle, Layers, Paintbrush, Shield, Signal } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const productCategories = [
  {
    id: "sistemas-ucrete",
    category: "Sistemas Ucrete",
    icon: <Layers className="w-8 h-8 text-primary" />,
    products: [
      {
        name: "Sistema Ucrete MF",
        description: "Recubrimiento autonivelante para pisos de alto desempeño con propiedades antiderrapantes en entornos secos. Ideal para industria manufacturera, áreas de procesados y almacenes. Excelente resistencia química, al impacto y temperaturas (-15°C a +70°C).",
        image: "/images/5. SISTEMA UCRETE MF/WhatsApp Image 2025-06-27 at 11.19.46 AM.jpeg",
        hint: "factory floor",
      },
      {
        name: "Sistema Ucrete RG",
        description: "Diseñado para recubrir zoclos, trincheras, muretes de contención secundaria y bases de tanques. Resistencia química, al impacto y choques térmicos (-25°C a +130°C).",
        image: "/images/6. SISTEMA UCRETE RG/WhatsApp Image 2025-06-27 at 5.59.57 PM.jpeg",
        hint: "industrial trench",
      },
      {
        name: "Sistema Ucrete UD 200",
        description: "Acabado antiderrapante con resistencia extrema a impactos, químicos y choques térmicos (-25°C a +130°C). Soporta derrames ocasionales hasta +150°C.",
        image: "/images/7. SISTEMA UCRETE UD 200/WhatsApp Image 2025-06-27 at 5.59.58 PM.jpeg", 
        hint: "heavy duty floor",
      },
      {
        name: "Sistema Ucrete DP",
        description: "Superficie antiderrapante de textura fina. Alta resistencia al impacto, agentes agresivos y choques térmicos (-40°C a +120°C). Fácil limpieza.",
        image: "/images/8. SISTEMA UCRETE DP/WhatsApp Image 2025-06-27 at 5.59.58 PM (1).jpeg", 
        hint: "textured industrial floor",
      },
    ],
  },
  {
    id: "sistemas-epoxicos",
    category: "Sistemas Epóxicos",
    icon: <Shield className="w-8 h-8 text-primary" />,
    products: [
      {
        name: "Sistema Epóxico Autonivelante",
        description: "Acabado liso para áreas limpias y producción. Opción con agregados para tránsito pesado/impactos, o sin agregados para tránsito ligero. Resistencia química y fácil limpieza.",
        image: "/images/9. SISTEMA AUTONIVELANTE/WhatsApp Image 2025-06-27 at 11.18.16 AM.jpeg",
        hint: "clean room floor",
      },
      {
        name: "Sistema Epóxico Cascara de Naranja",
        description: "Acabado semiderrapante con textura tipo cáscara de naranja. Ideal para almacenes, talleres y pasillos. Opciones con/sin agregados para tránsito pesado/ligero.",
        image: "/images/10. SISTEMA CASCARA DE NARANJA/WhatsApp Image 2025-07-07 at 6.14.57 PM.jpeg",
        hint: "textured epoxy",
      },
      {
        name: "Sistema Epóxico Antiderrapante",
        description: "Acabado antiderrapante para áreas con contacto constante con agua/líquidos. Reduce deslizamientos peatonales/mecánicos. Refuerzo contra ataques químicos.",
        image: "/images/11. SISTEMA ANTIDERRAPANTE/WhatsApp Image 2025-06-27 at 5.59.58 PM.jpeg",
        hint: "non-slip floor",
      },
      {
        name: "Sistema Epóxico Conductivo",
        description: "Descarga electricidad estática a tierra, evitando chispas. Ideal para quirófanos, laboratorios, ensamble de productos eléctricos/inflamables.",
        image: "/images/12. SISTEMA CONDUCTIVO/gal1_076217929.jpg",
        hint: "operating room",
      },
      {
        name: "Sistema Epóxico de Cuarzo",
        description: "Decorativo con combinación de 2 colores. Acabado autonivelante (cuarzo encapsulado) y antiderrapante.",
        image: "/images/13. SISTEMA DE CUARZO/IMG-20181102-WA0057.jpg",
        hint: "quartz floor",
      },
      {
        name: "Sistema Epóxico de Chip de Hojuela",
        description: "Decorativo con chips de colores. Acabado autonivelante (hojuela encapsulada) y texturizado.",
        image: "/images/14. SISTEMA DE HOJUELA/epoxy-garage-floors-1-scaled.jpg",
        hint: "decorative flake floor",
      },
    ],
  },
  {
    id: "sellos-juntas",
    category: "Sellos, Juntas y Soluciones Sanitarias",
    icon: <CheckCircle className="w-8 h-8 text-primary" />,
    products: [
        { name: "Sellos Epóxicos", description: "Para mantenimiento de pisos existentes o renovación estética. Bajos espesores.", image: "https://placehold.co/600x400", hint: "epoxy seal" },
        { name: "Sellos de Poliuretano", description: "Capa superficial de sacrificio/protección para sistemas epóxicos. Mayor resistencia química, mecánica y a rayos UV.", image: "https://placehold.co/600x400", hint: "polyurethane coating" },
        { name: "Tratamiento de Juntas Construcción y Control", description: "Regenera juntas mediante corte y relleno con material semi-rígido/flexible. Contrarresta movimientos estructurales.", image: "https://placehold.co/600x400", hint: "joint treatment" },
        { name: "Curva Sanitaria", description: "Recubrimiento en uniones muro-muro/muro-platón (radio mínimo 5cm). Elimina esquinas para evitar acumulación de suciedad.", image: "https://placehold.co/600x400", hint: "sanitary cove" },
        { name: "Zoclo Sanitario", description: "Recubrimiento en uniones muro-piso (radio mínimo 5cm). Elimina esquinas para evitar acumulación de suciedad.", image: "https://placehold.co/600x400", hint: "sanitary base" },
    ]
  },
  {
    id: "senalizacion-muros",
    category: "Señalización y Muros",
    icon: <Signal className="w-8 h-8 text-primary" />,
    products: [
        { name: "Franja Delimitadora", description: "Amarilla, roja o azul (5cm/10cm ancho) para tránsito peatonal/vehicular.", image: "https://placehold.co/600x400", hint: "floor marking" },
        { name: "Franja de Precaución", description: "Amarilla/negra (5cm/10cm ancho) para alertar riesgos y prevenir accidentes.", image: "https://placehold.co/600x400", hint: "hazard stripe" },
        { name: "Liso Sanitario con Pintura de Poliuretano", description: "Impermeable, fácil limpieza. Resistencia química/mecánica. Ideal farmacéutica, quirófanos, laboratorios.", image: "https://placehold.co/600x400", hint: "sanitary wall" },
        { name: "Liso Sanitario con Pintura Antibacterial", description: "Inhibe bacterias, hongos y virus. Ideal farmacéutica, quirófanos, laboratorios.", image: "https://placehold.co/600x400", hint: "antibacterial paint" },
        { name: "Liso Sanitario con Fibra de Vidrio", description: "Reduce agrietamiento por movimientos estructurales. Usa pintura poliuretano/antibacterial.", image: "https://placehold.co/600x400", hint: "fiberglass wall" },
    ]
  },
  {
    id: "canceleria-acabados",
    category: "Cancelería y Acabados Generales",
    icon: <Paintbrush className="w-8 h-8 text-primary" />,
    products: [
        { name: "Puertas Sanitarias", description: "Abatibles, corredizas (simples/dobles). Cierre manual/automático. Empaque perimetral. Cristal 6mm transparente/translúcido/opaco.", image: "https://placehold.co/600x400", hint: "sanitary door" },
        { name: "Ventanas Sanitarias", description: "Adaptables a medidas/anchos de muro. Cristal 6mm transparente/translúcido/opaco.", image: "https://placehold.co/600x400", hint: "sanitary window" },
        { name: "Canceles Sanitarios", description: "División de áreas en aluminio natural. Paneles de cristal 6mm con sellos de silicon.", image: "https://placehold.co/600x400", hint: "sanitary partition" },
        { name: "Pass Box", description: "Cierre hermético, cerradura electromagnética, cristal 6mm, luz UV para eliminar bacterias/virus.", image: "https://placehold.co/600x400", hint: "pass box" },
        { name: "Aluminio Comercial", description: "Puertas, ventanas, canceles. Varias líneas disponibles.", image: "https://placehold.co/600x400", hint: "commercial aluminum" },
        { name: "Loseta", description: "Residencial, comercial e industrial.", image: "https://placehold.co/600x400", hint: "floor tile" },
        { name: "Pintura", description: "Vinílica, esmaltes, poliuretano.", image: "https://placehold.co/600x400", hint: "paint cans" },
    ]
  }
];

export default function ProductsPage() {
  return (
    <div className="bg-background w-full">
      <section className="py-12 md:py-20 text-center bg-card border-b">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">
            Catálogo de Productos y Sistemas
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground mt-4">
            Descubra la solución perfecta para sus necesidades. Cada uno de nuestros sistemas está diseñado para ofrecer un rendimiento y una durabilidad excepcionales.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6 space-y-16">
          {productCategories.map((category) => (
            <div key={category.category} id={category.id} className="scroll-mt-20">
              <div className="flex items-center gap-4 mb-8">
                {category.icon}
                <h2 className="font-headline text-3xl md:text-4xl font-bold">{category.category}</h2>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {category.products.map((product) => (
                  <Card key={product.name} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-1 flex flex-col">
                    {product.image && (
                        <Image
                        src={product.image}
                        alt={product.name}
                        width={600}
                        height={400}
                        className="w-full h-48 object-cover"
                        data-ai-hint={product.hint}
                        />
                    )}
                    <CardHeader>
                      <CardTitle className="font-headline text-xl">{product.name}</CardTitle>
                    </CardHeader>
                    <CardContent className="flex flex-col flex-grow">
                      <p className="text-muted-foreground text-sm flex-grow">{product.description}</p>
                      <Link href="/quote" className="w-full">
                        <Button className="w-full mt-6">
                          Solicitar Información
                        </Button>
                      </Link>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
