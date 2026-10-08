import { CalendarDays, Mail, MapPin, Phone } from "lucide-react";
import { ContactDetail } from "./ContactDetail";

export function ContactInformation() {
  return (
    <div className="w-full lg:flex-1">
      <h3 className="mt-3 font-heading text-2xl font-semibold text-gray-950">
        Get in touch
      </h3>

      <p className="mt-2 text-sm leading-6 text-gray-600">
        Reach us through any of the channels below.
      </p>

      <div className="mt-8 w-full space-y-6 rounded-xl border border-gray-50 bg-white p-6 shadow-sm shadow-gray-200">
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
          href="tel:+919712980864"
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
            <span className="font-medium text-gray-900">
              Closed
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
