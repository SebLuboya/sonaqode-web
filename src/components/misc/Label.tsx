import { cn } from "@/utils";

type LabelProps = React.ComponentProps<"label">;

export const Label = ({ className, htmlFor, ...props }: LabelProps) => {
  return (
    <label
      htmlFor={htmlFor}
      className={cn("mb-1 block w-fit text-base", className)}
      {...props}
    >
      {props.children}
    </label>
  );
};
