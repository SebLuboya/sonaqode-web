"use client";
import MinusCircle from "@/assets/icons/glyphs/MinusCircle";
import PlusCircle from "@/assets/icons/glyphs/PlusCircle";
import { cn } from "@/utils";
import { motion } from "framer-motion";
import React, { useState } from "react";

const data = [
  {
    question: "When can we start our work?",
    answers:
      "There is no need for delay! Take action immediately. Browse and subscribe or send us your request, and we will promptly get in touch with you.",
  },
  {
    question: "How will I track the progress of my project?",
    answers: "",
  },
  {
    question: "Where is SonaQode based?",
    answers: "",
  },
  {
    question: "How do you safeguard my intellectual property?",
    answers: "",
  },
  {
    question: "Can you tell me more about your hiring process?",
    answers: "",
  },
];

const Faq = () => {
  return (
    <section className="py-16 lg:py-28 px-5">
      <div className="relative w-full max-w-[1210px] flex flex-col lg:gap-10 mx-auto pt-12 lg:py-14 p-4 rounded-[50px] lg:rounded-[100px] bg-sona-lightBlue">
        <div className="w-full lg:max-w-[930px] mx-auto flex flex-col gap-8 items-center">
          <h2 className="font-clash text-3xl lg:text-[50px] text-center font-semibold lg:leading-[60px]">
            Frequently Asked Questions
          </h2>
          <div className="w-full flex flex-col gap-4">
            {data.map((item) => (
              <FaqItem key={item.question} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const FaqItem = ({
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

export default Faq;
