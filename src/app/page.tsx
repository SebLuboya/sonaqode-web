import { GlobalReach, HowWeWork, WomanStanding } from "@/assets/images";
import Image from "next/image";
import HomeImageCarosel from "@/components/misc/homeImageCarosel";
import OurServices from "@/components/home/ourServices";
import WhySonaqode from "@/components/home/whySonaqode";
import Methodolody from "@/components/home/methodolody";
import Button from "@/components/misc/button";
import Link from "next/link";
import OurClientsNew from "@/components/home/ourClientsNew";
import Metrics from "@/components/home/metrics";

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <section className="relative flex items-end h-[630px] lg:h-screen w-full bg-gray-200 text-white z-[1] pb-16 xl:pb-28 px-6">
        <HomeImageCarosel />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-[2]"></div>
        <div className="flex flex-col gap-9 xl:gap-16 z-[3] w-full xl:max-w-[1260px] mx-auto">
          <div className="flex flex-col gap-2">
            <h1 className="font-clash text-2xl md:text-4xl xl:text-[56px] font-semibold xl:leading-[68px] md:w-[400px] xl:w-[634px]">
              Empowered by tech. Powered by talent.
            </h1>
            <p className="md:max-w-[450px] xl:max-w-[520px] font-light">
              We empower organisations to integrate remote support, accelerating
              their progress and unlocking new opportunities for growth.
            </p>
          </div>
          <Link href="/about">
            <Button>Learn more</Button>
          </Link>
        </div>
      </section>
      <section className="pt-11 lg:pt-28 px-5">
        <div className="relative w-full xl:max-w-[1260px] min-h-[550px] xl:min-h-[650px] mx-auto flex flex-col gap-10 lg:flex-row items-end pt-10 px-4 lg:pb-16 lg:pl-16 rounded-[50px] lg:rounded-[100px] bg-sona-lightBlue">
          <div className="w-full lg:w-3/5 flex flex-col gap-10 h-full">
            <div className="flex flex-col gap-2">
              <h2 className="font-clash text-3xl lg:text-[50px] font-semibold lg:leading-[60px] capitalize mb-3">
                On-demand talent solution helping you thrive
              </h2>
              <p className="font-light text-sm lg:text-[17px] text-gray-500 leading-[27px]">
                We connect you with top-tier tech professionals to build a
                resilient, extended remote workforce. Our value-driven solutions
                and flexible model seamlessly integrates expert talent with your
                operations, allowing you to focus on your strategic goals while
                we manage the staffing needs.
              </p>
              <p className="font-light text-sm lg:text-[17px] text-gray-500 leading-[27px]">
                Discover a smarter way to scale.
              </p>
            </div>
            <Link href="/about">
              <Button className="hover:bg-white hover:text-sona-blue bg-sona-blue text-white">
                Learn more
              </Button>
            </Link>
          </div>
          <Image
            src={WomanStanding}
            alt="woman-standing"
            className="lg:absolute w-full h-auto md:h-[500px] xl:h-[600px] lg:w-auto bottom-0 right-4"
          />
        </div>
      </section>
      <OurServices />
      <WhySonaqode />
      <Metrics />
      <section className="pt-16 lg:pt-28 px-5">
        <div className="relative w-full lg:max-w-[1260px] md:min-h-[550px] xl:min-h-[630px] mx-auto flex flex-row items-end px-5 py-12 lg:pb-16 lg:pl-16 rounded-[35px] lg:rounded-[100px] overflow-clip bg-sona-lightBlue text-white">
          <Image
            src={GlobalReach}
            alt="global-reach"
            className="object-cover z-[1]"
            layout="fill"
            placeholder="blur"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-[2]"></div>
          <div className="lg:w-3/6 w-full flex flex-col gap-8 lg:gap-10 h-full z-[3]">
            <div className="flex flex-col gap-2">
              <h2 className="font-clash text-3xl lg:text-[50px] font-semibold lg:leading-[60px] mb-1 lg:mb-3">
                Global Reach
              </h2>
              <p className="font-light text-balance">
                Experience seamless support. With teams in the UK and Ghana
                operating in the GMT zone, we work within your business hours.
                Our collaboration practices effortlessly transcend geographic,
                language, and cultural differences, delivering clear
                communication and outstanding results.
              </p>
            </div>
            <Link href="/about">
              <Button>Learn more</Button>
            </Link>
          </div>
        </div>
      </section>
      <Methodolody />
      <OurClientsNew />
    </main>
  );
}
