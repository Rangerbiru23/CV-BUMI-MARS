import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "CV BUMI MARS - Konstruksi Jaringan Irigasi dan Drainase",
  description: "CV BUMI MARS adalah perusahaan konstruksi profesional yang berfokus pada pembangunan jaringan irigasi dan drainase yang berkualitas dan berkelanjutan.",
  keywords: ["CV BUMI MARS", "konstruksi", "irigasi", "drainase", "jaringan irigasi", "konstruksi drainase", "Morowali", "Sulawesi Tengah"],
  authors: [{ name: "CV BUMI MARS" }],
  icons: {
    icon: "/logo.png",
  },
  openGraph: {
    title: "CV BUMI MARS - Konstruksi Jaringan Irigasi dan Drainase",
    description: "Perusahaan konstruksi profesional yang berfokus pada pembangunan jaringan irigasi dan drainase berkualitas",
    siteName: "CV BUMI MARS",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "CV BUMI MARS - Konstruksi Jaringan Irigasi dan Drainase",
    description: "Perusahaan konstruksi profesional yang berfokus pada pembangunan jaringan irigasi dan drainase berkualitas",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
