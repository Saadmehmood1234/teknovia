import { submitContactForm } from "@/app/actions/contact";
import { Field } from "./Field";
import { FormFeedback } from "./FormFeedback";
import { SelectField } from "./SelectField";
import { SubmitButton } from "./SubmitButton";
import { TextareaField } from "./TextareaField";
import { useActionState, useEffect, useRef } from "react";
import { callbackTimes, initialContactState, services } from "@/lib/data/contact-data";
import { SpamHoneypot } from "./SpamHoneypot";

export function CallbackForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [state, formAction, pending] = useActionState(
    submitContactForm,
    initialContactState,
  );

  useEffect(() => {
    if (state.success) {
      formRef.current?.reset();
    }
  }, [state.success]);

  return (
    <form ref={formRef} action={formAction} className="relative space-y-6">
      <input type="hidden" name="formType" value="callback" />

      <SpamHoneypot id="callback-website" />

      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
          name="name"
          placeholder="Your name"
          autoComplete="name"
          required
        />

        <Field
          label="Phone"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          autoComplete="tel"
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

        <SelectField
          label="What are you interested in?"
          name="service"
          options={services}
          placeholder="Select a service"
        />

        <Field
          label="Preferred date"
          name="date"
          type="date"
        />

        <SelectField
          label="Preferred time"
          name="time"
          options={callbackTimes}
          placeholder="Select a time"
        />
      </div>

      <TextareaField
        label="Notes"
        name="notes"
        placeholder="Anything you'd like us to know..."
      />

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-xs text-gray-500">
          We usually call back within one business day.
        </p>

        <SubmitButton pending={pending}>
          Request Callback
        </SubmitButton>
      </div>

      <FormFeedback state={state} />
    </form>
  );
}
