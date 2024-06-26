"use client";
import { forwardRef, useState } from "react";
import { cn } from "../../utils";
import { Label } from "./Label";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
  label?: string;
  error?: { message?: string };
};

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, icon, error, label, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState(false);
    return (
      <>
        {label && (
          <Label htmlFor={props.id} className="text-white text-sm mb-2">
            {label}
          </Label>
        )}

        <div
          className={cn(
            "flex h-10 w-full items-center overflow-clip rounded-lg border border-gray-200 bg-white text-base outline duration-150",

            isFocused
              ? "border-sona-blue/90 outline-[2px] outline-sona-blue/90"
              : "bg-gray-10 border-gray-300 outline-none",
            className,
          )}
        >
          {icon && (
            <label
              htmlFor={props.id}
              className={cn(
                "grid aspect-square h-full flex-shrink-0 cursor-pointer place-content-center self-stretch text-gray-400",
              )}
            >
              {icon}
            </label>
          )}

          <input
            {...props}
            ref={ref}
            type={props.type}
            onFocus={() => setIsFocused(true)}
            onBlur={() => setIsFocused(false)}
            className={cn(
              "h-full w-full flex-1 border-0 bg-transparent py-3 pr-4 text-sm bg-white text-baseBlack outline-none placeholder:text-gray-400",
              "pr-1",
              !icon && "pl-3",
            )}
          />
        </div>
        {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
      </>
    );
  },
);

Input.displayName = "Input";
