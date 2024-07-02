import React from "react";
import Image from "next/image";
import { SoftwareDevelopment } from "@/assets/images";
import Button from "@/components/misc/button";
import HowToInitiate from "@/components/services/howToInitiate";
import { cn } from "@/utils";
import AssistanceWith from "@/components/services/assistanceWith";
import Faq from "@/components/about/faq";

export const metadata = {
  title: "Software Development – SonaQode",
};

const CONSTS = {
  text: "text-sona-purple",
  bg: "bg-sona-lightPurple",
  hoverbg: "hover:bg-sona-purple",
};

const assist = [
  "Saas Development",
  "API Integration",
  "Maintenance and Support",
  "Software Integration",
  "Responsive Website Design",
  "E-commerce Solutions",
  "B2B Portal Development",
  "MVP Development",
];

const faqData = [
  {
    question: "Is SonaQode the best place to hire web developers??",
    answer:
      "Certainly, we believe we are exceptional in providing services. However, to remain objective, we consistently strive to deliver world-class standard services. Our commitment goes beyond meeting expectations, as we prioritise client satisfaction. You can review testimonials from our clients to ensure you are selecting the right software partner.",
  },
  {
    question: "How do your engineers developers ensure code quality?",
    answer:
      "We prioritize delivering high-quality, efficient, and reliable code. Our rigorous code review process involves multiple reviewers to carefully inspect for errors or omissions. This ensures that any problems are caught and corrected before code release.",
  },
  {
    question:
      "Who will be my main point of contact? Do I work directly with the developers?",
    answer:
      "We will provide you with a dedicated project manager and a team of professionals. Communication channels include phone, email, live chat, or messaging. Collaboration tools like Google Meet and Zoom will be used for effective communication and project management.",
  },
  {
    question: "Can SonaQode build a Minimum Viable Product (MVP)?",
    answer:
      "Our software engineers have the capability to rapidly develop a minimum viable product (MVP) for your company, tailored to meet project requirements and timeline.",
  },
  {
    question:
      "What Benefits Can I Get If I Hire Your Web App Developers for My Startup?",
    answer:
      "Our team of dedicated senior developers/engineers is always ready to collaborate with customers to achieve optimal results. With extensive experience in working with startups, we follow Agile and Lean methodologies to ensure fast delivery and optimize workflow for market success. Additionally, we carefully select technologies that will benefit your business.Moreover, our solutions are cost-effective and profitable. If you are looking to optimize your investment and allocate funds to other areas of your startup, our services are tailored for you!",
  },
];

const data = [
  {
    icon: null,
    title: "",
    full_time: 2003,
    part_time: 1000,
    education: "...",
  },
];
export default function SoftwareDevelopmentPage() {
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
            <div></div>
            <div className="flex flex-col gap-1.5 lg:gap-2 justify-center">
              <h2 className="font-clash text-2xl lg:text-5xl font-semibold">
                Software Development
              </h2>
              <p className="lg:text-lg text-sm font-light">
                Connect with our skilled tech specialists, ready to expedite
                your your objectives. Whether it&apos;s customising a running
                developing prototype applications, or implementing complex
                technology solutions, our expert team is equipped to deliver
                rapid and reliable results. Proficient in top programming
                languages, they adapt and collaborate with your business to
                address any complexity, meet your requirements, and bring your
                vision to life.
              </p>
              <Button className={cn("mt-2", CONSTS.text, CONSTS.hoverbg)}>
                See services
              </Button>
            </div>
          </div>
          <Image
            src={SoftwareDevelopment}
            className="h-auto w-full max-w-[530px] aspect-[550/530] object-cover rounded-3xl lg:rounded-[58px]"
            alt="people"
          />
        </div>
      </section>
      <AssistanceWith text={CONSTS.text} bgColor={CONSTS.bg} data={assist} />
      <HowToInitiate text={CONSTS.text} bgColor={CONSTS.bg} />
      <Faq data={faqData} />
    </main>
  );
}
