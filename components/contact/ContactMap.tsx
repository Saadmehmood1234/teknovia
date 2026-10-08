
import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { FaLinkedinIn } from "react-icons/fa6";

export default function ContactMap() {

  return (
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
  );
}

