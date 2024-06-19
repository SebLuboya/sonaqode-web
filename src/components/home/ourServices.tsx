"use client";
import {
  CyberSecurity,
  DataAnalytics,
  SoftwareDevelopment,
} from "@/assets/images";
import { cn } from "@/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const services = [
  {
    label: "Software Developement",
    image: SoftwareDevelopment,
    desc: "At Sonaqode, we understand that developing robust and scalable software solutions is the backbone of every successful business. That's why we offer you access to our talented and highly skilled software engineers.",
    link: "/services/software-development",
    color: "bg-sona-lightPurple",
    btncolor: "bg-sona-midPurple",
  },
  {
    label: "Data & Analytics",
    image: DataAnalytics,
    desc: "At Sonaqode, we offer you the expertise of our talented data scientists, who can help you unlock the full potential of your data and derive actionable insights to drive business growth.",
    link: "/services/data-analytics",
    color: "bg-sona-lightPink",
    btncolor: "bg-sona-midPink",
  },
  {
    label: "Cyber Security",
    image: CyberSecurity,
    desc: "At Sonaqode we offer top-tier cybersecurity specialists who are dedicated to safeguarding your company's digital assets, minimizing the risk of cyber threats, and ensuring the confidentiality and integrity of your data.",
    link: "/services/cyber-security",
    color: "bg-sona-lightGreen",
    btncolor: "bg-sona-midGreen",
  },
];

const OurServices = () => {
  return (
    <section className="flex flex-col items-center gap-8 pt-28">
      <h2 className="font-clash text-[50px] font-semibold leading-[60px]">
        Our Services
      </h2>
      <div className="relative w-full max-w-[1210px] mx-auto flex flex-row justify-between">
        {services.map((service) => (
          <div
            key={service.label}
            className={cn(
              "relative flex w-full h-auto max-w-[30%] flex-col aspect-[4/5] rounded-[10%] overflow-clip",
              service.color,
            )}
          >
            <motion.div
              whileHover={{
                translateY: "-50%",
              }}
              transition={{
                type: "tween",
                duration: 0.2,
              }}
              className="absolute flex flex-col w-full h-full"
            >
              <div className="w-full shrink-0 h-4/5">
                <Image
                  src={service.image}
                  alt="swe"
                  className="w-full h-full object-cover"
                  placeholder="blur"
                />
              </div>
              <div className={cn("w-full shrink-0 h-[70%]", service.color)}>
                <div className="w-full h-[28.6%] flex items-center justify-center">
                  <p className="text-xl font-medium">{service.label}</p>
                </div>
                <div className="flex flex-col items-center h-[71.4%] justify-between px-7 pb-7">
                  <p className="text-sm text-center">{service.desc}</p>
                  <Link
                    href={service.link}
                    className={cn(
                      "flex items-center justify-center w-[160px] h-12 rounded-full text-white",
                      service.btncolor,
                    )}
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurServices;