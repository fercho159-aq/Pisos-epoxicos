import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { CheckCircle, Zap, Shield, Sun } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const products = [
  {
    name: "Stonclad",
    category: "Morteros Epóxicos",
    tagline: "Resistencia incomparable para la industria pesada.",
    image: "https://placehold.co/800x600",
    hint: "epoxy floor",
    description: "Los sistemas Stonclad están diseñados para proporcionar una extraordinaria protección en entornos industriales severos. Soportan impactos, abrasión y ataque químico, lo que los hace ideales para plantas de manufactura, procesamiento de alimentos y áreas de tráfico pesado.",
    specs: [
      { key: "Espesor", value: "6 mm (1/4 de pulgada)" },
      { key: "Resistencia a la compresión", value: "10,000 psi (ASTM C579)" },
      { key: "Absorción de agua", value: "<0.2% (ASTM C413)" },
      { key: "Acabado", value: "Liso o texturizado antideslizante" },
    ],
    features: ["Máxima resistencia al impacto", "Resistente a un amplio rango de químicos", "Ideal para reparación de concreto dañado", "Disponible en varias texturas"]
  },
  {
    name: "Stonshield",
    category: "Sistemas Antideslizantes",
    tagline: "Seguridad y estética en un solo piso.",
    image: "https://placehold.co/800x600",
    hint: "textured floor",
    description: "La familia de productos Stonshield ofrece superficies texturizadas y resistentes al deslizamiento, perfectas para áreas que requieren seguridad y facilidad de limpieza. Sus mezclas de cuarzo de colores le otorgan un aspecto decorativo, ideal para laboratorios, hospitales y escuelas.",
    specs: [
      { key: "Espesor", value: "1.5 a 6 mm" },
      { key: "Resistencia a la compresión", value: "8,500 psi" },
      { key: "Textura", value: "Ligera, media o agresiva" },
      { key: "Acabado", value: "Satinado o mate" },
    ],
    features: ["Excelente resistencia al deslizamiento", "Fácil de limpiar y mantener", "Amplia gama de mezclas de colores", "Bajo olor durante la instalación"]
  },
  {
    name: "Stonres",
    category: "Pisos Resilientes",
    tagline: "Rendimiento ergonómico, diseño sin límites.",
    image: "https://placehold.co/800x600",
    hint: "colorful floor",
    description: "Stonres es un sistema de piso de uretano, resiliente y reductor de ruido, que proporciona comodidad bajo los pies sin sacrificar la resistencia. Sus capacidades de diseño personalizado lo hacen perfecto para espacios públicos, áreas de salud y educación.",
    specs: [
      { key: "Espesor", value: "2 a 4 mm" },
      { key: "Reducción de ruido", value: "Hasta 10 dB" },
      { key: "Elongación", value: "100% (ASTM D2370)" },
      { key: "Acabado", value: "Mate" },
    ],
    features: ["Comodidad ergonómica", "Reduce el ruido de impacto", "Resistente a manchas y desgaste", "Patrones y colores personalizables"]
  },
  {
    name: "Stonchem",
    category: "Recubrimientos Químicos",
    tagline: "Protección definitiva contra la corrosión.",
    image: "https://placehold.co/800x600",
    hint: "chemical plant",
    description: "Los sistemas Stonchem ofrecen una protección inigualable contra ataques químicos agresivos, desde ácidos hasta solventes. Son la solución ideal para áreas de contención secundaria, plantas químicas y áreas de procesamiento que manejan sustancias corrosivas.",
    specs: [
      { key: "Espesor", value: "2 a 6 mm" },
      { key: "Base química", value: "Epóxico novolac, vinil éster" },
      { key: "Rango de temperatura", value: "Hasta 121°C (250°F)" },
      { key: "Acabado", value: "Liso" },
    ],
    features: ["Resistencia química superior", "Protección para concreto y acero", "Soporta altas temperaturas", "Sistema sin juntas"]
  },
  {
    name: "Stonlux",
    category: "Sistemas Autonivelantes",
    tagline: "Acabados lisos, ultra limpios y de alto brillo.",
    image: "https://placehold.co/800x600",
    hint: "clean room",
    description: "Stonlux proporciona una superficie sin juntas, lisa y fácil de limpiar, ideal para entornos de salas limpias, laboratorios y áreas de ensamblaje de alta tecnología. Su formulación autonivelante asegura un acabado perfecto y estético.",
    specs: [
      { key: "Espesor", value: "1.5 a 3 mm" },
      { key: "Resistencia al impacto", value: "Excelente" },
      { key: "Resistencia a la abrasión", value: "Muy Buena (ASTM D-4060)" },
      { key: "Acabado", value: "Alto brillo o satinado" },
    ],
    features: ["Superficie monolítica y lisa", "Excelente resistencia a la limpieza química", "Cumple con los requisitos de VOC", "Disponible en una amplia gama de colores"]
  },
  {
    name: "Stontec",
    category: "Sistemas Decorativos de Hojuelas",
    tagline: "Estilo y durabilidad con un aspecto similar al terrazo.",
    image: "https://placehold.co/800x600",
    hint: "terrazzo floor",
    description: "Los sistemas Stontec utilizan una composición de hojuelas de colores para crear un aspecto decorativo y duradero. Son una alternativa popular al terrazo, ideales para pasillos de hospitales, cafeterías, escuelas y espacios comerciales.",
    specs: [
      { key: "Espesor", value: "1.5 a 4 mm" },
      { key: "Composición", value: "Hojuelas de vinilo en una matriz polimérica" },
      { key: "Resistencia al deslizamiento", value: "Personalizable" },
      { key: "Acabado", value: "Mate o brillante" },
    ],
    features: ["Aspecto decorativo personalizable", "Rápida instalación en comparación con el terrazo", "Resistente a manchas y desgaste", "Ergonómico y confortable"]
  }
];

