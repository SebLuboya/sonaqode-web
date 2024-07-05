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
    question: "Is SonaQode the best place to hire web developers?",
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
    title: "Mobile App Developer",
    description:
      "Our team of experienced developers are skilled in creating high-quality captivating mobile apps, both functional and engaging compatible for iOS and Android. Using the latest technologies and tailored approach to ensure that your apps meet the specific needs.",
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
      "Experienced web developers can build high-performance, modern web applications from the ground up. Our full-stack developers are highly proficient in both Front-end and Back-end technologies. Delivering fully customised web apps tailored to your precise requirements, with expertise to ensure excellent performance end-to-end solutions that are both reliable and scalable.",
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
      "Our front-end developers master a diverse range of frameworks and tools, including JavaScript, CSS, Vue.js, and HTML. They design intuitive, efficient, and enjoyable user experiences by integrating design, technology, and usability principles. This approach boosts engagement and accessibility, tailored to your unique brand needs. Highly motivated, they seamlessly collaborate and cohesively communicate, introducing innovative solutions and features that differentiate the business from competitors.",
    price: 2690,
    partTime: 1275,
    icon: Js,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 3 years in respective role / industry",
      "Tech tools: HTML5, Sass, CSS3, JavaScript (ES6+), React, Angular, Vue.js, jQuery, npm",
      "Tech tools: HTML/CSS Proficiency, JavaScript Expertise, Frameworks and Libraries, Responsive Design and Cross-Browser Compatibility, Performance Optimisation, User Experience (UX) Principles.",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
  },
  {
    title: "Backend Developer",
    description:
      "Access back-end developers ready to be deployed into your project to provide powerful architecture and enhanced performance. Experienced and versatile, they build secure, scalable, and durable server-side solutions using the latest tools and technologies such as Java, Python, Node.js, Ruby, and more. Thier expertise in SQL and NoSQL databases, guaranteeing consistent data flow, ensuring the delivery of unbeatable back-end systems that work flawlessly and meet every business requirement.",
    price: 2690,
    partTime: 1275,
    icon: CodeFolder,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 3 years in respective role / industry",
      "Tech tools: Node.js, Python, Ruby on Rails, Laravel, Symfony, ASP.NET Core, SQL/NoSQL Databases, GitHub/GitLab/Bitbucket, RESTful APIs",
      "Tech tools: Proficiency in Server-Side Languages, Database Management, API Development &Integration, Scalability &Reliability, Problem-Solving & Analytical Thinking, Security Best Practices.",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
  },
  {
    title: "UI/UX Designer",
    description:
      "Designers will create innovative designs for all applications, websites and software. Engaging fresh authentic visually stunning interfaces that will propel your product above from the competition. working to understand your needs and goals, and delivering designs that will help attract and increase users engagement and loyalty.",
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
      "Talented video editors actively cultivate creative and collaborative partnerships with design managers and marketing teams, working together to conceptualise and craft captivating animations, motion graphics, and multimedia content that seamlessly aligns with the company's brand and objectives. They skilfully execute edits that are both current and captivating, drawing upon their versatile expertise in commercial, corporate, and documentary formats.",
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
      "IT specialists offers an all-encompassing range of technical support services catered to your employees, customers, and partners. We provide thorough maintenance, vigilant monitoring, seamless upgrades, and timely corrective measures. By optimising your IT services, assuring smooth and efficient infrastructure operations, allowing you to prioritise your primary business objectives.",
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
              <a href="#services">
                <Button className={cn("mt-2", CONSTS.text, CONSTS.hoverbg)}>
                  See services
                </Button>
              </a>
            </div>
          </div>
          <Image
            src={SoftwareDevelopment}
            className="h-auto w-full max-w-[530px] aspect-[550/530] object-cover rounded-3xl lg:rounded-[58px]"
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
