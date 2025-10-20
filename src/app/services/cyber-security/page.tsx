import React from "react";
import { Lock, PoliceBadge, Protect } from "@/assets/icons/services";
import { cn } from "@/utils";
import Button from "@/components/misc/button";
import Image from "next/image";
import { CyberSecurity } from "@/assets/images";
import Services from "@/components/services/services";
import AssistanceWith from "@/components/services/assistanceWith";
import HowToInitiate from "@/components/services/howToInitiate";
import Faq from "@/components/about/faq";

export const metadata = {
  title: "Cyber Security – Sonaqode",
};

const CONSTS = {
  text: "text-sona-green",
  fill: "fill-sona-green",
  bg: "bg-sona-lightGreen",
  hoverbg: "hover:bg-sona-green",
};

const assist = [
  "Thorough security assessments and code reviews.",
  "Compliance assurance for industry specific standards.",
  "Vulnerability testing and penetration testing.",
  "Auditing and reporting.",
  "Ongoing monitoring and support for application security.",
  "Security infrastructure design and deployment.",
  "Data protection and encryption mechanisms.",
  "Security awareness training for employees.",
  "Implementation of secure coding practices and industry best practices.",
  "Incident response planning and disaster recovery strategies.",
  "Design and implementation of robust security architectures for cloud environments.",
  "Comprehensive security solutions tailored to your organisation's needs.",
];

export default function CyberSecurityPage() {
  return (
    <main className="pt-4 lg:pt-8 pb-20 lg:pb-24">
      <section className="flex flex-col items-end w-full px-6">
        <div className="h-20 md:h-24 lg:h-28 shrink-0 mb-6 lg:mb-6"></div>
        <div
          className={cn(
            "relative w-full max-w-[1260px] flex flex-col lg:flex-row gap-6 lg:gap-10 mx-auto py-12 pb-5 lg:py-14 px-4 lg:px-14 rounded-[50px] lg:rounded-[100px]",
            CONSTS.bg,
          )}
        >
          <div className="flex flex-1 flex-col justify-between">
            <div className="flex flex-1 relative min-h-[140px] lg:]min-h-[180px]">
              <Image
                src={PoliceBadge}
                className="absolute -top-5 left-0 w-20 lg:w-24 h-20 lg:h-24 -rotate-12 object-contain"
                alt="floating_icon"
              />
              <Image
                src={Protect}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 lg:w-24 h-20 lg:h-24 object-contain"
                alt="floating_icon"
              />
              <Image
                src={Lock}
                className="absolute -top-5 right-0 w-20 lg:w-24 h-20 lg:h-24 -rotate-12 object-contain"
                alt="floating_icon"
              />
            </div>
            <div className="flex flex-col gap-1.5 lg:gap-2 justify-center">
              <h2 className="font-clash text-2xl md:text-4xl xl:text-5xl font-semibold">
                Cyber Security
              </h2>
              <p className="md:text-base xl:text-lg text-sm font-light">
                Safeguard your digital assets with dedicated experts poised to
                proactively identify and respond to threats. Fortify your
                defense with layers of security measures integrated at every
                stage of your initiatives. From security analysts, cloud
                specialists, and pen testers who effectively liaise with your
                team to develop and implement comprehensive security strategies
                aligned with your organisation&apos;s goals.
              </p>
              <a href="#services">
                <Button className={cn("mt-2", CONSTS.text, CONSTS.hoverbg)}>
                  See services
                </Button>
              </a>
            </div>
          </div>
          <Image
            src={CyberSecurity}
            className="h-auto w-full max-w-[440px] xl:max-w-[530px] aspect-[550/530] object-cover rounded-3xl lg:rounded-[58px]"
            alt="people"
          />
        </div>
      </section>
      <Services
        data={[]}
        sectionTitle="Cyber Security"
        section="cyber-security"
      />
      <AssistanceWith text={CONSTS.text} bgColor={CONSTS.bg} data={assist} />
      <HowToInitiate text={CONSTS.text} fill="#FF728D" bgColor={CONSTS.bg} />
      <Faq />
    </main>
  );
}
