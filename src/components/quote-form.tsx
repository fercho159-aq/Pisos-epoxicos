"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import React from "react";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { submitQuoteRequest } from "@/ai/flows/quote-flow";


const formSchema = z.object({
  name: z.string().min(2, { message: "El nombre debe tener al menos 2 caracteres." }),
  company: z.string().min(2, { message: "El nombre de la empresa es requerido." }),
  email: z.string().email({ message: "Por favor, introduzca un correo electrónico válido." }),
  phone: z.string().min(10, { message: "El teléfono debe tener al menos 10 dígitos." }),
  industry: z.string().min(1, { message: "Por favor, seleccione una industria." }),
  projectDetails: z.string().min(10, { message: "Por favor, proporcione algunos detalles del proyecto." }),
});

export function QuoteForm() {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = React.useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      company: "",
      email: "",
      phone: "",
      industry: "",
      projectDetails: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      const result = await submitQuoteRequest(values);
      if (result.success) {
        toast({
          title: "Solicitud Enviada",
          description: "Gracias por su interés. Un representante se pondrá en contacto con usted en breve.",
        });
        form.reset();
      } else {
        toast({
          variant: "destructive",
          title: "Error al enviar",
          description: "Hubo un problema al enviar su solicitud. Por favor, inténtelo de nuevo.",
        });
      }
    } catch (error) {
       toast({
        variant: "destructive",
        title: "Error inesperado",
        description: "Ocurrió un error inesperado. Por favor, inténtelo más tarde.",
      });
      console.error(error);
    } finally {
        setIsSubmitting(false);
    }
  }

  return (
    <Card className="w-full max-w-lg mx-auto shadow-2xl">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Información del Proyecto</CardTitle>
        <CardDescription>Cuéntenos sobre sus necesidades.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Nombre Completo</FormLabel>
                    <FormControl>
                        <Input placeholder="Ej. Juan Pérez" {...field} disabled={isSubmitting} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="company"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Empresa</FormLabel>
                    <FormControl>
                        <Input placeholder="Ej. Acme Inc." {...field} disabled={isSubmitting} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
             <div className="grid sm:grid-cols-2 gap-4">
                <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Correo Electrónico</FormLabel>
                    <FormControl>
                        <Input placeholder="su@email.com" {...field} disabled={isSubmitting} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
                <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                    <FormItem>
                    <FormLabel>Teléfono</FormLabel>
                    <FormControl>
                        <Input placeholder="Ej. 55 1234 5678" {...field} disabled={isSubmitting} />
                    </FormControl>
                    <FormMessage />
                    </FormItem>
                )}
                />
            </div>
             <FormField
              control={form.control}
              name="industry"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Industria</FormLabel>
                  <Select onValueChange={field.onChange} defaultValue={field.value} disabled={isSubmitting}>
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Seleccione su industria" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="alimentos-bebidas">Alimentos y Bebidas</SelectItem>
                      <SelectItem value="automotriz">Automotriz</SelectItem>
                      <SelectItem value="farmaceutica">Farmacéutica y Salud</SelectItem>
                      <SelectItem value="manufactura">Manufactura General</SelectItem>
                      <SelectItem value="comercial">Comercial / Institucional</SelectItem>
                      <SelectItem value="otra">Otra</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="projectDetails"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Detalles del Proyecto</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Describa brevemente su proyecto, incluyendo el área aproximada (m²), las condiciones actuales del piso y los requisitos específicos."
                      className="min-h-[120px]"
                      {...field}
                      disabled={isSubmitting}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" className="w-full" size="lg" disabled={isSubmitting}>
                {isSubmitting ? 'Enviando...' : 'Enviar Solicitud'}
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
