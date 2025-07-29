import { QuoteForm } from "@/components/quote-form";
import { Clock, MessageSquare, Phone } from "lucide-react";
import Image from "next/image";

export default function QuotePage() {
  return (
    <div className="bg-background w-full">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="max-w-xl">
              <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight mb-4">Solicite un Presupuesto</h1>
              <p className="text-lg text-muted-foreground mb-8">
                Complete el formulario y uno de nuestros expertos en pisos se pondrá en contacto con usted para discutir su proyecto. Estamos aquí para ayudarle a encontrar la solución perfecta.
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                        <MessageSquare className="w-6 h-6 text-primary"/>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Consulta Gratuita</h3>
                        <p className="text-muted-foreground">Analizamos sus necesidades sin compromiso para ofrecerle la mejor recomendación.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                        <Clock className="w-6 h-6 text-primary"/>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Respuesta Rápida</h3>
                        <p className="text-muted-foreground">Nos esforzamos por responder a todas las consultas en un plazo de 24 horas hábiles.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 bg-primary/10 p-3 rounded-full">
                        <Phone className="w-6 h-6 text-primary"/>
                    </div>
                    <div>
                        <h3 className="font-bold text-lg">Soporte Directo</h3>
                        <p className="text-muted-foreground">¿Prefiere hablar por teléfono? Llámenos al 800-786-6427.</p>
                    </div>
                </div>
              </div>
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <QuoteForm />
          </div>
        </div>
      </div>
    </div>
  );
}
