import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const isDev = process.env.NODE_ENV === "development";

// export const baseUrl = "https://sonaqode.co.uk";
export const baseUrl = "https://sonaqode-web.vercel.app";
