import React from "react";
import { cn } from "@/utils";
import Checkicon from "@/assets/icons/glyphs/Checkicon";

const AssistanceWith = ({
  text = "text-sona-blue",
  bgColor = "bg-sona-lightBlue",
  data = [""],
}) => {
  return (
    <section className="pt-16 lg:pt-28 px-5">
      <div
        className={cn(
          "relative w-full max-w-[1260px] flex flex-col lg:gap-10 mx-auto py-10 lg:py-14 px-4 rounded-[50px] lg:rounded-[100px]",
          bgColor,
        )}
      >
        <div className="w-full lg:max-w-[800px] mx-auto flex flex-col gap-8 items-center">
          <h2 className="font-clash text-balance lg:text-nowrap text-2xl lg:text-[50px] text-center font-semibold lg:leading-[60px]">
            Our experts can assist you with
          </h2>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-x-10 gap-y-6 lg:gap-y-4 pl-2 lg:px-0">
            {data.map((item) => (
              <div key={item} className="flex flex-row items-center gap-4">
                <Checkicon
                  className={cn("w-5 lg:w-6 h-5 lg:h-6 shrink-0", text)}
                />
                <p className="font-light text-sm lg:text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AssistanceWith;
