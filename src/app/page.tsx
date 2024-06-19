import { HowWeWork, WomanStanding } from "@/assets/images";
import Image from "next/image";
import HomeImageCarosel from "@/components/misc/homeImageCarosel";
import OurServices from "@/components/home/ourServices";
import WhySonaqode from "@/components/home/whySonaqode";
import Methodolody from "@/components/home/methodolody";
import OurClients from "@/components/home/ourClients";

export default function Home() {
  return (
    <main className="w-screen min-h-screen">
      <section className="relative flex items-end h-screen w-full bg-gray-200 text-white z-[1] pb-28 px-6">
        <HomeImageCarosel />
        <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-[2]"></div>
        <div className="flex flex-col gap-16 z-[3] w-full max-w-[1260px] mx-auto">
          <div className="flex flex-col gap-2">
            <h1 className="font-clash text-[56px] font-semibold leading-[68px] w-[634px]">
              Empowered by tech. Powered by talent.
            </h1>
            <p className="max-w-[507px] font-light">
              We help organisations integrate remote support, accelerating
              progress and uncovering opportunities.
            </p>
          </div>
          <button className="max-w-[190px] h-[60px] rounded-full bg-white text-sona-blue hover:bg-sona-blue hover:text-white duration-150">
            Learn more
          </button>
        </div>
      </section>
      <section className="pt-28">
        <div className="relative w-full max-w-[1210px] min-h-[650px] mx-auto flex flex-row items-end pb-16 pl-16 rounded-[100px] bg-sona-lightBlue">
          <div className="w-3/5 flex flex-col gap-10 h-full">
            <div className="flex flex-col gap-2">
              <h2 className="font-clash text-[50px] font-semibold leading-[60px] mb-3">
                We provide top-tier tech professionals
              </h2>
              <p className="font-light text-xl text-gray-500 text-balance">
                We are dedicated to providing top-tier tech professionals who
                deliver the solutions that your business needs to continue
                growing, innovating, and evolving. From start-ups to growing
                businesses, we have designed a comprehensive model that is
                adapted and hassle-free, aligning your business goals with
                dedicated experts. Making Sonaqode an invaluable partner in
                building a resilient extended workforce and propelling your
                business to new heights.
              </p>
            </div>
            <button className="w-[190px] h-[60px] rounded-full hover:bg-white hover:text-sona-blue bg-sona-blue text-white duration-150">
              Learn more
            </button>
          </div>
          <Image
            src={WomanStanding}
            alt="woman-standing"
            className="absolute h-[600px] w-auto bottom-0 right-4"
          />
        </div>
      </section>
      <OurServices />
      <WhySonaqode />
      <section className="pt-28">
        <div className="relative w-full max-w-[1210px] min-h-[650px] mx-auto flex flex-row items-end pb-16 pl-16 rounded-[100px] overflow-clip bg-sona-lightBlue text-white">
          <Image
            src={HowWeWork}
            alt="how-we-work"
            className="object-cover z-[1]"
            layout="fill"
          />
          <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-[2]"></div>
          <div className="w-3/6 flex flex-col gap-10 h-full z-[3]">
            <div className="flex flex-col gap-2">
              <h2 className="font-clash text-[50px] font-semibold leading-[60px] mb-3">
                How We Work
              </h2>
              <p className="font-light text-balance">
                We recognise the unique needs of every business, understanding
                that a one-size-fits-all approach is inadequate. That&apos;s why
                we emphasize simplicity and flexibility in our engagements,
                tailored to your convenience on demand.
              </p>
            </div>
            <button className="max-w-[190px] h-[60px] rounded-full bg-white text-sona-blue hover:bg-sona-blue hover:text-white duration-150">
              Learn more
            </button>
          </div>
        </div>
      </section>
      <Methodolody />
      <OurClients />
    </main>
  );
}
