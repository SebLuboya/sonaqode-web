import React from "react";
import { cn } from "@/utils";
import Circle25 from "@/assets/icons/circles/base/Circle25";
import Circle50 from "@/assets/icons/circles/base/Circle50";
import Circle75 from "@/assets/icons/circles/base/Circle75";
import Circle100 from "@/assets/icons/circles/base/Circle100";

const steps = [
  {
    circle: Circle25,
    label: "Subscribe",
    desc: "Select the service and package that best suits your needs. Follow our quick payment process by providing your company details.",
  },
  {
    circle: Circle50,
    label: "Engage",
    desc: "We will schedule a call to understand your requirements, align on expectations, and start the process of matching you with the ideal candidate.",
  },
  {
    circle: Circle75,
    label: "Cooperate",
    desc: "Once you've subscribed we'll present you with shortlisted pre-vetted candidates. Once you've made your selection, we'll arrange an interview.",
  },
  {
    circle: Circle100,
    label: "Commence",
    desc: "With your candidate chosen, we'll schedule a call to onboard your new team member so you can start delegating effectively immediately. We then provide regular check-ins to ensure seamless progress and continuously align on delivering maximum value.",
  },
];

const HowToInitiate = ({
  text = "text-sona-blue",
  bgColor = "bg-sona-lightBlue",
}) => {
  return (
    <section className="pt-16 lg:pt-28 px-5">
      <div
        className={cn(
          "relative w-full max-w-[1260px] flex flex-col lg:gap-10 mx-auto py-10 lg:py-14 px-4 rounded-[50px] lg:rounded-[100px]",
          bgColor,
        )}
      >
        <div className="w-full lg:max-w-[1098px] mx-auto flex flex-col gap-8 items-center">
          <h2 className="font-clash text-3xl lg:text-[50px] text-center font-semibold lg:leading-[60px]">
            How To Initiate
          </h2>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-y-16">
            {steps.map((step) => (
              <div key={step.label} className="flex flex-row gap-4 lg:gap-10">
                <step.circle
                  className={cn("w-16 h-16 lg:w-20 lg:h-20 shrink-0", text)}
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

export default HowToInitiate;
