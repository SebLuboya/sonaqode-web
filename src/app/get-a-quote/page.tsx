import { GetQuoteBanner } from "@/assets/images";
import Image from "next/image";
import React from "react";
import QuoteForm from "@/components/forms/quote";

export const metadata = {
  title: "Get A Quote – Sonaqode",
};

export default function GetAQuote() {
  return (
    <main className="relative w-screen flex-1 pt-4 lg:pt-8 bg-gray-300">
      <Image
        src={GetQuoteBanner}
        alt="how-we-work"
        className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
        placeholder="blur"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-[2]"></div>
      <section className="relative z-[3] w-full lg:w-[690px] px-5 lg mx-auto">
        <div className="h-20 md:h-24 lg:h-28 shrink-0 mb-11 lg:mb-12"></div>
        <section className="flex flex-col items-center gap-12 mb-16">
          <div className="w-full mx-auto flex flex-col gap-4 items-center text-white">
            <h1 className="font-clash text-3xl lg:text-[40px] text-center font-semibold lg:leading-[60px]">
              Get A Quote
            </h1>
            <p className="text-balance text-center font-light">
              Please complete the details below.
            </p>
          </div>
          <QuoteForm />
        </section>
      </section>
    </main>
  );
}
