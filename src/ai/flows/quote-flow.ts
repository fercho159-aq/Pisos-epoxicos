'use server';
/**
 * @fileOverview Un flujo para manejar las solicitudes de cotización del formulario de contacto.
 *
 * - submitQuoteRequest - Una función que maneja el envío del formulario de cotización.
 * - QuoteRequestInput - El tipo de entrada para la función submitQuoteRequest.
 * - QuoteRequestOutput - El tipo de retorno para la función submitQuoteRequest.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const QuoteRequestInputSchema = z.object({
  name: z.string().describe('El nombre completo del cliente.'),
  company: z.string().describe('El nombre de la empresa del cliente.'),
  email: z.string().email().describe('La dirección de correo electrónico del cliente.'),
  phone: z.string().describe('El número de teléfono del cliente.'),
  industry: z.string().describe('La industria a la que pertenece el cliente.'),
  projectDetails: z.string().describe('Los detalles del proyecto proporcionados por el cliente.'),
});
export type QuoteRequestInput = z.infer<typeof QuoteRequestInputSchema>;

const QuoteRequestOutputSchema = z.object({
  success: z.boolean(),
  message: z.string(),
});
export type QuoteRequestOutput = z.infer<typeof QuoteRequestOutputSchema>;

export async function submitQuoteRequest(input: QuoteRequestInput): Promise<QuoteRequestOutput> {
  return submitQuoteRequestFlow(input);
}

const submitQuoteRequestFlow = ai.defineFlow(
  {
    name: 'submitQuoteRequestFlow',
    inputSchema: QuoteRequestInputSchema,
    outputSchema: QuoteRequestOutputSchema,
  },
  async (input) => {
    // En una aplicación real, aquí se enviarían los datos a un CRM,
    // a una base de datos o se notificaría por correo electrónico.
    console.log('Nueva solicitud de cotización recibida:');
    console.log(input);

    return {
      success: true,
      message: 'Solicitud de cotización recibida con éxito.',
    };
  }
);
