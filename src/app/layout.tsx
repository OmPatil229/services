import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Om Patil - Custom Software Solutions",
  description:
    "Custom software, web apps, AI automation for businesses. Build scalable web applications, automation systems, and AI chatbots tailored to your business needs.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
