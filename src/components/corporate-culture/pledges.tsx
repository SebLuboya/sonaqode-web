"use client";
import { Sdg1, Sdg2, Sdg3, Sdg4 } from "@/assets/images";
import { AnimatePresence, LayoutGroup, motion } from "framer-motion";
import Image from "next/image";
import React, { useState } from "react";

const data = [
  {
    label: "SDG 8",
    sublabel: "Decent Work and Economic Growth",
    desc: "At the core of our organisation are people, and their well-being is our utmost priority. We strive to foster open discussions about mental health, promote work-life balance, incentivize healthy habits, and engage you with exciting wellness initiatives.",
    image: Sdg1,
  },
  {
    label: "SDG 3",
    sublabel: "Good Health and Wellbeing",
    desc: "At the core of our organisation are people, and their well-being is our utmost priority. We strive to foster open discussions about mental health, promote work-life balance, incentivize healthy habits, and engage you with exciting wellness initiatives.",
    image: Sdg2,
  },
  {
    label: "SDG 5",
    sublabel: "Gender Equality",
    desc: "We position ourselves as a progressive company and actively champion gender equality by promoting women's participation in the workforce and leadership roles. Fostering a diverse and inclusive workplace broadens perspectives, stimulates innovation, and enhances  problem-solving capabilities within the company.",
    image: Sdg3,
  },
  {
    label: "SDG 10",
    sublabel: "Reduced Inequalities",
    desc: "We aim to create equal opportunities by educating youth about digital careers and providing mentorship to job seekers from underprivileged backgrounds, thereby leveling the playing field.",
    image: Sdg4,
  },
];

const Pledges = () => {
  return (
    <section className="pt-16 lg:pt-28 px-5">
      <div className="relative w-full max-w-[1260px] min-h-[650px] mx-auto pt-16 lg:py-14 p-4 rounded-[50px] lg:rounded-[100px] bg-sona-lightBlue">
        <div className="w-full lg:max-w-[1000px] mx-auto flex flex-col items-center">
          <h2 className="font-clash text-3xl lg:text-[50px] text-center font-semibold lg:leading-[60px]">
            Pledges
          </h2>
          <p className="text-gray-600 text-sm lg:text-base text-center font-light text-balance leading-5 mt-3">
            Our company&apos;s commitments are aligned with several United
            Nations Sustainable Development Goals (SDGs), a set of 17 objectives
            designed to promote global peace and prosperity.
          </p>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 mt-14 gap-5 lg:gap-12">
            {data.map((pledge) => (
              <PledgeBox {...pledge} key={pledge.label} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const PledgeBox = (pledge: (typeof data)[0]) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <motion.div
      onHoverStart={() => setIsHovering(true)}
      onHoverEnd={() => setIsHovering(false)}
      onTap={() => setIsHovering(!isHovering)}
      className="group relative w-full min-h-[320px] bg-white flex flex-col rounded-[40px] overflow-clip p-8 gap-5"
    >
      <Image
        src={pledge.image}
        className="w-full h-full object-cover absolute top-0 left-0 z-0"
        alt="icon"
        placeholder="blur"
      />
      <div className="absolute flex flex-col text-white text-center text-balance px-4 items-center justify-center gap-4 top-0 left-0 w-full h-full bg-black/30 z-[1]">
        <AnimatePresence mode="wait">
          {isHovering ? (
            <LayoutGroup>
              <motion.p
                key={`${pledge.label}-lab`}
                layout
                className="font-clash font-semibold text-4xl lg:text-5xl"
              >
                {pledge.label}
              </motion.p>
              <motion.div
                key={pledge.desc}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                }}
                className="font-light"
              >
                {pledge.desc}
              </motion.div>
            </LayoutGroup>
          ) : (
            <LayoutGroup>
              <motion.p
                key={`${pledge.label}-lab`}
                layout
                className="font-clash font-semibold text-4xl lg:text-5xl"
              >
                {pledge.label}
              </motion.p>
              <motion.div
                key={pledge.sublabel}
                initial={{
                  opacity: 0,
                  y: 10,
                }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                }}
                className="text-xl lg:text-[28px]"
              >
                {pledge.sublabel}
              </motion.div>
            </LayoutGroup>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default Pledges;
