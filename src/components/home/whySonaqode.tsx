import { Affordable, Extension, Focus, Transparent } from "@/assets/icons";
import { cn } from "@/utils";
import Image from "next/image";
import React from "react";

const whys = [
  {
    label: "Affordable Pricing",
    desc: "Tap into our exceptional talent pool of skilled professionals at cost effective rates, boosting your profitability.",
    color: "bg-[#8497FF]",
    icon: Affordable,
  },
  {
    label: "Transparent Communication",
    desc: "We believe in trust, accountability, and practicing clear and cohesive engagements with clients.",
    color: "bg-[#93FF98]",
    icon: Transparent,
  },
  {
    label: "Focus on Quality",
    desc: "Driving excellence, continuously improving efficiency, and aligning practices with a commitment to long term success.",
    color: "bg-[#FFD556]",
    icon: Focus,
  },
  {
    label: "Team Extension",
    desc: "Connecting you with top-tier talents, seamlessly integrating them into your team, and ensuring effective contributions.",
    color: "bg-[#B4E7FF]",
    icon: Extension,
  },
];

const WhySonaqode = () => {
  return (
    <section className="pt-16 lg:pt-28 px-5">
      <div className="relative w-full max-w-[1260px] min-h-[650px] mx-auto pt-16 lg:py-14 p-4 rounded-[50px] lg:rounded-[100px] bg-sona-lightBlue">
        <div className="w-full lg:max-w-[1100px] mx-auto flex flex-col items-center">
          <h2 className="font-clash text-3xl lg:text-[50px] text-center font-semibold lg:leading-[60px]">
            Why SonaQode
          </h2>
          <p className="text-gray-600 text-sm lg:text-base text-center text-balance font-light leading-5 mt-3">
            Sonaqode is synonymous with top class quality and reliability,
            featuring specialists with extensive experience across various
            industries who are always prepared to address any challenges your
            business faces promptly.
          </p>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 mt-14 gap-5 lg:gap-12">
            {whys.map((why) => (
              <div
                key={why.label}
                className="w-full bg-white flex flex-col rounded-[40px] p-8 gap-5"
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-full flex items-center justify-center",
                    why.color,
                  )}
                >
                  <Image src={why.icon} className="w-8 h-8" alt="icon" />
                </div>
                <div>
                  <h3 className="text-base lg:text-xl font-semibold mb-1">
                    {why.label}
                  </h3>
                  <p className="text-sm lg:text-base font-light text-gray-600">
                    {why.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySonaqode;
