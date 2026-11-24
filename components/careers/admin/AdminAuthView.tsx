"use client";

import { ShieldAlert, KeyRound, Eye, EyeOff, Loader2 } from "lucide-react";
import Link from "next/link";

interface AdminAuthViewProps {
  passcode: string;
  setPasscode: (val: string) => void;
  showPasscode: boolean;
  setShowPasscode: (val: boolean | ((prev: boolean) => boolean)) => void;
  isAuthChecking: boolean;
  authError: string | null;
  onSubmit: (e: React.FormEvent) => void;
}

export function AdminAuthView({
  passcode,
  setPasscode,
  showPasscode,
  setShowPasscode,
  isAuthChecking,
  authError,
  onSubmit,
}: AdminAuthViewProps) {
  return (
    <div className="flex min-h-[70vh] items-center justify-center py-12">
      <div className="w-full max-w-md rounded-3xl border border-slate-200/80 bg-white p-8 shadow-xl shadow-slate-900/5 sm:p-10">
        <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-primary-50 text-primary mb-6">
          <KeyRound className="size-7" />
        </div>

        <div className="text-center">
          <h1 className="mt-3 font-heading text-2xl font-bold tracking-tight text-slate-950 sm:text-3xl">
            Careers Admin Portal
          </h1>
        </div>

        <form onSubmit={onSubmit} className="mt-8 space-y-4">
          <div>
            <label className="block text-xs font-semibold text-slate-700 mb-1.5">
              Admin Passcode
            </label>
            <div className="relative">
              <input
                type={showPasscode ? "text" : "password"}
                required
                value={passcode}
                onChange={(e) => setPasscode(e.target.value)}
                placeholder="Enter passcode..."
                className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10 pr-11"
              />
              <button
                type="button"
                onClick={() => setShowPasscode((p) => !p)}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition"
              >
                {showPasscode ? <EyeOff className="size-4" /> : <Eye className="size-4" />}
              </button>
            </div>
          </div>

          {authError && (
            <div className="flex items-center gap-2 rounded-xl bg-red-50 p-3 text-xs text-red-600 border border-red-200/60">
              <ShieldAlert className="size-4 shrink-0" />
              <span>{authError}</span>
            </div>
          )}

          <button
            type="submit"
            disabled={isAuthChecking}
            className="flex w-full h-11 items-center justify-center gap-2 rounded-xl bg-primary text-sm font-bold text-white shadow-md shadow-primary/25 transition hover:bg-primary-dark disabled:opacity-60"
          >
            {isAuthChecking ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                <span>Verifying credentials...</span>
              </>
            ) : (
              "Sign In to Admin Dashboard"
            )}
          </button>
        </form>

        <div className="mt-6 border-t border-slate-100 pt-5 text-center">
          <Link
            href="/careers"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500 hover:text-primary transition"
          >
            <span>Return to Careers Page</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
