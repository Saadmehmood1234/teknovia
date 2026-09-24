"use client";

import { FormEvent, useState } from "react";
import {
  ArrowRight,
  CalendarDays,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";
import { FaLinkedinIn } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { Breadcrumb } from "@/components/ui/breadcrumb";
import { contactFeatures, contactFeatures2, tabs } from "@/lib/data/site";
import Image from "next/image";
import Link from "next/link";

type ContactTab = "message" | "callback" | "enquiry";

const services = [
  "Custom Software Development",
  "Web Application Development",
  "Mobile Application Development",
  "SaaS Development",
  "ERP & Business Solutions",
  "eCommerce Development",
  "Digital Marketing",
  "Other",
];

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<ContactTab>("message");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Connect this to your API/email service.
  };

  return (
    <main className="overflow-hidden">
      <section className="relative pt-8 border-b border-gray-200 pb-12 isolate overflow-hidden bg-linear-to-r from-primary/5 via-white to-primary/10 gap-10">
        <Container>
          <Breadcrumb items={[{ label: "Contact Us" }]} className="mb-8" />

          <div className="flex flex-col gap-8 lg:flex-row lg:items-center lg:justify-between lg:gap-12">
            <div className="w-full">
              <h1 className="max-w-4xl text-4xl font-bold leading-[1.2] tracking-tight text-black sm:text-5xl">
                Let&apos;s Build Smart Solutions Together
              </h1>

              <p className="mt-6 max-w-2xl text-md leading-7 text-gray-600 sm:leading-6">
                Partner with Teknovia for software development, digital
                marketing, and scalable technology solutions tailored to your
                business goals.
              </p>

              <div className="mt-7 grid-cols-1 grid sm:grid-cols-3 gap-4 sm:gap-3">
                {contactFeatures.map((contact) => (
                  <div
                    className="flex flex-col gap-2 justify-start items-start"
                    key={contact.id}
                  >
                    <div className="text-primary flex justify-center items-center p-2 bg-primary-100 rounded-full">
                      <contact.icon size={20} />
                    </div>

                    <h3 className="font-bold text-black text-sm">
                      {contact.title}
                    </h3>

                    <p className="text-sm text-gray-400">
                      {contact.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative w-full pb-8 sm:pb-10">
              <div className="aspect-3/2 overflow-hidden">
                <Image
                  src="/images/contact-background.png"
                  alt="Teknovia technology and business solutions"
                  fill
                  priority
                  className="object-cover rounded-3xl"
                  sizes="(max-width: 1024px) 100vw, 38vw"
                />
              </div>

              <div className="absolute xl:bottom-[-3] sm:bottom-6 sm:right-6 bottom-0 max-sm:left-6 w-[calc(100%-2rem)] max-w-80 rounded-2xl bg-[#106B65] p-6 shadow-xl shadow-slate-900/10 ">
                <div className="flex justify-center max-w-12 items-center rounded-lg mb-2 pb-3 bg-white/10 px-1 pt-2 shadow-lg backdrop-blur-xl">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="w-5 h-5"
                    aria-hidden="true"
                  >
                    <path d="M3 14h3a2 2 0 0 0 2-2V5a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2z"></path>
                    <path d="M21 14h-3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v7a2 2 0 0 1-2 2z"></path>
                  </svg>
                </div>
                <h3 className="font-heading text-xl font-bold text-white">
                  Talk to Our Experts
                </h3>

                <p className="mt-2 text-sm leading-6 text-primary-100">
                  Schedule a free consultation to discuss your project
                  requirements.
                </p>

                <Link
                  href="/contact#contact-form"
                  className="mt-5 inline-flex w-full items-center rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary-800 transition duration-200 hover:bg-primary hover:text-white"
                >
                  Schedule a Meeting
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section id="contact-form" className="py-8 lg:py-16 bg-[#FAFAFA]">
        <Container>
          <div className="grid gap-4 py-2 overflow-hidden grid-cols-1 md:grid-cols-3">
            {contactFeatures2.map((contact) => (
              <div
                className="flex gap-2 p-5 justify-start items-start rounded-2xl border border-gray-100 bg-white shadow-sm shadow-gray-900/5"
                key={contact.id}
              >
                <div className="text-primary flex justify-center items-center p-3 bg-primary-50/70 border-primary-200 border rounded-xl">
                  <contact.icon size={20} />
                </div>

                <div className="flex gap-1 justify-start flex-col">
                  <h3 className="font-bold text-black text-sm">
                    {contact.title}
                  </h3>

                  <p className="text-sm text-gray-400">{contact.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-center items-center  lg:flex-row w-full gap-12 mt-8 lg:items-start">
            <div className="flex flex-col gap-1 bg-[#FBFBFB] border border-gray-100 p-1 shadow-md shadow-gray-300 rounded-2xl">
              <div className="overflow-x-auto p-1.5">
                <div className="flex md:flex-row flex-col min-w-max gap-1">
                  {tabs.map((tab) => {
                    const Icon = tab.icon;
                    const active = activeTab === tab.id;

                    return (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative flex items-center gap-1 px-12  py-3 text-sm font-semibold transition ${
                          active
                            ? "text-primary-700 font-extrabold bg-white border border-gray-100 shadow-sm shadow-gray-300 rounded-2xl"
                            : "text-gray-500 hover:text-gray-900"
                        }`}
                      >
                        <Icon className="h-4 w-4" />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>
              <div className="p-10 bg-white border-t border-gray-200">
                <div className="flex flex-col gap-2 mb-8">
                  <h2 className="text-2xl font-black">Send Us a Message</h2>
                  <p className="text-sm text-gray-400">
                    Fill out the form below and our team will get back to you
                    shortly.
                  </p>
                </div>
                <div>
                  {activeTab === "message" && (
                    <MessageForm onSubmit={handleSubmit} />
                  )}

                  {activeTab === "callback" && (
                    <CallbackForm onSubmit={handleSubmit} />
                  )}

                  {activeTab === "enquiry" && (
                    <EnquiryForm onSubmit={handleSubmit} />
                  )}
                </div>
              </div>
            </div>

            <ContactInformation />
          </div>
        </Container>
      </section>

      <section className="border-y border-gray-200 bg-white">
        <div className="container-page py-16 sm:py-20">
          <div className="grid gap-10 lg:grid-cols-[1.65fr_0.95fr] lg:items-center">
            <div className="relative min-h-76 overflow-hidden rounded-3xl bg-gray-100">
              <iframe
                title="Teknovia office location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.9016679414235!2d29.1070784!3d41.0055254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac6291cafedb7%3A0x2a148168e49182b!2sTeknovia!5e0!3m2!1sen!2sin!4v1789489469784!5m2!1sen!2sin"
                className="absolute inset-0 h-full w-full border-0 grayscale-20"
                loading="lazy"
              />
              <div className="absolute bottom-5 left-5 w-71.5 rounded-2xl bg-white px-5 py-5 shadow-xl sm:bottom-6 sm:left-6">
                <p className="font-heading text-lg font-bold text-gray-950">
                  Find Us
                </p>

                <p className="mt-4 font-heading text-base font-bold text-gray-950">
                  Head Office
                </p>

                <p className="mt-1 text-base leading-6 text-gray-500">
                  Teknovia Technologies Pvt Ltd
                  <br />
                  Noida, Uttar Pradesh
                  <br />
                  India
                </p>

                <a
                  href="https://maps.app.goo.gl/hpJN9MR5oY9rmNVw6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary transition hover:text-primary-dark"
                >
                  View on Google Maps
                  <ExternalLink className="h-4 w-4" />
                </a>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-gray-200 bg-linear-to-br from-primary-50/70 via-white to-primary-50/40 p-8">
              <div>
                <h2 className="font-heading text-2xl font-bold text-gray-950">
                  Let&apos;s Connect
                </h2>

                <p className="mt-4 max-w-md text-sm leading-7 text-gray-500">
                  Follow us on social media for updates, insights, and company
                  news.
                </p>
              </div>

              <a
                href="https://www.linkedin.com/company/teknovia-tech"
                aria-label="LinkedIn"
                className="mt-7 flex h-12 w-12 items-center justify-center rounded-full bg-white text-gray-700 shadow-md transition hover:-translate-y-1 hover:text-primary"
              >
                <FaLinkedinIn className="h-6 w-6" />
              </a>

              <div className="mt-10 overflow-hidden rounded-2xl border border-gray-200/80 bg-white/70 shadow-sm backdrop-blur-sm">
                <div className="relative md:h-80 h-48 sm:h-64 lg:h-48 w-full">
                  <Image
                    src="/images/connect-us.jpeg"
                    fill
                    alt="Connect Us"
                    className="object-cover object-center"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function ContactInformation() {
  return (
    <div className="w-full">
      <div className="">
        <h3 className="mt-3 font-heading text-2xl font-semibold text-gray-950">
          Get in touch
        </h3>

        <p className="mt-2 text-sm leading-6 text-gray-600">
          Reach us through any of the channels below.
        </p>
        <div className="mt-8 space-y-6 bg-white p-6 rounded-xl border border-gray-50 shadow-sm shadow-gray-200 w-full">
          <ContactDetail
            icon={MapPin}
            label="Head Office"
            value={
              <>
                Noida, Uttar Pradesh
                <br />
                India
              </>
            }
          />

          <ContactDetail
            icon={Phone}
            label="Call us"
            value="+91 97129 80864"
            href="tel:+91 97129 80864"
          />

          <ContactDetail
            icon={Mail}
            label="Email us"
            value="info@teknovia.in"
            href="mailto:info@teknovia.in"
          />
        </div>

        <div className="mt-8 border-t border-gray-200 pt-7">
          <div className="flex items-center gap-2">
            <CalendarDays className="h-4 w-4 text-primary" />

            <span className="font-heading text-sm font-semibold text-gray-950">
              Business Hours
            </span>
          </div>

          <div className="mt-4 space-y-2 text-sm text-gray-600">
            <div className="flex justify-between gap-4">
              <span>Monday – Friday</span>
              <span className="font-medium text-gray-900">
                9:00 AM – 6:00 PM
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span>Saturday</span>
              <span className="font-medium text-gray-900">
                10:00 AM – 4:00 PM
              </span>
            </div>

            <div className="flex justify-between gap-4">
              <span>Sunday</span>
              <span className="font-medium text-gray-900">Closed</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ContactDetail({
  icon: Icon,
  label,
  value,
  href,
}: {
  icon: typeof MapPin;
  label: string;
  value: React.ReactNode;
  href?: string;
}) {
  const content = (
    <div className="flex gap-4">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white text-primary shadow-sm ring-1 ring-gray-200">
        <Icon className="h-4 w-4" />
      </div>

      <div>
        <p className="text-xs font-semibold uppercase tracking-wider text-gray-400">
          {label}
        </p>

        <div className="mt-1 text-sm leading-6 text-gray-700">{value}</div>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block transition hover:opacity-75">
      {content}
    </a>
  ) : (
    content
  );
}

function Field({
  label,
  name,
  placeholder,
  type = "text",
  required = false,
}: {
  label: string;
  name: string;
  placeholder?: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-gray-600"
      >
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10"
      />
    </div>
  );
}

function SelectField({
  label,
  name,
  required = false,
}: {
  label: string;
  name: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-gray-800"
      >
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </label>

      <select
        id={name}
        name={name}
        required={required}
        defaultValue=""
        className="h-12 w-full rounded-xl border border-gray-200 bg-white px-4 text-sm text-gray-700 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10"
      >
        <option value="" disabled>
          Select a service
        </option>

        {services.map((service) => (
          <option key={service} value={service}>
            {service}
          </option>
        ))}
      </select>
    </div>
  );
}

function TextareaField({
  label,
  name,
  placeholder,
  required = false,
}: {
  label: string;
  name: string;
  placeholder?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-sm font-semibold text-gray-800"
      >
        {label}
        {required && <span className="ml-1 text-primary">*</span>}
      </label>

      <textarea
        id={name}
        name={name}
        rows={4}
        required={required}
        placeholder={placeholder}
        className="w-full resize-none rounded-xl border border-gray-200 bg-white px-4 py-3 text-sm text-gray-900 outline-none transition placeholder:text-gray-400 focus:border-primary focus:ring-4 focus:ring-primary/10"
      />
    </div>
  );
}

function SubmitButton({ children }: { children: React.ReactNode }) {
  return (
    <button
      type="submit"
      className="group inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-6 text-sm font-semibold text-white transition hover:bg-primary-dark"
    >
      {children}

      <ArrowRight className="h-4 w-4 transition-transform group-hover:trangray-x-1" />
    </button>
  );
}

function MessageForm({
  onSubmit,
}: {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field
          label="Full name"
          name="name"
          placeholder="Your full name"
          required
        />

        <Field
          label="Email address"
          name="email"
          type="email"
          placeholder="you@company.com"
          required
        />

        <Field
          label="Phone number"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
        />

        <Field label="Company name" name="company" placeholder="Your company" />
      </div>

      <Field
        label="Service interested in"
        name="service"
        type="text"
        placeholder="Custom Software"
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

        <SubmitButton>Send Message</SubmitButton>
      </div>
    </form>
  );
}

function CallbackForm({
  onSubmit,
}: {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" placeholder="Your name" required />

        <Field
          label="Phone"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
          required
        />

        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@company.com"
          required
        />

        <SelectField label="What are you interested in?" name="service" />

        <Field label="Preferred date" name="date" type="date" />

        <SelectField label="Preferred time" name="time" />
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

        <SubmitButton>Request Callback</SubmitButton>
      </div>
    </form>
  );
}

function EnquiryForm({
  onSubmit,
}: {
  onSubmit: (event: FormEvent<HTMLFormElement>) => void;
}) {
  return (
    <form onSubmit={onSubmit} className="space-y-6">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field label="Full name" name="name" placeholder="Your name" required />

        <Field
          label="Email"
          name="email"
          type="email"
          placeholder="you@company.com"
          required
        />

        <Field
          label="Phone"
          name="phone"
          type="tel"
          placeholder="+91 98765 43210"
        />

        <SelectField label="Service interest" name="service" required />
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
        <SubmitButton>Submit Enquiry</SubmitButton>
      </div>
    </form>
  );
}
