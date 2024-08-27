import React from "react";
import ArrowLeft from "@/assets/icons/glyphs/ArrowLeft";

const Subscribe = ({
  service,
}: {
  service: {
    price: number;
    partTime?: number;
  };
}) => {
  return (
    <section className="relative pt-12 lg:pt-16 px-5">
      <section id="subscribe" className="absolute -top-24"></section>
      <div className="relative w-full max-w-[1260px] mx-auto pt-16 lg:py-14 p-4 rounded-[50px] lg:rounded-[70px] bg-sona-lightdBlue">
        <div className="w-full lg:max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
          <div className="flex flex-col">
            <h2 className="font-clash text-3xl lg:text-[40px] text-center font-medium lg:leading-[50px] text-sona-blue">
              Subscribe
            </h2>
            <ArrowLeft className="hidden lg:block h-16" />
          </div>
          <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-12">
            <div className="h-[160px] w-full lg:w-[396px] flex flex-col items-center justify-center bg-white p-3 lg:p-8 gap-2.5 lg:gap-5 rounded-[40px]">
              <p className="text-lg lg:text-2xl font-semibold text-sona-blue">
                Full Time <span className="text-sm">(40 hours/week)</span>
              </p>
              <p className="text-[22px] lg:text-2xl font-semibold text-sona-blue">
                {
                  service.price
                    .toLocaleString("en-US", {
                      style: "currency",
                      currency: "GBP",
                    })
                    .split(".")[0]
                }{" "}
                / Month + VAT
              </p>
            </div>
            {service.partTime && (
              <div className="h-[160px] w-full lg:w-[396px] flex flex-col items-center justify-center bg-white p-3 lg:p-8 gap-2.5 lg:gap-5 rounded-[40px]">
                <p className="text-lg lg:text-2xl font-semibold text-sona-blue">
                  Part Time <span className="text-sm">(20 hours/week)</span>
                </p>
                <p className="text-[22px] lg:text-2xl font-semibold text-sona-blue">
                  {
                    service.partTime
                      .toLocaleString("en-US", {
                        style: "currency",
                        currency: "GBP",
                      })
                      .split(".")[0]
                  }{" "}
                  / Month + VAT
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Subscribe;
