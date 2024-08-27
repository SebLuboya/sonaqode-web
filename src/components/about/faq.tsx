"use client";
import React from "react";
import { FaqItem } from "@/components/about/faqItem";

const faqData = [
  {
    question: "How do you select your specialists?",
    answer:
      "We meticulously screen candidates, assessing their industry expertise, experience, and technical proficiency. This ensures our team is composed of individuals with diverse skill sets, fostering a well-rounded approach.",
  },
  {
    question:
      "What happens if a team member needs to be replaced or added mid-project?",
    answer:
      "We recognise that project needs can shift. To accommodate changes, we promptly adjust our team by adding or replacing members, minimising disruptions to your project timeline. Our commitment is to remain adaptable and responsive to your evolving requirements.",
  },
  {
    question: "How do we assure privacy and confidentiality?",
    answer:
      "We prioritise data security and privacy. We employ robust data protection measures, including encryption, secure authentication protocols, and conduct security audits and compliance checks to ensure adherence to industry standards like GDPR & HIPAA. We are open to signing a non disclosure agreement (NDA) with you that legally binds us to hold all the information, including any proprietary or project-related information exchanged during sales inquiries or over the course of our contract, in strict confidence.",
  },
  {
    question: "How does the onboarding process work?",
    answer:
      "Our onboarding process is straightforward. Simply complete the subscription form, and we will contact you within a couple of hours to begin the welcome process. During this process, we will introduce your dedicated professional and establish a roadmap for delivering outstanding results.",
  },
  {
    question: "Where is Sonaqode based?",
    answer:
      "Our leadership team is based in London, UK, while most of our senior and mid level engineers operate from Accra, Ghana. We are committed to recruiting top-quality specialists from various countries across the African continent, enabling us to deliver exceptional remote work.",
  },
  {
    question:
      "How can I ensure effective communication with a Developer/Engineer?",
    answer:
      "Maintaining clear and effective communication is crucial for the success of any project. You will have direct communication channels with the dedicated developers working on your project. We establish strong communication channels and regular check ins from the outset to ensure this. Our toolkit for effective communication usually includes tools Skype, Teams, Email, Zoom, Jira, Confluence, and Slack.",
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
