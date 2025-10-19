import React from "react";

const page = () => {
  return (
    <main className="pt-4 lg:pt-8 pb-20 lg:pb-24">
      <section className="flex flex-col items-end w-full px-6">
        <div className="h-20 md:h-24 lg:h-28 shrink-0 mb-11 lg:mb-12"></div>
        <div className="w-full max-w-[1260px] flex flex-col lg:gap-10 mx-auto pt-12 lg:py-14 p-4 rounded-[50px] lg:rounded-[100px] bg-sona-lightBlue">
          <div className="w-full mx-auto flex flex-col gap-8 items-center lg:px-10">
            <h1 className="font-clash text-3xl lg:text-[50px] text-center font-semibold lg:leading-[60px]">
              Blog & News
            </h1>
            <p className="text-center text-sm lg:text-lg font-light">
              Explore the latest insights, news and updates from Sonaqode
            </p>
          </div>
        </div>
        <div className="w-full max-w-[1260px] flex flex-col gap-11 lg:gap-16 pt-10 lg:pt-12 mx-auto"></div>
      </section>
      <div className="w-full flex flex-row items-center justify-center gap-11">
        <button className="h-11 px-5 border border-gray-800 rounded-full">
          Blog
        </button>
        <button className="h-11 px-5 border border-gray-800 rounded-full">
          News
        </button>
      </div>

      <section className="pt-16 lg:pt-28 px-5">
        <div className="grid gap-10 grid-cols-1 lg:grid-cols-3 lg:gap-8 mx-auto max-w-[1260px]">
          <article className="rounded-[30px] overflow-hidden">
            <div className="w-full h-[320px] bg-sona-lightBlue"></div>
            <div className="flex flex-col items-start gap-6 p-4 bg-neutral-100">
              <p className="text-lg">
                Lorem ipsum dolor sit amet consectetur. At metus amet amet felis
                massa a massa. Cras quam vel nam auctor turpis.
              </p>
              <div className="flex px-6 py-1 bg-white rounded-full">Blog</div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
};

export default page;
