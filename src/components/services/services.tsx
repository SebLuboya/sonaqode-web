"use client";
import React, { useState } from "react";
import { cn } from "@/utils";
import Image, { StaticImageData } from "next/image";
import Button from "@/components/misc/button";
import Checkicon from "@/assets/icons/glyphs/Checkicon";
import { AnimatePresence, motion } from "framer-motion";

const Services = ({
  sectionTitle = "Software Development",
  data = [],
}: {
  sectionTitle?: string;
  data?: {
    title: string;
    description: string;
    price: number;
    partTime?: number;
    icon: StaticImageData;
    list: string[];
  }[];
}) => {
  const [showModal, setShowModal] = useState("");

  return (
    <section
      id="services"
      className="flex flex-col items-center gap-8 px-5 pt-24 lg:pt-28"
    >
      <h2 className="font-clash text-2xl lg:text-[50px] text-center font-semibold lg:leading-[60px]">
        {`${sectionTitle} Services`}
      </h2>
      <div className="relative w-full lg:max-w-[1260px] mx-auto grid grid-cols-1 lg:grid-cols-3 place-items-center gap-11 lg:flex-row">
        {data.map((service) => (
          <div key={service.title} className="pt-20 h-full">
            <AnimatePresence>
              {showModal === service.title && (
                <motion.div
                  initial={{
                    opacity: 0,
                  }}
                  animate={{
                    opacity: 1,
                  }}
                  exit={{
                    opacity: 0,
                  }}
                  className="fixed top-0 left-0 w-screen h-screen z-30"
                >
                  <div
                    onClick={() => setShowModal("")}
                    className="absolute top-0 left-0 w-full h-full bg-black/30 z-[30]"
                  ></div>
                  <ServiceInfoCard
                    service={service}
                    setShowModal={setShowModal}
                  />
                </motion.div>
              )}
            </AnimatePresence>
            <div
              className={cn(
                "relative w-full h-full flex flex-col px-5 pb-5 pt-20 gap-5 items-center max-w-[400px] rounded-[50px] bg-sona-lightBlue",
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
                <Button
                  onClick={() => {
                    setShowModal(service.title);
                  }}
                >
                  View
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Services;

const ServiceInfoCard = ({
  service,
  setShowModal,
}: {
  service: {
    title: string;
    description: string;
    price: number;
    partTime?: number;
    icon: StaticImageData;
    list: string[];
  };
  setShowModal: (value: string) => void;
}) => {
  const [activeTab, setActiveTab] = useState("40");

  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[calc(100vw-20px)] md:max-w-[500px] xl:max-w-[600px] flex flex-col items-center pb-10 pt-5 px-4 lg:px-0 rounded-[50px] bg-sona-lightBlue z-[32]">
      <Image
        src={service.icon}
        alt="swe"
        className="w-20 xl:w-36 h-20 xl:h-36 object-contain"
        placeholder="blur"
      />
      <p className={"text-base xl:text-xl font-medium"}>{service.title}</p>
      {service.partTime && (
        <div className="flex flex-row w-full md:w-[440px] xl:w-[470px] my-2">
          <button
            onClick={() => {
              setActiveTab("40");
            }}
            className={cn(
              "flex flex-1 items-center justify-center py-2 border-b-2 text-sm xl:text-base font-light duration-150",
              activeTab === "40" ? "border-sona-blue" : "border-white",
            )}
          >
            Full time (40 hours/week)
          </button>
          <button
            onClick={() => {
              setActiveTab("20");
            }}
            className={cn(
              "flex flex-1 items-center justify-center py-2 border-b-2 text-sm xl:text-base font-light duration-150",
              activeTab === "20" ? "border-sona-blue" : "border-white",
            )}
          >
            Part time (20 hours/week)
          </button>
        </div>
      )}
      <p className={"text-xl xl:text-3xl font-medium my-4"}>
        {" "}
        {
          service[activeTab === "40" ? "price" : "partTime"]!.toLocaleString(
            "en-US",
            {
              style: "currency",
              currency: "GBP",
            },
          ).split(".")[0]
        }{" "}
        / Month + VAT
      </p>
      <div className={"flex flex-col gap-2 w-full md:w-[440px] xl:w-[470px]"}>
        {service.list.map((item) => {
          const [title, ...rest] = item.split(":");
          return (
            <div key={item} className="flex flex-row items-center gap-4">
              <Checkicon
                className={cn("w-5 xl:w-6 h-5 xl:h-6 shrink-0 text-sona-blue")}
              />
              <p className="font-light text-sm xl:text-base">
                <span className={"font-medium"}>{title}</span>: {rest}
              </p>
            </div>
          );
        })}
      </div>
      <Button
        className={"mt-6"}
        onClick={() => {
          setShowModal("");
        }}
      >
        Subscribe
      </Button>
    </div>
  );
};
