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
    desc: "Clients are our most valuable asset. Providing client-centric solutions means actively engaging with our customers, listening to their feedback, and understanding their pain points throughout the evaluation and process.",
    color: "bg-[#8497FF]",
    icon: AdminMale,
  },
  {
    label: "Commitment",
    desc: "Every project we undertake will be managed with the highest level of commitment. We are dedicated to achieving business goals, meeting deadlines, ensuring quality, and maximising productivity.",
    color: "bg-[#FFBFAB]",
    icon: Trust,
  },
  {
    label: "Proactive",
    desc: "We encourage a proactive, innovative, and initiative-driven mindset within our workforce. Our goal is to maintain creativity while delivering services to our clients.",
    color: "bg-[#FFD556]",
    icon: Conflict,
  },
  {
    label: "Progress",
    desc: "A value we closely share with our clients is the importance of demonstrating progress throughout our collaboration. As a forward-thinking and pragmatic organisation, we strive to embrace innovation and practicality.",
    color: "bg-[#B4E7FF]",
    icon: Progress,
  },
  {
    label: "Trusted Partner",
    desc: "Trust comes from being honest, reliable, and transparent. These integral values apply both internally and externally, guiding our relationships with clients and stakeholders. They are essential ingredients in developing success together.",
    color: "bg-[#FF9D0F]",
    icon: Handshake,
  },
  {
    label: "Excellence Service",
    desc: "The highest quality is the best way to build long term relationships with our clients. This empowers our team to deliver excellence in every aspect of our business and fuels continuous improvement.",
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
          <p className="text-gray-600 text-sm lg:text-base text-center text-balance leading-5 mt-3">
            Sonaqode is synonymous with top-class quality and reliability. Our
            team of specialists has extensive experience in various verticals
            and is always ready to address any challenges of your business
            promptly.
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
                  <p className="text-sm lg:text-base text-gray-600">
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
