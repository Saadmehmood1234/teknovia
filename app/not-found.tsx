import Link from "next/link";
import { Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-[calc(100vh-80px)] items-center overflow-hidden bg-white">
      <div className="pointer-events-none absolute inset-0 hero-grid opacity-30" />
      <div className="pointer-events-none absolute -left-32 top-1/2 size-72 -translate-y-1/2 rounded-full bg-primary/5 blur-3xl" />
      <div className="pointer-events-none absolute -right-32 top-1/4 size-80 rounded-full bg-primary/5 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-3xl text-center">
          <div className="relative">
            <span className="select-none text-[8rem] font-black leading-none tracking-tighter text-slate-100 sm:text-[12rem]">
              404
            </span>

            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-6xl font-black tracking-tight text-slate-950 sm:text-8xl">
                404
              </span>
            </div>
          </div>

          <h1 className="mt-2 text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
            Page not found
          </h1>

          <p className="mx-auto mt-4 max-w-lg text-sm leading-7 text-slate-600 sm:text-base">
            The page you&apos;re looking for doesn&apos;t exist, may have been
            moved, or is no longer available.
          </p>

          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Link
              href="/"
              className="
                inline-flex h-11 items-center justify-center gap-2
                rounded-xl bg-primary px-5
                text-sm font-semibold text-white
                shadow-sm
                transition-all duration-200
                hover:-translate-y-0.5
                hover:bg-primary-dark
                hover:shadow-md
              "
            >
              <Home className="size-4" />
              Back to Home
            </Link>

            <Link
              href="/contact"
              className="
                inline-flex h-11 items-center justify-center gap-2
                rounded-xl border border-slate-200
                bg-white px-5
                text-sm font-semibold text-slate-700
                transition-all duration-200
                hover:-translate-y-0.5
                hover:border-primary/30
                hover:text-primary
                hover:shadow-sm
              "
            >
              <Search className="size-4" />
              Explore Our Services
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}