import { StaticImageData } from "next/image";

export type QuoteFormInput = {
  name: string;
  companyName: string;
  email: string;
  phone: string;
  subject: string;
  description: string;
};

export type item = { title: string; values: item[] } | string;

export type IService = {
  title: string;
  icon: StaticImageData;
  image: StaticImageData;
  price: number;
  partTime?: number;
  description: string;
  roles: string[];
  skillSet: item[];
  keyDeliverables: {
    title: string;
    values: string[];
  }[];
};
