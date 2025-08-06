import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Planta Farmacéutica FARMACOM DE MEXICO",
    industry: "Industria Farmacéutica",
    location: "Guadalajara, México",
    image: "/images/Casos de exito/WhatsApp Image 2025-06-18 at 12.46.02 PM.jpeg",
    hint: "pharmaceutical plant",
    challenge: "Se requería la remodelación completa con acabados sanitarios en piso, plafones y muros, así como cancelería sanitaria para cumplir con la normatividad aplicable.",
    solution: "Se instaló estructura para muros y plafones a base de aluminio y tablarroca con acabado de liso sanitario, piso epóxico autonivelante a 6mm de espesor, y la instalación de cancelería sanitaria de la más alta calidad.",
    products: ["Sistema Epóxico Autonivelante", "Liso Sanitario con Pintura de Poliuretano", "Canceles Sanitarios"],
  },
  {
    title: "Planta Farmacéutica MAVER",
    industry: "Industria Farmacéutica",
    location: "Guadalajara, México",
    image: "/images/Casos de exito/WhatsApp Image 2025-08-05 at 5.28.01 PM (1).jpeg",
    hint: "technical room",
    challenge: "Se requería un piso epóxico de bajo espesor con alta resistencia mecánica y química en un cuarto técnico en un segundo nivel con equipos HVAC los cuales generan vibraciones.",
    solution: "Se trataron juntas de concreto con material epóxico elastómerico flexible debido a las vibraciones de los equipos así como los movimientos estructurales y se aplicó un piso epóxico de bajo espesor con acabado de pintura de poliuretano de alta resistencia química y mecánica.",
    products: ["Tratamiento de Juntas", "Sellos Epóxicos", "Sellos de Poliuretano"],
  },
  {
    title: "Cedis Tienda 3B",
    industry: "Sector Comercial",
    location: "Atlacomulco, México",
    image: "/images/Casos de exito/WhatsApp Image 2025-08-05 at 5.45.11 PM.jpeg",
    hint: "warehouse floor",
    challenge: "Se requería la delimitación de pasillos y espacios para ubicaciones de tarimas, extintores, flechas de señalización con franjas de seguridad.",
    solution: "Se realizó el trazo para la instalación de franja delimitadora en pasillos y espacios para ubicaciones de tarimas, extintores, flechas de señalización con material epóxico color amarillo tráfico.",
    products: ["Franja Delimitadora", "Franja de Precaución"],
  },
  {
    title: "Bodega Aurrera",
    industry: "Comercial",
    location: "México",
    image: "/images/Casos de exito/WhatsApp Image 2025-08-05 at 5.52.22 PM.jpeg",
    hint: "supermarket kitchen",
    challenge: "Se requería un piso de la más alta resistencia química y mecánica, además con resistencia a choques térmicos en área de hornos.",
    solution: "Se realizó la instalación de Ucrete MF a 6mm específicamente en área de hornos con la resistencia a temperaturas de hasta 130ºC.",
    products: ["Sistema Ucrete MF"],
  }
];

export default function CaseStudiesPage() {
  return (
    <div className="bg-background w-full">
      <section className="py-12 md:py-20 text-center bg-card border-b">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Casos de Éxito</h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
            Vea cómo hemos resuelto los desafíos de pisos más exigentes para clientes en todo México.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            {caseStudies.map((study) => (
              <Card key={study.title} className="overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 flex flex-col">
                <Image
                  src={study.image}
                  alt={study.title}
                  width={800}
                  height={500}
                  className="w-full h-64 object-cover"
                  data-ai-hint={study.hint}
                />
                <CardContent className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-2">
                    <Badge variant="secondary">{study.industry}</Badge>
                    <p className="text-sm text-muted-foreground">{study.location}</p>
                  </div>
                  <h2 className="font-headline text-2xl font-bold mb-4">{study.title}</h2>
                  
                  <div className="space-y-4 text-sm mb-6 flex-grow">
                    <div>
                        <h3 className="font-semibold text-primary mb-1">El Desafío</h3>
                        <p className="text-muted-foreground">{study.challenge}</p>
                    </div>
                    <div>
                        <h3 className="font-semibold text-primary mb-1">La Solución</h3>
                        <p className="text-muted-foreground">{study.solution}</p>
                    </div>
                  </div>
                  
                  <div className="mt-auto pt-4 border-t">
                     <h4 className="text-sm font-semibold mb-2">Productos Utilizados:</h4>
                     <div className="flex flex-wrap gap-2">
                        {study.products.map((product) => (
                            <Badge key={product} variant="outline">{product}</Badge>
                        ))}
                     </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

       <section className="py-12 md:py-20 bg-primary/10">
        <div className="container mx-auto text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold">¿Tiene un desafío similar?</h2>
            <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4 mb-8">
                Nuestro equipo de expertos puede diseñar una solución a la medida de su proyecto.
            </p>
            <Link href="/quote">
                <Button size="lg">Hable con un experto <ArrowRight className="ml-2 h-5 w-5"/></Button>
            </Link>
        </div>
      </section>
    </div>
  );
}
