"use client";

import { useState, useEffect, useCallback, useSyncExternalStore } from "react";
import { Container } from "@/components/ui/Container";
import { StoredOpening } from "@/lib/data/openings-store";
import { AdminAuthView } from "@/components/careers/admin/AdminAuthView";
import { AdminHeader } from "@/components/careers/admin/AdminHeader";
import { AdminFeedbackBanner } from "@/components/careers/admin/AdminFeedbackBanner";
import { AdminOpeningsList } from "@/components/careers/admin/AdminOpeningsList";
import { AdminCreateOpeningModal } from "@/components/careers/admin/AdminCreateOpeningModal";

const emptySubscribe = () => () => {};

function useIsMounted() {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  );
}

function useStoredAdminToken() {
  return useSyncExternalStore(
    emptySubscribe,
    () => (typeof window !== "undefined" ? sessionStorage.getItem("teknovia_careers_admin_token") : null),
    () => null
  );
}

export default function CareersAdminPage() {
  const isMounted = useIsMounted();
  const storedToken = useStoredAdminToken();
  const [localToken, setLocalToken] = useState<string | null>(null);
  const token = localToken || storedToken;

  const [passcode, setPasscode] = useState("");
  const [showPasscode, setShowPasscode] = useState(false);
  const [isAuthChecking, setIsAuthChecking] = useState(false);
  const [authError, setAuthError] = useState<string | null>(null);

  const [openings, setOpenings] = useState<StoredOpening[]>([]);
  const [isLoadingOpenings, setIsLoadingOpenings] = useState(false);
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [isSubmittingRole, setIsSubmittingRole] = useState(false);
  const [actionMessage, setActionMessage] = useState<{ type: "success" | "error"; text: string } | null>(null);

  // Filter State
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "active" | "inactive">("all");

  const fetchOpenings = useCallback(async (authToken: string) => {
    setIsLoadingOpenings(true);
    try {
      const res = await fetch("/api/careers/admin/openings", {
        headers: { Authorization: `Bearer ${authToken}` },
      });
      const data = await res.json();
      if (data.success && Array.isArray(data.openings)) {
        setOpenings(data.openings);
      }
    } catch (err) {
      console.error("Error loading openings:", err);
    } finally {
      setIsLoadingOpenings(false);
    }
  }, []);

  // Sync openings when token is available
  useEffect(() => {
    if (!token) return;
    let ignore = false;

    fetch("/api/careers/admin/openings", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then((res) => res.json())
      .then((data) => {
        if (!ignore && data.success && Array.isArray(data.openings)) {
          setOpenings(data.openings);
        }
      })
      .catch((err) => {
        console.error("Error loading openings:", err);
      });

    return () => {
      ignore = true;
    };
  }, [token]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsAuthChecking(true);
    setAuthError(null);

    try {
      const res = await fetch("/api/careers/admin/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode }),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Incorrect passcode.");
      }

      setLocalToken(data.token);
      sessionStorage.setItem("teknovia_careers_admin_token", data.token);
      fetchOpenings(data.token);
    } catch (err: unknown) {
      setAuthError(err instanceof Error ? err.message : "Authentication failed.");
    } finally {
      setIsAuthChecking(false);
    }
  };

  const handleLogout = () => {
    setLocalToken(null);
    sessionStorage.removeItem("teknovia_careers_admin_token");
  };

  const handleToggleStatus = async (id: string, currentStatus: "Active" | "Inactive") => {
    if (!token) return;
    const newStatus = currentStatus === "Active" ? "Inactive" : "Active";

    try {
      const res = await fetch("/api/careers/admin/openings", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ id, status: newStatus }),
      });

      const data = await res.json();
      if (data.success) {
        setOpenings((prev) =>
          prev.map((o) => (o.id === id ? { ...o, status: newStatus as "Active" | "Inactive" } : o))
        );
        setActionMessage({
          type: "success",
          text: `Role "${id}" marked as ${newStatus}.`,
        });
      }
    } catch {
      setActionMessage({ type: "error", text: "Failed to update role status." });
    }
  };

  const handleCreateOpening = async (openingPayload: StoredOpening) => {
    if (!token) return;
    setIsSubmittingRole(true);
    setActionMessage(null);

    try {
      const res = await fetch("/api/careers/admin/openings", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(openingPayload),
      });

      const data = await res.json();
      if (!res.ok || !data.success) {
        throw new Error(data.error || "Failed to create opening.");
      }

      setActionMessage({
        type: "success",
        text: `Opening "${openingPayload.title}" published live successfully!`,
      });
      setIsCreateModalOpen(false);
      fetchOpenings(token);
    } catch (err: unknown) {
      setActionMessage({
        type: "error",
        text: err instanceof Error ? err.message : "Error creating opening.",
      });
    } finally {
      setIsSubmittingRole(false);
    }
  };

  if (!isMounted) {
    return (
      <main className="min-h-screen bg-[#F8FAFC] py-16">
        <Container>
          <div className="flex items-center justify-center py-20 text-xs text-slate-400">
            Initializing secure admin session...
          </div>
        </Container>
      </main>
    );
  }

  // Not authenticated
  if (!token) {
    return (
      <main className="min-h-screen bg-[#F8FAFC]">
        <Container>
          <AdminAuthView
            passcode={passcode}
            setPasscode={setPasscode}
            showPasscode={showPasscode}
            setShowPasscode={setShowPasscode}
            isAuthChecking={isAuthChecking}
            authError={authError}
            onSubmit={handleLogin}
          />
        </Container>
      </main>
    );
  }

  const activeCount = openings.filter((o) => o.status === "Active").length;
  const inactiveCount = openings.filter((o) => o.status === "Inactive").length;

  return (
    <main className="min-h-screen bg-[#F8FAFC] py-10 sm:py-14">
      <Container>
        {/* Header Section */}
        <AdminHeader
          totalCount={openings.length}
          activeCount={activeCount}
          inactiveCount={inactiveCount}
          isLoading={isLoadingOpenings}
          onRefresh={() => fetchOpenings(token)}
          onOpenCreateModal={() => setIsCreateModalOpen(true)}
          onLogout={handleLogout}
        />

        {/* Action Feedback Banner */}
        <AdminFeedbackBanner
          message={actionMessage}
          onDismiss={() => setActionMessage(null)}
        />

        {/* Openings Management List */}
        <AdminOpeningsList
          openings={openings}
          isLoading={isLoadingOpenings}
          onToggleStatus={handleToggleStatus}
          onOpenCreateModal={() => setIsCreateModalOpen(true)}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          statusFilter={statusFilter}
          setStatusFilter={setStatusFilter}
        />

        {/* Modal for Creating New Opening */}
        <AdminCreateOpeningModal
          isOpen={isCreateModalOpen}
          onClose={() => setIsCreateModalOpen(false)}
          onSubmit={handleCreateOpening}
          isSubmitting={isSubmittingRole}
        />
      </Container>
    </main>
  );
}
