import type { Metadata } from "next";
import "./globals.css";
import { FONTS } from "@/assets/fonts";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Providers from "@/app/providers";

export const metadata: Metadata = {
  title: "sonaqode - Aligning Talent",
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
      <body
        suppressHydrationWarning={true}
        className="relative min-h-screen flex flex-col justify-between"
      >
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
