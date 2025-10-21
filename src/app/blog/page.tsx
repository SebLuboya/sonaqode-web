"use client";
import { Sdg2 } from "@/assets/images";
import Image from "next/image";
import React, { use, useState } from "react";

const Page = ({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string }>;
}) => {
  const search = use(searchParams);
  const [filter, setFilter] = useState(
    search.filter ? search.filter : "",
  );

  const data = [
    {
      type: "blog",
      title:
        "Lorem ipsum dolor sit amet consectetur. At metus amet amet felis massa a massa. Cras quam vel nam auctor turpis.",
      image: Sdg2,
    },
  ].filter((item) => (filter ? item.type === filter : true));
  return (
    <main className="pt-4 lg:pt-8 pb-20 lg:pb-24">
      <section className="flex flex-col items-end w-full px-6">
        <div className="h-20 md:h-24 lg:h-24 shrink-0 mb-10 "></div>
        <div className="w-full max-w-[1260px] flex flex-col lg:gap-10 mx-auto pt-12 lg:py-10 p-4 rounded-[50px] lg:rounded-[80px] bg-sona-lightBlue">
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
        {["blog", "news"].map((item) => (
          <button
            key={item}
            className={`h-11 px-5 border border-gray-800 rounded-full ${
              filter === item ? "bg-gray-800 text-white" : "bg-white"
            } duration-150 capitalize`}
            onClick={() => {
              if (filter === item) {
                setFilter("");
              } else {
                setFilter(item);
              }
            }}
          >
            {item}
          </button>
        ))}
      </div>

      <section className="pt-16 lg:pt-16 px-5">
        <div className="grid gap-10 grid-cols-1 lg:grid-cols-3 lg:gap-8 mx-auto max-w-[1260px]">
          {data.length === 0 ? (
            <div className="col-span-1 lg:col-span-3 flex flex-col items-center justify-center gap-6 p-10 bg-neutral-50 rounded-[30px]">
              <div className="w-full max-w-[560px] text-center">
                <h2 className="text-2xl lg:text-3xl font-semibold">
                  No articles here
                </h2>
                <p className="mt-2 text-sm text-neutral-600">
                  We couldn&apos;t find any articles matching your selection.
                  Try clearing the filter or check back later for new content.
                </p>
                <div className="mt-6 flex items-center justify-center">
                  <button
                    className="px-5 py-2 rounded-full bg-gray-800 text-white"
                    onClick={() => setFilter("")}
                  >
                    Clear filter
                  </button>
                </div>
              </div>
            </div>
          ) : (
            data.map((item, idx) => (
              <article key={idx} className="rounded-[30px] overflow-hidden">
                <div className="w-full h-[200px] bg-sona-lightBlue">
                  <Image
                    className="w-full h-full object-cover"
                    src={item.image}
                    alt="image"
                  />
                </div>
                <div className="flex flex-col items-start gap-6 p-4 bg-neutral-100">
                  <p className="text-lg">{item.title}</p>
                  <div className="flex px-6 py-1 bg-white rounded-full">
                    {item.type}
                  </div>
                </div>
              </article>
            ))
          )}
        </div>
      </section>
    </main>
  );
};

export default Page;
