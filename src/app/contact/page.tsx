import { ContactBanner } from "@/assets/images";
import Image from "next/image";
import React from "react";
import ContactForm from "@/components/forms/contactForm";
import Checkicon from "@/assets/icons/glyphs/Checkicon";
import { cn } from "@/utils";

export const metadata = {
  title: "Contact Us – Sonaqode",
};

const data = [
  "Expect a response within 24 hours.",
  "We’re open to signing an NDA, if needed.",
  "Discuss your project in details.",
];

export default function ContactUs() {
  return (
    <main className="relative w-screen flex-1 pt-4 lg:pt-8 bg-gray-300">
      <Image
        src={ContactBanner}
        alt="how-we-work"
        className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
        placeholder="blur"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/70 z-[2]"></div>
      <section className="relative z-[3] w-full lg:max-w-[1260px] px-5 lg mx-auto">
        <div className="h-20 md:h-24 lg:h-28 shrink-0 mb-11 lg:mb-12"></div>
        <section className="flex flex-col lg:flex-row justify-between gap-10 mb-16">
          <div className="flex flex-col gap-5 text-white">
            <div className="flex flex-col items-center gap-2">
              <h1 className="font-clash text-2xl lg:text-[40px] text-center font-semibold lg:leading-[60px]">
                Have A Project?
              </h1>
              <p className="text-balance text-center text-sm lg:text-base">
                Let’s connect
              </p>
            </div>
            <div className="w-full flex flex-col items-start gap-4 mt-5">
              <p className="text-balance text-center text-sm lg:text-base font-light">
                Send your details and we&apos;ll get in touch
              </p>
              {data.map((item) => (
                <div key={item} className="flex flex-row items-center gap-4">
                  <Checkicon
                    className={cn(
                      "w-5 lg:w-6 h-5 lg:h-6 shrink-0 text-sona-blue",
                    )}
                  />
                  <p className="font-light text-sm lg:text-base">{item}</p>
                </div>
              ))}
            </div>
            <div className="flex flex-col items-start gap-3 mt-5 lg:mt-12">
              <p className="text-balance text-center text-sm lg:text-base font-light">
                Reach out to us at
              </p>
              <h1 className="text-2xl lg:text-2xl text-center font-semibold">
                info@sonaqode.co.uk
              </h1>
            </div>
          </div>
          <ContactForm />
        </section>
      </section>
    </main>
  );
}
