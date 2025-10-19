import { formatCurrency } from "@/utils";
import { X } from "lucide-react";
import React from "react";

const SubscribeModal = ({
  onClose,
  service,
}: {
  onClose: () => void;
  service: {
    title: string;
    price: number;
    link: string;
  };
}) => {
  const vat = service.price * 0.2;

  return (
    <div className="w-[calc(100vw-32px)] lg:w-[640px] lg:mx-0 flex flex-col p-6 gap-2.5 bg-white rounded-xl">
      <div className="w-full flex flex-row items-start justify-between">
        <p className="font-bold text-[22px]">Welcome Aboard</p>
        <button onClick={onClose}>
          <X />
        </button>
      </div>
      <p className="text-light text-sm text-[#475467]">
        To initiate your subscription, kindly click the subscribe button. This
        will guide you through our streamlined payment procedure, which is
        secure, quick, and easy.
      </p>
      <div className="flex flex-col gap-3">
        <p className="font-medium">Order Summary</p>
        <div className="w-full flex flex-row items-start justify-between">
          <div className="flex items-center justify-center h-6 w-[60px] text-sm text-sona-blue rounded-full bg-sona-blue/15">
            1 item
          </div>
          <p className="text-xl font-semibold">
            {formatCurrency(service.price)}
          </p>
        </div>
        <hr className="my-3" />
        <div className="flex flex-col gap-3">
          <div className="w-full flex flex-row items-start justify-between">
            <p className="font-medium text-sm text-[#344054]">
              {service.title}
            </p>
            <p className="font-normal text-sm text-[#344054]">
              {formatCurrency(service.price)}
            </p>
          </div>
          {/* <div className="w-full flex flex-row items-start justify-between">
            <p className="font-medium text-sm text-[#344054]">VAT</p>
            <p className="font-normal text-sm text-[#344054]">
              {formatCurrency(vat)}
            </p>
          </div> */}
          <div className="w-full flex flex-row items-start justify-between">
            <p className="font-medium text-sm text-[#344054]">Total Due</p>
            <p className="font-normal text-sm text-[#344054]">
              {formatCurrency(service.price)}
            </p>
          </div>
        </div>
        <hr className="my-3" />
      </div>
      <p className="text-light text-sm text-[#475467]">
        You can cancel your subscription at any time. Cancellation will take
        effect one month after your next billing cycle, and a final payment will
        be charged.
      </p>
      <a
        href={service.link}
        target="_blank"
        className="mt-3 w-full h-12 flex items-center justify-center rounded-full hover:bg-white hover:text-sona-blue bg-sona-blue text-white duration-150"
        rel="noreferrer"
      >
        Subscribe
      </a>
    </div>
  );
};

export default SubscribeModal;
