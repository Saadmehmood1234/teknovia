"use client";

import { useState } from "react";

import { Container } from "@/components/ui/Container";
import { contactFeatures2, tabs } from "@/lib/data/contact-data";
import { MessageForm } from "./contact-from/MessageForm";
import { CallbackForm } from "./contact-from/CallbackForm";
import { EnquiryForm } from "./contact-from/EnquiryForm";
import { ContactInformation } from "./contact-from/ContactInformation";
import { useSearchParams } from "next/navigation";

export type ContactTab = "message" | "callback" | "enquiry";

const validTabs: ContactTab[] = ["message", "callback", "enquiry"];

export default function ContactFrom() {
  const searchParams = useSearchParams();
  const tabParam = searchParams.get("tab");

  const [activeTab, setActiveTab] = useState<ContactTab>(() =>
    validTabs.includes(tabParam as ContactTab)
      ? (tabParam as ContactTab)
      : "message",
  );
  return (
    <section id="contact-form" className="bg-[#FAFAFA] py-8 lg:py-16">
      <Container>
        <div className="grid grid-cols-1 gap-4 overflow-hidden py-2 md:grid-cols-3">
          {contactFeatures2.map((contact) => (
            <div
              key={contact.id}
              className="flex items-start justify-start gap-2 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm shadow-gray-900/5"
            >
              <div className="flex items-center justify-center rounded-xl border border-primary-200 bg-primary-50/70 p-3 text-primary">
                <contact.icon size={20} />
              </div>

              <div className="flex flex-col justify-start gap-1">
                <h3 className="text-sm font-bold text-black">
                  {contact.title}
                </h3>

                <p className="text-sm text-gray-400">{contact.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-12 lg:flex-row lg:items-start">
          <div className="flex w-full flex-col gap-1 rounded-2xl border border-gray-100 bg-[#FBFBFB] p-1 shadow-md shadow-gray-300 lg:flex-1">
            <div className="overflow-x-auto p-1.5">
              <div className="flex min-w-max flex-col gap-1 md:flex-row">
                {tabs.map((tab) => {
                  const Icon = tab.icon;
                  const active = activeTab === tab.id;

                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveTab(tab.id as ContactTab)}
                      aria-pressed={active}
                      className={`relative flex items-center gap-2 rounded-2xl px-8 py-3 text-sm font-semibold transition ${
                        active
                          ? "border border-gray-100 bg-white font-extrabold text-primary-700 shadow-sm shadow-gray-300"
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
            <div className="border-t border-gray-200 bg-white p-5 sm:p-8 lg:p-10">
              <div className="mb-8 flex flex-col gap-2">
                <h2 className="text-2xl font-black">
                  {activeTab === "message"
                    ? "Send Us a Message"
                    : activeTab === "callback"
                      ? "Request a Callback"
                      : "Project Enquiry"}
                </h2>

                <p className="text-sm leading-6 text-gray-400">
                  {activeTab === "message"
                    ? "Fill out the form below and our team will get back to you shortly."
                    : activeTab === "callback"
                      ? "Choose a convenient time and our team will contact you."
                      : "Tell us about your project and we'll help you plan the next steps."}
                </p>
              </div>

              {activeTab === "message" && <MessageForm />}

              {activeTab === "callback" && <CallbackForm />}

              {activeTab === "enquiry" && <EnquiryForm />}
            </div>
          </div>

          <ContactInformation />
        </div>
      </Container>
    </section>
  );
}
