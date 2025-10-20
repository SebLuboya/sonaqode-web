import React from "react";
import Image from "next/image";
import { SoftwareDevelopment } from "@/assets/images";
import Button from "@/components/misc/button";
import HowToInitiate from "@/components/services/howToInitiate";
import { cn } from "@/utils";
import AssistanceWith from "@/components/services/assistanceWith";
import Faq from "@/components/about/faq";
import { CurlyBrackets, Js, ManSocialMedia } from "@/assets/icons/services";
import Services from "@/components/services/services";
import { softwareData } from "@/data/softwareData";

export const metadata = {
  title: "Software Development – Sonaqode",
};

const CONSTS = {
  text: "text-sona-purple",
  fill: "fill-sona-purple",
  bg: "bg-sona-lightPurple",
  hoverbg: "hover:bg-sona-purple",
};

const assist = [
  "System Analysis and Design",
  "Database Management",
  "Bug Fixing",
  "Software Updates and Patches",
  "Automated, Manual and Integration testing",
  "Prototyping",
  "Security Audits",
  "Saas Development",
  "API Integration",
  "Maintenance and Support",
  "Software Integration",
  "Responsive Website Design",
  "E-commerce Solutions",
  "B2B Portal Development",
  "MVP Development",
  "A/B testing",
];

const data = softwareData;

export default function SoftwareDevelopmentPage() {
  return (
    <main className="pt-4 lg:pt-8 pb-20 lg:pb-24">
      <section className="flex flex-col items-end w-full px-6">
        <div className="h-20 md:h-24 lg:h-28 shrink-0 mb-6 lg:mb-6"></div>
        <div
          className={cn(
            "relative w-full max-w-[1260px] flex flex-col items-center lg:items-stretch lg:flex-row gap-6 lg:gap-10 mx-auto py-12 pb-5 lg:py-14 px-4 lg:px-14 rounded-[50px] lg:rounded-[100px]",
            CONSTS.bg,
          )}
        >
          <div className="flex flex-1 flex-col gap-2 justify-between">
            <div className="flex flex-1 relative min-h-[140px] lg:]min-h-[180px]">
              <Image
                src={CurlyBrackets}
                className="absolute -top-5 left-0 w-20 lg:w-24 h-20 lg:h-24 -rotate-12 object-contain"
                alt="floating_icon"
              />
              <Image
                src={Js}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 lg:w-24 h-20 lg:h-24 object-contain"
                alt="floating_icon"
              />
              <Image
                src={ManSocialMedia}
                className="absolute -top-5 right-0 w-20 lg:w-24 h-20 lg:h-24 -rotate-12 object-contain"
                alt="floating_icon"
              />
            </div>
            <div className="flex flex-col gap-1.5 lg:gap-2 justify-center">
              <h2 className="font-clash text-2xl md:text-4xl xl:text-5xl font-semibold">
                Software Development
              </h2>
              <p className="md:text-base xl:text-lg text-sm font-light">
                Connect with our skilled tech specialists to accelerate your
                objectives. Whether you need to customise an existing platform,
                develop prototype applications, or implement complex technology
                solutions, our expert team delivers rapid, reliable results.
                Proficient in top programming languages, we adapt to your
                business needs to tackle complexity, meet your requirements, and
                bring your vision to life.
              </p>
              <a href="#services">
                <Button className={cn("mt-2", CONSTS.text, CONSTS.hoverbg)}>
                  See services
                </Button>
              </a>
            </div>
          </div>
          <Image
            src={SoftwareDevelopment}
            className="h-auto w-full max-w-[440px] xl:max-w-[530px] aspect-[550/530] object-cover rounded-3xl lg:rounded-[58px]"
            alt="people"
          />
        </div>
      </section>
      <Services
        data={data}
        sectionTitle="Software Development"
        section="software-development"
      />
      <AssistanceWith text={CONSTS.text} bgColor={CONSTS.bg} data={assist} />
      <HowToInitiate text={CONSTS.text} fill="#A855F7" bgColor={CONSTS.bg} />
      <Faq />
    </main>
  );
}
