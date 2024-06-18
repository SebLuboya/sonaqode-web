"use client";
import { Chart, Code, Password, SonaqodeDarkIcon } from "@/assets/icons";
import ChevronDown from "@/assets/icons/glyphs/ChevronDown";
import { cn } from "@/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useState } from "react";

const links = [
  {
    label: "Home",
    link: "/",
  },
  {
    label: "About Us",
    link: "/about",
  },
  {
    label: "services",
    sub: [
      {
        label: "Software Development",
        link: "/services/software-development",
        color: "bg-[#C0CAFF]",
        icon: Code,
      },
      {
        label: "Data & Analytics",
        link: "/services/data-analytics",
        color: "bg-[#FFE1A5]",
        icon: Chart,
      },
      {
        label: "Cyber Security",
        link: "/services/cyber-security",
        color: "bg-[#93FF98]",
        icon: Password,
      },
    ],
  },
  {
    label: "Contact Us",
    link: "/contact",
  },
  {
    label: "Corporate Culture",
    link: "/corporate-culture",
  },
];

const Header = () => {
  const [isHovering, setIsHovering] = useState(false);
  const path = usePathname();
  const isActive = (link: string) => path === link;

  return (
    <header className="fixed top-0 z-10 w-full pt-8 px-6">
      <div className="w-full max-w-[1260px] mx-auto h-28 flex flex-row items-center justify-between px-8 bg-black/60 rounded-3xl text-white backdrop-blur-md">
        <Image
          src={SonaqodeDarkIcon}
          className="h-[70px] w-auto"
          alt="sonaqode-dark-icon"
        />
        <ul className="flex flex-row gap-7 items-center">
          {links.map((link) => (
            <li
              key={link.label}
              className={cn(
                "text-sm flex flex-row items-center gap-1 hover:text-[#0E6BA4] duration-75 cursor-pointer",
                isActive(link.link ?? "none") && "text-[#0E6BA4]",
              )}
            >
              {link.sub === undefined ? (
                <Link href={link.link}>{link.label}</Link>
              ) : (
                <button
                  onMouseEnter={() => setIsHovering(true)}
                  onMouseLeave={() => setIsHovering(false)}
                  className="relative flex flex-row items-center gap-1"
                >
                  <p>{link.label}</p>
                  <ChevronDown />
                  {isHovering && (
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 pt-6 cursor-default">
                      <div className="w-[300px] bg-white flex flex-col gap-2 py-4 px-4 rounded-2xl">
                        {link.sub.map((sub) => (
                          <Link
                            key={sub.label}
                            href={sub.link}
                            className={cn(
                              "hover:bg-gray-50 rounded-md",
                              isActive(sub.link) && "bg-gray-100",
                            )}
                          >
                            <div
                              className={cn(
                                "flex flex-row items-center gap-2 p-2 rounded-md text-black",
                              )}
                            >
                              <div
                                className={cn(
                                  "w-10 h-10 flex items-center justify-center rounded-full",
                                  sub.color,
                                )}
                              >
                                <Image
                                  src={sub.icon}
                                  className="w-6 h-6"
                                  alt="icon"
                                />
                              </div>
                              <p>{sub.label}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </button>
              )}
            </li>
          ))}
        </ul>
        <Link
          href="/get-a-quote"
          className="w-[170px] h-[50px] flex items-center justify-center rounded-full bg-white text-sona-blue hover:bg-sona-blue hover:text-white duration-150"
        >
          Get a Quote
        </Link>
      </div>
    </header>
  );
};

export default Header;
