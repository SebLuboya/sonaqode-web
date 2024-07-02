import { Blue100, Blue25, Blue50, Blue75 } from "@/assets/icons/circles";
import Image from "next/image";
import React from "react";

const steps = [
  {
    circle: Blue25,
    label: "Initiation",
    desc: "We begin with an introductory call, diving into the intricate details of your organisation. Through dynamic brainstorming sessions, we uncover your specific staffing requirements, ethos, and expectations, accurately matching them with suitable professionals to provide solutions to your challenges.",
  },
  {
    circle: Blue50,
    label: "Discovery",
    desc: "Building on the initial consultation, we embark on constructing a well-planned and practical strategy, mapping out staffing solutions along with the resources, efficiency, and competency required to deliver outstanding results.",
  },
  {
    circle: Blue75,
    label: "Application",
    desc: "This phase is dedicated to finding the ideal candidate for your organisation. We conduct a thorough vetting process, rigorously shortlisting the most compatible professionals who will seamlessly integrate with and complement your in-house team, delivering tangible results that align with your outlined expectations.",
  },
  {
    circle: Blue100,
    label: "Appraisal",
    desc: "We understand the value of user insight. Our team assesses the achievement of your engagement against outlined requirements, evaluating performance and other functionalities. This ensures it continues to meet your changing requirements and maximizes its positive impact on your processes, guaranteeing quality and long-term reliability.",
  },
];

const HowItWorks = () => {
  return (
    <section className="pt-16 lg:pt-28 px-5">
      <div className="relative w-full max-w-[1260px] flex flex-col lg:gap-10 mx-auto pt-12 lg:py-14 p-4 rounded-[50px] lg:rounded-[100px] bg-sona-lightBlue">
        <div className="w-full lg:max-w-[1098px] mx-auto flex flex-col gap-8 items-center">
          <h2 className="font-clash text-3xl lg:text-[50px] text-center font-semibold lg:leading-[60px]">
            How It Works
          </h2>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10">
            {steps.map((step) => (
              <div key={step.label} className="flex flex-row gap-4 lg:gap-10">
                <Image
                  src={step.circle}
                  className="w-16 h-16 lg:w-20 lg:h-20"
                  alt="circle"
                />
                <div className="flex flex-col">
                  <h3 className="text-base lg:text-xl font-medium mb-1">
                    {step.label}
                  </h3>
                  <p className="text-sm lg:text-base font-light text-gray-600">
                    {step.desc}
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

export default HowItWorks;
