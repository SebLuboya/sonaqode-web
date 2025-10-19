import {
  AdminMale,
  Conflict,
  Graduation,
  Handshake,
  Progress,
  Trust,
} from "@/assets/icons";
import { cn } from "@/utils";
import Image from "next/image";
import React from "react";

const whys = [
  {
    label: "Client",
    desc: "We put our clients first. By actively listening and understanding their unique pain points, we craft solutions that are deeply aligned with their goals, collaborating closely from evaluation to completion.",
    color: "bg-[#8497FF]",
    icon: AdminMale,
  },
  {
    label: "Commitment",
    desc: "We manage every project with an unwavering commitment to your success. Focusing on achieving your business goals, meeting timelines, ensuring quality, and maximising productivity at every stage.",
    color: "bg-[#FFBFAB]",
    icon: Trust,
  },
  {
    label: "Proactive",
    desc: "Our team's proactive and innovative mindset is channeled into one primary goal, delivering uniquely creative value to our clients with every service.",
    color: "bg-[#FFD556]",
    icon: Conflict,
  },
  {
    label: "Progress",
    desc: "We believe in making progress visible. Our forward thinking, pragmatic approach ensures that innovation always serves a practical purpose, delivering clear value throughout our partnership.",
    color: "bg-[#B4E7FF]",
    icon: Progress,
  },
  {
    label: "Trusted Partner",
    desc: "We build trust through honesty, reliability, and transparency. These values guide all our relationships internally and externally and are the foundation for successful collaborations with clients and stakeholders.",
    color: "bg-[#FF9D0F]",
    icon: Handshake,
  },
  {
    label: "Excellence Service",
    desc: "For our clients, the highest quality is the foundation of trust that leads to long-term collaboration. This focus challenges and empowers our team to pursue excellence and relentless improvement in all we do.",
    color: "bg-[#55C6FF]",
    icon: Graduation,
  },
];

const OurValues = () => {
  return (
    <section className="pt-16 lg:pt-28 px-5">
      <div className="relative w-full max-w-[1260px] min-h-[650px] mx-auto pt-16 lg:py-14 p-4 rounded-[50px] lg:rounded-[100px] bg-sona-lightBlue">
        <div className="w-full lg:max-w-[1100px] mx-auto flex flex-col items-center">
          <h2 className="font-clash text-3xl lg:text-[50px] text-center font-semibold lg:leading-[60px]">
            Our Values
          </h2>
          <p className="text-gray-600 text-sm lg:text-base text-center font-light max-w-[920px] leading-5 mt-3">
            Our values are our compass, they guide our actions and define our
            identity. They inspire every team member to deliver exceptional
            results and drive continuous progress.
          </p>
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

export default OurValues;
