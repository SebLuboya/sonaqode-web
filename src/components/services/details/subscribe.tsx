"use client";
import React from "react";
import ArrowLeft from "@/assets/icons/glyphs/ArrowLeft";
import Dialog from "@/components/misc/dialog";
import SubscribeModal from "./subscribeModal";

const Subscribe = ({
  service,
}: {
  service: {
    title: string;
    price: number;
    partTime?: number;
    paymentLink?: {
      fullTime: string;
      partTime: string;
    };
  };
}) => {
  return (
    <section className="relative pt-12 lg:pt-16 px-5">
      <section id="subscribe" className="absolute -top-24"></section>
      <div className="relative w-full max-w-[1260px] mx-auto pt-16 lg:py-14 p-4 rounded-[50px] lg:rounded-[70px] bg-sona-lightdBlue">
        <div className="w-full lg:max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="flex flex-col w-fit ">
            <h2 className="font-clash text-3xl lg:text-[40px] text-center font-medium lg:leading-[50px] text-sona-blue">
              Subscribe
            </h2>
            <ArrowLeft className="hidden lg:block h-16" />
          </div>
          <div className="w-full lg:w-fit flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-12">
            <Dialog
              dialogChild={({ onClose }) => (
                <SubscribeModal
                  onClose={onClose}
                  service={{
                    title: service.title + " (Full Time)",
                    price: service.price,
                    link: service.paymentLink?.fullTime || "",
                  }}
                />
              )}
            >
              <button className="h-[160px] w-full lg:w-[396px] flex flex-col items-center justify-center bg-white hover:bg-sona-blue text-sona-blue hover:text-white p-3 lg:p-8 gap-2.5 lg:gap-5 rounded-[40px] duration-100">
                <p className="text-lg lg:text-2xl font-semibold">
                  Full Time <span className="text-sm">(40 hours/week)</span>
                </p>
                <p className="text-[22px] lg:text-2xl font-semibold">
                  {
                    service.price
                      .toLocaleString("en-US", {
                        style: "currency",
                        currency: "GBP",
                      })
                      .split(".")[0]
                  }{" "}
                  / Month
                </p>
              </button>
            </Dialog>
            {service.partTime && (
              <Dialog
                dialogChild={({ onClose }) => (
                  <SubscribeModal
                    onClose={onClose}
                    service={{
                      title: service.title + " (Part Time)",
                      price: service.partTime ?? 0,
                      link: service.paymentLink?.partTime || "",
                    }}
                  />
                )}
              >
                <button className="h-[160px] w-full lg:w-[396px] flex flex-col items-center justify-center bg-white hover:bg-sona-blue text-sona-blue hover:text-white p-3 lg:p-8 gap-2.5 lg:gap-5 rounded-[40px] duration-100">
                  <p className="text-lg lg:text-2xl font-semibold">
                    Part Time <span className="text-sm">(20 hours/week)</span>
                  </p>
                  <p className="text-[22px] lg:text-2xl font-semibold">
                    {
                      service.partTime
                        .toLocaleString("en-US", {
                          style: "currency",
                          currency: "GBP",
                        })
                        .split(".")[0]
                    }{" "}
                    / Month
                  </p>
                </button>
              </Dialog>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
