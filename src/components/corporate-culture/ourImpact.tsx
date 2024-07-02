import {
  CoinsHand,
  Comm1,
  Comm2,
  Comm3,
  Comm4,
  Education,
  Globe,
  Pin,
} from "@/assets/images";
import Image from "next/image";
import React from "react";

const data = [
  {
    label: "Culture",
    icon: Globe,
    image: Comm1,
  },
  {
    label: "Education",
    icon: Education,
    image: Comm2,
  },
  {
    label: "Sports",
    icon: Pin,
    image: Comm3,
  },
  {
    label: "Charity",
    icon: CoinsHand,
    image: Comm4,
  },
];

const OurImpact = () => {
  return (
    <section className="pt-16 lg:pt-28 px-5">
      <div className="relative w-full max-w-[1260px] min-h-[650px] mx-auto pt-16 lg:py-14 p-4 rounded-[50px] lg:rounded-[100px] bg-sona-lightBlue">
        <div className="w-full lg:max-w-[1000px] mx-auto flex flex-col items-center">
          <h2 className="font-clash text-3xl lg:text-[50px] text-center font-semibold lg:leading-[60px]">
            Our Impact On community
          </h2>
          <p className="text-gray-600 font-light text-sm lg:text-base text-center leading-5 mt-3">
            Only through collaborative efforts can we generate a ripple effect
            of prosperity and well-being for all members of the communities we
            impact. We accomplish this by actively supporting individuals and
            communities in these areas.
          </p>
          <div className="w-full grid grid-cols-1 lg:grid-cols-2 lg:grid-rows-2 mt-14 gap-5 lg:gap-12">
            {data.map((impact) => (
              <div
                key={impact.label}
                className="group relative w-full min-h-[250px] lg:min-h-[320px] bg-white flex flex-col rounded-[40px] overflow-clip p-8 gap-5"
              >
                <Image
                  src={impact.image}
                  className="w-full h-full object-cover absolute top-0 left-0 z-0"
                  alt="image bg"
                  placeholder="blur"
                />
                <div className="absolute flex flex-row text-white text-center text-balance px-4 items-center justify-center gap-1.5 top-0 left-0 w-full h-full bg-black/30 z-[1] opacity-0 hover:opacity-100 duration-150">
                  <Image src={impact.icon} className="w-12 h-12" alt="icon" />
                  <p className="font-clash font-semibold text-4xl lg:text-5xl">
                    {impact.label}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurImpact;
