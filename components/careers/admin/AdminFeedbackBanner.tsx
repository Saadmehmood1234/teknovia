"use client";

import { CheckCircle2, AlertCircle, X } from "lucide-react";

interface AdminFeedbackBannerProps {
  message: { type: "success" | "error"; text: string } | null;
  onDismiss: () => void;
}

export function AdminFeedbackBanner({ message, onDismiss }: AdminFeedbackBannerProps) {
  if (!message) return null;

  const isSuccess = message.type === "success";

  return (
    <div
      className={`mb-6 flex items-center justify-between rounded-2xl p-4 text-xs font-semibold border ${
        isSuccess
          ? "bg-emerald-50 text-emerald-800 border-emerald-200"
          : "bg-red-50 text-red-800 border-red-200"
      }`}
    >
      <div className="flex items-center gap-2.5">
        {isSuccess ? (
          <CheckCircle2 className="size-4 text-emerald-600 shrink-0" />
        ) : (
          <AlertCircle className="size-4 text-red-600 shrink-0" />
        )}
        <span>{message.text}</span>
      </div>
      <button
        type="button"
        onClick={onDismiss}
        className="rounded-lg p-1 text-slate-400 hover:bg-black/5 hover:text-slate-600 transition"
      >
        <X className="size-4" />
      </button>
    </div>
  );
}
