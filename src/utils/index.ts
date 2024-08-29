import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isDev = process.env.NODE_ENV === "development";

export const baseUrl = "https://www.sonaqode.co.uk";
// export const baseUrl = "https://sonaqode-web.vercel.app";

export async function wait(ms: number) {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
}

export function formatCurrency(amount: number) {
  return amount
    .toLocaleString("en-US", {
      style: "currency",
      currency: "GBP",
    })
    .split(".")[0];
}
