import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://tharaka-portfolio-delta.vercel.app"),
  title: "Tharaka Jayasundara | Full-Stack Developer",
  description:
    "Portfolio of Tharaka Jayasundara, an IT undergraduate and Full-Stack Developer based in Sri Lanka specializing in Next.js, TypeScript, Mobile Applications, and UI/UX Design.",
  keywords: [
    "Tharaka Jayasundara",
    "Full-Stack Developer",
    "Software Engineer",
    "Next.js Developer",
    "React Developer",
    "Web Developer Sri Lanka",
    "UI/UX Designer",
    "Portfolio",
  ],
  authors: [{ name: "Tharaka Jayasundara", url: "https://tharaka-portfolio-delta.vercel.app" }],
  creator: "Tharaka Jayasundara",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tharaka-portfolio-delta.vercel.app",
    title: "Tharaka Jayasundara | Full-Stack Developer",
    description:
      "Full-Stack Developer passionate about building modern web applications, scalable digital products, and clean user interfaces.",
    siteName: "Tharaka Jayasundara Portfolio",
    images: [
      {
        url: "/images/tharaka-cutout-v2.png",
        width: 1200,
        height: 630,
        alt: "Tharaka Jayasundara - Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tharaka Jayasundara | Full-Stack Developer",
    description:
      "Full-Stack Developer passionate about building modern web applications, scalable digital products, and clean user interfaces.",
    images: ["/images/tharaka-cutout-v2.png"],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
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
