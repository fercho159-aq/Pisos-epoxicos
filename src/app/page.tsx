import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, TestTube2, Wrench, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const sliderItems = [
  {
    title: "Durabilidad y Diseño en Cada Superficie",
    description: "Descubra las soluciones de pisos de alto rendimiento de LEXFOR, donde la resistencia se une a la estética.",
    buttonText: "Solicitar un Presupuesto",
    buttonLink: "/quote",
    imageUrl: "/images/1. INICIO/WhatsApp Image 2025-06-27 at 11.18.16 AM.jpeg", // <-- IMAGEN LOCAL
    imageHint: "industrial factory"
  },
  {
    title: "Innovación en Pisos Industriales",
    description: "Sistemas de pisos epóxicos y de uretano diseñados para soportar las condiciones más exigentes.",
    buttonText: "Ver Productos",
    buttonLink: "/products",
    imageUrl: "    imageUrl: "/images/1. INICIO/WhatsApp Image 2025-06-27 at 11.18.16 AM.jpeg", // <-- IMAGEN LOCAL
",
    imageHint: "modern warehouse"
  },
  {
    title: "Estética y Resistencia para Espacios Comerciales",
    description: "Soluciones de pisos decorativos que no comprometen la durabilidad.",
    buttonText: "Casos de Éxito",
    buttonLink: "/case-studies",
    imageUrl: "https://placehold.co/1920x1080",
    imageHint: "retail store interior"
  }
];

const featuredProducts = [
  {
    name: "Stonclad",
    description: "Sistemas de mortero epóxico de alta resistencia para entornos industriales exigentes.",
    image: "https://placehold.co/600x400",
    hint: "industrial floor"
  },
  {
    name: "Stonshield",
    description: "Pisos decorativos, resistentes al deslizamiento y fáciles de limpiar.",
    image: "https://placehold.co/600x400",
    hint: "textured floor"
  },
  {
    name: "Stonres",
    description: "Suelos resilientes que combinan un diseño distintivo con rendimiento ergonómico.",
    image: "https://placehold.co/600x400",
    hint: "modern interior"
  },
];

const services = [
  {
    icon: <TestTube2 className="w-8 h-8 text-primary" />,
    name: "Aplicación Profesional",
    description: "Nuestros equipos de aplicadores garantizan una instalación perfecta y duradera.",
  },
  {
    icon: <Wrench className="w-8 h-8 text-primary" />,
    name: "Mantenimiento y Soporte",
    description: "Ofrecemos planes de mantenimiento para maximizar la vida útil de su piso.",
  },
  {
    icon: <Building2 className="w-8 h-8 text-primary" />,
    name: "Consultoría de Proyectos",
    description: "Le ayudamos a seleccionar la solución de piso ideal para sus necesidades específicas.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      <section className="relative w-full h-[60vh] md:h-[70vh] group">
        <Carousel
          className="w-full h-full"
          opts={{
            loop: true,
          }}
        >
          <CarouselContent className="h-full">
            {sliderItems.map((slide, index) => (
              <CarouselItem key={index} className="h-full">
                <div className="relative h-full flex items-center justify-center text-center text-white">
                  <div className="absolute inset-0 bg-black/50 z-10"></div>
                  <Image
                    src={slide.imageUrl}
                    alt={slide.title}
                    layout="fill"
                    objectFit="cover"
                    className="z-0"
                    data-ai-hint={slide.imageHint}
                    priority={index === 0}
                  />
                  <div className="relative z-20 container px-4 md:px-6">
                    <h1 className="font-headline text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-4 animate-fade-in-down">
                      {slide.title}
                    </h1>
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-neutral-200 mb-8 animate-fade-in-up">
                      {slide.description}
                    </p>
                    <Link href={slide.buttonLink}>
                      <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 transition-transform transform hover:scale-105">
                        {slide.buttonText}
                      </Button>
                    </Link>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white bg-white/20 hover:bg-white/40 border-none group-hover:opacity-100 opacity-0 transition-opacity" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white bg-white/20 hover:bg-white/40 border-none group-hover:opacity-100 opacity-0 transition-opacity" />
        </Carousel>
      </section>

      <section id="about" className="py-16 md:py-24 bg-card w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
                Líderes en Soluciones de Pisos por Más de 100 Años
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
                En LEXFOR, combinamos un siglo de experiencia con innovación continua para ofrecer pisos que resisten el paso del tiempo. Nuestros sistemas poliméricos sin juntas son la elección para industrias que van desde la manufactura hasta la atención médica, proporcionando seguridad, limpieza y un rendimiento duradero.
              </p>
              <Link href="/case-studies">
                <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
                  Ver Casos de Éxito
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
            </div>
            <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="https://placehold.co/600x450"
                  alt="Equipo de LEXFOR trabajando"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  data-ai-hint="construction team"
                />
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-16 md:py-24 w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Nuestro Catálogo de Productos</h2>
            <p className="text-muted-foreground text-lg mb-12 max-w-3xl mx-auto">
              Explora nuestra gama de sistemas de pisos, diseñados para cumplir con los más altos estándares de rendimiento y estética.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.name} className="overflow-hidden group transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                <Image
                  src={product.image}
                  alt={product.name}
                  width={600}
                  height={400}
                  className="w-full h-48 object-cover"
                  data-ai-hint={product.hint}
                />
                <CardHeader>
                  <CardTitle className="font-headline text-2xl">{product.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">{product.description}</p>
                   <Link href="/products" className="text-primary font-semibold mt-4 inline-block group-hover:underline">
                    Ver más <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">→</span>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
           <div className="text-center mt-12">
             <Link href="/products">
                <Button size="lg" variant="secondary">
                  Explorar todos los productos
                  <ChevronRight className="ml-2 w-4 h-4" />
                </Button>
             </Link>
           </div>
        </div>
      </section>

      <section id="services" className="py-16 md:py-24 bg-card w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">Servicios Integrales</h2>
            <p className="text-muted-foreground text-lg mb-12">
              Desde la consulta inicial hasta la instalación y el mantenimiento, LEXFOR es su socio en cada paso del camino.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            {services.map((service) => (
              <div key={service.name} className="p-6">
                <div className="flex justify-center mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold mb-2">{service.name}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </div>
            ))}
          </div>
           <div className="text-center mt-12">
             <Link href="/services">
                <Button size="lg" variant="outline">
                  Conocer nuestros servicios
                </Button>
             </Link>
           </div>
        </div>
      </section>
    </div>
  );
}
