import type { Metadata } from "next";
import "./globals.css";
import { FONTS } from "@/assets/fonts";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Providers from "@/app/providers";
import { baseUrl } from "@/utils";

export const metadata: Metadata = {
  title: "Sonaqode - Aligning Talent",
  description: "Sonaqode is a software development agency based in the UK.",
  metadataBase: new URL(baseUrl),
  keywords: [
    "sonaqode",
    "software",
    "development",
    "agency",
    "software development",
    "cyber security",
    "data analytics",
    "corporate culture",
  ],
  openGraph: {
    title: "Sonaqode - Aligning Talent",
    description: "Sonaqode is a software development agency based in the UK.",
  },
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
