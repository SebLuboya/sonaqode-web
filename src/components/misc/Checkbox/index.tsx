import { cn } from "@/utils";
import "./checkbox.style.css";
import { forwardRef } from "react";

type CheckboxProps = React.ComponentProps<"input"> & {
  labelText?: string;
  labelClassName?: string;
};

export const Checkbox = forwardRef<HTMLInputElement, CheckboxProps>(
  ({ labelText, labelClassName, ...props }, ref) => {
    return (
      <label className="main items-start">
        <input type="checkbox" {...props} ref={ref} />
        <span className="geekmark mt-0.5"></span>

        {labelText && (
          <span className={cn("pl-4 select-none", labelClassName)}>
            {labelText}
          </span>
        )}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