const specialtyProducts = [
    {
        name: "Stonproof",
        icon: <Shield className="w-8 h-8 text-primary"/>,
        description: "Sistemas de membranas impermeabilizantes y de contención de grietas para proteger su estructura."
    },
    {
        name: "Stongard",
        icon: <Sun className="w-8 h-8 text-primary"/>,
        description: "Recubrimientos para estacionamientos y áreas peatonales, resistentes al tráfico y a la intemperie."
    },
    {
        name: "Stonhard ESD",
        icon: <Zap className="w-8 h-8 text-primary"/>,
        description: "Pisos conductivos y disipativos para proteger equipos electrónicos sensibles de la descarga electrostática."
    }
]

export default function ProductsPage() {
  return (
    <div className="bg-background">
      <section className="py-12 md:py-20 text-center bg-card border-b">
        <div className="container px-4 md:px-6">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Catálogo de Productos</h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
            Descubra la solución de piso perfecta para sus necesidades. Cada uno de nuestros sistemas está diseñado para ofrecer un rendimiento y una durabilidad excepcionales.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6 space-y-16">
          {products.map((product, index) => (
            <Card key={product.name} className="overflow-hidden shadow-lg" id={product.name.toLowerCase()}>
              <div className="grid md:grid-cols-2">
                <div className={cn("order-2 md:order-1", index % 2 !== 0 && "md:order-2")}>
                  <CardHeader className="p-8">
                    <p className="text-primary font-semibold">{product.category}</p>
                    <CardTitle className="font-headline text-3xl md:text-4xl">{product.name}</CardTitle>
                    <p className="text-muted-foreground text-lg pt-2">{product.tagline}</p>
                  </CardHeader>
                  <CardContent className="p-8 pt-0">
                    <p className="mb-6">{product.description}</p>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="item-1">
                        <AccordionTrigger className="font-bold">Especificaciones Técnicas</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2 text-sm">
                            {product.specs.map(spec => (
                              <li key={spec.key} className="flex justify-between">
                                <span className="font-semibold text-muted-foreground">{spec.key}</span>
                                <span>{spec.value}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                      <AccordionItem value="item-2">
                        <AccordionTrigger className="font-bold">Características Principales</AccordionTrigger>
                        <AccordionContent>
                          <ul className="space-y-2">
                            {product.features.map(feature => (
                              <li key={feature} className="flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                <span>{feature}</span>
                              </li>
                            ))}
                          </ul>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                     <Link href="/quote" className="w-full">
                        <Button size="lg" className="w-full mt-8">Solicitar Información</Button>
                     </Link>
                  </CardContent>
                </div>
                 <div className={cn("order-1 md:order-2", index % 2 !== 0 && "md:order-1")}>
                  <Image
                    src={product.image}
                    alt={`Piso ${product.name}`}
                    width={800}
                    height={600}
                    className="w-full h-full object-cover min-h-[300px]"
                    data-ai-hint={product.hint}
                  />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </section>

      <section className="py-12 md:py-20 bg-card">
        <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
                <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Soluciones Especializadas</h2>
                <p className="text-muted-foreground text-lg mb-12">
                Además de nuestros sistemas principales, ofrecemos productos para necesidades específicas.
                </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 text-center">
            {specialtyProducts.map((service) => (
              <div key={service.name} className="p-6">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
