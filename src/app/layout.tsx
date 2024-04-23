import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NextUIProviders from "@/Context/NextUIProvider";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Reskilll",
  description:
    "Reskilll is a platform for  developer communities to grow and thrive.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true} className="overflow-x-hidden">
      <body className={inter.className}>
        <NextUIProviders>{children}</NextUIProviders>
      </body>
    </html>
  );
}
