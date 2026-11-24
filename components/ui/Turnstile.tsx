"use client";

import { useEffect, useRef, useState } from "react";
import Script from "next/script";

interface TurnstileProps {
  onVerify: (token: string) => void;
  onError?: () => void;
  onExpire?: () => void;
  className?: string;
}

declare global {
  interface Window {
    turnstile?: {
      render: (
        container: HTMLElement,
        options: {
          sitekey: string;
          callback: (token: string) => void;
          "error-callback"?: (code?: string) => void;
          "expired-callback"?: () => void;
          theme?: "light" | "dark" | "auto";
          size?: "normal" | "flexible" | "compact";
          appearance?: "always" | "execute" | "interaction-only";
        }
      ) => string;
      reset: (widgetId: string) => void;
      remove: (widgetId: string) => void;
    };
  }
}

export function Turnstile({ onVerify, onError, onExpire, className = "" }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetIdRef = useRef<string | null>(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Keep stable callback refs to prevent re-render tearing / infinite mount cycles
  const onVerifyRef = useRef(onVerify);
  const onErrorRef = useRef(onError);
  const onExpireRef = useRef(onExpire);

  useEffect(() => {
    onVerifyRef.current = onVerify;
    onErrorRef.current = onError;
    onExpireRef.current = onExpire;
  });

  // Cloudflare Turnstile Site Key from environment
  const siteKey = process.env.NEXT_PUBLIC_CLOUDFLARE_TURNSTILE_SITE_KEY;

  useEffect(() => {
    // If no sitekey is provided or if an error occurred, gracefully pass a fallback token once
    if (!siteKey || hasError) {
      onVerifyRef.current("bypass-token");
      return;
    }

    if (scriptLoaded && window.turnstile && containerRef.current && !widgetIdRef.current) {
      try {
        const id = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: "light",
          size: "flexible",
          appearance: "always",
          callback: (token: string) => {
            onVerifyRef.current(token);
          },
          "error-callback": (errorCode) => {
            console.warn("[Turnstile] Widget issue (Code:", errorCode, "). Gracefully handling.");
            setHasError(true);
            onVerifyRef.current("fallback-token");
            onErrorRef.current?.();
          },
          "expired-callback": () => {
            onExpireRef.current?.();
          },
        });
        widgetIdRef.current = id;
      } catch (e) {
        console.warn("[Turnstile render warning]:", e);
        if (containerRef.current) {
          containerRef.current.style.display = "none";
        }
        queueMicrotask(() => {
          setHasError(true);
          onVerifyRef.current("fallback-token");
        });
      }
    }

    return () => {
      if (widgetIdRef.current && window.turnstile) {
        try {
          window.turnstile.remove(widgetIdRef.current);
        } catch {
          // ignore cleanup error
        }
        widgetIdRef.current = null;
      }
    };
  }, [scriptLoaded, siteKey, hasError]);

  if (!siteKey || hasError) {
    return null;
  }

  return (
    <div className={`overflow-hidden transition-all duration-300 min-h-[65px] ${className}`}>
      <Script
        src="https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit"
        strategy="lazyOnload"
        onLoad={() => setScriptLoaded(true)}
        onError={() => {
          setHasError(true);
          onVerifyRef.current("fallback-token");
        }}
      />
      <div ref={containerRef} className="cf-turnstile-container w-full" />
    </div>
  );
}
