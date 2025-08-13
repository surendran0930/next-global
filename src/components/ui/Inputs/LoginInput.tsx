import React from "react";
import { cn } from "@/lib/utils";
import { Label } from "../label";
interface Props extends React.ComponentProps<"input"> {
  label: string;
}

const LoginInput = ({
  className,
  type,
  label,

  ...props
}: Props) => {
  return (
    <div className="relative">
      <Label className="text-base-200 bg-primary-75 px-2  absolute left-4 bottom-[52px] z-10">
        {label}
      </Label>
      <input
        type={type}
        data-slot="input"
        className={cn(
          "p-4  border border-base-200 rounded-[4px] bg-transparent w-[393px] outline-none focus:outline-none text-base-200  text-[16px] ",
          className
        )}
        {...props}
      />
    </div>
  );
};

export default LoginInput;
