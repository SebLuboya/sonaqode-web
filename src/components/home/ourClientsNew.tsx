"use client";
import React, { useState } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { cn } from "@/utils";
import { clientData } from "@/components/home/clientData";
import Image from "next/image";
import ReactCountryFlag from "react-country-flag";

const OurClientsNew = () => {
  const [offset, setOffset] = useState(0);

  return (
    <section className="py-16 lg:py-28 px-5">
      <div className="relative w-full lg:max-w-[1260px] lg:min-h-[650px] mx-auto py-8 lg:py-16 px-4 rounded-[50px] lg:rounded-[100px] bg-sona-lightBlue">
        <div className="w-full lg:max-w-[890px] mx-auto flex flex-col items-center">
          <h2 className="font-clash text-3xl lg:text-[50px] font-semibold leading-[60px]">
            What Our Clients Say
          </h2>
          <p className="text-sm lg:text-base text-gray-600 text-center font-light mt-3">
            The trust, quality, and satisfaction echoed in our client
            testimonials define the experience of partnering with us. Explore
            and discover the standard of excellence we deliver.
          </p>
        </div>

        <div className="relative flex flex-row w-full justify-start items-stretch mt-16 overflow-clip pt-[97.5px] scrollbar-none">
          <button
            disabled={offset === 0}
            onClick={() => {
              setOffset((prev) => prev - 1);
            }}
            className="absolute top-0 left-5 w-12 h-12 flex items-center justify-center rounded bg-white text-sona-blue disabled:opacity-60 hover:shadow-xl shadow-black/30 duration-100"
          >
            <ArrowLeft />
          </button>
          <button
            disabled={clientData.length % 3 === offset}
            onClick={() => {
              setOffset((prev) => prev + 1);
            }}
            className="absolute top-0 right-5 w-12 h-12 hidden lg:flex items-center justify-center rounded bg-white text-sona-blue disabled:opacity-60 hover:shadow-xl shadow-black/30 duration-100"
          >
            <ArrowRight />
          </button>
          <button
            disabled={clientData.length - 1 === offset}
            onClick={() => {
              setOffset((prev) => prev + 1);
            }}
            className="absolute top-0 right-5 w-12 h-12 flex lg:hidden items-center justify-center rounded bg-white text-sona-blue disabled:opacity-60 hover:shadow-xl shadow-black/30 duration-100"
          >
            <ArrowRight />
          </button>
          {clientData.map((item, i) => (
            <div
              key={i}
              style={{
                transform: `translateX(calc(${offset * -100}% - ${offset * 16}px))`,
              }}
              className={cn(
                "flex shrink-0 flex-col gap-3 relative bg-white rounded-[50px] w-[calc(100%)] lg:w-[calc(33.33333%-11.5px)] mr-4 px-6 pb-14 duration-300",
              )}
            >
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115px] h-[115px] justify-center items-center p-3 bg-[#EFF4FF] rounded-full">
                <Image
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full rounded-full object-contain"
                />
              </div>
              <div className="flex flex-row justify-between mt-20">
                <div className="flex flex-col">
                  <p className="font-semibold text-xl">{item.name}</p>
                  <p className="text-sm">{item.position}</p>
                </div>
                <p className="text-sm">
                  {item.country}
                  <span>
                    <ReactCountryFlag countryCode={item.countryCode} svg />
                  </span>
                </p>
              </div>
              <p className="text-sm leading-[26px] text-[#667085] font-light">
                {item.review}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default OurClientsNew;
