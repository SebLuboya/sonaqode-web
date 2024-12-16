import type { Metadata } from "next";
import "./globals.css";
import { FONTS } from "@/assets/fonts";
import Header from "@/components/layout/header";
import Footer from "@/components/layout/footer";
import Providers from "@/app/providers";
import { baseUrl } from "@/utils";

export const metadata: Metadata = {
  title: "Sonaqode - Aligning Talent",
  description:
    "Sonaqode is a tech professional staffing company built to help businesses scale and grow.",
  metadataBase: new URL(baseUrl),
  keywords: [
    "sonaqode",
    "African tech talent",
    "Remote developers from Africa",
    "African software engineers",
    "Outsourcing tech talent Africa",
    "African tech staffing",
    "remote tech talent",
    "African tech recruitment",
    "remote tech talent",
    "top-tier tech talent Africa",
    "Africa tech talent solution",
    "scalable tech teams",
    "Africa remote talent",
    "Scale business with tech talent",
    "Build remote tech teams",
    "Cost-effective tech hiring",
    "Accelerate growth with tech experts",
    "Efficient tech staffing solutions",
    "Hire remote tech professionals in Africa",
    "Build a resilient remote workforce quickly",
    "Access top-tier African tech developers",
    "Flexible tech staffing for business growth",
    "On-demand remote software engineers",
    "development",
    "agency",
    "software development",
    "cyber security",
    "data analytics",
    "corporate culture",
  ],
  openGraph: {
    title: "Sonaqode - Aligning Talent",
    description:
      "Sonaqode is a tech professional staffing company built to help businesses scale and grow.",
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
        className="relative min-h-screen flex flex-col justify-between overflow-x-clip"
      >
        <Header />
        <Providers>{children}</Providers>
        <Footer />
      </body>
    </html>
  );
}
