import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ballad Tree",
  description: "Ballad Tree — balladtree.com",
  keywords: "ballad tree, balladtree",
  openGraph: {
    title: "Ballad Tree",
    description: "Ballad Tree — balladtree.com",
    siteName: "Ballad Tree",
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
