import React from "react";
import { cn } from "@/utils";
import Image from "next/image";
import Subscribe from "@/components/services/details/subscribe";
import { getServiceData, softwareData } from "@/data/softwareData";
import NotFound from "next/dist/client/components/not-found-error";
import KeysAndSkills from "@/components/services/details/keysAndSkills";

export async function generateStaticParams() {
  return softwareData.map((service, i) => ({
    id: service.title.replaceAll(" ", "-").replaceAll("/", "-").toLowerCase(),
  }));
}

const SWEDetailsPage = ({ params }: { params: { id: string } }) => {
  const service = getServiceData(params.id);

  if (!service) return NotFound();

  return (
    <main className="pt-4 lg:pt-8 pb-20 lg:pb-24">
      <section className="flex flex-col items-end w-full px-6">
        <div className="h-20 md:h-24 lg:h-28 shrink-0 mb-6 lg:mb-6"></div>
        <div
          className={cn(
            "relative w-full max-w-[1260px] flex flex-col items-center lg:items-stretch lg:flex-row gap-6 lg:gap-10 mx-auto py-12 pb-5 lg:py-14 px-4 lg:px-14 rounded-[50px] lg:rounded-[100px]",
            "bg-sona-lightBlue",
          )}
        >
          <div className="flex flex-1 flex-col gap-2 justify-center">
            <Image
              src={service.icon}
              className="w-20 lg:w-28 h-20 lg:h-28 object-contain"
              alt="floating_icon"
            />
            <div className="flex flex-col gap-1.5 lg:gap-2 justify-center">
              <h2 className="font-clash text-2xl md:text-4xl xl:text-5xl font-semibold">
                {service.title}
              </h2>
              <p className="md:text-base text-sm font-light">
                {service.description}
              </p>
            </div>
            <a href="#subscribe">
              <button className="w-[190px] h-[60px] rounded-full hover:bg-white hover:text-sona-blue bg-sona-blue text-white duration-150 mt-6">
                Subscribe
              </button>
            </a>
          </div>
          <Image
            src={service.image}
            placeholder="blur"
            className="h-auto w-full max-w-[440px] xl:max-w-[530px] aspect-[550/530] object-cover rounded-3xl lg:rounded-[58px]"
            alt="people"
          />
        </div>
      </section>
      <section
        id="services"
        className="flex flex-col items-center gap-8 px-5 pt-12 lg:pt-16"
      >
        <div className="w-full max-w-[1260px] flex flex-col mx-auto pt-12 lg:py-14 p-4 rounded-[50px] lg:rounded-[100px] bg-sona-lightBlue">
          <div className="w-full mx-auto flex flex-col gap-8 items-center lg:px-10">
            <h1 className="font-clash text-3xl lg:text-[40px] text-center font-medium lg:leading-[50px]">
              About This Role
            </h1>
            <div className="flex flex-col gap-8">
              {service.roles.map((role, index) => (
                <p key={index} className="text-sm lg:text-base font-light">
                  {role}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Subscribe service={service} />
      <KeysAndSkills service={service} />
    </main>
  );
};
export default SWEDetailsPage;
