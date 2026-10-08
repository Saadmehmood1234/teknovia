"use server";

import { ContactActionState, ContactFormType } from "@/lib/data/contact-data";
import { Resend } from "resend";

function getValue(formData: FormData, key: string): string {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      '"': "&quot;",
      "'": "&#39;",
    };

    return entities[character];
  });
}

function errorState(message: string): ContactActionState {
  return {
    success: false,
    message,
  };
}

function successState(message: string): ContactActionState {
  return {
    success: true,
    message,
  };
}

export async function submitContactForm(
  _previousState: ContactActionState,
  formData: FormData,
): Promise<ContactActionState> {
  if (getValue(formData, "website")) {
    return successState("Your submission has been received.");
  }

  const type = getValue(formData, "formType");

  if (!["message", "callback", "enquiry"].includes(type)) {
    return errorState("Invalid form submission.");
  }

  const formType = type as ContactFormType;

  const fields: Record<string, string> = {
    name: getValue(formData, "name"),
    email: getValue(formData, "email"),
    phone: getValue(formData, "phone"),
    company: getValue(formData, "company"),
    service: getValue(formData, "service"),
    date: getValue(formData, "date"),
    time: getValue(formData, "time"),
    message: getValue(formData, "message"),
    notes: getValue(formData, "notes"),
    subject: getValue(formData, "subject"),
    details: getValue(formData, "details"),
  };

  const requiredFields: Record<ContactFormType, string[]> = {
    message: ["name", "email", "message"],
    callback: ["name", "email", "phone"],
    enquiry: ["name", "email", "service", "subject", "details"],
  };

  for (const field of requiredFields[formType]) {
    if (!fields[field]) {
      return errorState("Please fill in all required fields.");
    }
  }

  const maxLengths: Record<string, number> = {
    name: 120,
    email: 254,
    phone: 30,
    company: 150,
    service: 150,
    date: 10,
    time: 50,
    subject: 200,
    message: 5000,
    notes: 5000,
    details: 5000,
  };

  for (const [field, value] of Object.entries(fields)) {
    if (value.length > maxLengths[field]) {
      return errorState("Some fields exceed the allowed length.");
    }
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(fields.email)) {
    return errorState("Please enter a valid email address.");
  }

  if (formType === "callback" && fields.date) {
    const selectedDate = new Date(`${fields.date}T00:00:00`);
    const today = new Date();

    today.setHours(0, 0, 0, 0);

    if (Number.isNaN(selectedDate.getTime()) || selectedDate < today) {
      return errorState("Please select a valid upcoming callback date.");
    }
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL || "info@teknovia.in";

  if (!apiKey || !from) {
    console.error("Contact email environment variables are missing.");

    return errorState(
      "We're unable to process your request right now. Please try again later.",
    );
  }

  const titles: Record<ContactFormType, string> = {
    message: "New Contact Message",
    callback: "New Callback Request",
    enquiry: "New Project Enquiry",
  };

  const relevantFields: Record<ContactFormType, string[]> = {
    message: ["name", "email", "phone", "company", "service", "message"],
    callback: ["name", "email", "phone", "service", "date", "time", "notes"],
    enquiry: ["name", "email", "phone", "service", "subject", "details"],
  };

  const submittedFields = relevantFields[formType].filter((key) => fields[key]);

  const textBody = submittedFields
    .map((key) => `${key.toUpperCase()}\n${fields[key]}`)
    .join("\n\n");

  const htmlBody = submittedFields
    .map(
      (key) => `
        <div style="margin-bottom: 18px;">
          <p style="margin: 0 0 5px; color: #64748b; font-size: 12px; text-transform: uppercase;">
            ${escapeHtml(key)}
          </p>
          <p style="margin: 0; color: #111827; white-space: pre-wrap;">
            ${escapeHtml(fields[key])}
          </p>
        </div>
      `,
    )
    .join("");

  try {
    const resend = new Resend(apiKey);

    const { error } = await resend.emails.send({
      from,
      to,
      replyTo: fields.email,
      subject: `${titles[formType]} — ${fields.name}`,
      text: textBody,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto;">
          <h2 style="color: #009689;">${titles[formType]}</h2>

          <p>
            A new submission was received through the Teknovia website.
          </p>

          <hr style="border: 0; border-top: 1px solid #e5e7eb; margin: 24px 0;" />

          ${htmlBody}
        </div>
      `,
    });

    if (error) {
      console.error("Contact email delivery failed:", error);

      return errorState(
        "We couldn't send your request. Please try again shortly.",
      );
    }

    if (formType === "callback") {
      return successState(
        "Your callback request has been submitted successfully.",
      );
    }

    if (formType === "enquiry") {
      return successState("Your enquiry has been submitted successfully.");
    }

    return successState("Your message has been sent successfully.");
  } catch (error) {
    console.error("Contact form submission failed:", error);

    return errorState("Something went wrong. Please try again later.");
  }
}
