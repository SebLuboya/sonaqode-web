import { AboutBanner } from "@/assets/images";
import Button from "@/components/misc/button";
import { cn } from "@/utils";
import Image from "next/image";
import React from "react";

export const metadata = {
  title: "About Us – SonaQode",
};

export default function AboutUs() {
  return (
    <main className="w-screen min-h-screen">
      <section className="relative flex items-end h-[630px] lg:h-[900px] w-full bg-gray-200 text-white z-[1] pb-16 lg:pb-28 px-6">
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
            <h1 className="font-clash text-2xl lg:text-[56px] font-semibold lg:leading-[68px] lg:w-[634px]">
              About US
            </h1>
            <p className="lg:max-w-[680px] font-light">
              Sonaqode is a tech professional staffing company built to help
              businesses scale and grow. We empower you with efficient,
              on-demand access to top-tier talents who seamlessly integrate,
              innovate with fresh ideas, and deliver exceptional results
              swiftly, mirroring the dedication of your in-house team. Our focus
              is on optimising budgets, accelerating scaling, and sidestepping
              the pitfalls of traditional outsourcing.
            </p>
          </div>
          <Button>Learn more</Button>
        </div>
      </section>
    </main>
  );
}
