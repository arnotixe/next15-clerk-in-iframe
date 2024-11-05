import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private pages",
  description: "Should require authentication",
};

export default function PrivateLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <div className="">{children}</div>;
}
