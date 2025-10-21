import { Goal, Vision } from "@/assets/icons";
import { AboutBanner } from "@/assets/images";
import Faq from "@/components/about/faq";
import HowItWorks from "@/components/about/howItWorks";
import Industries from "@/components/about/industries";
import OurValues from "@/components/about/ourValues";
import { cn } from "@/utils";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About Us – Sonaqode",
  description:
    "We connect you with top-tier tech professionals to build a resilient, extended remote workforce.",
};

export default function AboutUs() {
  return (
    <main className="w-screen min-h-screen">
      <section className="relative flex items-end h-[630px] lg:h-screen w-full bg-gray-200 text-white z-[1] pb-16 xl:pb-28 px-6">
        <Image
          src={AboutBanner}
          alt="about-banner"
          className={cn(
            "absolute top-0 left-0 w-full h-full object-cover z-[1]",
          )}
          placeholder="blur"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[2]"></div>
        <div className="flex flex-col gap-9 lg:gap-16 z-[3] w-full lg:max-w-[1260px] mx-auto">
          <div className="flex flex-col gap-2">
            <h1 className="font-clash text-2xl md:text-4xl xl:text-[56px] font-semibold xl:leading-[68px] md:w-[400px] xl:w-[734px]">
              Talent dots, Connected.
            </h1>
            <p className="text-sm md:text-base xl:text-lg md:max-w-[550px] xl:max-w-[680px] font-light">
              We believe a proficient workforce is the foundation of your
              success. That’s why our mission is clear, to connect ambitious
              companies with top-tier talent, empowering you to scale and grow
              with efficiency, flexibility, and convenience.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-12 lg:pt-20 px-5">
        <div className="w-full lg:max-w-[1260px] mx-auto space-y-4 gap-10 px-8 py-11 rounded-[30px] overflow-clip bg-sona-lightBlue text-lg font-light">
          <p>
            We provide on-demand access to a talent pool of over 5,000 vetted
            professionals from across Africa, packaged at cost-effective rates
            with uncompromising quality. This gives you the elite talent you
            need without the overhead and traditional complexities.
          </p>
          <p>
            We&apos;re building the future of work by unlocking Africa&apos;s
            digital potential and creating exceptional opportunities for growth and
            innovation. Our specialists have a proven track record of delivering
            results for international companies. With Sonaqode&apos;s ongoing
            support, we guide you every step of the way to transform your ideas
            and challenges into outstanding results.
          </p>
        </div>
      </section>
      <section className="pt-16 lg:pt-28 px-5">
        <div className="relative w-full max-w-[1260px] flex flex-col lg:flex-row gap-5 lg:gap-8 mx-auto">
          <div className="w-full bg-[#CDCBFF] flex flex-col rounded-[40px] p-8 gap-5">
            <div className="flex flex-row items-center gap-3">
              <div
                className={cn(
                  "w-9 h-9 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-[#8497FF]",
                )}
              >
                <Image
                  src={Goal}
                  className="w-5 h-5 lg:w-8 lg:h-8"
                  alt="icon"
                />
              </div>
              <h3 className="font-clash text-2xl lg:text-[40px] font-medium">
                Mission
              </h3>
            </div>
            <div>
              <p className="text-sm lg:text-lg text-gray-600">
                Delivering the future of digital solutions, powered by African
                talent and AI.
              </p>
            </div>
          </div>
          <div className="w-full bg-[#FFD0D9] flex flex-col rounded-[40px] p-8 gap-5">
            <div className="flex flex-row items-center gap-3">
              <div
                className={cn(
                  "w-9 h-9 lg:w-12 lg:h-12 rounded-full flex items-center justify-center bg-[#FF758F]",
                )}
              >
                <Image
                  src={Vision}
                  className="w-5 h-5 lg:w-8 lg:h-8"
                  alt="icon"
                />
              </div>
              <h3 className="font-clash text-2xl lg:text-[40px] font-medium">
                Vision
              </h3>
            </div>
            <div>
              <p className="text-sm lg:text-lg text-gray-600">
                To be the essential partner for visionary companies through
                building teams that solve foundational tech challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
      <OurValues />
      <HowItWorks />
      <Industries />
      <Faq />
    </main>
  );
}
