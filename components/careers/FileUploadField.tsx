"use client";

import { ChangeEvent, useRef, useState } from "react";
import { UploadCloud, FileText, CheckCircle2, X, AlertCircle } from "lucide-react";

export interface UploadedFilePayload {
  fileName: string;
  mimeType: string;
  base64: string;
  sizeBytes: number;
}

interface FileUploadFieldProps {
  label: string;
  id: string;
  required?: boolean;
  accept?: string;
  helperText?: string;
  value: UploadedFilePayload | null;
  onChange: (file: UploadedFilePayload | null) => void;
  error?: string;
}

const MAX_SIZE_MB = 5;
const MAX_BYTES = MAX_SIZE_MB * 1024 * 1024;

export function FileUploadField({
  label,
  id,
  required = false,
  accept = ".pdf,.doc,.docx,.jpg,.jpeg,.png",
  helperText = "PDF, DOC, JPG, or PNG (Max 5 MB)",
  value,
  onChange,
  error: parentError,
}: FileUploadFieldProps) {
  const [internalError, setInternalError] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const displayError = parentError || internalError;

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInternalError(null);
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > MAX_BYTES) {
      setInternalError(`File size exceeds ${MAX_SIZE_MB} MB limit.`);
      onChange(null);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result as string;
      onChange({
        fileName: file.name,
        mimeType: file.type || "application/octet-stream",
        base64,
        sizeBytes: file.size,
      });
    };
    reader.onerror = () => {
      setInternalError("Failed to read file. Please try again.");
      onChange(null);
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = () => {
    setInternalError(null);
    onChange(null);
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const formatFileSize = (bytes: number) => {
    if (bytes < 1024 * 1024) {
      return `${(bytes / 1024).toFixed(1)} KB`;
    }
    return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
  };

  return (
    <div className="w-full">
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-slate-800">
        {label}
        {required && <span className="ml-1 text-red-500">*</span>}
      </label>

      {!value ? (
        <div
          onClick={() => inputRef.current?.click()}
          className={`group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed p-5 text-center transition-all ${
            displayError
              ? "border-red-300 bg-red-50/30 hover:border-red-400"
              : "border-slate-200 bg-slate-50/50 hover:border-primary/50 hover:bg-primary-50/20"
          }`}
        >
          <input
            ref={inputRef}
            id={id}
            name={id}
            type="file"
            accept={accept}
            onChange={handleFileChange}
            className="sr-only"
          />

          <div className="flex size-10 items-center justify-center rounded-xl bg-white text-primary shadow-sm ring-1 ring-slate-200/70 group-hover:scale-105 transition-transform">
            <UploadCloud className="size-5" />
          </div>

          <p className="mt-2 text-sm font-semibold text-slate-900 group-hover:text-primary transition-colors">
            Click to upload <span className="font-normal text-slate-500">or drag and drop</span>
          </p>

          <p className="mt-1 text-xs text-slate-500">{helperText}</p>
        </div>
      ) : (
        <div className="flex items-center justify-between rounded-xl border border-primary-200 bg-primary-50/40 p-3.5">
          <div className="flex items-center gap-3 min-w-0">
            <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-primary text-white">
              <FileText className="size-4" />
            </div>
            <div className="min-w-0">
              <p className="truncate text-sm font-semibold text-slate-900">{value.fileName}</p>
              <div className="flex items-center gap-2 text-xs text-slate-500">
                <span>{formatFileSize(value.sizeBytes)}</span>
                <span>•</span>
                <span className="flex items-center gap-1 text-primary-700 font-medium">
                  <CheckCircle2 className="size-3" /> Ready
                </span>
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={handleRemove}
            className="rounded-lg p-1 text-slate-400 hover:bg-white hover:text-red-500 transition-colors"
            title="Remove file"
          >
            <X className="size-4" />
          </button>
        </div>
      )}

      {displayError && (
        <p className="mt-1.5 flex items-center gap-1.5 text-xs text-red-600">
          <AlertCircle className="size-3.5 shrink-0" />
          {displayError}
        </p>
      )}
    </div>
  );
}
