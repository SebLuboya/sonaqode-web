import React from "react";
import { Accordian } from "@/components/services/accordian";
import { cn } from "@/utils";
import { item } from "@/types";

const SkillSets = ({
  service,
  accent = "bg-sona-lightPurple",
}: {
  service: {
    skillSet: item[];
  };
  accent?: string;
}) => {
  return (
    <section className="pt-12 lg:pt-16 px-5">
      <div
        className={cn(
          "relative w-full max-w-[1260px] min-h-[450px] mx-auto pt-16 lg:py-14 p-4 rounded-[50px] lg:rounded-[100px] bg-sona-lightPurple",
          accent,
        )}
      >
        <div className="w-full lg:max-w-[1100px] mx-auto flex flex-col items-center">
          <h2 className="font-clash text-3xl lg:text-[40px] text-center font-medium lg:leading-[50px]">
            Skill Set
          </h2>
          <div className="w-full grid grid-cols-1 mt-14 gap-4 lg:gap-6">
            {service.skillSet.map((skill, i) => {
              if (typeof skill === "string") return null;
              return (
                <Accordian
                  key={skill.title}
                  title={skill.title}
                  values={skill.values}
                  initialOpen={i === 0}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
export default SkillSets;
