import { GlobalReach, People } from "@/assets/images";
import OurImpact from "@/components/corporate-culture/ourImpact";
import Pledges from "@/components/corporate-culture/pledges";
import WeAchieve from "@/components/corporate-culture/weAchieve";
import Button from "@/components/misc/button";
import { cn } from "@/utils";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "Corporate Culture – sonaqode",
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
            <p className="text-sm xl:text-lg md:max-w-[550px] xl:max-w-[680px] font-light">
              At Sonaqode, we integrate corporate social responsibility into our
              corporate strategy to enrich the lives of our team members and
              uplift the communities where we operate. Therefore, we actively
              enhance the social, economic, educational, and environmental
              well-being of our communities and the world. We establish and
              pursue clear commitments in these areas, demonstrating our
              dedication to building a thriving workforce.
            </p>
          </div>
          <Button>Learn more</Button>
        </div>
      </section>
      <section className="pt-16 lg:pt-28 px-5">
        <div className="relative w-full max-w-[1260px] flex flex-col lg:flex-row gap-6 lg:gap-10 mx-auto py-12 pb-5 lg:py-14 px-4 lg:px-14 rounded-[50px] lg:rounded-[100px] bg-sona-lightBlue">
          <div className="flex flex-1 flex-col gap-1.5 lg:gap-6 justify-center">
            <h2 className="font-clash text-2xl lg:text-5xl font-semibold">
              People
            </h2>
            <p className="text-base xl:text-lg font-light">
              We cultivate a supportive and inclusive working environment that
              embodies our mission and values. We commit to continual
              improvement and development, believing in the power of
              individuals. By creating personal development plans, we unlock the
              true potential of every team member and are thrilled to be a
              company that attracts unique individuals who share a passion for
              tech and dream of making it more accessible to businesses needing
              support in today&apos;s worldwide digital transformation.
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
