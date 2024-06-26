"use client";
import { cn } from "@/utils";
import React from "react";

type TextAreaProps = {
  label?: string;
  labelClassName?: string;
  containterClassName?: string;
  error?: { message?: string };
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ label, labelClassName, error, className, ...props }, ref) => {
    return (
      <div>
        {label && (
          <label
            htmlFor={props.id}
            className={cn(
              "block text-sm font-light text-white mb-2",
              labelClassName,
            )}
          >
            {label}
          </label>
        )}
        <div className={cn(label !== "" && "mt-1")}>
          <textarea
            className={cn(
              "block w-full rounded-md border border-gray-300 bg-white p-2 focus:outline-sona-blue sm:text-sm",
              error ? "border-red-600" : "",
              className,
            )}
            {...props}
            ref={ref}
          />
        </div>
        {error && <p className="mt-1 text-sm text-red-600">{error.message}</p>}
      </div>
    );
  },
);

TextArea.displayName = "TextArea";
export default TextArea;
