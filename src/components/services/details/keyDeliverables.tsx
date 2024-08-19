import React from "react";
import { Accordian } from "@/components/services/accordian";
import { cn } from "@/utils";

const KeyDeliverables = ({
  service,
  accent = "bg-sona-lightPurple",
}: {
  service: {
    keyDeliverables: {
      title: string;
      values: string[];
    }[];
  };
  accent?: string;
}) => {
  return (
    <section className="pt-12 lg:pt-16 px-5">
      <div
        className={cn(
          "relative w-full max-w-[1260px] min-h-[650px] mx-auto pt-16 lg:py-14 p-4 rounded-[50px] lg:rounded-[100px] bg-sona-lightPurple",
          accent,
        )}
      >
        <div className="w-full lg:max-w-[1100px] mx-auto flex flex-col items-center">
          <h2 className="font-clash text-3xl lg:text-[40px] text-center font-medium lg:leading-[50px]">
            Key Deliverables
          </h2>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 mt-14 gap-5 lg:gap-12">
            {service.keyDeliverables.map((deliverable, i) => (
              <Accordian
                key={deliverable.title}
                title={deliverable.title}
                values={deliverable.values}
                initialOpen={i === 0}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default KeyDeliverables;
