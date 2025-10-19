"use client";
import { useInView } from "motion/react";
import React, { useRef, useState } from "react";
import { AnimatedNumber } from "../misc/AnimatedNumber";

const Metrics = () => {
  const [value, setValue] = useState({
    per: 0,
    pool: 0,
  });
  const ref = useRef(null);
  const isInView = useInView(ref);

  if (isInView && value.per === 0 && value.pool === 0) {
    setValue({
      per: 100,
      pool: 5000,
    });
  }
  return (
    <section className="pt-12 lg:pt-20 px-5">
      <div
        ref={ref}
        className="w-full lg:max-w-[1260px] mx-auto grid grid-rows-3 md:grid-cols-3 md:grid-rows-1 gap-10 px-5 py-12 rounded-[30px] overflow-clip bg-sona-lightBlue text-white"
      >
        <div className="flex-1 flex flex-col items-center justify-center text-sona-blue">
          <h1 className="font-semibold text-4xl font-clash">
            <AnimatedNumber
              springOptions={{
                bounce: 0,
                duration: 3000,
              }}
              value={value.per}
            />
            %
          </h1>
          <p className="text-center text-sm w-[270px] font-light">
            of our professionals are fluent in English, ensuring clear and
            effective communication thoughout.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-sona-blue">
          <h1 className="font-semibold text-4xl font-clash">
            <AnimatedNumber
              springOptions={{
                bounce: 0,
                duration: 3000,
              }}
              value={value.per}
            />
            %
          </h1>
          <p className="text-center text-sm w-[270px] font-light">
            of our talent are university graduates with a minimum of three years
            of industry experience.
          </p>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center text-sona-blue">
          <h1 className="font-semibold text-4xl font-clash">
            <AnimatedNumber
              springOptions={{
                bounce: 0,
                duration: 2500,
              }}
              value={value.pool}
            />
            +
          </h1>
          <p className="text-center text-sm w-[270px] font-light">
            talent pool of professionals from across Africa
          </p>
        </div>
      </div>
    </section>
  );
};

export default Metrics;
