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
import nodemailer from 'nodemailer';

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
    console.log('Nueva solicitud de cotización recibida:', input);

    if (!process.env.MAIL_HOST || !process.env.MAIL_PORT || !process.env.MAIL_USER || !process.env.MAIL_PASS || !process.env.MAIL_TO) {
        console.error("Faltan variables de entorno para el correo.");
        return {
            success: false,
            message: "El servidor de correo no está configurado. Por favor, contacte al administrador."
        }
    }
    
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: Number(process.env.MAIL_PORT) === 465, // true for 465, false for other ports
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailOptions = {
      from: `"${input.name}" <${process.env.MAIL_FROM || process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      subject: `Nueva Solicitud de Cotización de: ${input.company}`,
      html: `
        <h1>Nueva Solicitud de Cotización</h1>
        <p><strong>Nombre:</strong> ${input.name}</p>
        <p><strong>Empresa:</strong> ${input.company}</p>
        <p><strong>Email:</strong> ${input.email}</p>
        <p><strong>Teléfono:</strong> ${input.phone}</p>
        <p><strong>Industria:</strong> ${input.industry}</p>
        <h2>Detalles del Proyecto</h2>
        <p>${input.projectDetails}</p>
      `,
    };

    try {
      await transporter.sendMail(mailOptions);
      console.log('Correo de cotización enviado con éxito');
      return {
        success: true,
        message: 'Solicitud de cotización recibida con éxito. Un representante se pondrá en contacto con usted en breve.',
      };
    } catch (error) {
      console.error('Error al enviar el correo:', error);
      return {
        success: false,
        message: 'Hubo un problema al enviar su solicitud. Por favor, inténtelo de nuevo.',
      };
    }
  }
);
