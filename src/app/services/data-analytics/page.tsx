import React from "react";
import { Analytics, Mysql, Python } from "@/assets/icons/services";
import { cn } from "@/utils";
import Button from "@/components/misc/button";
import Image from "next/image";
import { DataAnalytics } from "@/assets/images";
import Services from "@/components/services/services";
import AssistanceWith from "@/components/services/assistanceWith";
import HowToInitiate from "@/components/services/howToInitiate";
import Faq from "@/components/about/faq";
import { analyticesData } from "@/data/analyticesData";

export const metadata = {
  title: "Data & Analytics – Sonaqode",
};

const CONSTS = {
  text: "text-sona-pink",
  bg: "bg-sona-lightPink",
  hoverbg: "hover:bg-sona-pink",
};

const assist = [
  "Data driven strategy development tailored to your business needs.",
  "Advanced analytics and predictive modeling.",
  "Data warehouse management.",
  "Data analysis and interpretation.",
  "Domain expertise across various industries.",
  "Statistical modeling and hypothesis testing.",
  "Design and implementation of robust data pipelines.",
  "Data visualisation and dashboard creation.",
  "Data integration and ETL (Extract, Transform, Load) processes.",
  "Data organisation and structuring for optimal efficiency.",
  "Data backup and recovery solutions.",
  "Data integrity and quality management.",
];

const data = analyticesData;

export default function DataAndAnalytics() {
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
                src={Python}
                className="absolute -top-5 left-0 w-20 lg:w-24 h-20 lg:h-24 -rotate-12 object-contain"
                alt="floating_icon"
              />
              <Image
                src={Analytics}
                className="absolute bottom-0 left-1/2 -translate-x-1/2 w-20 lg:w-24 h-20 lg:h-24 object-contain"
                alt="floating_icon"
              />
              <Image
                src={Mysql}
                className="absolute -top-5 right-0 w-20 lg:w-24 h-20 lg:h-24 -rotate-12 object-contain"
                alt="floating_icon"
              />
            </div>
            <div className="flex flex-col gap-1.5 lg:gap-2 justify-center">
              <h2 className="font-clash text-2xl md:text-4xl xl:text-5xl font-semibold">
                Data & Analytics
              </h2>
              <p className="md:text-base xl:text-lg text-sm font-light">
                Leverage the power of your data with our analysts and engineers
                to unlock tangible business value. We deliver advanced analytics
                solutions that process and interpret your data assets,
                illuminating key business dynamics. By transforming projects and
                processes with targeted insights, we enhance operations and
                automate repetitive tasks, allowing your teams to focus on
                strategic growth.
              </p>

              <a href="#services">
                <Button className={cn("mt-2", CONSTS.text, CONSTS.hoverbg)}>
                  See services
                </Button>
              </a>
            </div>
          </div>
          <Image
            src={DataAnalytics}
            className="h-auto w-full max-w-[440px] xl:max-w-[530px] aspect-[550/530] object-cover rounded-3xl lg:rounded-[58px]"
            alt="people"
          />
        </div>
      </section>
      <Services
        data={data}
        sectionTitle="Data & Analytics"
        section="data-analytics"
      />
      <AssistanceWith text={CONSTS.text} bgColor={CONSTS.bg} data={assist} />
      <HowToInitiate text={CONSTS.text} fill="#FF728D" bgColor={CONSTS.bg} />
      <Faq />
    </main>
  );
}
