import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const vazirFont = localFont({
  src: "../../public/fonts/Vazirmatn-Regular.woff2",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "dormitory",
  description: "A modern dormitory management application",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={vazirFont.className}>{children}</body>
    </html>
  );
}
