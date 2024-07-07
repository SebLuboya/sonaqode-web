import { InstagramLogoIcon, SonaqodeDarkIcon } from "@/assets/icons";
import FacebookIcon from "@/assets/icons/glyphs/FacebookIcon";
import LinkedInIcon from "@/assets/icons/glyphs/LinkedInIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import InstagramIcon from "@/assets/icons/glyphs/InstagramIcon";

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
      <div className="w-full flex items-center justify-center h-24 lg:h-36">
        <p className="font-clash text-center text-2xl lg:text-4xl font-semibold">
          Let’s Build Something Great Together
        </p>
      </div>
      <div className="w-full lg:max-w-[1260px] mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10 lg:gap-0 justify-between py-10">
        <Image
          src={SonaqodeDarkIcon}
          className="h-[70px] w-auto"
          alt="sonaqode-dark-icon"
        />
        {links.map((link) => (
          <div
            key={link.label}
            className="w-full lg:w-auto flex flex-col gap-4 lg:gap-3"
          >
            <p className="text-gray-300 text-sm">{link.label}</p>
            {link.content.map((content) => (
              <Link key={content.label} href={content.link}>
                {content.label}
              </Link>
            ))}
          </div>
        ))}
        <div className="w-full lg:w-auto flex flex-col gap-4 lg:gap-3">
          <p className="text-gray-300 text-sm">Contact</p>
          <p>London, England</p>
          <a href="mailto:info@sonaqode.co.uk">info@sonaqode.co.uk</a>
          <div className="flex flex-row gap-4">
            <a
              href="https://www.linkedin.com/company/sonaqode/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
            <FacebookIcon />
            <a
              href="https://www.instagram.com/sonaqode?igsh=MXUyc285OW9kMTh6dg%3D%3D&utm_source=qr"
              target="_blank"
              rel="noreferrer"
            >
              <Image src={InstagramLogoIcon} alt={"ig"} className={"h-6 w-6"} />
            </a>
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1260px] mx-auto flex items-center justify-center py-8 border-t">
        <p className="">© 2024 SonaQode. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
