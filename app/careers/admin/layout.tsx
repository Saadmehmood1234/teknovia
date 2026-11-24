import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers Admin Control Room | Teknovia Technologies",
  description: "Administrative portal for managing Teknovia career openings and applications.",
  robots: {
    index: false,
    follow: false,
    nocache: true,
  },
};

export default function CareersAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
