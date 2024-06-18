import type { Metadata } from "next";
import "./globals.css";
import { FONTS } from "@/assets/fonts";

export const metadata: Metadata = {
  title: "SonaQode",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${FONTS.clashDisplay.variable} ${FONTS.poppins.variable}`}
    >
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  );
}
