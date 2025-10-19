import { Alliance, Creativity, Crowd, Support } from "@/assets/icons";
import { cn } from "@/utils";
import Image from "next/image";
import React from "react";

const whys = [
  {
    label: "Cultivating Alliances",
    desc: "We work with our partners to encourage investments that empower communities and individuals, focusing on generating positive social and environmental outcomes.",
    color: "bg-[#8497FF]",
    icon: Alliance,
  },
  {
    label: "Elevating Communities",
    desc: "Our people first ethos extends to our local community. We invest in the tools, skills, and education that empower individuals, fostering a collective that is inspired and capable of creating meaningful change.",
    color: "bg-[#93FF98]",
    icon: Crowd,
  },
  {
    label: "Amplifying Talents",
    desc: "Our mission is to cultivate the next generation of value driven leaders from diverse backgrounds. By offering free networking, internships, and personal development, we equip talented individuals to excel in their fields and become inspirational forces in their communities.",
    color: "bg-[#FFD556]",
    icon: Creativity,
  },
  {
    label: "Supporting Charitable Causes",
    desc: "We fulfill our mission to impact work, people, and the planet by partnering with non-profits and supporting charitable causes. Our efforts include fundraising and providing direct material support to orphanages and children's facilities in the communities we serve.",
    color: "bg-[#B4E7FF]",
    icon: Support,
  },
];

const WeAchieve = () => {
  return (
    <section className="py-16 lg:py-28 px-5">
      <div className="relative w-full max-w-[1260px] min-h-[650px] mx-auto pt-16 lg:py-14 p-4 rounded-[50px] lg:rounded-[100px] bg-sona-lightBlue">
        <div className="w-full lg:max-w-[1000px] mx-auto flex flex-col items-center">
          <h2 className="font-clash text-3xl lg:text-[50px] text-center font-semibold lg:leading-[60px]">
            We Achieve These By
          </h2>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 mt-14 gap-5 lg:gap-12">
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

export default WeAchieve;
