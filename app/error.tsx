"use client";

import { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RefreshCw, Home } from "lucide-react";
import { Container } from "@/components/ui/Container";

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("[App Error Boundary caught]:", error);
  }, [error]);

  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-white py-16">
      <Container>
        <div className="mx-auto max-w-md text-center">
          <div className="mx-auto mb-6 flex size-14 items-center justify-center rounded-2xl bg-red-50 text-red-600 ring-8 ring-red-50/50">
            <AlertCircle className="size-7" />
          </div>

          <h1 className="font-heading text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Something went wrong
          </h1>

          <p className="mt-3 text-sm leading-6 text-slate-600">
            An unexpected error occurred while processing your request. Please try reloading the page or return to the homepage.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={() => reset()}
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl bg-primary px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark sm:w-auto"
            >
              <RefreshCw className="size-4" />
              Try again
            </button>

            <Link
              href="/"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-700 transition hover:bg-slate-50 sm:w-auto"
            >
              <Home className="size-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
