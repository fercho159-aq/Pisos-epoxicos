
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Building2, TestTube2, Wrench, ChevronRight, CheckCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const sliderItems = [
  {
    title: "Durabilidad y Diseño en Cada Superficie",
    description: "Descubra las soluciones de pisos de alto rendimiento de LEXFOR, donde la resistencia se une a la estética.",
    buttonText: "Solicitar un Presupuesto",
    buttonLink: "/quote",
    imageUrl: "/images/1. INICIO/WhatsApp Image 2025-06-27 at 11.18.16 AM.jpeg",
    imageHint: "industrial factory"
  },
  {
    title: "Innovación en Pisos Industriales",
    description: "Sistemas de pisos epóxicos y de uretano diseñados para soportar las condiciones más exigentes.",
    buttonText: "Ver Productos",
    buttonLink: "/products",
    imageUrl: "/images/1. INICIO/WhatsApp Image 2025-06-27 at 11.18.16 AM.jpeg",
    imageHint: "modern warehouse"
  },
  {
    title: "Estética y Resistencia para Espacios Comerciales",
    description: "Soluciones de pisos decorativos que no comprometen la durabilidad.",
    buttonText: "Casos de Éxito",
    buttonLink: "/case-studies",
    imageUrl: "/images/1. INICIO/WhatsApp Image 2025-06-27 at 11.18.16 AM.jpeg",
    imageHint: "retail store interior"
  }
];

const featuredProducts = [
  {
    name: "Sistema Ucrete",
    description: "Sistemas de mortero de poliuretano cementicio de alto desempeño para entornos industriales exigentes.",
    image: "/images/5. SISTEMA UCRETE MF/WhatsApp Image 2025-06-27 at 11.19.46 AM.jpeg",
    hint: "industrial floor"
  },
  {
    name: "Sistemas Epóxicos",
    description: "Pisos versátiles, resistentes al deslizamiento, químicos y fáciles de limpiar para toda industria.",
    image: "/images/15. SISTEMA DE SELLO EPOXICO/WhatsApp Image 2025-07-01 at 4.23.18 PM.jpeg",
    hint: "textured floor"
  },
  {
    name: "Sistemas Decorativos",
    description: "Suelos que combinan un diseño distintivo con rendimiento y durabilidad.",
    image: "/images/45. PISOS LAMINADOS/WhatsApp Image 2025-07-07 at 5.35.38 PM (4).jpeg",
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

const values = [
    "Enfoque al cliente",
    "Innovación",
    "Espíritu de equipo",
    "Servicio",
    "Profesionalismo",
    "Honestidad",
    "Confianza"
];

const epoxyAdvantages = [
    "Revestimiento monolítico (sin juntas donde puedan generarse acumulación de bacterias).",
    "Durabilidad y Resistencia química",
    "Versatilidad",
    "Facilidad de limpieza",
    "Resistencia al impacto",
    "Tiempo de instalación rápido",
    "Brillo y reflectividad",
    "Mejora de la seguridad"
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
                <div className="relative h-full flex items-center justify-center text-center text-foreground">
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
                    <p className="max-w-2xl mx-auto text-lg md:text-xl text-foreground/80 mb-8 animate-fade-in-up">
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
          <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-30 text-white bg-black/20 hover:bg-black/40 border-none group-hover:opacity-100 opacity-0 transition-opacity" />
          <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-30 text-white bg-black/20 hover:bg-black/40 border-none group-hover:opacity-100 opacity-0 transition-opacity" />
        </Carousel>
      </section>

      <section id="about" className="py-16 md:py-24 bg-card w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex flex-col justify-center order-2 md:order-1">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4">
                Líderes en Soluciones de Pisos 
              </h2>
              <p className="text-muted-foreground text-lg mb-6">
              LEXFOR es una empresa 100% mexicana especializada de nueva generación
que está innovando y mejorando los sistemas de recubrimientos epóxicos
diseñados para los mercados industriales y comerciales. Somos promotores en
el desarrollo de proyectos y soluciones de los grandes retos que el mercado
industrial y comercial plantea. Nuestros 13 años de experiencia laborando nos
respaldan.
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
                  src="/images/2. QUIENES SOMOS/WhatsApp Image 2025-06-27 at 1.08.47 PM.jpeg"
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

      <section id="values" className="py-16 md:py-24 bg-background w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                  src="/images/3. NUESTROS VALORES/WhatsApp Image 2025-06-27 at 1.40.42 PM.jpeg"
                  alt="Nuestros valores"
                  width={600}
                  height={450}
                  className="w-full h-auto object-cover"
                  data-ai-hint="team collaboration"
                />
            </div>
            <div className="flex flex-col justify-center">
              <h2 className="font-headline text-3xl md:text-4xl font-bold mb-6">
                Nuestros Valores
              </h2>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-lg">
                {values.map((value) => (
                    <li key={value} className="flex items-center gap-3">
                        <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                        <span>{value}</span>
                    </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="epoxy-info" className="py-16 md:py-24 bg-card w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12">
            <h2 className="font-headline text-3xl md:text-4xl font-bold mb-4 uppercase text-center">
              ¿Qué es un piso epóxico?
            </h2>
            <p className="text-muted-foreground text-lg max-w-4xl mx-auto text-center">
              Los pisos epóxicos son una solución de revestimiento de alta resistencia y durabilidad que se utiliza comúnmente en una variedad de entornos, desde instalaciones industriales hasta espacios comerciales y residenciales. La clave de su fortaleza radica en la composición de estos pisos para concretos. Están fabricados a partir de resinas epóxicas, que son polímeros termoestables, lo que significa que se endurecen de forma permanente cuando se mezclan con un agente endurecedor adecuado. Esta reacción química crea una superficie sólida, densa y excepcionalmente resistente al tráfico constante de personas, vehículos y productos químicos.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
             <div>
                <h3 className="font-headline text-2xl font-bold mb-6 uppercase">Ventajas de un Piso Epóxico</h3>
                <ul className="grid grid-cols-1 gap-y-4 text-base">
                    {epoxyAdvantages.map((advantage) => (
                        <li key={advantage} className="flex items-start gap-3">
                            <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-1" />
                            <span>{advantage}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
                <Image
                src="/images/4. QUE ES UN PISO EPOXICO/WhatsApp Image 2025-06-27 at 2.14.09 PM.jpeg"
                alt="Aplicación de piso epóxico"
                width={600}
                height={450}
                className="w-full h-auto object-cover"
                data-ai-hint="epoxy floor application"
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

    
