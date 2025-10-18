import React from "react";
import {
  Analytics,
  Automation,
  BarChart,
  BusinessIntelligence,
  DataEngineer,
  DataScience,
  Mysql,
  Python,
} from "@/assets/icons/services";
import { cn } from "@/utils";
import Button from "@/components/misc/button";
import Image from "next/image";
import { DataAnalytics } from "@/assets/images";
import Services from "@/components/services/services";
import AssistanceWith from "@/components/services/assistanceWith";
import HowToInitiate from "@/components/services/howToInitiate";
import Faq from "@/components/about/faq";

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

// const faqData = [
//   {
//     question: "When can you start work on Data & Analytics for my business?",
//     answer:
//       "Once we grasp your needs, our engineers will provide comprehensive consultation services. We use appropriate tools tailored to your business needs, sign an NDA to protect your information, and begin development upon contract signing.",
//   },
//   {
//     question:
//       "How do Data Analysist's/Engineers communicate with their clients?",
//     answer:
//       "Our developers are comfortable and ready to use your preferred communication channel if it provides the required level of data safety.",
//   },
//   {
//     question:
//       "What are the terms of data security? I need an NDA for my project.",
//     answer:
//       "All our projects are protected and supported with a mandatory signed NDA before initiation. You can be sure that all your information is securely protected.",
//   },
//   {
//     question:
//       "Who will be my main point of contact? Do I work directly with the developers?",
//     answer:
//       "We will assign a relevant professional either a project manager or developer & Engineer. Our team will be available to you at all times via any communication channel of your choice. We also use different collaboration tools, such as Redmine, to communicate with our customers.",
//   },
// ];

const data = [
  {
    title: "Data Engineer",
    description:
      "Our data engineers design, build, and maintain the data infrastructure and architecture necessary to collect, store, process, and analyse data. They enable real time data processing, personalise customer experiences, and inform decision making, making their role vital to any data driven organisation. Skilled in a diverse range of frameworks and tools, they drive the efficiency and effectiveness of your organisation’s data ecosystem.",
    price: 3490,
    icon: DataEngineer,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 4 years in respective role/Industry.",
      "Tech tools: AWS, GCP, Azure, Python, Java, Scala, SQL, Hadoop, Spark, ETL, Prometheus, NoSQL, Apache Hadoop, Apache Kafka",
      "Skills: Database Design & Architecture, Data Modeling, Data Warehousing, Programming & Scripting, Governance and Security",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
  },
  {
    title: "Data Analyst",
    description:
      "Unlock the potential of raw data by transforming it into valuable insights that enhance decision making, improve efficiency, and drive business growth. Our talented data analysts excel in interpreting data, generating reports, and creating visualisations, helping businesses stay competitive, gain deeper understanding of customers and markets, and adapt their strategies accordingly. Optimise operations, ensuring sustained success and profitability.",
    price: 2690,
    icon: BarChart,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 4 years in respective role/Industry.",
      "Tech tools: Tableau, Power BI, QlikView/Qlik Sense, Google Data Studio, Python, JavaScript, SAS, SPSS, SQL, Oracle Database, Hive",
      "Skills: Proficiency in Excel, Data Cleaning & Preparation, Statistical Analysis, Data Visualisation Principles, Programming & Scripting, Database Management.",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
  },
  {
    title: "Data Scientist",
    description:
      "Discover patterns, trends, and correlations in data that reveal insights into customer behavior, market trends, and operational performance. Our data scientists excel in data analysis, predictive modeling, and strategic insights, empowering businesses to optimise operations, innovate products and services, enhance customer experiences, and mitigate risks, thereby maintaining a competitive edge in the market.",
    price: 3790,
    icon: DataScience,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 4 years in respective role/Industry.",
      "Tech tools: Python, R, SQL, Tableau, Power BI, Matplotlib & Seaborn, Apache Hadoop, Hive, PyTorch, Scikit-learn, Keras, Pandas, NumPy, AWS, GCP, SQL/NoSQLDatabases",
      "Skills: Probability & Statistics, Mathematics, Machine Learning & AI, Data Cleaning & Preprocessing, Data Visualisation",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
  },
  {
    title: "Business Intelligence Analyst",
    description:
      "Harness the power of data effectively, drive data driven decision making, and enhance performance across various areas. Our talented analysts leverage your data to gain a deeper understanding of your business. They employ analytical tools and techniques to uncover trends, patterns, and correlations within the data, identifying market gaps and developing strategies based on objective information.",
    price: 2690,
    icon: BusinessIntelligence,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 4 years in respective role/Industry.",
      "Tech tools: Tableau, Python, R, Power BI, Looker, QlikView/Qlik Sense, SSIS, Informatica, Alteryx, SQL, PostgreSQL, Microsoft SQL Server, Apache Spark",
      "Skills: Data Analysis, Data Visualisation, SQL, Database Management/Warehousing, Statistical Analysis, Critical Thinking, Report Writing",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
  },
  {
    title: "Automation Engineer",
    description:
      "Streamline your processes with our dedicated automation engineers. Leverage their proficiency in designing and implementing automated systems to optimise workflows, drive efficiency, enhance quality, and maintain competitiveness in a rapidly evolving market. Utilising cutting edge technologies and a commitment to innovation, our specialists are ready to revolutionise your workflow.",
    price: 3390,
    icon: Automation,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 4 years in respective role/Industry.",
      "Tech tools: JavaScript/Node.js, Python, PowerShell, Selenium, TestComplete, Appium, Azure DevOps, GitLab CI/CD, Jenkins, SaltStack, Ansible, Terraform, ARM, AWS CloudFormation",
      "Skills: Automation Framework Development, Infrastructure Automation, DevOps Practices, Cloud Computing, Problem Solving & Troubleshooting",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
  },
];

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
      <HowToInitiate text={CONSTS.text} bgColor={CONSTS.bg} />
      <Faq />
    </main>
  );
}
