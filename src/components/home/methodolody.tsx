import {
  Admin,
  Approach,
  Client,
  Project,
  Schedule,
  Transparent,
} from "@/assets/icons";
import {
  Pink100,
  Pink25,
  Pink50,
  Pink75,
  Purple100,
  Purple20,
  Purple40,
  Purple60,
  Purple80,
} from "@/assets/icons/circles";
import { cn } from "@/utils";
import Image from "next/image";
import React from "react";

const sections = [
  {
    label: "Scrum Team",
    subLabel: "Agile Methodology",
    desc: "For bespoke projects requiring continuous iterations, development is conducted in two-week sprints. With each sprint, we deliver tangible progress updates, enabling ongoing monitoring of the project's advancement.",
    bgcolor: "bg-sona-lightPurple",
    btnClass: "hover:bg-sona-purple text-sona-purple",

    features: [
      {
        icon: Project,
        label: "Size of the project: Medium and Large",
        color: "bg-[#DDF0FF]",
      },
      {
        icon: Schedule,
        label: "Scope: Evolving",
        color: "bg-[#FFB8B3]",
      },
      {
        icon: Approach,
        label: "Approach: Value driven",
        color: "bg-[#FFE1B5]",
      },
      {
        icon: Client,
        label: "Client Control: Full",
        color: "bg-[#BBCED7]",
      },
      {
        icon: Admin,
        label: "Flexibility: High",
        color: "bg-[#9AA9FF]",
      },
      {
        icon: Transparent,
        label: "Communication: Designated Project Manager",
        color: "bg-[#93FF98]",
      },
    ],
    benefits: [
      {
        label: "Pre-engagement",
        desc: "Laying the groundwork for a strong partnership, we conduct a holistic analysis of your vision, uncovering goals, challenges, and resource considerations.",
        circle: Purple20,
      },
      {
        label: "Discovery",
        desc: "Collaborating with you to shape your idea into a well-planned and practical strategy, we unlock both business and user value for an optimal investment, outlining technical and strategic solutions.",
        circle: Purple40,
      },
      {
        label: "Proposal",
        desc: "After thoroughly understanding your business needs, we finalise our proposal and send it to you for review. It outlines the main value proposition, details the scope, timelines, and the terms and conditions. Additionally, we evaluate potential risks and create a mitigation plan.",
        circle: Purple60,
      },
      {
        label: "Development",
        desc: "Once all project specifics are agreed upon, we formalize our commitment by signing an MSA. Now, we assemble a robust delivery team and begin building your product. This phase focuses on coding, rigorous testing, and transforming your concept into a tangible reality.",
        circle: Purple80,
      },
      {
        label: "Support",
        desc: "Our relationship with you doesn't end once your product is complete. We provide post-deployment technical support to enhance and maintain your software. To guarantee long-term reliability, our technical experts periodically assess the health of your product, evaluating system performance, database integration, and other key functionalities, ensuring it continues to meet your changing requirements.",
        circle: Purple100,
      },
    ],
  },
  {
    label: "Monthly Subscription",
    subLabel: "Hourly Based, Ongoing Contract",
    desc: "A subscription-based, on-demand service connects you with developers and engineers who achieve genuine results within a set monthly package of hours, ensuring flexibility and convenience through regular communication with assigned team members and project managers.",
    bgcolor: "bg-sona-lightPink",
    btnClass: "hover:bg-sona-pink text-sona-pink",
    features: [
      {
        icon: Project,
        label: "Size of the project: Any, long-term support",
        color: "bg-[#DDF0FF]",
      },
      {
        icon: Schedule,
        label: "Scope: Flexible, within allocated hours per month",
        color: "bg-[#FFB8B3]",
      },
      {
        icon: Approach,
        label: "Approach: Result driven",
        color: "bg-[#FFE1B5]",
      },
      {
        icon: Client,
        label: "Client Control: Full",
        color: "bg-[#BBCED7]",
      },
      {
        icon: Admin,
        label: "Flexibility: High",
        color: "bg-[#9AA9FF]",
      },
      {
        icon: Transparent,
        label: "Communication: Designated Project Manager",
        color: "bg-[#93FF98]",
      },
    ],
    benefits: [
      {
        label: "Subscribe",
        desc: "Select the service and package that best suit your needs. Follow our quick payment process by providing your company details.",
        circle: Pink25,
      },
      {
        label: "Engage",
        desc: "We will schedule a call to ascertain your requirements and expectations and introduce your assigned employee and dedicated manager.",
        circle: Pink50,
      },
      {
        label: "Cooperate",
        desc: "Integrate your newly assigned team into your in-house team. Familiarise them with company practices, then assign tasks to unleash their capabilities.",
        circle: Pink75,
      },
      {
        label: "Commence",
        desc: "Breathe, your ambitious onboarded team embodies an engineering ethos that embraces adaptability, drives continual improvement, and delivers unparalleled value.",
        circle: Pink100,
      },
    ],
  },
];

const Methodolody = () => {
  return (
    <section className="pt-28">
      <div className="relative w-full max-w-[1210px] min-h-[650px] mx-auto flex flex-row gap-10">
        {sections.map((section) => (
          <div
            key={section.label}
            className={cn(
              "flex flex-1 flex-col items-center p-9 py-14 gap-7 rounded-[100px]",
              section.bgcolor,
            )}
          >
            <div className="flex flex-col items-center gap-1 min-h-[200px]">
              <h2 className="font-clash text-[40px] font-medium leading-[30px]">
                {section.label}
              </h2>
              <p className="text-lg">{section.subLabel}</p>
              <p className="text-center text-balance font-light mt-3">
                {section.desc}
              </p>
            </div>
            <div className="w-full flex flex-col bg-white p-10 pr-7 pb-7 gap-5 rounded-[70px]">
              {section.features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-3 bg-white"
                >
                  <div
                    className={cn(
                      "w-10 h-10 rounded-full shrink-0 flex items-center justify-center",
                      feature.color,
                    )}
                  >
                    <Image src={feature.icon} className="w-8 h-8" alt="icon" />
                  </div>

                  <p className="font-light">
                    <span className="font-semibold">
                      {feature.label.split(":")[0]}
                    </span>
                    :{feature.label.split(":")[1]}
                  </p>
                </div>
              ))}
              <p className="text-center font-medium">
                We sign NDA for all our projects
              </p>
            </div>
            <button
              className={cn(
                "w-[190px] h-14 bg-white hover:text-white duration-75 rounded-full",
                section.btnClass,
              )}
            >
              Subscribe
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Methodolody;