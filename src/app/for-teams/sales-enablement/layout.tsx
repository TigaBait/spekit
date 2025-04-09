import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Spekit - Sales Enablement Platform for Smarter, Faster Enablement",
  description: "Spekit enables sales enablement teams to easily create, deliver, and reinforce training making their sales teams more effective.",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function SalesEnablementLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
