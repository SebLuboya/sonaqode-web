"use client";
import React from "react";
import { FaqItem } from "@/components/about/faqItem";

const faqData = [
  {
    question: "How do you select your specialists?",
    answer:
      "Our rigorous screening process evaluates candidates technical skills, industry knowledge, and practical experience. This ensures we form teams with diverse capabilities, fostering the well rounded perspective needed to solve complex challenges.",
  },
  {
    question:
      "What happens if a team member needs to be replaced or added mid-project?",
    answer:
      "As your project needs shift, we adapt instantly. We minimise timeline disruptions by promptly adding or replacing team members, ensuring we remain fully aligned with your evolving goals.",
  },
  {
    question: "How experienced are your professionals?",
    answer:
      "Backed by university degrees and a minimum of three years' industry experience, ensuring they can deliver high quality, tailored solutions your business requires.",
  },
  {
    question: "How does the onboarding process work?",
    answer:
      "Simply complete your subscription form, and we will contact you within two hours to initiate the welcome process. In this initial call, we'll discuss your business needs and objectives. We will then shortlist and present a qualified candidate. Once you approve, we'll arrange an interview. If you're satisfied, your new hire can integrate into your workflow immediately, allowing you to delegate tasks and see results from day one.",
  },
  {
    question: "Where is Sonaqode based?",
    answer:
      "Our leadership team is based in London, UK, while most of our senior and mid level engineers operate from Accra, Ghana. We are committed to recruiting top-quality specialists from various countries across the African continent, enabling us to deliver exceptional remote work.",
  },
  {
    question:
      "How can I ensure effective communication with a Developer & Engineer?",
    answer:
      "ou will have direct lines to your dedicated developers, supported by a structured framework of regular check-ins and progress updates. We ensure seamless collaboration through established communication channels and regular sync-ups, using the tools that work best for you including Slack, Teams, Zoom, and Jira.",
  },
  {
    question: "Are your professionals fluent in English?",
    answer:
      "Yes, all our professionals are fluent in English, ensuring clear and effective communication throughout every stage of your project. This proficiency enables seamless collaboration and a thorough understanding of your requirements.",
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
