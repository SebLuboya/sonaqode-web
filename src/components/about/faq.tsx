"use client";
import MinusCircle from "@/assets/icons/glyphs/MinusCircle";
import PlusCircle from "@/assets/icons/glyphs/PlusCircle";
import { cn } from "@/utils";
import { motion } from "framer-motion";
import React, { useState } from "react";

const faqData = [
  {
    question: "When can we start our work?",
    answer:
      "There is no need for delay! Take action immediately. Browse and subscribe or send us your request, and we will promptly get in touch with you.",
  },
  {
    question: "How will I track the progress of my project?",
    answer:
      "We utilize various project management tools such as Jira, Notion, GitHub, and others to offer transparent visibility to all stakeholders regarding project progress and developer tasks. These tools enable us to monitor the scope of work, budget, assignments, and ensure alignment with our goals.",
  },
  {
    question: "Where is SonaQode based?",
    answer:
      "Our headquarters are located in London, UK, while a majority of our developers and engineers operate from Accra, Ghana. We are committed to recruiting top-notch specialists from various countries across the African continent, enabling us to deliver exceptional remote work.",
  },
  {
    question: "How do you safeguard my intellectual property?",
    answer:
      "We guarantee comprehensive intellectual property (IP) protection through our Non-Disclosure Agreements (NDAs) and Master Service Agreements (MSAs). As a software development service provider, we operate on a work-for-hire basis, ensuring that our clients retain complete legal ownership of all intellectual property",
  },
  {
    question: "Can you tell me more about your hiring process?",
    answer: "",
  },
];

const Faq = ({ data = faqData }) => {
  return (
    <section className="py-16 lg:py-28 px-5">
      <div className="relative w-full max-w-[1260px] flex flex-col lg:gap-10 mx-auto pt-12 lg:py-14 p-4 rounded-[50px] lg:rounded-[100px] bg-sona-lightBlue">
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
          {answer !== "" ? (
            <p className="text-sm lg:text-base font-light pt-1.5 lg:pt-2">
              {answer}
            </p>
          ) : (
            <div className="space-y-2 text-sm lg:text-base font-light pt-1.5 lg:pt-2">
              <p>
                CV review: We assess candidates&apos; qualifications and invite
                those with relevant skills for an interview with a recruiter.
              </p>
              <p>
                English test: Language proficiency is crucial for our work, so
                we conduct an English assessment.
              </p>
              <p>
                Interview & skill evaluation: Candidates undergo an in-person
                interview with our project manager, who evaluates their hard and
                soft skills.
              </p>
              <p>
                Reference check: After successful completion of previous stages,
                we request at least two to three professional references from
                the candidate.
              </p>
              <p>
                Final interview: A final interview with our CEO is conducted. If
                both parties are satisfied, the candidate is offered a full team
                membership.
              </p>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default Faq;
