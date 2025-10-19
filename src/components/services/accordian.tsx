"use client";
import React, { useState } from "react";
import { cn } from "@/utils";
import MinusCircle from "@/assets/icons/glyphs/MinusCircle";
import PlusCircle from "@/assets/icons/glyphs/PlusCircle";
import { motion } from "motion/react";
import { item } from "@/types";

export const Accordian = ({
  title,
  values,
  initialOpen = false,
  className,
}: {
  title: string;
  values: item[];
  initialOpen?: boolean;
  className?: string;
}) => {
  const [isOpen, setIsOpen] = useState(initialOpen);

  return (
    <div
      onClick={() => setIsOpen((prev) => !prev)}
      className={cn(
        "flex flex-row items-start gap-5 lg:gap-6 p-6 lg:p-8 rounded-[30px] cursor-pointer duration-150",
        isOpen && "bg-white",
        className,
      )}
    >
      <button onClick={() => setIsOpen((prev) => !prev)}>
        {isOpen ? (
          <MinusCircle className="w-5 h-5 shrink-0 text-[#98A2B3] mt-1" />
        ) : (
          <PlusCircle className="w-5 h-5 shrink-0 text-[#98A2B3] mt-1" />
        )}
      </button>
      <div className="flex flex-col items-start">
        <p className="font-medium text-base lg:text-lg">{title}</p>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          className="overflow-clip"
        >
          <ul className="flex flex-col gap-2 list-disc ml-4 text-[#475467]">
            {values.map((value, index) => {
              if (typeof value === "string") {
                const [label, desc] = value.split(":");
                return (
                  <li key={index} className="text-sm lg:text-base font-light">
                    {value.includes(":") ? (
                      <>
                        <span className="font-medium">{label}</span>:{" "}
                        {desc.trim()}
                      </>
                    ) : (
                      value
                    )}
                  </li>
                );
              } else {
                return (
                  <li
                    key={index}
                    className="text-sm lg:text-base font-light space-y-2"
                  >
                    <span className="font-medium">{value.title}</span>
                    <ul className="flex flex-col gap-2 list-disc ml-4">
                      {value.values.map((innerValue, index) => {
                        if (typeof innerValue !== "string") return null;

                        const [label, desc] = innerValue.split(":");
                        return (
                          <li
                            key={index}
                            className="text-sm lg:text-base font-light"
                          >
                            {(innerValue as string).includes(":") ? (
                              <>
                                <span className="font-medium">{label}</span>:{" "}
                                {desc.trim()}
                              </>
                            ) : (
                              innerValue
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </li>
                );
              }
            })}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};
