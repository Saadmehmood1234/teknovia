import { submitContactForm } from "@/app/actions/contact";
import { Field } from "./Field";
import { FormFeedback } from "./FormFeedback";
import { SubmitButton } from "./SubmitButton";
import { TextareaField } from "./TextareaField";
import { useActionState } from "react";
import { initialContactState, services } from "@/lib/data/contact-data";
import { SpamHoneypot } from "./SpamHoneypot";
import { SelectField } from "./SelectField";

export function EnquiryForm() {
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialContactState,
  );

  return (
    <form action={formAction} className="relative space-y-6">
      <input type="hidden" name="formType" value="enquiry" />

      <SpamHoneypot id="enquiry-website" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
          name="name"
          placeholder="Your name"
          autoComplete="name"
          required
        />

        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
          required
        />

        <Field
          label="Phone"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          autoComplete="tel"
        />

        <SelectField
          label="Service interest"
          name="service"
          options={services}
          placeholder="Select a service"
          required
        />
      </div>

      <Field
        label="Subject"
        name="subject"
        placeholder="e.g. ERP for manufacturing unit"
        required
      />

      <TextareaField
        label="Project details"
        name="details"
        placeholder="Describe your project, requirements, timeline, and any other important details..."
        required
      />

      <div className="flex justify-end">
        <SubmitButton pending={pending}>
          Submit Enquiry
        </SubmitButton>
      </div>

      <FormFeedback state={state} />
    </form>
  );
}