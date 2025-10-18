import { GlobalReach, People } from "@/assets/images";
import OurImpact from "@/components/corporate-culture/ourImpact";
import Pledges from "@/components/corporate-culture/pledges";
import WeAchieve from "@/components/corporate-culture/weAchieve";
import { cn } from "@/utils";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Corporate Culture – Sonaqode",
};

export default function CorporateCulture() {
  return (
    <main className="w-screen min-h-screen">
      <section className="relative flex items-end h-[630px] lg:h-screen w-full bg-gray-200 text-white z-[1] pb-16 xl:pb-28 px-6">
        <Image
          src={GlobalReach}
          alt="about-banner"
          className={cn(
            "absolute top-0 left-0 w-full h-full object-cover z-[1]",
          )}
          placeholder="blur"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[2]"></div>
        <div className="flex flex-col gap-9 xl:gap-16 z-[3] w-full lg:max-w-[1260px] mx-auto">
          <div className="flex flex-col gap-2">
            <h1 className="font-clash text-2xl md:text-4xl xl:text-[56px] font-semibold xl:leading-[68px] md:w-[400px] xl:w-[634px]">
              Corporate Culture
            </h1>
            <p className="text-sm md:text-base xl:text-lg md:max-w-[550px] xl:max-w-[680px] font-light">
              At Sonaqode, corporate social responsibility (CSR) is woven into
              our strategic fabric. We are committed to enriching the lives of
              our team members and uplifting our communities through proactive
              initiatives that promote social, economic, educational, and
              environmental well being. By setting and pursuing clear
              objectives, we committed to building a thriving, responsible
              workforce and contribute positively to the world around us.
            </p>
          </div>
        </div>
      </section>
      <section className="pt-16 lg:pt-28 px-5">
        <div className="relative w-full max-w-[1260px] flex flex-col lg:flex-row gap-6 lg:gap-10 mx-auto py-12 pb-5 lg:py-14 px-4 lg:px-14 rounded-[50px] lg:rounded-[100px] bg-sona-lightBlue">
          <div className="flex flex-1 flex-col gap-1.5 lg:gap-6 justify-center">
            <h2 className="font-clash text-2xl lg:text-5xl font-semibold">
              People
            </h2>
            <p className="text-base xl:text-lg font-light">
              Our culture is built on a supportive, inclusive environment and a
              commitment to continuous development. We invest in personalised
              growth plans to unlock every team member&apos;s potential. This
              empowers us to attract passionate individuals dedicated to a
              shared goal, making technology accessible to businesses worldwide
              in an era of digital transformation.
            </p>
          </div>
          <Image
            src={People}
            className="h-auto w-full max-w-[440px] xl:max-w-[530px] aspect-[550/530] object-cover rounded-3xl lg:rounded-[58px]"
            alt="people"
          />
        </div>
      </section>
      <Pledges />
      <OurImpact />
      <WeAchieve />
    </main>
  );
}
