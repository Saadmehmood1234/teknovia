import { CheckCircle2 } from "lucide-react";

import { Container } from "@/components/ui/Container";
import Image from "next/image";

const points = [
  "MVP and product development",
  "Multi-tenant SaaS platforms",
  "Custom business software",
  "Cloud-native applications",
  "Web and mobile products",
  "API and microservices architecture",
];

export function SaaSProductOverview() {
  return (
    <section className="border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16">
      <Container>
        <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
          <div className="relative">
            <div className="relative overflow-hidden rounded-3xl border border-gray-200 bg-white p-2 shadow-sm">
              <Image
                src="/images/saas-about.png"
                alt="Mobile application development"
                width={1000}
                height={750}
                className="h-auto w-full rounded-2xl object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="absolute -bottom-5 right-5 rounded-2xl border border-primary/20 bg-white px-5 py-4 shadow-xl sm:right-8">
              <p className="font-mono text-xs font-bold uppercase tracking-wider text-primary">
                Launch Faster
              </p>
              <p className="mt-1 text-sm font-bold text-gray-950">
                From idea to MVP
              </p>
            </div>
          </div>
          <div>
            <p className="font-mono text-sm font-extrabold uppercase tracking-[0.18em] text-primary sm:text-base">
              SAAS & SOFTWARE PRODUCTS
            </p>

            <h2 className="mt-3 text-3xl font-black leading-tight tracking-tight text-slate-950 sm:text-4xl">
              Turn Ideas Into Scalable Software Products
            </h2>

            <div className="mt-6 space-y-5 text-sm leading-7 text-slate-600 sm:text-base">
              <p>
                At TEKNOVIA, we help startups and enterprises transform
                innovative ideas into scalable SaaS platforms and software
                products.
              </p>

              <p>
                Our end-to-end product development services cover strategy,
                UI/UX design, development, deployment, and ongoing support. We
                build secure, cloud-native, and high-performance solutions
                tailored to your business objectives.
              </p>

              <p>
                Whether you need an MVP, a multi-tenant SaaS application, or a
                custom software product, our team delivers solutions designed
                for growth and long-term success.
              </p>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {points.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 size-5 shrink-0 text-primary" />

                  <span className="text-sm font-medium text-slate-700">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
