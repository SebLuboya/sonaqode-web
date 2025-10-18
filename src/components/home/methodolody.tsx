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
    desc: "Our subscription based model provides on-demand access to expert developers and engineers who deliver tangible results within a fixed monthly hours package. Benefit from the flexibility and convenience of dedicated team members, supported by consistent communication.",
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
        desc: "We will schedule a call to understand your requirements, align on expectations, and start the process of matching you with the ideal candidate.",
        circle: Pink50,
      },
      {
        label: "Cooperate",
        desc: "Once you've subscribed we'll present you with shortlisted pre-vetted candidates. Once you've made your selection, we'll arrange an interview.",
        circle: Pink75,
      },
      {
        label: "Commence",
        desc: "With your candidate chosen, we'll schedule a call to onboard your new team member so you can start delegating effectively immediately. We then provide regular check-ins to ensure seamless progress and continuously align on delivering maximum value.",
        circle: Pink100,
      },
    ],
  },
  {
    label: "Scrum Team",
    subLabel: "Agile Methodology",
    desc: "Partner with us for bespoke development, from ideation and prototyping to launch and maintenance. Our agile process utilises two-week sprints for projects requiring iteration, ensuring a working product increment is delivered consistently, enabling rapid progress and continuous feedback.",
    bgcolor: "bg-sona-lightPurple",
    btnClass: "hover:bg-sona-purple text-sona-purple",
    btnLable: "Contact Us",
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
        desc: "Our partnership begins with a holistic analysis of your vision to clarify your goals, pinpoint challenges, and assess resource requirements.",
        circle: Purple20,
      },
      {
        label: "Discovery",
        desc: "We collaborate with you to transform your idea into an actionable strategy. By defining precise technical and strategic solutions, we unlock significant business and user value, maximising your investment.",
        circle: Purple40,
      },
      {
        label: "Proposal",
        desc: "Following a thorough analysis of your business needs, we will deliver a detailed proposal for your review. It clearly defines the value proposition, project scope, timelines, and terms, and includes a risk assessment with mitigation strategies.",
        circle: Purple60,
      },
      {
        label: "Development",
        desc: "After aligning on all project details and formalising our commitment with an MSA, we assemble your dedicated team to start development. This stage turns your concept into a working product, driven by a focus on high quality coding and comprehensive testing.",
        circle: Purple80,
      },
      {
        label: "Support",
        desc: "Our commitment extends long after your product launch. We provide post deployment support to maintain and enhance your software, ensuring its long-term success. Our experts conduct regular health assessments to guarantee reliability and adapt the product to your evolving needs.",
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
                <Link href={"/contact"}>
                  <button
                    className={cn(
                      "w-[190px] h-14 bg-white hover:text-white duration-75 rounded-full",
                      section.btnClass,
                    )}
                  >
                    Contact Us
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
