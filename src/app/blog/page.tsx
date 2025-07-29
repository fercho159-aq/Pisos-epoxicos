import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { ArrowRight, Calendar, User } from "lucide-react";

const blogPosts = [
  {
    slug: "importancia-pisos-industriales",
    title: "La Importancia de Elegir el Piso Industrial Correcto",
    author: "Juan Pérez",
    date: "2024-07-15",
    category: "Industria",
    image: "https://placehold.co/800x500",
    hint: "factory floor",
    excerpt: "Un piso industrial no es solo una superficie para caminar. Es un componente crítico de su operación que impacta la seguridad, eficiencia y limpieza. Descubra los factores clave a considerar."
  },
  {
    slug: "tendencias-pisos-2024",
    title: "Tendencias en Pisos Comerciales para 2024",
    author: "Ana García",
    date: "2024-07-02",
    category: "Diseño",
    image: "https://placehold.co/800x500",
    hint: "modern office",
    excerpt: "Desde diseños biofílicos hasta acabados metálicos, exploramos las últimas tendencias en pisos comerciales que combinan estética de vanguardia con un rendimiento duradero."
  },
  {
    slug: "mantenimiento-pisos-epoxicos",
    title: "Guía de Mantenimiento para Pisos Epóxicos",
    author: "Equipo Stonhard",
    date: "2024-06-21",
    category: "Mantenimiento",
    image: "https://placehold.co/800x500",
    hint: "floor cleaning",
    excerpt: "Maximice la vida útil de su inversión con estos consejos prácticos para el cuidado y mantenimiento de sus pisos epóxicos. Un piso limpio es un piso seguro y duradero."
  },
   {
    slug: "pisos-conductivos-esd",
    title: "Pisos Conductivos y Disipativos (ESD): ¿Qué son y por qué son vitales?",
    author: "Carlos Mendoza",
    date: "2024-06-10",
    category: "Técnico",
    image: "https://placehold.co/800x500",
    hint: "server room",
    excerpt: "En la industria electrónica y en entornos con riesgo de explosión, controlar la estática es crucial. Aprenda cómo los pisos ESD de Stonhard protegen sus productos y personal."
  },
];

export default function BlogPage() {
  return (
    <div className="bg-background">
      <section className="py-12 md:py-20 text-center bg-card border-b">
        <div className="container px-4 md:px-6">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Noticias y Actualizaciones</h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
            Manténgase informado con las últimas noticias de la industria, consejos de expertos y actualizaciones de Stonhard.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container px-4 md:px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid gap-8">
              {blogPosts.map((post) => (
                <Card key={post.slug} className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <Image
                      src={post.image}
                      alt={post.title}
                      width={400}
                      height={400}
                      className="w-full h-48 md:h-full object-cover"
                      data-ai-hint={post.hint}
                    />
                  </div>
                  <div className="md:w-2/3 flex flex-col">
                     <CardContent className="p-6 flex-grow flex flex-col">
                        <Badge className="mb-2 w-fit">{post.category}</Badge>
                        <h2 className="font-headline text-2xl font-bold mb-3 flex-grow">{post.title}</h2>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                            <div className="flex items-center gap-1.5"><User className="w-4 h-4"/> {post.author}</div>
                            <div className="flex items-center gap-1.5"><Calendar className="w-4 h-4"/> {post.date}</div>
                        </div>
                        <p className="text-muted-foreground mb-4">{post.excerpt}</p>
                        <Link href="#" className="font-semibold text-primary mt-auto">
                            Leer más <ArrowRight className="inline-block w-4 h-4" />
                        </Link>
                     </CardContent>
                  </div>
                </Card>
              ))}
            </div>
            <aside className="lg:col-span-1 space-y-8">
                <Card>
                    <CardHeader>
                        <CardTitle className="font-headline">Categorías</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2">
                           <li><Link href="#" className="text-muted-foreground hover:text-primary">Industria</Link></li>
                           <li><Link href="#" className="text-muted-foreground hover:text-primary">Diseño</Link></li>
                           <li><Link href="#" className="text-muted-foreground hover:text-primary">Mantenimiento</Link></li>
                           <li><Link href="#" className="text-muted-foreground hover:text-primary">Técnico</Link></li>
                           <li><Link href="#" className="text-muted-foreground hover:text-primary">Noticias de la Empresa</Link></li>
                        </ul>
                    </CardContent>
                </Card>
                 <Card className="bg-primary text-primary-foreground">
                    <CardHeader>
                        <CardTitle className="font-headline">Subscríbase</CardTitle>
                    </CardHeader>
                    <CardContent>
                       <p className="mb-4">Reciba las últimas noticias directamente en su bandeja de entrada.</p>
                       <form className="flex gap-2">
                         <input type="email" placeholder="Su email" className="bg-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/70 px-4 py-2 rounded-md w-full focus:ring-2 focus:ring-white/50 outline-none"/>
                         <Button variant="secondary">Enviar</Button>
                       </form>
                    </CardContent>
                </Card>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
