import React from "react";

export const metadata = {
  title: "Privacy Policy – SonaQode",
};

const data = [
  {
    title: "Information we obtain",
    description:
      "The information we record and use for statistical purposes is:",
    list: [
      "Your server address",
      "The date and time",
      "The pages accessed and documents downloaded",
      "The time spent on each page",
      "The previous site visited",
      "The type of operating system and browser used",
    ],
  },
  {
    title: "How Long We Keep Your Data",
    description:
      "We retain your personal information for as long as it is reasonably necessary for the purpose of our relationship, for as long as we are legally obliged or until you object to us processing your data or withdraw your consent to us doing so.",
    list: [],
  },
  {
    title: "Integrity & Confidentiality",
    description:
      "We acknowledge personal data to be subject to data secrecy. Our priority is to secure the confidentiality and integrity of your processed personal data. SonaQode secures your personal data with suitable organisational and technical measures to prevent unauthorised access, illegal processing or distribution, as well as accidental loss, modification or destruction.",
    list: [],
  },
  {
    title: "Transparency",
    description:
      "We are committed to processing your personal data in a way that is both lawful and ethical. We will never use your personal data for any purpose other than what you have consented to.",
    list: [],
  },
  {
    title: "Data Minimisation",
    description:
      "We collect and process only your personal data if it is actually needed to achieve the processing purposes. We also do not retain your personal data for longer than is necessary to achieve the relevant purposes.",
    list: [],
  },
  {
    title: "Processing personal data of children",
    description:
      "This site is not intended for children under the age of 16, and we do not knowingly collect any personal data from children under 16.",
    list: [],
  },
  {
    title: "Cookie Data",
    description:
      "We use cookies and other tracking technologies to collect information about your visit to our website. Cookies are small text files that are stored on your computer by our website. They allow us to track your activity on our website and to remember your preferences. We use session cookies, which expire when you close your browser, and persistent cookies, which remain on your computer until you delete them.",
    list: [],
  },
  {
    title: "Purpose Of Processing",
    description: "We only use your personal data for the following purposes:",
    list: [
      "Operate, provide, improve, and maintain our website and services.",
      "Prevent abusive and fraudulent use of our website and services.",
      "Respond to your inquiries and for other customer service purposes.",
      "Monitor aggregate Website usage metrics such as total number of visitors and pages viewed.",
      "Save your information so you can easily log in next time.",
      "Other administrative and internal business purposes.",
    ],
  },
  {
    title: "Your privacy rights under the GDPR",
    description:
      "We are committed to protecting your data privacy and providing you with the data protection rights that you are entitled to under European Union law, in particular the General Data Protection Regulation (GDPR). These rights include, for example:",
    list: [
      "The right to obtain any information about the processed personal data within one month",
      "The right to access your personal data",
      "The right to correct or delete your personal data",
      "The right to be informed about any corrections or erasures of your personal data, any restrictions on the processing of your personal data, and any recipients of your personal data.",
      "The right to object to the processing of your personal data.",
      "The right of data portability",
      "The right not to be subject to a decision, based solely on the automated processing.",
      "The right to file a complaint with a data protection authority if you believe that your data protection rights have been violated.",
    ],
  },
  {
    title: "Where we store your personal data",
    description:
      "We store all of your personal data in our own IT systems and in cloud systems. We use all reasonable procedures and security measures to protect your data from unauthorised access, loss, disclosure, or alteration.",
    list: [],
  },
  {
    title: "Sharing Your Data",
    description:
      "We store and process your personal information in multiple locations, including some countries that may have different data protection laws than your home country. We take your privacy seriously and will take all reasonable steps to protect your information. We may also share your personal information with our professional advisers including our lawyers and auditors where it is strictly necessary. It is possible that we may be required to share your data to comply with applicable laws or with valid legal processes, such as in response to a court order.",
    list: [],
  },
];

export default function PrivacyPolicy() {
  return (
    <main className="pt-4 lg:pt-8 pb-20 lg:pb-24">
      <section className="flex flex-col items-end w-full px-6">
        <div className="h-20 md:h-24 lg:h-28 shrink-0 mb-11 lg:mb-12"></div>
        <div className="w-full max-w-[1260px] flex flex-col lg:gap-10 mx-auto pt-12 lg:py-14 p-4 rounded-[50px] lg:rounded-[100px] bg-sona-lightBlue">
          <div className="w-full mx-auto flex flex-col gap-8 items-center lg:px-10">
            <h1 className="font-clash text-3xl lg:text-[50px] text-center font-semibold lg:leading-[60px]">
              Privacy Policy
            </h1>
            <p className="text-center text-sm lg:text-lg font-light">
              We greatly appreciate your visit to our website, and thank you for
              your interest in our company, our products, and our web pages. We
              take your privacy seriously and are committed to protecting your
              personal information when you use our website. We will always
              process your personal data lawfully, fairly and transparently and
              in the same manner that we would expect others to process our
              personal data.
            </p>
          </div>
        </div>
        <div className="w-full max-w-[1260px] flex flex-col gap-11 lg:gap-16 pt-10 lg:pt-12 mx-auto">
          {data.map((item) => (
            <div key={item.title} className="flex flex-col">
              <h2 className="text-2xl lg:text-4xl font-semibold font-clash mb-2">
                {item.title}
              </h2>
              <p className="font-light text-sm lg:text-base">
                {item.description}
              </p>
              {item.list.length > 0 && (
                <ul className="list-disc pl-6 mt-4">
                  {item.list.map((li) => (
                    <li key={li} className="font-light text-sm lg:text-base">
                      {li}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
