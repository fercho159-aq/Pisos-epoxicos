import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle, Users, Wrench, Microscope } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    value: "consultoria",
    title: "Consultoría y Especificación de Proyectos",
    icon: <Microscope className="w-12 h-12 text-primary" />,
    image: "https://placehold.co/600x400",
    hint: "architect blueprint",
    description: "Nuestro proceso comienza con una comprensión profunda de su entorno y sus necesidades. Nuestros representantes territoriales y arquitectónicos trabajan con usted para especificar la solución de piso correcta que cumpla con sus requisitos de rendimiento y diseño.",
    details: [
      "Análisis de las condiciones del sustrato existente.",
      "Evaluación de requisitos de tráfico, químicos y temperatura.",
      "Selección de color, textura y acabado final.",
      "Preparación de especificaciones detalladas para licitaciones."
    ]
  },
  {
    value: "aplicacion",
    title: "Aplicación e Instalación Profesional",
    icon: <Users className="w-12 h-12 text-primary" />,
    image: "https://placehold.co/600x400",
    hint: "construction workers",
    description: "Una instalación impecable es clave para la longevidad de su piso. Stonhard se enorgullece de tener equipos de aplicación directa y altamente capacitados que gestionan cada proyecto de principio a fin, asegurando una calidad y responsabilidad inigualables.",
    details: [
      "Gestión de proyectos de un solo punto de contacto.",
      "Equipos de instalación directa, no subcontratistas.",
      "Preparación de superficie de última generación.",
      "Garantía única que cubre tanto materiales como mano de obra."
    ]
  },
  {
    value: "mantenimiento",
    title: "Mantenimiento y Soporte Continuo",
    icon: <Wrench className="w-12 h-12 text-primary" />,
    image: "https://placehold.co/600x400",
    hint: "floor cleaning",
    description: "Nuestros pisos están diseñados para durar, pero un cuidado adecuado puede extender aún más su vida útil. Ofrecemos productos de limpieza Stonkleen y guías de mantenimiento para ayudarle a mantener su piso en óptimas condiciones, protegiendo su inversión a largo plazo.",
    details: [
      "Productos de limpieza especialmente formulados.",
      "Guías de mantenimiento y procedimientos de reparación.",
      "Soporte técnico para cualquier consulta post-instalación.",
      "Inspecciones periódicas y programas de mantenimiento preventivo."
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-background">
      <section className="py-12 md:py-20 text-center bg-card border-b">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Nuestros Servicios</h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
            En Stonhard, ofrecemos una solución integral que va más allá de los materiales. Somos su socio de principio a fin.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible defaultValue="consultoria" className="w-full space-y-8">
              {services.map((service) => (
                <AccordionItem value={service.value} key={service.value} className="border-none">
                  <Card className="overflow-hidden shadow-lg transition-all duration-300">
                    <AccordionTrigger className="p-0 hover:no-underline [&[data-state=open]>div>h3]:text-primary">
                       <div className="flex flex-col md:flex-row items-center text-left w-full">
                         <div className="p-6 flex-shrink-0">{service.icon}</div>
                         <div className="p-6 pt-0 md:pt-6">
                           <h3 className="font-headline text-2xl font-bold transition-colors">{service.title}</h3>
                         </div>
                         <div className="p-6 ml-auto">
                            <div className="p-2 rounded-full bg-gray-100 group-data-[state=open]:rotate-180 transition-transform">
                                <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                            </div>
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
