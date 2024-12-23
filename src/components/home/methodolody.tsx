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
import Link from "next/link";

const sections = [
  {
    label: "Monthly Subscription",
    subLabel: "Hourly Based, Ongoing Contract",
    desc: "Enjoy our subscription based, on-demand service that connects you with developers and engineers who deliver genuine results within a set monthly package of hours. Experience flexibility and convenience through regular communication with assigned team members and project managers.",
    bgcolor: "bg-sona-lightPink",
    btnClass: "hover:bg-sona-pink text-sona-pink",
    btnLable: "Subscribe",
    features: [
      {
        icon: Project,
        label: "Size of the project: Any, long term support",
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
        label: "Communication: Designated Specialist",
        color: "bg-[#93FF98]",
      },
    ],
    benefits: [
      {
        label: "Subscribe",
        desc: "Select the service and package that best suits your needs. Follow our quick payment process by providing your company details.",
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
  {
    label: "Scrum Team",
    subLabel: "Agile Methodology",
    desc: "As your dedicated partner, we fulfil all your bespoke business needs, from ideation and prototyping to launch and ongoing maintenance. For bespoke projects requiring continuous iterations, we develop in two week sprints. With each sprint, we deliver a finished working product increment.",
    bgcolor: "bg-sona-lightPurple",
    btnClass: "hover:bg-sona-purple text-sona-purple",
    btnLable: "Get a Quote",
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
        desc: "Collaborating with you to shape your idea into a well planned and practical strategy, we unlock both business and user value for an optimal investment, outlining technical and strategic solutions.",
        circle: Purple40,
      },
      {
        label: "Proposal",
        desc: "After thoroughly understanding your business needs, we finalise our proposal and send it to you for review. It outlines the main value proposition, details the scope, timelines, and the terms and conditions. Additionally, we evaluate potential risks and create a mitigation plan.",
        circle: Purple60,
      },
      {
        label: "Development",
        desc: "Once all project specifics are agreed upon, we formalise our commitment by signing an MSA. Now, we assemble a robust delivery team and begin building your product. This phase focuses on coding, rigorous testing, and transforming your concept into a tangible reality.",
        circle: Purple80,
      },
      {
        label: "Support",
        desc: "Our relationship with you doesn't end once your product is complete. We provide post deployment technical support to enhance and maintain your software. To guarantee long term reliability, our technical experts periodically assess the health of your product and other key functionalities, ensuring it continues to meet your changing requirements.",
        circle: Purple100,
      },
    ],
  },
];

const Methodolody = () => {
  return (
    <section className="flex flex-col items-center gap-8 pt-16 lg:pt-28 px-5">
      <h2 className="font-clash text-center text-[50px] font-semibold leading-[60px]">
        Engagement Models
      </h2>
      <div className="relative w-full lg:max-w-[1260px] min-h-[650px] mx-auto flex flex-col lg:flex-row gap-10">
        {sections.map((section, idx) => (
          <div key={section.label} className="flex flex-1 flex-col gap-20">
            <div
              className={cn(
                "flex flex-col items-center p-4 lg:p-9 pt-10 lg:py-14 gap-4 lg:gap-7 rounded-[50px] lg:rounded-[100px]",
                section.bgcolor,
              )}
            >
              <div className="flex flex-col items-center gap-1 min-h-[200px]">
                <h2 className="font-clash text-3xl lg:text-[40px] font-medium leading-[30px] text-center">
                  {section.label}
                </h2>
                <p className="text-sm lg:text-lg">{section.subLabel}</p>
                <p className="text-sm lg:text-base text-center text-balance font-light mt-3">
                  {section.desc}
                </p>
              </div>
              <div className="w-full flex flex-col bg-white p-4 lg:p-10 pt-7 lg:pr-7 lg:pb-7 gap-5 rounded-3xl lg:rounded-[70px]">
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
                      <Image
                        src={feature.icon}
                        className="w-8 h-8"
                        alt="icon"
                      />
                    </div>

                    <p className="font-light text-sm lg:text-base">
                      <span className="font-semibold">
                        {feature.label.split(":")[0]}
                      </span>
                      :{feature.label.split(":")[1]}
                    </p>
                  </div>
                ))}
                <p
                  className={cn(
                    "text-sm lg:text-base text-center font-medium",
                    idx === 0 && "opacity-0",
                  )}
                >
                  We’re open to signing an NDA, if needed.
                </p>
              </div>
              {idx === 1 ? (
                <Link href={"/get-a-quote"}>
                  <button
                    className={cn(
                      "w-[190px] h-14 bg-white hover:text-white duration-75 rounded-full",
                      section.btnClass,
                    )}
                  >
                    Get a Quote
                  </button>
                </Link>
              ) : (
                <a href={"#our-services"}>
                  <button
                    className={cn(
                      "w-[190px] h-14 bg-white hover:text-white duration-75 rounded-full",
                      section.btnClass,
                    )}
                  >
                    Subscribe
                  </button>
                </a>
              )}
            </div>
            <div className="relative w-full hidden lg:block">
              <h2
                className={cn(
                  "absolute font-clash text-center text-[50px] w-full font-semibold leading-[60px] top-1/2 -translate-y-1/2 right-1/2 translate-x-[100%]",
                  idx === 1 && "hidden",
                )}
              >
                Onboarding Steps
              </h2>
            </div>
            <div className="flex flex-col">
              {section.benefits.map((benefit, i) => (
                <div
                  key={benefit.label}
                  className="flex flex-row items-center gap-5  bg-white rounded-[40px]"
                >
                  <div className="w-16 lg:w-20 h-full shrink-0 flex flex-col gap-3 items-center justify-center">
                    <div
                      className={cn(
                        "w-0.5 flex-1 flex bg-gray-300",
                        i === 0 && "opacity-0",
                      )}
                    ></div>
                    <Image
                      src={benefit.circle}
                      className="w-16 lg:w-20 h-16 lg:h-20 shrink-0"
                      alt="icon"
                    />
                    <div
                      className={cn(
                        "w-0.5 flex-1 flex bg-gray-300",
                        i === section.benefits.length - 1 && "opacity-0",
                      )}
                    ></div>
                  </div>
                  <div
                    className={cn(
                      idx === 0 ? "py-5" : "py-10",
                      i === 0 && "pt-0",
                    )}
                  >
                    <h3 className="text-base lg:text-xl font-semibold mb-1">
                      {benefit.label}
                    </h3>
                    <p className="text-sm lg:text-base text-gray-600">
                      {benefit.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Methodolody;
