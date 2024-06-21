import MinusCircle from "@/assets/icons/glyphs/MinusCircle";
import PlusCircle from "@/assets/icons/glyphs/PlusCircle";
import React from "react";

const Faq = () => {
  return (
    <section className="py-16 lg:py-28 px-5">
      <div className="relative w-full max-w-[1210px] flex flex-col lg:gap-10 mx-auto pt-12 lg:py-14 p-4 rounded-[50px] lg:rounded-[100px] bg-sona-lightBlue">
        <div className="w-full lg:max-w-[930px] mx-auto flex flex-col gap-8 items-center">
          <h2 className="font-clash text-3xl lg:text-[50px] text-center font-semibold lg:leading-[60px]">
            Frequently Asked Questions
          </h2>
          <div className="w-full flex flex-col gap-4">
            <div className="flex flex-row gap-5 lg:gap-6 bg-white p-6 lg:p-8 rounded-[30px]">
              <MinusCircle className="w-5 h-5 shrink-0 text-[#98A2B3] mt-1" />
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="font-medium text-base lg:text-lg">
                  When can we start our work?
                </p>
                <p className="text-sm lg:text-base font-light">
                  There is no need for delay! Take action immediately. Browse
                  and subscribe or send us your request, and we will promptly
                  get in touch with you.
                </p>
              </div>
            </div>
            <div className="flex flex-row gap-6  p-8 rounded-[30px]">
              <PlusCircle className="w-5 h-5 shrink-0 text-[#98A2B3] mt-1" />
              <div className="flex flex-col gap-1.5 lg:gap-2">
                <p className="font-medium text-base lg:text-lg">
                  How will I track the progress of my project?
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faq;
