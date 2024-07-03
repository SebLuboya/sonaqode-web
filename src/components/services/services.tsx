import React from "react";
import { cn } from "@/utils";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import Button from "@/components/misc/button";

const Services = ({
  sectionTitle = "Software Development",
  data = [],
}: {
  sectionTitle?: string;
  data?: {
    title: string;
    description: string;
    price: number;
    icon: StaticImageData;
    list: string[];
  }[];
}) => {
  return (
    <section className="flex flex-col items-center gap-8 px-5 pt-24 lg:pt-28">
      <h2 className="font-clash text-2xl lg:text-[50px] text-center font-semibold lg:leading-[60px]">
        {`${sectionTitle} Services`}
      </h2>
      <div className="relative w-full lg:max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-3 place-items-center gap-11 lg:flex-row">
        {data.map((service) => (
          <div key={service.title} className="pt-20 h-full">
            <div
              className={cn(
                "relative w-full h-full flex flex-col px-5 pb-5 pt-20 gap-5 items-center max-w-[400px] rounded-[10%] bg-sona-lightBlue",
              )}
            >
              <div className="absolute w-[120px] h-[120px] top-0 -translate-y-1/2">
                <Image
                  src={service.icon}
                  alt="swe"
                  className="w-full h-full object-contain"
                  placeholder="blur"
                />
              </div>
              <div className="w-fit h-12 flex items-center justify-center px-4 rounded-full bg-sona-blue">
                <p className="text-white">
                  {
                    service.price
                      .toLocaleString("en-US", {
                        style: "currency",
                        currency: "GBP",
                      })
                      .split(".")[0]
                  }{" "}
                  / MONTH
                </p>
              </div>
              <div className="w-full flex flex-col gap-1.5">
                <p className="font-medium text-xl">{service.title}</p>
                <p className="font-light">{service.description}</p>
              </div>
              <div className="flex flex-1 items-end">
                <Button>View</Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;
