import React from "react";
import { item } from "@/types";
import { cn } from "@/utils";
import { Accordian } from "@/components/services/accordian";

const KeysAndSkills = ({
  service,
  accent = "bg-sona-lightPurple",
}: {
  service: {
    skillSet: item[];
    keyDeliverables: {
      title: string;
      values: string[];
    }[];
  };
  accent?: string;
}) => {
  return (
    <>
      <section className="flex flex-col items-center gap-8 px-5 pt-8 lg:pt-12">
        <button className="h-[60px] flex items-center justify-center px-10 rounded-full hover:bg-sona-lightBlue hover:text-sona-blue bg-sona-blue text-white duration-150 mt-6">
          Book a consultation
        </button>
      </section>

      <section className="pt-12 lg:pt-16 px-4 lg:px-5">
        <div
          className={cn(
            "flex flex-col lg:flex-row gap-12 w-full max-w-[1260px] min-h-[450px] mx-auto p-0 lg:p-4",
          )}
        >
          <div className="flex-1 flex flex-col items-center">
            <h2 className="font-clash text-3xl lg:text-[40px] text-center font-medium lg:leading-[50px]">
              Skill Set
            </h2>
            <div className="w-full grid grid-cols-1 gap-4 lg:gap-6 mt-8">
              {service.skillSet.map((skill, i) => {
                if (typeof skill === "string") return null;
                return (
                  <Accordian
                    key={skill.title}
                    title={skill.title}
                    values={skill.values}
                    initialOpen={i === 0}
                    className={cn(accent)}
                  />
                );
              })}
            </div>
          </div>
          <div className="flex flex-1 flex-col items-center">
            <h2 className="font-clash text-3xl lg:text-[40px] text-center font-medium lg:leading-[50px]">
              Key Deliverables
            </h2>
            <div className="w-full grid grid-cols-1 gap-4 lg:gap-6 mt-8">
              {service.keyDeliverables.map((deliverable, i) => (
                <Accordian
                  key={deliverable.title}
                  title={deliverable.title}
                  values={deliverable.values}
                  initialOpen={i === 0}
                  className={cn(accent)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default KeysAndSkills;
