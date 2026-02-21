"use server";

import { z } from "zod";

const ContactSchema = z.object({
    name: z.string().min(2, "Name must be at least 2 characters"),
    contact: z.string().min(5, "Please provide a valid email or WhatsApp"),
    message: z.string().min(10, "Message must be at least 10 characters"),
    website: z.string().optional(), // Honeypot
    consent: z.boolean().refine(v => v === true, "You must consent to be contacted"),
});

export type ContactFormData = z.infer<typeof ContactSchema>;

export async function submitContactForm(data: ContactFormData) {
    const validatedFields = ContactSchema.safeParse(data);

    if (!validatedFields.success) {
        // Standardizing validation errors as a single technical message string
        const firstError = Object.values(validatedFields.error.flatten().fieldErrors)[0];
        return {
            success: false,
            message: Array.isArray(firstError) ? firstError[0] : "ERROR: Validación de campos fallida.",
        };
    }

    // Honeypot check
    if (validatedFields.data.website) {
        return {
            success: true,
            message: "SYSTEM: Protocolo de seguridad activo. Solicitud registrada."
        };
    }

    // User specifically requested MAKE_WEBHOOK_URL
    const webhookUrl = process.env.MAKE_WEBHOOK_URL || process.env.MAKE_UPSELL_WEBHOOK_URL;

    if (!webhookUrl) {
        console.error("MAKE_WEBHOOK_URL is not defined in environment variables.");
        return {
            success: false,
            message: "FATAL_ERROR: Infraestructura de comunicación no configurada."
        };
    }

    try {
        const response = await fetch(webhookUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                ...validatedFields.data,
                source: "EDDP_PLATFORM",
                timestamp: new Date().toISOString(),
            }),
        });

        if (!response.ok) {
            throw new Error(`STATUS_${response.status}`);
        }

        return {
            success: true,
            message: "SUCCESS: Protocolo de Consulta Iniciado. En breve un especialista técnico te contactará."
        };
    } catch (error) {
        console.error("Error submitting form:", error);
        return {
            success: false,
            message: "IO_ERROR: No se pudo establecer conexión con el sistema de automatización."
        };
    }
}
