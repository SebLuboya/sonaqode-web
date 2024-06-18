import { Poppins } from "next/font/google";
import localFont from "next/font/local";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

const clashDisplay = localFont({
  src: [
    {
      path: "./ClashDisplay-Variable.ttf",
      style: "normal",
      weight: "200 700",
    },
  ],
  style: "normal",
  variable: "--font-clash-display",
  weight: "200 700",
});

export const FONTS = {
  poppins,
  clashDisplay,
};
