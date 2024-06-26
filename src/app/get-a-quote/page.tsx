import { GetQuoteBanner } from "@/assets/images";
import { Checkbox } from "@/components/misc/Checkbox";
import { Input } from "@/components/misc/Input";
import TextArea from "@/components/misc/TextArea";
import Button from "@/components/misc/button";
import SingleImageDropzone from "@/components/misc/dropzones/singleFileDropzone";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata = {
  title: "Get A Quote – SonaQode",
};

export default function GetAQuote() {
  return (
    <main className="relative w-screen flex-1 pt-4 lg:pt-8 bg-gray-300">
      <Image
        src={GetQuoteBanner}
        alt="how-we-work"
        className="absolute top-0 left-0 w-full h-full object-cover z-[1]"
        placeholder="blur"
      />
      <div className="absolute top-0 left-0 w-full h-full bg-black/30 z-[2]"></div>
      <section className="relative z-[3] w-full lg:w-[690px] px-5 lg mx-auto">
        <div className="h-20 md:h-24 lg:h-28 shrink-0 mb-11 lg:mb-12"></div>
        <section className="flex flex-col items-center gap-12 mb-16">
          <div className="w-full mx-auto flex flex-col gap-4 items-center text-white">
            <h1 className="font-clash text-3xl lg:text-[40px] text-center font-semibold lg:leading-[60px]">
              Get A Quote
            </h1>
            <p className="text-balance text-center font-light">
              Please complete the details below.
            </p>
          </div>
          <div className="flex flex-col gap-6 w-full">
            <div>
              <Input label="Name" placeholder="Full Name" className="w-full" />
            </div>
            <div>
              <Input
                label="Company name"
                placeholder="Company name"
                className="w-full"
              />
            </div>
            <div>
              <Input
                label="Email Address"
                type="email"
                placeholder="you@yourcompany.com"
                className="w-full"
              />
            </div>
            <div>
              <Input
                label="Phone number"
                placeholder="+44 (555) 000-0000"
                className="w-full"
              />
            </div>
            <div>
              <Input
                label="Subject"
                placeholder="How can we help you?"
                className="w-full"
              />
            </div>
            <div>
              <TextArea
                label="Tell us about your project"
                className="w-full min-h-36"
                placeholder="Confidentiality of your project is our top priority. The information you provide is protected through our standard NDA"
              />
            </div>
            <SingleImageDropzone className="w-full h-28 rounded-md" />
            <div className="flex flex-row gap-1">
              <Checkbox
                labelText="You agree to our friendly"
                labelClassName="text-white font-light"
              />
              <Link
                href="/privacy-policy"
                className="text-white font-light underline underline-offset-2"
              >
                privacy policy.
              </Link>
            </div>
            <Button className="w-full lg:w-full h-12 lg:h-12 mt-8 hover:bg-white hover:text-sona-blue bg-sona-blue text-white ">
              Send Message
            </Button>
          </div>
        </section>
      </section>
    </main>
  );
}
