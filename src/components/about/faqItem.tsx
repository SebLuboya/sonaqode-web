"use client";
import React, { useState } from "react";
import { cn } from "@/utils";
import MinusCircle from "@/assets/icons/glyphs/MinusCircle";
import PlusCircle from "@/assets/icons/glyphs/PlusCircle";
import { motion } from "framer-motion";

export const FaqItem = ({
  question = "When can we start our work?",
  answer = `There is no need for delay! Take action immediately. Browse and
            subscribe or send us your request, and we will promptly get in touch
            with you.`,
}) => {
  const [isOpen, setisOpen] = useState(false);

  return (
    <div
      onClick={() => setisOpen((prev) => !prev)}
      className={cn(
        "flex flex-row items-start gap-5 lg:gap-6 p-6 lg:p-8 rounded-[30px] cursor-pointer duration-150",
        isOpen && "bg-white",
        isOpen ? "py-6 lg:py-8" : "py-2 lg:py-4",
      )}
    >
      <button onClick={() => setisOpen((prev) => !prev)}>
        {isOpen ? (
          <MinusCircle className="w-5 h-5 shrink-0 text-[#98A2B3] mt-1" />
        ) : (
          <PlusCircle className="w-5 h-5 shrink-0 text-[#98A2B3] mt-1" />
        )}
      </button>
      <div className="flex flex-col items-start">
        <p className="font-medium text-base lg:text-lg">{question}</p>
        <motion.div
          initial={{ height: 0 }}
          animate={{ height: isOpen ? "auto" : 0 }}
          className="overflow-clip"
        >
          <p className="text-sm lg:text-base font-light pt-1.5 lg:pt-2">
            {answer}
          </p>
        </motion.div>
      </div>
    </div>
  );
};
