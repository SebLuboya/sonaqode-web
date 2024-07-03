import React from "react";
import {
  Automation,
  BarChart,
  BusinessIntelligence,
  DataEngineer,
  DataScience,
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
  title: "Data & Analytics – SonaQode",
};

const CONSTS = {
  text: "text-sona-pink",
  bg: "bg-sona-lightPink",
  hoverbg: "hover:bg-sona-pink",
};

const assist = [
  "Data-driven strategy development tailored to your business needs.",
  "Data quality management and governance.",
  "Advanced analytics and predictive modeling.",
  "Data warehouse management.",
  "Data visualization and reporting for actionable insights.",
  "Data analysis and interpretation.",
  "Domain expertise across various industries.",
  "Statistical modeling and hypothesis testing.",
  "Design and implementation of robust data pipelines.",
  "Data visualization and dashboard creation.",
  "Data integration and ETL (Extract, Transform, Load) processes.",
  "Data organization and structuring for optimal efficiency.",
  "Data quality and security.",
  "Data backup and recovery solutions.",
  "Data integrity and quality management.",
];

const faqData = [
  {
    question: "When can you start work on Data & Analytics for my business?",
    answer:
      "Once we grasp your needs, our engineers will provide comprehensive consultation services. We use appropriate tools tailored to your business needs, sign an NDA to protect your information, and begin development upon contract signing.",
  },
  {
    question:
      "How do Data Analysist's/Engineers communicate with their clients?",
    answer:
      "Our developers are comfortable and ready to use your preferred communication channel if it provides the required level of data safety.",
  },
  {
    question:
      "What are the terms of data security? I need an NDA for my project.",
    answer:
      "All our projects are protected and supported with a mandatory signed NDA before initiation. You can be sure that all your information is securely protected.",
  },
  {
    question:
      "Who will be my main point of contact? Do I work directly with the developers?",
    answer:
      "We will assign a relevant professional either a project manager or developer/engineer. Our team will be available to you at all times via any communication channel of your choice. We also use different collaboration tools, such as Redmine, to communicate with our customers.",
  },
];

const data = [
  {
    title: "Data Engineer",
    description:
      "Enhance your data accessibility, accuracy, and utilisation, driving better decision-making, operational efficiency, and innovation within the business. They specialise in designing, building, and maintaining the systems and infrastructure. Creating data pipelines, ensuring that data is collected efficiently, transformed into a usable format, and made available for analysis.",
    price: 2690,
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
      "Transforming raw data into actionable insights empowers businesses to make smarter decisions, optimize operations, better understand their customers, and stay competitive in a data-driven environment. They are experts in using various tools and techniques to interpret data patterns, trends, and correlations, ultimately providing actionable recommendations.\n",
    price: 2390,
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
      "Collecting, analysing, and interpreting complex data to inform business decisions and strategies, combining skills in programming, statistics, data visualisation, and domain expertise to extract valuable insights from large and diverse datasets. Data scientists use various tools and techniques, including machine learning and artificial intelligence, to uncover patterns, trends, and correlations within the data.\n",
    price: 2590,
    icon: DataScience,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 4 years in respective role/Industry.",
      "Tech tools: Python, R, SQL, Tableau, Power BI, Matplotlib & Seaborn, Apache Hadoop, Hive, PyTorch, Scikit-learn, Keras, Pandas, NumPy, AWS, GCP, SQL/NoSQLDatabases",
      "Skills: Probability & Statistics, Mathematics, Machine Learning & AI, Data Cleaning & Preprocessing, Data Visualization",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
  },
  {
    title: "Business Intelligence Analyst",
    description:
      "Leverage data effectively, drive data-driven decision making, and improve performance across various areas. Our talented analyst's are able to harness the power of your data to gain a deeper understanding of your business. Employing analytical tools and techniques, uncovering trends, patterns, and correlations within data. Identifying market gaps and develop strategies based on objective information. Helping you stay ahead in a competitive market.",
    price: 2490,
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
      "Automate and streamline your processes, tasks, and workflows. Reduce manual, repetitive tasks by leveraging tools and systems that can perform them automatically. With highly competent engineers, business automation can transform your business. Increased efficiency, allows you to focus on more valuable and strategic activities, Cost savings, Improved accuracy ensuring better data management, insights and mitigate risks.",
    price: 2590,
    icon: Automation,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 4 years in respective role/Industry.",
      "Tech tools: JavaScript/Node.js, Python, PowerShell, Selenium, TestComplete, Appium, Azure DevOps, GitLab CI/CD, Jenkins, SaltStack, Ansible, Terraform, ARM, AWS CloudFormation",
      "Skills: Automation Framework Development, Infrastructure Automation, DevOps Practices, Cloud Computing, Problem-Solving & Troubleshooting",
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
            <div></div>
            <div className="flex flex-col gap-1.5 lg:gap-2 justify-center">
              <h2 className="font-clash text-2xl lg:text-5xl font-semibold">
                Data & Analytics
              </h2>
              <p className="lg:text-lg text-sm font-light">
                Leverage the power of data with our analysts and engineers to
                turn data into value. Competent in delivering analytics
                solutions that help you process and interpret your data assets,
                shedding light on key business dynamics, they transform projects
                and processes to supercharge operations with targeted insights,
                liberating your teams from repetitive processes.
              </p>
              <Button className={cn("mt-2", CONSTS.text, CONSTS.hoverbg)}>
                See services
              </Button>
            </div>
          </div>
          <Image
            src={DataAnalytics}
            className="h-auto w-full max-w-[530px] aspect-[550/530] object-cover rounded-3xl lg:rounded-[58px]"
            alt="people"
          />
        </div>
      </section>
      <Services data={data} sectionTitle="Data & Analytics" />
      <AssistanceWith text={CONSTS.text} bgColor={CONSTS.bg} data={assist} />
      <HowToInitiate text={CONSTS.text} bgColor={CONSTS.bg} />
      <Faq data={faqData} />
    </main>
  );
}
