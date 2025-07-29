import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const caseStudies = [
  {
    title: "Planta de Procesamiento de Alimentos Nestlé",
    industry: "Alimentos y Bebidas",
    location: "Toluca, México",
    image: "https://placehold.co/800x500",
    hint: "food factory",
    challenge: "Necesitaban un piso que cumpliera con las normas sanitarias, resistiera el choque térmico de la limpieza a vapor y el tráfico constante de montacargas.",
    solution: "Se instaló Stonclad UT, un sistema de uretano poliuretano texturizado que ofrece una durabilidad superior, resistencia térmica y una superficie antideslizante segura.",
    products: ["Stonclad UT"],
  },
  {
    title: "Hospital Ángeles, Área de Quirófanos",
    industry: "Salud",
    location: "Ciudad de México",
    image: "https://placehold.co/800x500",
    hint: "hospital corridor",
    challenge: "El área quirúrgica requería un piso sin juntas, aséptico, fácil de limpiar y que resistiera productos químicos de limpieza agresivos y el tráfico de camillas.",
    solution: "Se aplicó Stonres RTZ, un sistema resiliente y ergonómico con un acabado decorativo y sin juntas.Su composición bacteriostática y fungistática es ideal para entornos estériles.",
    products: ["Stonres RTZ"],
  },
  {
    title: "Planta de Ensamble Automotriz BMW",
    industry: "Automotriz",
    location: "San Luis Potosí, México",
    image: "https://placehold.co/800x500",
    hint: "car factory",
    challenge: "La línea de ensamblaje necesitaba un piso extremadamente resistente al impacto, la abrasión de herramientas y el derrame de fluidos automotrices.",
    solution: "Stonclad GS fue la elección perfecta por su robustez y rápido curado, minimizando el tiempo de inactividad de la planta durante la instalación.",
    products: ["Stonclad GS"],
  },
  {
    title: "Gimnasio Sport City",
    industry: "Comercial y Recreativo",
    location: "Monterrey, México",
    image: "https://placehold.co/800x500",
    hint: "modern gym",
    challenge: "Se buscaba un piso para las áreas de pesas y cardio que fuera duradero, estético, absorbente de impactos y fácil de mantener.",
    solution: "Se instaló una combinación de Stonshield HRI para las áreas de tráfico y Stonres STR para las zonas de entrenamiento, ofreciendo durabilidad y confort.",
    products: ["Stonshield HRI", "Stonres STR"],
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
