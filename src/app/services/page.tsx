import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { CheckCircle, HardHat, Wind, Sparkles, Building, Layers } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    value: "hvac",
    id: "hvac",
    title: "Sistemas HVAC",
    icon: <Wind className="w-12 h-12 text-primary" />,
    image: "https://placehold.co/600x400",
    hint: "hvac system",
    description: "Ofrecemos proyectos integrales y mantenimientos preventivos/correctivos para sistemas de climatización, garantizando el control de temperatura, humedad en el aire, y los sistemas de fuerza y control necesarios.",
    details: [
      "Proyectos integrales de HVAC.",
      "Mantenimiento preventivo y correctivo.",
      "Control de temperatura y humedad.",
      "Instalación de sistemas de fuerza y control."
    ]
  },
  {
    value: "obra-civil",
    id: "obra-civil",
    title: "Obra Civil",
    icon: <HardHat className="w-12 h-12 text-primary" />,
    image: "https://placehold.co/600x400",
    hint: "construction site",
    description: "Realizamos una amplia gama de trabajos de obra civil, desde la preparación del terreno hasta la construcción de estructuras de concreto, asegurando una base sólida para cualquier proyecto.",
    details: [
      "Levantamiento topográfico.",
      "Trabajos de terracerías.",
      "Cimentaciones y desplantes.",
      "Muros, firmes y losas de concreto."
    ]
  },
  {
    value: "estructuras",
    id: "estructuras",
    title: "Estructuras Metálicas y Techumbres",
    icon: <Building className="w-12 h-12 text-primary" />,
    image: "https://placehold.co/600x400",
    hint: "metal structure",
    description: "Diseñamos e instalamos estructuras metálicas y techumbres de alta calidad, adaptadas a las necesidades específicas de su proyecto, garantizando seguridad y durabilidad.",
    details: [
        "Diseño estructural personalizado.",
        "Fabricación de componentes metálicos.",
        "Montaje e instalación en sitio.",
        "Soluciones de techumbres industriales y comerciales."
    ]
  },
  {
    value: "tablaroca",
    id: "tablaroca",
    title: "Tablaroca",
    icon: <Layers className="w-12 h-12 text-primary" />,
    image: "https://placehold.co/600x400",
    hint: "drywall installation",
    description: "Nos especializamos en la instalación de muros divisorios, plafones corridos y lambrines de tablaroca, ofreciendo soluciones versátiles y de rápida instalación para interiores.",
    details: [
        "Instalación de muros de tablaroca.",
        "Creación de plafones lisos y decorativos.",
        "Lambrines y recubrimientos de muros.",
        "Acabados listos para pintura."
    ]
  },
  {
    value: "dpa",
    id: "dpa",
    title: "DPA (Pulido y Abrillantado)",
    icon: <Sparkles className="w-12 h-12 text-primary" />,
    image: "https://placehold.co/600x400",
    hint: "polished concrete floor",
    description: "Transformamos pisos de concreto mediante un proceso de desbaste, pulido y abrillantado que mejora drásticamente su apariencia y durabilidad, exponiendo los agregados finos o gruesos para un acabado estético.",
    details: [
        "Desbaste de superficies de concreto.",
        "Pulido para un acabado liso y uniforme.",
        "Abrillantado para un brillo duradero.",
        "Mejora de la resistencia y facilidad de limpieza."
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-background w-full">
      <section className="py-12 md:py-20 text-center bg-card border-b">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Nuestros Servicios</h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
            En LEXFOR, ofrecemos una solución integral que va más allá de los materiales. Somos su socio de principio a fin.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible defaultValue="hvac" className="w-full space-y-8">
              {services.map((service) => (
                <AccordionItem value={service.value} key={service.value} id={service.id} className="border-none scroll-mt-20">
                  <Card className="overflow-hidden shadow-lg transition-all duration-300">
                    <AccordionTrigger className="p-6 hover:no-underline [&[data-state=open]>div>h3]:text-primary group text-left">
                       <div className="flex flex-col md:flex-row items-center text-left w-full">
                         <div className="pr-6 flex-shrink-0">{service.icon}</div>
                         <div className="w-full">
                           <h3 className="font-headline text-2xl font-bold transition-colors">{service.title}</h3>
                         </div>
                       </div>
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid md:grid-cols-5 gap-8 p-8 pt-0">
                        <div className="md:col-span-3">
                          <p className="text-muted-foreground mb-6">{service.description}</p>
                          <ul className="space-y-3">
                            {service.details.map((detail) => (
                              <li key={detail} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                                <span>{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="md:col-span-2">
                           <Image
                            src={service.image}
                            alt={service.title}
                            width={600}
                            height={400}
                            className="rounded-lg object-cover w-full h-full shadow-md"
                            data-ai-hint={service.hint}
                           />
                        </div>
                      </div>
                    </AccordionContent>
                  </Card>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>
      
      <section className="py-12 md:py-20 bg-card">
        <div className="container mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">¿Listo para comenzar su proyecto?</h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4 mb-8">
                Nuestro equipo está listo para ayudarle a encontrar la solución perfecta. Contáctenos hoy para una consulta gratuita.
            </p>
            <Link href="/quote">
                <Button size="lg">Solicitar un Presupuesto</Button>
            </Link>
        </div>
      </section>
    </div>
  );
}
