"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  Heart,
  Home,
  LayoutGrid,
  Search,
  ShoppingCart,
  User,
} from "lucide-react";

import { Container } from "@/components/ui/Container";
import { TopBadge } from "@/components/ui/Top-Badge";
import { ecommerceModels } from "@/lib/data/ecommerce-solutions-data";


const sidebarItems = ["Products", "Orders", "Customers", "Inventory", "Marketing", "Reports"];
const productTints = ["bg-stone-200", "bg-emerald-200", "bg-slate-300", "bg-zinc-300"];
const categories = ["Electronics", "Fashion", "Home"];
function DeviceStage() {
  return (
    <div className="relative mx-auto aspect-[4/3.3] w-full max-w-2xl">
      <div
        aria-hidden
        className="absolute inset-0 rounded-full bg-[radial-linear(circle_at_50%_45%,rgba(0,150,137,0.16),transparent_65%)]"
      />
      <div className="absolute right-0 top-[4%] w-[88%]">
        <div className="rounded-xl border-[5px] border-gray-900 bg-white shadow-[0_25px_60px_rgba(0,60,55,0.18)] sm:rounded-2xl sm:border-[7px]">
          <div className="flex aspect-16/10 overflow-hidden rounded-md bg-white">
            <div className="hidden w-[22%] shrink-0 border-r border-gray-100 bg-gray-50 p-2 sm:block">
              <div className="mb-2 flex items-center gap-1 text-[8px] font-bold text-primary">
                <span className="size-2.5 rounded bg-primary" /> Dashboard
              </div>
              <ul className="space-y-1.5">
                {sidebarItems.map((s, i) => (
                  <li
                    key={s}
                    className={`rounded px-1.5 py-1 text-[7px] font-medium ${
                      i === 0 ? "bg-primary/10 text-primary" : "text-gray-500"
                    }`}
                  >
                    {s}
                  </li>
                ))}
              </ul>
            </div>

            {/* main */}
            <div className="flex-1 p-2 sm:p-3">
              <div className="flex items-center justify-between">
                <span className="text-[8px] font-bold text-gray-900 sm:text-[10px]">
                  Your Brand Store
                </span>
                <div className="flex items-center gap-1.5 text-gray-400">
                  <span className="hidden h-3 w-16 items-center gap-1 rounded-full border border-gray-200 px-1 sm:flex">
                    <Search className="size-2" />
                  </span>
                  <User className="size-2.5" />
                  <Heart className="size-2.5" />
                  <ShoppingCart className="size-2.5" />
                </div>
              </div>

              <div className="mt-2 flex items-center justify-between rounded-lg bg-gray-100 p-2 sm:p-3">
                <div>
                  <p className="text-[10px] font-black leading-tight text-gray-950 sm:text-sm">
                    Modern
                    <br />
                    Shopping
                    <br />
                    Experience
                  </p>
                  <span className="mt-1.5 inline-block rounded bg-primary px-1.5 py-0.5 text-[6px] font-semibold text-white sm:text-[8px]">
                    Shop Now
                  </span>
                </div>
                <div className="relative h-14 w-24 sm:h-20 sm:w-36">
                  <div className="absolute bottom-0 left-0 h-8 w-20 rounded-[999px_999px_12px_12px] bg-linear-to-br from-stone-200 to-stone-400 shadow-md sm:h-12 sm:w-28" />
                  <div className="absolute bottom-0 right-0 h-10 w-5 rounded-t-full bg-emerald-300/70 sm:h-14 sm:w-7" />
                </div>
              </div>

              <p className="mt-2 text-[7px] font-bold text-gray-900 sm:text-[9px]">
                Featured Products
              </p>
              <div className="mt-1 grid grid-cols-4 gap-1.5">
                {productTints.map((tint, i) => (
                  <div key={i} className="rounded-md border border-gray-100 p-1">
                    <div className={`aspect-square rounded ${tint}`} />
                    <div className="mt-1 h-1 w-3/4 rounded bg-gray-200" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* stand */}
        <div className="mx-auto h-3 w-1/5 bg-linear-to-b from-gray-300 to-gray-200 sm:h-5" />
        <div className="mx-auto h-1.5 w-2/5 rounded-full bg-gray-300" />
      </div>

      {/* phone */}
      <div className="absolute bottom-[2%] left-0 w-[31%]">
        <div className="rounded-[1.4rem] border-4 border-gray-900 bg-white p-1.5 shadow-[0_25px_50px_rgba(0,60,55,0.25)] sm:rounded-[1.8rem] sm:border-[5px] sm:p-2">
          <div className="mx-auto mb-1.5 h-1 w-8 rounded-full bg-gray-900" />
          <div className="flex items-center justify-between">
            <span className="text-[8px] font-bold text-gray-900 sm:text-[10px]">Your Brand</span>
            <ShoppingCart className="size-2.5 text-gray-500" />
          </div>
          <div className="mt-1.5 rounded-lg bg-gray-100 p-2">
            <p className="text-[9px] font-black leading-tight text-gray-950 sm:text-xs">
              Lifestyle
              <br />
              Products
            </p>
            <span className="mt-1 inline-block rounded bg-primary px-1 py-0.5 text-[6px] font-semibold text-white">
              Shop Now
            </span>
          </div>
          <div className="mt-2 flex justify-between">
            {categories.map((c) => (
              <div key={c} className="text-center">
                <div className="mx-auto size-5 rounded-full bg-primary/15 sm:size-7" />
                <p className="mt-0.5 text-[5px] text-gray-500 sm:text-[6px]">{c}</p>
              </div>
            ))}
          </div>
          <div className="mt-2 grid grid-cols-3 gap-1">
            {[0, 1, 2].map((i) => (
              <div key={i} className="aspect-square rounded bg-gray-100" />
            ))}
          </div>
          <div className="mt-2 flex justify-around border-t border-gray-100 pt-1.5 text-gray-400">
            <Home className="size-2.5 text-primary" />
            <LayoutGrid className="size-2.5" />
            <ShoppingCart className="size-2.5" />
            <User className="size-2.5" />
          </div>
        </div>
      </div>
    </div>
  );
}

export function WhatWeBuild() {
  const reduce = useReducedMotion();

  const list = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.09 } },
  };
  const row = {
    hidden: reduce ? { opacity: 1 } : { opacity: 0, x: 24 },
    show: { opacity: 1, x: 0, transition: { duration: 0.45, ease: "easeOut" as const } },
  };

  return (
    <section className="relative overflow-hidden border-b border-gray-100 bg-[#FAFAFA] py-8 sm:py-16">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-linear(rgba(0,150,137,0.14)_1.2px,transparent_1.2px)] bg-size-[18px_18px] mask-[radial-linear(ellipse_at_25%_35%,black,transparent_65%)]"
      />

      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <TopBadge data="What We Build" centerItem={true} />
          <h2 className="mt-4 font-heading text-3xl font-black tracking-tight text-gray-950 sm:text-4xl">
            E-commerce solutions built for modern businesses
          </h2>
        </div>

        <div className="mx-auto mt-12 grid max-w-6xl items-center gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-6">
          <DeviceStage />

          <motion.ul
            variants={list}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            className="relative space-y-3 lg:pl-8"
          >
            <span
              aria-hidden
              className="absolute bottom-6 left-3 top-6 hidden w-px bg-linear-to-b from-transparent via-primary/40 to-transparent lg:block"
            />

            {ecommerceModels.map((item) => {
              const Icon = item.icon;
              return (
                <motion.li
                  key={item.title}
                  variants={row}
                  className="group relative flex items-center gap-4 rounded-2xl border border-gray-200/80 bg-white p-4 shadow-[0_6px_24px_rgba(0,90,80,0.06)] transition-colors hover:border-primary/40"
                >
                  <span
                    aria-hidden
                    className="absolute -left-6.5 top-1/2 hidden h-px w-5 bg-primary/40 lg:block"
                  />
                  <span
                    aria-hidden
                    className="absolute -left-7.75 top-1/2 hidden size-2 -translate-y-1/2 rounded-full bg-primary lg:block"
                  />

                  <div className="flex size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
                    <Icon strokeWidth={1.7} className="size-6" />
                  </div>

                  <div className="min-w-0">
                    <h3 className="font-heading text-base font-bold text-gray-950">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-sm leading-5 text-gray-500">
                      {item.description}
                    </p>
                  </div>
                </motion.li>
              );
            })}
          </motion.ul>
        </div>

        
      </Container>
    </section>
  );
}