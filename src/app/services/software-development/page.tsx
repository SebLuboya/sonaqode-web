import React from "react";
import Image from "next/image";
import { SoftwareDevelopment } from "@/assets/images";
import Button from "@/components/misc/button";
import HowToInitiate from "@/components/services/howToInitiate";
import { cn } from "@/utils";
import AssistanceWith from "@/components/services/assistanceWith";
import Faq from "@/components/about/faq";
import {
  AngleBrackets,
  CodeFolder,
  CurlyBrackets,
  Figma,
  ItSupport,
  Js,
  ManSocialMedia,
  QaTesting,
  VideoEditor,
  Vscode,
} from "@/assets/icons/services";
import Services from "@/components/services/services";

export const metadata = {
  title: "Software Development – Sonaqode",
};

const CONSTS = {
  text: "text-sona-purple",
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
];

const faqData = [
  {
    question: "Is Sonaqode the best place to hire developers?",
    answer:
      "Certainly, we believe we excel in providing services. However, to remain objective, we continually strive to deliver world-class standards. Our commitment surpasses meeting expectations; we prioritise client satisfaction.",
  },
  {
    question: "How do your engineers and developers ensure code quality?",
    answer:
      "We prioritise delivering high-quality, efficient, and reliable code. Our rigorous code review process engages multiple reviewers to meticulously detect errors or omissions. This guarantees that any issues are identified and resolved before the code is released.",
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
];

const data = [
  {
    title: "Mobile App Developer",
    description:
      "Engage skilled developers dedicated to crafting robust custom applications tailored to your specific and complex requirements. Our experienced app development team, adept in the latest technologies, excels in creating top-notch mobile apps that captivate users and gather valuable insights. Ensure a strong mobile presence, driving sustained growth and success for your business.",
    price: 3090,
    partTime: 2190,
    icon: AngleBrackets,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 3 years in respective role / industry",
      "Tech tools: iOS, Flutter, Java, Kotlin, React Native, Android, Swift",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
  },
  {
    title: "Full Stack Developer",
    description:
      "Access skilled web developers who can construct high-performance, modern web applications from scratch. Our full-stack developers excel in both Front-end and Back-end technologies, delivering fully customised web apps that meet your precise requirements. They ensure excellent performance and provide end-to-end solutions that are reliable and scalable.",
    price: 3090,
    partTime: 2190,
    icon: Vscode,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 3 years in respective role",
      "Tech tools: NodeJs, ExpressJs, Django, Angular, ReactJs, Bootstrap, Ruby On Rails,Flask, Jquery, Mongo DB",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
  },
  {
    title: "Frontend Developer",
    description:
      "Our front-end developers excel in mastering a diverse range of frameworks and tools, including JavaScript, CSS, Vue.js, and HTML. They actively design intuitive, efficient, and enjoyable user experiences by integrating design, technology, and usability principles. This approach enhances engagement and accessibility, customised to meet your unique brand needs. Motivated by innovation, they collaborate seamlessly to implement creative solutions and features.",
    price: 2690,
    partTime: 1275,
    icon: Js,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 3 years in respective role / industry",
      "Tech tools: HTML5, Sass, CSS3, JavaScript (ES6+), React, Angular, Vue.js, jQuery, npm",
      "Skills: HTML/CSS Proficiency, JavaScript Expertise, Frameworks and Libraries, Responsive Design and Cross-Browser Compatibility, Performance Optimisation, User Experience (UX) Principles.",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
  },
  {
    title: "Backend Developer",
    description:
      "Access back-end developers prepared to integrate into your project, delivering robust architecture and enhanced performance. They construct secure, scalable, and durable server-side solutions using cutting-edge tools and technologies such as Java, Python, Node.js, Ruby, and more. Experts in SQL and NoSQL databases, they ensure consistent data flow, delivering impeccable back-end systems that operate flawlessly and fulfill every business requirement.",
    price: 2690,
    partTime: 1275,
    icon: CodeFolder,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 3 years in respective role / industry",
      "Tech tools: Node.js, Python, Ruby on Rails, Laravel, Symfony, ASP.NET Core, SQL/NoSQL Databases, GitHub/GitLab/Bitbucket, RESTful APIs",
      "Skills: Proficiency in Server-Side Languages, Database Management, API Development &Integration, Scalability &Reliability, Problem-Solving & Analytical Thinking, Security Best Practices.",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
  },
  {
    title: "UI/UX Designer",
    description:
      "Our innovative designers excel at crafting intuitive designs for applications, software, and websites that are visually appealing, highly functional, and user-friendly. They conduct user research, design interactions, create visuals, and perform usability testing to ensure the product meets user needs and expectations. This process provides your business with a competitive advantage, fosters brand loyalty, and increases engagement.",
    price: 2090,
    partTime: 1390,
    icon: Figma,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 3 years in respective role",
      "Tech tools: Figma, Adobe Xd",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
  },
  {
    title: "Video Content Editor",
    description:
      "Talented video editors actively cultivate creative and collaborative partnerships to conceptualise captivating animations, motion graphics, and multimedia content that seamlessly align with the company's brand and objectives. They skillfully execute edits that are both current and captivating, drawing upon their versatile expertise in commercial, corporate, and documentary formats.",
    price: 1799,
    partTime: 1189,
    icon: VideoEditor,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 3 years in respective role / industry",
      "Tech tools: Adobe Premiere Pro, Final Cut Pro X, DaVinci Resolve, Adobe After Effects, Adobe Audition",
      "Tech tools: Creative Eye, Adaptability, Storyboarding and Scripting, Motion Graphics and Visual Effects, Audio Editing and Mixing",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
  },
  {
    title: "QA Tester",
    description:
      "QA engineers comprises seasoned experts who excel in developing streamlined testing and quality management procedures for your project, leveraging cutting-edge technologies and adhering to industry-leading testing standards. Collaborating with top-notch QA and test automation engineers, going above and beyond to emphasise that quality assurance extends far beyond delivering software devoid of bugs.",
    price: 2690,
    partTime: 1690,
    icon: QaTesting,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 3 years in respective role",
      "Tech tools: Java, JDBC, Java Script, HTML, CSS, XML, JSON, XPath, SOA and Web Services",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
  },
  {
    title: "IT Support Engineer",
    description:
      "Our IT Engineers provide comprehensive technical support, collaborating with cross-functional teams to deploy, configure, and maintain IT infrastructure components in alignment with business needs. They utilise appropriate tools and techniques to ensure uptime, performance, and security compliance. They excel in problem-solving and proactively identify and implement improvements to enhance overall performance.",
    price: 899,
    partTime: 549,
    icon: ItSupport,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 3 years in respective role",
      "Tech tools: Your preferred communication channel",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
  },
];
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
                Connect with our skilled tech specialists, ready to expedite
                your your objectives. Whether it&apos;s customising a running
                developing prototype applications, or implementing complex
                technology solutions, our expert team is equipped to deliver
                rapid and reliable results. Proficient in top programming
                languages, they adapt and collaborate with your business to
                address any complexity, meet your requirements, and bring your
                vision to life.
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
      <Services data={data} sectionTitle="Software Development" />
      <AssistanceWith text={CONSTS.text} bgColor={CONSTS.bg} data={assist} />
      <HowToInitiate text={CONSTS.text} bgColor={CONSTS.bg} />
      <Faq data={faqData} />
    </main>
  );
}
