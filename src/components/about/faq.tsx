"use client";
import React from "react";
import { FaqItem } from "@/components/about/faqItem";

const faqData = [
  {
    question: "When can we start our work?",
    answer:
      "There is no need for delay! Take action immediately. Browse and subscribe or send us your request, and we will promptly get in touch with you.",
  },
  {
    question: "How will I track the progress of my project?",
    answer:
      "We utilise various project management tools such as Jira, Notion, GitHub, and others to offer transparent visibility to all stakeholders regarding project progress and developer tasks. These tools enable us to monitor the scope of work, budget, assignments, and ensure alignment with our goals.",
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

export default Faq;
