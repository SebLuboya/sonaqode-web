import React from "react";

const Subscribe = ({
  service,
}: {
  service: {
    price: number;
    partTime?: number;
  };
}) => {
  return (
    <section id="subscribe" className="pt-12 lg:pt-16 px-5">
      <div className="relative w-full max-w-[1260px] mx-auto pt-16 lg:py-14 p-4 rounded-[50px] lg:rounded-[70px] bg-sona-lightdBlue">
        <div className="w-full lg:max-w-[1100px] mx-auto flex flex-col lg:flex-row items-center justify-center gap-10">
          <h2 className="font-clash text-3xl lg:text-[40px] text-center font-medium lg:leading-[50px] text-sona-blue">
            Subscribe
          </h2>
          <div className="flex flex-col lg:flex-row items-center justify-center gap-5 lg:gap-12">
            <div className="h-[160px] w-[396px] flex flex-col items-center justify-center bg-white p-8 gap-5 rounded-[40px]">
              <p className="text-2xl font-semibold text-sona-blue">Full Time</p>
              <p className="text-2xl font-semibold text-sona-blue">
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
              <div className="h-[160px] w-[396px] flex flex-col items-center justify-center bg-white p-8 gap-5 rounded-[40px]">
                <p className="text-2xl font-semibold text-sona-blue">
                  Full Time
                </p>
                <p className="text-2xl font-semibold text-sona-blue">
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
