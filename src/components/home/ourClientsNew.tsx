"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/utils";

const data = [
  {
    name: "John Doe",
    position: "CEO, Company",
    review: "",
    country: "",
  },
  {
    name: "John Doe",
    position: "CEO, Company",
    review: "",
    country: "",
  },
  {
    name: "John Doe",
    position: "CEO, Company",
    review: "",
    country: "",
  },
  {
    name: "John Doe",
    position: "CEO, Company",
    review: "",
    country: "",
  },
];

const OurClientsNew = () => {
  const [offset, setOffset] = useState(false);

  return (
    <section className="py-16 lg:py-28 px-5">
      <div className="relative w-full lg:max-w-[1260px] lg:min-h-[650px] mx-auto py-8 lg:py-16 px-4 rounded-[50px] lg:rounded-[100px] bg-sona-lightBlue">
        <div className="w-full lg:max-w-[890px] mx-auto flex flex-col items-center">
          <h2 className="font-clash text-3xl lg:text-[50px] font-semibold leading-[60px]">
            What Our Clients Say
          </h2>
          <p className="text-sm lg:text-base text-gray-600 text-center font-light mt-3">
            Our testimonials highlight the trust, quality, and satisfaction that
            define our work. Discover why our clients choose us to deliver
            excellence.
          </p>
        </div>

        <div className="relative flex flex-row w-full justify-between items-center mt-24 overflow-clip pt-[97.5px] overflow-x-scroll scrollbar-none">
          <button
            disabled={!offset}
            onClick={() => {
              setOffset(false);
            }}
            className="absolute top-0 left-5 w-12 h-12 flex items-center justify-center rounded bg-white text-sona-blue disabled:opacity-60 hover:shadow-xl shadow-black/30 duration-100"
          >
            <ArrowLeft />
          </button>
          <button
            disabled={offset}
            onClick={() => {
              setOffset(true);
            }}
            className="absolute top-0 right-5 w-12 h-12 flex items-center justify-center rounded bg-white text-sona-blue disabled:opacity-60 hover:shadow-xl shadow-black/30 duration-100"
          >
            <ArrowRight />
          </button>
          {data.map((item, i) => (
            <div
              key={i}
              className={cn(
                "flex shrink-0 flex-col gap-3 relative bg-white rounded-[50px] w-[calc(33%-7px)] mr-4 px-6 pb-14 duration-150",
                offset && "-translate-x-[calc(100%+16px)]",
              )}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115px] h-[115px] justify-center items-center p-3 bg-[#EFF4FF] rounded-full"></div>
              <div className="flex flex-row justify-between mt-20">
                <div className="flex flex-col">
                  <p className="font-semibold text-xl">Fizel Nejabat {i}</p>
                  <p className="text-sm">CEO, Performr Group ltd</p>
                </div>
                <p className="text-sm">UK 🇬🇧</p>
              </div>
              <p className="text-sm leading-[26px] text-[#667085] font-light">
                I approached Sonaqode with a tight timeline to develop version 1
                of our MVP. From the outset of the onboarding process, I was
                immediately impressed by their professionalism and thoroughness.
                They selected the most suitable candidates who demonstrated a
                clear understanding of our requirements and delivered on them
                effectively, maintaining excellent communication throughout. We
                were thrilled with the quality of the product delivered and are
                now collaborating on version 2.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurClientsNew;
