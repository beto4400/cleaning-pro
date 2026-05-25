import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cleaning Pro | Professional Cleaning Services",
  description:
    "Professional residential and commercial cleaning in Madison. Eco-friendly products, licensed team, guaranteed satisfaction. Free estimates.",
  openGraph: {
    title: "Cleaning Pro | Professional Cleaning Services",
    description:
      "Professional cleaning services in Madison. Residential & commercial. Eco-friendly, reliable, insured.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
