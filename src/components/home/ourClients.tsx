"use client";
import { OurClients1, OurClients2 } from "@/assets/images";
import Image from "next/image";
import React from "react";

const clients = [
  {
    label: "Startups & Small Businesses",
    sublabel: "We help you expand your workforce quickly and affordably",
    image: OurClients1,
  },
  {
    label: "Medium & Large Businesses",
    sublabel:
      "We help address technical challenges with efficient and effective results",
    image: OurClients2,
  },
];

const OurClients = () => {
  return (
    <section className="py-16 lg:py-28 px-5">
      <div className="relative w-full lg:max-w-[1260px] lg:min-h-[650px] mx-auto py-8 lg:py-16 px-4 rounded-[50px] lg:rounded-[100px] bg-sona-lightBlue">
        <div className="w-full lg:max-w-[986px] mx-auto flex flex-col items-center">
          <h2 className="font-clash text-3xl lg:text-[50px] font-semibold leading-[60px]">
            Our Clients
          </h2>
          <p className="text-sm lg:text-base text-gray-600 text-center text-balance font-light mt-3">
            Our goal is to establish the relationships of mutual trust. We
            support clients from all industries, understanding their unique
            challenges and requirements faced throughout business stages.
          </p>
          <div className="flex flex-col lg:flex-row items-center lg:items-start w-full gap-6 lg:gap-10 my-8 lg:my-16">
            {clients.map((item) => (
              <div
                key={item.label}
                className="relative flex flex-1 w-full max-w-[400px] lg:max-w-[600px] aspect-[530/390] bg-emerald-600 rounded-2xl lg:rounded-[50px] overflow-clip"
              >
                <Image
                  src={item.image}
                  className="object-cover"
                  layout="fill"
                  alt="clint"
                  placeholder="blur"
                />
                <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-end gap-1.5 pb-16 bg-black/50 text-white opacity-0 hover:opacity-100 duration-200">
                  <p className="font-clash text-center font-medium text-lg lg:text-2xl">
                    {item.label}
                  </p>
                  <p className="font-light text-sm text-center">
                    {item.sublabel}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button className="w-[190px] h-[60px] rounded-full hover:bg-white hover:text-sona-blue bg-sona-blue text-white duration-150">
            Let&apos;s Connect
          </button>
        </div>
      </div>
    </section>
  );
};

export default OurClients;
