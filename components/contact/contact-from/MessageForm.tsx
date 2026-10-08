import { ShieldCheck } from "lucide-react";
import { FormFeedback } from "./FormFeedback";
import { SubmitButton } from "./SubmitButton";
import { TextareaField } from "./TextareaField";
import { Field } from "./Field";
import { submitContactForm } from "@/app/actions/contact";
import { useActionState } from "react";
import { initialContactState } from "@/lib/data/contact-data";
import { SpamHoneypot } from "./SpamHoneypot";

export function MessageForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialContactState,
  );

  return (
    <form action={formAction} className="relative space-y-6">
      <input type="hidden" name="formType" value="message" />

      <SpamHoneypot id="message-website" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
          name="name"
          placeholder="Your full name"
          autoComplete="name"
          required
        />

        <Field
          label="Email address"
          name="email"
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
          required
        />

        <Field
          label="Phone number"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          autoComplete="tel"
        />

        <Field
          label="Company name"
          name="company"
          placeholder="Your company"
          autoComplete="organization"
        />
      </div>

      <Field
        label="Service interested in"
        name="service"
        placeholder="e.g. Custom Software Development"
      />

      <TextareaField
        label="Message"
        name="message"
        placeholder="Tell us a little about your requirements..."
        required
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-xs leading-5 text-gray-500">
          <ShieldCheck className="h-4 w-4 shrink-0 text-primary" />
          Your information is secure and confidential.
        </p>

        <SubmitButton pending={pending}>
          Send Message
        </SubmitButton>
      </div>

      <FormFeedback state={state} />
    </form>
  );
}