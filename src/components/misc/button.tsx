"use client";
import { cn } from "@/utils";
import React from "react";
import { Oval } from "react-loader-spinner";

type ButtonProps = {
  label?: string;
  isLoading?: boolean;
} & React.ComponentPropsWithoutRef<"button">;
const Button = ({ label, isLoading = false, ...props }: ButtonProps) => {
  return (
    <button
      {...props}
      className={cn(
        "flex items-center justify-center w-[130px] md:w-[150px] xl:w-[190px] h-11 xl:h-[60px] text-sm lg:text-base rounded-full bg-white text-sona-blue hover:bg-sona-blue hover:text-white duration-150",
        props.className,
      )}
    >
      {isLoading ? (
        <Oval
          width={24}
          color="#fff"
          secondaryColor="#ffffff84"
          strokeWidth={3}
        />
      ) : (
        props.children ?? label
      )}
    </button>
  );
};

export default Button;
