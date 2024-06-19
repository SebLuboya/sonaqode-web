import { SonaqodeDarkIcon } from "@/assets/icons";
import FacebookIcon from "@/assets/icons/glyphs/FacebookIcon";
import GithubIcon from "@/assets/icons/glyphs/GithubIcon";
import LinkedInIcon from "@/assets/icons/glyphs/LinkedInIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const links = [
  {
    label: "Company",
    content: [
      {
        label: "About Us",
        link: "/about",
      },
      {
        label: "Contact",
        link: "/contact",
      },
      {
        label: "Privacy Policy",
        link: "/privacy-policy",
      },
    ],
  },
  {
    label: "Services",
    content: [
      {
        label: "Cybersecurity",
        link: "/cyber-security",
      },
      {
        label: "Data Analytics",
        link: "/data-analytics",
      },
      {
        label: "Software Development",
        link: "/software-development",
      },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-black text-white px-10">
      <div className="w-full flex items-center justify-center h-36">
        <p className="font-clash text-4xl font-semibold">
          Let’s Build Something Great Together
        </p>
      </div>
      <div className="w-full max-w-[1210px] mx-auto flex flex-row justify-between py-10">
        <Image
          src={SonaqodeDarkIcon}
          className="h-[70px] w-auto"
          alt="sonaqode-dark-icon"
        />
        {links.map((link) => (
          <div key={link.label} className="flex flex-col gap-3">
            <p className="text-gray-300 text-sm">{link.label}</p>
            {link.content.map((content) => (
              <Link key={content.label} href={content.link}>
                {content.label}
              </Link>
            ))}
          </div>
        ))}
        <div className="flex flex-col gap-3">
          <p className="text-gray-300 text-sm">Contact</p>
          <p>London, England</p>
          <a href="mailto:info@sonaqode.co.uk">info@sonaqode.co.uk</a>
          <div className="flex flex-row gap-4">
            <LinkedInIcon />
            <FacebookIcon />
            <GithubIcon />
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1210px] mx-auto flex items-center justify-center py-8 border-t">
        <p className="">© 2024 SonaQode. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
