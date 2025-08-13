import * as React from "react";

import { cn } from "@/lib/utils";
import { Label } from "../label";
// type InputProps = React.ComponentProps<"input"> & {
//   variant?: "default" | "secondary";
// };
interface Props extends React.ComponentProps<"input"> {
  label?: string;
  variant?: "default" | "secondary";
}

function Input({
  className,
  type,
  variant = "default",
  label,
  ...props
}: Props) {
  return (
    <div>
      <Label className="text-primary-500 pl-4 text-[12px] ">{label}</Label>
      <input
        type={type}
        data-slot="input"
        className={cn(
          "w-[712px] border-x-0 border-t-0 border-b-2 pl-4 border-primary-500 text-primary-500  focus:outline-none placeholder-primary-500 pb-1 ",
          variant === "secondary" &&
            "border-0 text-[#808080] placeholder-[#808080] font-bold text-[48px] w-max text-center pl-0",
          className
        )}
        {...props}
      />
    </div>
  );
}

export { Input };
