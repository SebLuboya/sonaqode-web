import React from "react";
import * as industry from "@/assets/icons/industries";
import Image from "next/image";

const Industries = () => {
  const data = [
    {
      title: "Healthcare",
      icon: industry.Healthcare,
    },
    {
      title: "Real Estate",
      icon: industry.RealEstate,
    },
    {
      title: "Information Technology",
      icon: industry.Technology,
    },
    {
      title: "Banking & Finance",
      icon: industry.Financial,
    },
    {
      title: "Media & Entertainment",
      icon: industry.Media,
    },
    {
      title: "Utilities & Trade Contractors",
      icon: industry.Trade,
    },
  ];

  return (
    <section className="pt-16 lg:pt-28 px-5">
      <div className="relative w-full max-w-[1260px] min-h-[650px] mx-auto pt-16 lg:py-14 p-4 rounded-[50px] lg:rounded-[100px] bg-sona-lightBlue">
        <div className="w-full lg:max-w-[1100px] mx-auto flex flex-col items-center">
          <h2 className="font-clash text-3xl lg:text-[50px] text-center font-semibold lg:leading-[60px]">
            Industries
          </h2>
          <p className="text-gray-600 text-sm lg:text-base text-center font-light max-w-[920px] leading-5 mt-3">
            We provide tailored staffing solutions designed to meet the distinct
            challenges of your sector.
          </p>
          <div className="max-w-[826px] w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 place-items-center mt-14 gap-5 lg:gap-12">
            {data.map((item, index) => (
              <div
                key={index}
                className="w-[200px] h-auto aspect-[20/17] flex flex-col items-center justify-center gap-4 bg-white hover:border hover:border-sona-blue hover:scale-[1.05] duration-150 rounded-2xl"
              >
                <Image src={item.icon} className="w-11 h-11" alt="icon" />
                <h3 className="text-lg text-sona-blue font-medium text-center">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
