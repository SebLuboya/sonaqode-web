import HomeImageCarosel from "@/components/homeImageCarosel";

export default function Home() {
  return (
    <main className="w-screen min-h-screen text-white">
      <section className="relative flex items-end h-screen w-full bg-gray-200 z-[1] pb-28 px-6">
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
      <section className="h-screen w-full"></section>
    </main>
  );
}
