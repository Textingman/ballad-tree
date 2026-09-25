import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Team Cross Fit — Connected Employee Wellness",
  description: "Team Cross Fit connects the health apps and devices your employees already use with company wellness programs, challenges, and rewards.",
  keywords: "employee wellness, workplace wellness, health app integration, wellness challenges, Apple Health, fitness tracker, employee health",
  openGraph: {
    title: "Team Cross Fit — Connected Employee Wellness",
    description: "Connect the health apps your employees already use. Build wellness programs people actually participate in.",
    siteName: "Team Cross Fit",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
