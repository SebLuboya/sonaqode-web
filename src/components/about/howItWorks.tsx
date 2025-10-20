import React from "react";
import CircleLoader from "../misc/CircleLoader";

const steps = [
  {
    label: "Initiation",
    desc: "We start with an introductory call to deeply understand of your organisation. We then facilitate brainstorming sessions to pinpoint your exact staffing requirements, cultural ethos, and strategic expectations. This thorough discovery process is the foundation for accurately matching you with the right professionals to address your challenges.",
  },
  {
    label: "Discovery",
    desc: "Following the initial consultation, we co-create a practical, well planned strategy for you. This blueprint details the specific staffing solutions, resources, and competencies required to efficiently deliver your desired results.",
  },
  {
    label: "Application",
    desc: "Here, we focus on identifying the ideal candidate for you. Through a rigorous vetting process, we shortlist professionals who are not only a perfect fit for your team's culture but are also poised to deliver immediate, positive impact and achieve your outlined goals.",
  },
  {
    label: "Appraisal",
    desc: "After you select your preferred candidate, we facilitate the final introduction and then support their seamless integration into your team, allowing for a swift transition to productive task delegation. Our partnership continues with a commitment to your success. Through regular performance reviews, we assess the achievement of your goals, gather your insights, and ensure every aspect of the engagement is functioning optimally.",
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
            {steps.map((step, idx) => (
              <div key={step.label} className="flex flex-row gap-4 lg:gap-10">
                <CircleLoader
                  outerColor="hsla(203, 84%, 35%, 1)"
                  innerColor="#fff"
                  percentage={(idx + 1) * 25}
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
