"use client";

import {
  Archive,
  Briefcase,
  CircleCheck,
  LogOut,
  Plus,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

interface AdminHeaderProps {
  totalCount: number;
  activeCount: number;
  inactiveCount: number;
  isLoading: boolean;
  onRefresh: () => void;
  onOpenCreateModal: () => void;
  onLogout: () => void;
}

interface StatProps {
  icon: LucideIcon;
  label: string;
  value: number;
  iconClassName: string;
}

function Stat({ icon: Icon, label, value, iconClassName }: StatProps) {
  return (
    <div className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-4 py-3 shadow-xs">
      <span
        className={`flex size-10 shrink-0 items-center justify-center rounded-lg ${iconClassName}`}
        aria-hidden="true"
      >
        <Icon className="size-5" />
      </span>
      <div className="min-w-0">
        <p className="text-2xl font-bold leading-none tabular-nums text-slate-900">
          {value}
        </p>
        <p className="mt-1 truncate text-xs font-medium text-slate-500">
          {label}
        </p>
      </div>
    </div>
  );
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
    <header className="mb-8 flex flex-col gap-6">
      {/* Title + actions */}
      <div className="flex flex-col gap-5 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex items-start gap-4">
          <span
            className="hidden size-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary sm:flex"
            aria-hidden="true"
          >
            <Briefcase className="size-6" />
          </span>
          <div>
            <h1 className="font-heading text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
              Role Openings
            </h1>
            <p className="mt-1.5 max-w-xl text-sm leading-relaxed text-slate-500">
              Create and edit job and internship roles, control which ones are
              live, and review candidates.
            </p>
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2.5">
          <button
            type="button"
            onClick={onRefresh}
            disabled={isLoading}
            aria-label="Reload openings"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3.5 text-sm font-semibold text-slate-700 shadow-xs transition hover:bg-slate-50 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary disabled:cursor-not-allowed disabled:opacity-60"
          >
            <RefreshCw
              className={`size-4 ${isLoading ? "animate-spin text-primary" : "text-slate-500"}`}
            />
            <span>{isLoading ? "Reloading" : "Reload"}</span>
          </button>

          <button
            type="button"
            onClick={onOpenCreateModal}
            className="inline-flex h-10 items-center gap-2 rounded-lg bg-primary px-4 text-sm font-semibold text-white shadow-sm transition hover:bg-primary-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
          >
            <Plus className="size-4" />
            <span>Create opening</span>
          </button>

          <span className="mx-1 hidden h-6 w-px bg-slate-200 sm:block" aria-hidden="true" />

          <button
            type="button"
            onClick={onLogout}
            className="inline-flex h-10 items-center gap-2 rounded-lg px-3.5 text-sm font-semibold text-slate-600 transition hover:bg-red-50 hover:text-red-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-red-500"
          >
            <LogOut className="size-4" />
            <span>Sign out</span>
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
        <Stat
          icon={Briefcase}
          label="Total roles"
          value={totalCount}
          iconClassName="bg-slate-100 text-slate-700"
        />
        <Stat
          icon={CircleCheck}
          label="Live on careers page"
          value={activeCount}
          iconClassName="bg-emerald-50 text-emerald-600"
        />
        <Stat
          icon={Archive}
          label="Inactive or archived"
          value={inactiveCount}
          iconClassName="bg-amber-50 text-amber-600"
        />
      </div>
    </header>
  );
}