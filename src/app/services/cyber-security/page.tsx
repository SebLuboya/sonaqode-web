import React from "react";
import {
  Cloud,
  DataAdmin,
  Lock,
  Password,
  PoliceBadge,
  Protect,
  Security,
  SecurityWindow,
  TwoStep,
} from "@/assets/icons/services";
import { cn } from "@/utils";
import Button from "@/components/misc/button";
import Image from "next/image";
import { CyberSecurity } from "@/assets/images";
import Services from "@/components/services/services";
import AssistanceWith from "@/components/services/assistanceWith";
import HowToInitiate from "@/components/services/howToInitiate";
import Faq from "@/components/about/faq";

export const metadata = {
  title: "Cyber Security – SonaQode",
};

const CONSTS = {
  text: "text-sona-green",
  bg: "bg-sona-lightGreen",
  hoverbg: "hover:bg-sona-green",
};

const assist = [
  "Thorough security assessments and code reviews.",
  "Compliance assurance for industry-specific standards.",
  "Vulnerability testing and penetration testing.",
  "Incident response planning and execution.",
  "Ongoing monitoring and support for application security.",
  "Security infrastructure design and deployment.",
  "Data protection and encryption mechanisms.",
  "Security awareness training for employees.",
  "Implementation of secure coding practices and industry best practices.",
  "Incident response planning and disaster recovery strategies.",
  "Design and implementation of robust security architectures for cloud environments.",
  "Comprehensive security solutions tailored to your organization's needs.",
];

const faqData = [
  {
    question: "When can you start working on cybersecurity for my business?",
    answer:
      "Once we grasp your needs, our engineers will provide cybersecurity consulting services. We use appropriate tools tailored to your business needs, sign an NDA to protect your information, and begin development upon contract signing.",
  },
  {
    question:
      "What type of business can request managed cybersecurity services from you?",
    answer:
      "We prioritize security for all clients. We work with companies willing to adopt effective security solutions to protect their data, reputation, and clients. Our expertise extends to heavily-regulated industries like fintech and healthcare, ensuring compliance with specific safety requirements and guidelines.",
  },
  {
    question: "What is SonaQode's policy to ensure confidentiality?",
    answer:
      "We understand the importance of protecting the valuable information you entrust us with. As per our policy, we sign a non-disclosure agreement (NDA) with you that legally binds us to hold all the information, including any propriety or project-related information exchanged during sales inquiries or over the course of our contract, in strict confidence.",
  },
  {
    question:
      "What are the terms of data security? I need an NDA for my project.",
    answer:
      "All our projects are protected and supported with a mandatory signed NDA before initialising. You can be sure that all your information's are securely protected.",
  },
];

