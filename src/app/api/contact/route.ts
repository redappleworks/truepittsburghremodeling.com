import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { BUSINESS_NAME, CONTACT_TO_EMAIL, CONTACT_FROM_EMAIL } from "@/lib/config";

interface ContactFormData {
    name: string;
    phone: string;
    email: string;
    zip: string;
    projectType: string;
    message: string;
    preferredContactMethod: string;
}

// Server-side logging placeholder
function logSubmission(data: ContactFormData, success: boolean, error?: string) {
    const timestamp = new Date().toISOString();
    const logEntry = {
        timestamp,
        success,
        name: data.name,
        email: data.email,
        phone: data.phone,
        zip: data.zip,
        projectType: data.projectType,
        preferredContactMethod: data.preferredContactMethod,
        error: error || undefined,
    };

    // In production, replace with proper logging service (e.g., Axiom, LogDNA, etc.)
    console.log("[Contact Form Submission]", JSON.stringify(logEntry));
}

function validateFormData(data: ContactFormData): string | null {
    if (!data.name || data.name.trim().length < 2) {
        return "Name is required";
    }
    if (!data.phone || data.phone.trim().length < 10) {
        return "Valid phone number is required";
    }
    if (!data.email || !data.email.includes("@")) {
        return "Valid email is required";
    }
    if (!data.zip || data.zip.trim().length < 5) {
        return "Valid zip code is required";
    }
    if (!data.projectType) {
        return "Project type is required";
    }
    if (!data.preferredContactMethod) {
        return "Preferred contact method is required";
    }
    return null;
}

export async function POST(request: NextRequest) {
    try {
        const data: ContactFormData = await request.json();

        // Validate required fields
        const validationError = validateFormData(data);
        if (validationError) {
            logSubmission(data, false, validationError);
            return NextResponse.json(
                { error: validationError },
                { status: 400 }
            );
        }

        // Check for API key
        if (!process.env.RESEND_API_KEY) {
            console.error("[Contact Form Error] RESEND_API_KEY not configured");
            logSubmission(data, false, "Email service not configured");
            return NextResponse.json(
                { error: "Email service is not configured. Please call us directly." },
                { status: 500 }
            );
        }

        // Initialize Resend
        const resend = new Resend(process.env.RESEND_API_KEY);

        // Build email content
        const subject = `New ${data.projectType} Estimate Request - ${data.preferredContactMethod} Preferred`;

        const htmlContent = `
      <h2>New Estimate Request from ${BUSINESS_NAME} Website</h2>
      <hr>
      <p><strong>Contact Information:</strong></p>
      <ul>
        <li><strong>Name:</strong> ${data.name}</li>
        <li><strong>Phone:</strong> ${data.phone}</li>
        <li><strong>Email:</strong> ${data.email}</li>
        <li><strong>Zip Code:</strong> ${data.zip}</li>
      </ul>
      <p><strong>Project Details:</strong></p>
      <ul>
        <li><strong>Project Type:</strong> ${data.projectType}</li>
        <li><strong>Preferred Contact Method:</strong> ${data.preferredContactMethod}</li>
      </ul>
      ${data.message ? `<p><strong>Message:</strong></p><p>${data.message}</p>` : ""}
      <hr>
      <p><em>This message was sent from the ${BUSINESS_NAME} website contact form.</em></p>
    `;

        const textContent = `
New Estimate Request from ${BUSINESS_NAME} Website

Contact Information:
- Name: ${data.name}
- Phone: ${data.phone}
- Email: ${data.email}
- Zip Code: ${data.zip}

Project Details:
- Project Type: ${data.projectType}
- Preferred Contact Method: ${data.preferredContactMethod}

${data.message ? `Message:\n${data.message}` : ""}

---
This message was sent from the ${BUSINESS_NAME} website contact form.
    `.trim();

        // Send email via Resend
        const { error } = await resend.emails.send({
            from: CONTACT_FROM_EMAIL,
            to: CONTACT_TO_EMAIL,
            replyTo: data.email,
            subject: subject,
            html: htmlContent,
            text: textContent,
        });

        if (error) {
            logSubmission(data, false, error.message);
            return NextResponse.json(
                { error: "Failed to send email. Please try again or call us directly." },
                { status: 500 }
            );
        }

        logSubmission(data, true);
        return NextResponse.json(
            { message: "Thank you! We'll be in touch soon." },
            { status: 200 }
        );
    } catch (error) {
        console.error("[Contact Form Error]", error);
        return NextResponse.json(
            { error: "An unexpected error occurred. Please try again." },
            { status: 500 }
        );
    }
}
