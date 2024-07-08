"use client";
import { Chart, Code, Password, SonaqodeDarkIcon } from "@/assets/icons";
import ChevronDown from "@/assets/icons/glyphs/ChevronDown";
import CloseIcon from "@/assets/icons/glyphs/CloseIcon";
import Menu from "@/assets/icons/glyphs/Menu";
import { cn } from "@/utils";
import { AnimatePresence, motion } from "framer-motion";
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
    label: "Services",
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
  const [isOpen, setIsOpen] = useState(false);
  const [isHovering, setIsHovering] = useState(false);
  const path = usePathname();
  const isActive = (link: string) => path === link;

  return (
    <header className="fixed top-0 z-10 w-full pt-4 lg:pt-8 px-4 lg:px-6">
      <div className="w-full max-w-[1280px] mx-auto h-20 md:h-24 xl:h-28 flex flex-row items-center justify-between px-4 md:px-6 lg:px-8 bg-black/60 rounded-3xl text-white backdrop-blur-md">
        <Link href="/">
          <Image
            src={SonaqodeDarkIcon}
            className="h-14 xl:h-[70px] w-auto"
            alt="sonaqode-dark-icon"
          />
        </Link>
        <ul className="hidden lg:flex flex-row gap-4 lg:gap-7 items-center">
          {links.map((link) => (
            <li
              key={link.label}
              className={cn(
                "text-sm flex flex-row items-center gap-1 hover:text-[#c5e0ff] duration-100 cursor-pointer",
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
                  <p className="">{link.label}</p>
                  <ChevronDown />
                  <AnimatePresence>
                    {isHovering && (
                      <motion.div
                        initial={{
                          opacity: 0,
                          top: 16,
                        }}
                        animate={{
                          opacity: 1,
                          top: 8,
                        }}
                        exit={{
                          opacity: 0,
                          top: 16,
                        }}
                        transition={{
                          duration: 0.13,
                        }}
                        className="absolute top-2 left-1/2 -translate-x-1/2 pt-6 cursor-default"
                      >
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
                      </motion.div>
                    )}
                  </AnimatePresence>
                </button>
              )}
            </li>
          ))}
        </ul>
        <Link
          href="/get-a-quote"
          className="w-[150px] xl:w-[170px] h-11 xl:h-[50px] hidden lg:flex items-center justify-center rounded-full bg-white text-sona-blue hover:bg-sona-blue hover:text-white duration-150"
        >
          Get a Quote
        </Link>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="flex lg:hidden"
        >
          <Menu />
        </button>
      </div>
      <motion.div
        initial={{
          x: isOpen ? "0%" : "100%",
        }}
        animate={{
          x: isOpen ? "0%" : "100%",
        }}
        transition={{
          type: "just",
        }}
        className="fixed top-0 left-0 w-screen h-screen flex flex-col p-9 gap-4 bg-sona-lightBlue text-sona-blue"
      >
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="absolute right-6 top-6"
        >
          <CloseIcon />
        </button>
        {links.map((link) => (
          <li
            key={link.label}
            className={cn(
              "flex flex-row items-center gap-1 hover:text-[#0E6BA4] duration-75 cursor-pointer",
              isActive(link.link ?? "none") && "text-[#0E6BA4]",
            )}
          >
            {link.sub === undefined ? (
              <Link
                onClick={() => setIsOpen(false)}
                className="min-h-8 w-full flex items-center"
                href={link.link}
              >
                {link.label}
              </Link>
            ) : (
              <button
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
                className="relative flex flex-col min-h-8 w-full gap-1"
              >
                <div className="flex flex-row items-center gap-1">
                  <p className="">{link.label}</p>
                  <ChevronDown className="w-5 h-5" />
                </div>

                <div className="flex flex-col gap-1 pl-4">
                  {link.sub.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.link}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "hover:bg-sona-blue/10 rounded-md",
                        isActive(sub.link) && "bg-sona-blue/10",
                      )}
                    >
                      <div
                        className={cn(
                          "flex flex-row items-center gap-2 p-2 rounded-md",
                        )}
                      >
                        <div
                          className={cn(
                            "w-9 h-9 flex items-center justify-center rounded-full",
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
              </button>
            )}
          </li>
        ))}
        <Link
          href="/get-a-quote"
          onClick={() => setIsOpen(false)}
          className="w-[170px] h-[50px] flex items-center justify-center mt-6 rounded-full hover:bg-white hover:text-sona-blue bg-sona-blue text-white duration-150 "
        >
          Get a Quote
        </Link>
      </motion.div>
    </header>
  );
};

export default Header;
