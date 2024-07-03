import { Alliance, Creativity, Crowd, Support } from "@/assets/icons";
import { cn } from "@/utils";
import Image from "next/image";
import React from "react";

const whys = [
  {
    label: "Cultivating Alliances",
    desc: "Working with our partners to encourage investment and empowerment into communities and individuals with a focus on generating positive social and environmental outcomes.",
    color: "bg-[#8497FF]",
    icon: Alliance,
  },
  {
    label: "Elevating Communities",
    desc: "As a people-first company, we value our local community and actively support it by investing in the tools, skills, and education needed to create communities that are inspired, capable, and confident in driving change.",
    color: "bg-[#93FF98]",
    icon: Crowd,
  },
  {
    label: "Amplifying Talents",
    desc: "We support diverse talent to excel in their fields and become value-driven role models and leaders who uplift and inspire their communities. These achievements are facilitated by offering individuals free opportunities for networking, internships, and personal development.",
    color: "bg-[#FFD556]",
    icon: Creativity,
  },
  {
    label: "Supporting Charitable Causes",
    desc: "As part of our mission to positively impact work, people, and the planet, we actively support charitable causes and not-for-profit organizations. This includes staging fundraising events and providing material assistance to orphanages and children's facilities in various regions where we are present.",
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
