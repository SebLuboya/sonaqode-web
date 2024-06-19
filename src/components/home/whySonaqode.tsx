import { Affordable, Extension, Focus, Transparent } from "@/assets/icons";
import { cn } from "@/utils";
import Image from "next/image";
import React from "react";

const whys = [
  {
    label: "Affordable Pricing",
    desc: "Tap into our exceptional talent pool of skilled professionals at cost-effective rates, boosting your profitability.",
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
    label: "focus on Quality",
    desc: "Driving excellence, continuously improving efficiency, and aligning practices with a commitment to long-term success.",
    color: "bg-[#FFD556]",
    icon: Focus,
  },
  {
    label: "Team Extension",
    desc: "Linking you with top-tier talents, seamlessly integrating them into your team, and enabling immediate contributions.",
    color: "bg-[#B4E7FF]",
    icon: Extension,
  },
];

const WhySonaqode = () => {
  return (
    <section className="pt-28">
      <div className="relative w-full max-w-[1210px] min-h-[650px] mx-auto flex flex-col items-center py-16 px-36 rounded-[100px] bg-sona-lightBlue">
        <h2 className="font-clash text-[50px] font-semibold leading-[60px]">
          Why SonaQode
        </h2>
        <p className="text-gray-600 text-center text-balance mt-3">
          Sonaqode is synonymous with top-class quality and reliability. Our
          team of specialists has extensive experience in various verticals and
          is always ready to address any challenges of your business promptly.
        </p>
        <div className="w-full grid grid-cols-2 grid-rows-2 mt-14 gap-12">
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
                <h3 className="text-xl font-semibold mb-1">{why.label}</h3>
                <p className="text-gray-600">{why.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySonaqode;
