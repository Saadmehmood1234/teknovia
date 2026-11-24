"use client";

import { Plus, RefreshCw, LogOut, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { TopBadge } from "@/components/ui/Top-Badge";

interface AdminHeaderProps {
  totalCount: number;
  activeCount: number;
  inactiveCount: number;
  isLoading: boolean;
  onRefresh: () => void;
  onOpenCreateModal: () => void;
  onLogout: () => void;
}

export function AdminHeader({
  totalCount,
  activeCount,
  inactiveCount,
  isLoading,
  onRefresh,
  onOpenCreateModal,
  onLogout,
}: AdminHeaderProps) {
  return (
    <div className="mb-8 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between border-b border-slate-200/80 pb-6">
      <div>
        <div className="flex items-center gap-3">
          <TopBadge data="Careers Administration" />
          <span className="text-xs text-slate-400">• Authenticated Session</span>
        </div>

        <h1 className="mt-2 font-heading text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
          Role Openings Management
        </h1>
        <p className="mt-1 text-xs text-slate-500">
          Create, edit, toggle live visibility, and manage candidates for all Teknovia job and internship roles.
        </p>

        {/* Quick Stats Pill Bar */}
        <div className="mt-4 flex flex-wrap items-center gap-2.5 text-xs font-semibold">
          <span className="rounded-full bg-slate-900 px-3 py-1 text-white">
            Total: {totalCount}
          </span>
          <span className="rounded-full bg-emerald-100 px-3 py-1 text-emerald-800">
            Active: {activeCount}
          </span>
          <span className="rounded-full bg-slate-200 px-3 py-1 text-slate-700">
            Archived / Inactive: {inactiveCount}
          </span>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <Link
          href="/careers"
          className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 text-xs font-bold text-slate-700 shadow-xs hover:bg-slate-50 transition"
        >
          <ArrowLeft className="size-3.5" />
          <span>View Public Careers</span>
        </Link>

        <button
          type="button"
          onClick={onRefresh}
          disabled={isLoading}
          className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-slate-200 bg-white px-4 text-xs font-bold text-slate-700 shadow-xs hover:bg-slate-50 transition disabled:opacity-50"
        >
          <RefreshCw className={`size-3.5 ${isLoading ? "animate-spin text-primary" : ""}`} />
          <span>Sync Roles</span>
        </button>

        <button
          type="button"
          onClick={onOpenCreateModal}
          className="inline-flex h-10 items-center gap-2 rounded-xl bg-primary px-5 text-xs font-bold text-white shadow-md shadow-primary/20 hover:bg-primary-dark transition"
        >
          <Plus className="size-4" />
          <span>Create New Opening</span>
        </button>

        <button
          type="button"
          onClick={onLogout}
          className="inline-flex h-10 items-center gap-1.5 rounded-xl border border-red-200 bg-red-50/60 px-4 text-xs font-bold text-red-600 hover:bg-red-100 transition"
        >
          <LogOut className="size-3.5" />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
}