const data = [
  {
    title: "Application Security Engineer",
    description:
      "Safeguard software applications from cyber threats, ensuring data protection, maintaining business reputation, and reducing financial risks associated with security breaches. Identifying and addressing potential vulnerabilities and weaknesses that could be exploited by malicious actors. Their expertise contributes to a more secure and resilient business environment.\n",
    price: 2990,
    icon: SecurityWindow,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 4 years in respective role/Industry.",
      "Tech tools: SAST, DAST, IAST, SCA, RASP, Python, Java, JavaScript, Metasploit, Nmap, Wireshark, Jenkins, ELK Stack, Kubernetes,",
      "Skills: Programming and Scripting, Understanding of Web Technologies, Threat Modeling & Risk Assessment, Testing & Debugging",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
  },
  {
    title: "Cloud Security Specialist",
    description:
      "Ensuring the security of an organisation's data, applications, and infrastructure that are hosted in cloud environments. Cloud security specialists design, implement, and manage security measures and protocols to protect sensitive information, prevent unauthorised access, and mitigate risks associated with cloud computing.",
    price: 3190,
    icon: Cloud,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 4 years in respective role/Industry.",
      "Tech tools: AWS, Azure, GCP, CSPM, CASB, SIEM, IAM.",
      "Skills: Cloud Platforms Expertise, Security Principles and Practices, Compliance & Governance, Security frameworks",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
  },
  {
    title: "Cyber Security Engineer",
    description:
      "Design, implement, and maintain security measures and protocols to protect computer systems, networks, and digital assets from cyber threats, attacks, and unauthorised access. They work to identify vulnerabilities, develop strategies to mitigate risks, and respond to security incidents to ensure the overall security posture of the organisation.",
    price: 2990,
    icon: TwoStep,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 4 years in respective role/Industry.",
      "Tech tools: Firewalls, IDS/IPS, Antivirus/Anti-Malware, EDR, SIEM, Penetration Testing & Vulnerability Assessment, Threat Intelligence, IAM, Cloud Security, SOAR",
      "Skills: Security Principles, Networking & Network Security, Programming & Scripting, Incident Response & Forensics, Security Architecture & Design, Cloud Security, Threat Intelligence & Analysis.",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
  },
  {
    title: "Data Administrator",
    description:
      "Managing and overseeing data assets, this role involves tasks related to data governance, data quality, data security, and data lifecycle management. It ensures that data is accurate, accessible, and properly utilized across the organization. Their efforts result in improved data quality, compliance adherence, better decision-making, and enhanced operational efficiency.\n",
    price: 1499,
    icon: DataAdmin,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 4 years in respective role/Industry.",
      "Tech tools: DBMS, NoSQL, IBM Guardium, Python, Imperva SecureSphere, Symantec NetBackup, PowerShell, Dell EMC Avamar, New Relic, SolarWinds Database Performance Analyzer, Erwin Data Modeler",
      "Skills: Database Design & Architecture, SQL Proficiency, Database Performance Tuning, Data Security & Compliance, Data Integration,ETL, Monitoring & Troubleshooting, Data Modeling & Design, Cloud Database Services.",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
  },
  {
    title: "Cyber Security Analyst",
    description:
      "Engaging a skilled Cybersecurity Analyst significantly benefits your business by mitigating security risks, protecting sensitive data, ensuring regulatory compliance, and maintaining the trust of your customers. Their expertise helps safeguard your digital assets enabling you to focus on core business activities without constantly worrying about cyber threats.",
    price: 2990,
    icon: Security,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 4 years in respective role/Industry.",
      "Tech tools: SIEM, IDS/IPS, Endpoint Security, Vulnerability Management, Threat Intelligence, Penetration Testing, SIFT, Network Security",
      "Skills: Security Principles, Network Security, Operating Systems & System Security, Forensics & Malware Analysis, Security Compliance and Governance",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
  },
  {
    title: "Penetration Tester",
    description:
      "Access and simulate cyberattacks on systems, networks, and applications to identify vulnerabilities and weaknesses. The goal is to assess the security measures in place and provide recommendations to strengthen defenses against real-world cyber threats. Their expertise enhances cybersecurity measures, prevents data breaches, and improves overall risk management.\n",
    price: 2890,
    icon: Password,
    list: [
      "Education: University Graduate, Degree",
      "Experience: Min 4 years in respective role/Industry.",
      "Tech tools: Penetration Testing, Social Engineering, Network Scanners, BeEF, Web Application/Wireless Testing, Password Cracking, Forensics.",
      "Skills: Networking & Protocols, Scripting & Programming, Operating Systems, Vulnerability Assessment and Exploitation, Password Cracking & Cryptography",
      "Communication: Your preferred communication channel",
      "Language: Fluent English Speaking & Writing",
    ],
  },
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
              <h2 className="font-clash text-2xl lg:text-5xl font-semibold">
                Cyber Security
              </h2>
              <p className="lg:text-lg text-sm font-light">
                Safeguard your digital assets with dedicated experts poised to
                proactively identify and respond to threats. Fortify your
                defense with layers of security measures integrated at every
                stage of your initiatives. From security analysts, cloud
                specialists, and pen testers who effectively liaise with your
                team to develop and implement comprehensive security strategies
                aligned with your organisation&apos;s goals.
              </p>
              <Button className={cn("mt-2", CONSTS.text, CONSTS.hoverbg)}>
                See services
              </Button>
            </div>
          </div>
          <Image
            src={CyberSecurity}
            className="h-auto w-full max-w-[530px] aspect-[550/530] object-cover rounded-3xl lg:rounded-[58px]"
            alt="people"
          />
        </div>
      </section>
      <Services data={data} sectionTitle="Cyber Security" />
      <AssistanceWith text={CONSTS.text} bgColor={CONSTS.bg} data={assist} />
      <HowToInitiate text={CONSTS.text} bgColor={CONSTS.bg} />
      <Faq data={faqData} />
    </main>
  );
}
