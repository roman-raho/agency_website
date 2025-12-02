import type { Metadata } from "next";
import { colours } from "./colours.js"
import "./globals.css";

export const metadata: Metadata = {
  title: "Romans Logistics",
  description: "Specialised shipping support for watch-brands",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`bg-[${colours.background_default}] antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
