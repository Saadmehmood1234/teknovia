import {
  Boxes,
  Calculator,
  ShoppingCart,
  Users,
} from "lucide-react";

import { Container } from "@/components/ui/Container";

const products = [
  {
    title: "CRM Software",
    description:
      "Manage leads, sales pipelines, customer relationships, tasks, and follow-ups from one centralized platform.",
    icon: Users,
    features: [
      "Lead Management",
      "Sales Pipeline Tracking",
      "Customer Relationship Management",
      "Task & Follow-Up Management",
    ],
  },
  {
    title: "Accounting & Finance Software",
    description:
      "Streamline financial operations with structured accounting workflows and business reporting.",
    icon: Calculator,
    features: [
      "General Ledger",
      "Accounts Payable & Receivable",
      "Financial Reporting",
      "GST-Ready Accounting Workflows",
    ],
  },
  {
    title: "Inventory Management System",
    description:
      "Track stock, warehouses, purchases, sales, and inventory performance through a centralized system.",
    icon: Boxes,
    features: [
      "Stock Tracking",
      "Warehouse Management",
      "Purchase & Sales Management",
      "Inventory Analytics",
    ],
  },
  {
    title: "eCommerce Solution",
    description:
      "Build and manage digital commerce operations with integrated products, orders, customers, and payments.",
    icon: ShoppingCart,
    features: [
      "Online Store Management",
      "Product Catalog & Inventory Sync",
      "Order & Customer Management",
      "Payment Gateway Integration",
    ],
  },
];

export function SaaSProducts() {
  return (
    <section
      id="saas-products"
      className="border-b border-gray-200/60 bg-white py-8 sm:py-16"
    >
      <Container>
        <div className="mx-auto max-w-3xl text-center">
          <p className="eyebrow">OUR SAAS & SOFTWARE PRODUCTS</p>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            Built on Real-World Product Experience
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-gray-600 sm:text-base">
            We don&apos;t just develop software for clients. Our hands-on
            experience building business applications helps us understand the
            challenges involved in creating practical, scalable products.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {products.map((product, index) => {
            const Icon = product.icon;

            return (
              <article
                key={product.title}
                className="group relative overflow-hidden rounded-3xl border border-gray-200 bg-[#FAFAFA] p-6 hover:border-primary/30 hover:shadow-[0_18px_50px_rgba(0,150,137,0.08)] sm:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex size-12 items-center justify-center rounded-xl border border-primary/15 bg-primary-50 text-primary transition-colors group-hover:bg-primary-100">
                    <Icon className="size-5" />
                  </div>

                  <span className="font-mono text-xs text-gray-300">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>

                <h3 className="mt-7 text-xl font-bold text-gray-950">
                  {product.title}
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-600">
                  {product.description}
                </p>

                <div className="mt-6 grid gap-3 sm:grid-cols-2">
                  {product.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-start gap-2 text-sm text-gray-600"
                    >
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-primary" />
                      {feature}
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-0 left-8 right-8 h-px origin-left scale-x-0 bg-primary transition-transform duration-300 group-hover:scale-x-100" />
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}