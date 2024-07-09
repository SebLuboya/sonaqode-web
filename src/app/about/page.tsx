import { Goal, Vision } from "@/assets/icons";
import { AboutBanner, GlobalReach } from "@/assets/images";
import Faq from "@/components/about/faq";
import HowItWorks from "@/components/about/howItWorks";
import OurValues from "@/components/about/ourValues";
import { cn } from "@/utils";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About Us – Sonaqode",
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
            <h1 className="font-clash text-2xl md:text-4xl xl:text-[56px] font-semibold xl:leading-[68px] md:w-[400px] xl:w-[634px]">
              About Us
            </h1>
            <p className="text-sm md:text-base xl:text-lg md:max-w-[550px] xl:max-w-[680px] font-light">
              Sonaqode is a tech professional staffing company built to help
              businesses scale and grow. Our focus is on optimising budgets,
              accelerating scaling, and avoiding the pitfalls of traditional
              outsourcing. We empower you with efficient, on-demand access to
              top-tier talent who seamlessly integrates, delivering exceptional
              results swiftly, reflecting the dedication of your in-house team.
            </p>
          </div>
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
                Our mission is to spearhead and propel digital services through
                AI and Technology from Africa to the world.
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
                To be the leading Technology staffing company committed in
                solving deep tech industry challenges.
              </p>
            </div>
          </div>
        </div>
      </section>
      <OurValues />
      <HowItWorks />
      <section className="pt-16 lg:pt-28 px-5">
        <div className="relative w-full lg:max-w-[1260px] md:min-h-[550px] xl:min-h-[630px] mx-auto flex flex-row items-end px-5 pb-12 lg:pb-16 lg:pl-16 rounded-[35px] lg:rounded-[100px] overflow-clip bg-sona-lightBlue text-white">
          <Image
            src={GlobalReach}
            alt="how-we-work"
            className="object-cover z-[1]"
            layout="fill"
            placeholder="blur"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-[2]"></div>
          <div className="lg:w-[790px] w-full flex flex-col gap-8 lg:gap-10 h-full z-[3]">
            <div className="flex flex-col gap-2">
              <h2 className="font-clash text-3xl lg:text-[50px] font-semibold lg:leading-[60px] mb-1 lg:mb-3">
                Global Reach
              </h2>
              <p className="text-sm lg:text-lg font-light text-balance">
                With our roots in the UK we cater to the needs of global
                entities. Continuously learning from our clients, our mature
                collaboration strategies enable us to overcome geographic,
                language and cultural barriers, to communicate and coordinate
                inter-team dependencies efficiently within the shared
                infrastructure and across multiple locations.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Faq />
    </main>
  );
}
