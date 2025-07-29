import { InteractiveMap } from "@/components/interactive-map";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="bg-background">
      <section className="py-12 md:py-20 text-center bg-card border-b">
        <div className="container mx-auto px-4 md:px-6">
          <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight">Contacto</h1>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mt-4">
            Estamos listos para ayudarle. Póngase en contacto con nosotros a través de cualquiera de los siguientes medios.
          </p>
        </div>
      </section>

      <section className="py-12 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-8 md:gap-12">
            <div className="md:col-span-1 space-y-8">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Oficina Corporativa</h3>
                  <p className="text-muted-foreground">
                    Av. de las Granjas 35, <br/>
                    Col. Jardín Azpeitia, Azcapotzalco, <br/>
                    02530 Ciudad de México, CDMX
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Teléfono</h3>
                  <a href="tel:8007866427" className="text-muted-foreground hover:text-primary">800-STONHARD (786-6427)</a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                 <div className="flex-shrink-0 bg-primary/10 p-4 rounded-full">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-bold">Email</h3>
                  <a href="mailto:info.mexico@stonhard.com" className="text-muted-foreground hover:text-primary">info.mexico@stonhard.com</a>
                </div>
              </div>
            </div>
            <div className="md:col-span-2">
                <div className="h-[400px] md:h-full w-full rounded-lg overflow-hidden shadow-lg">
                    <InteractiveMap />
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
