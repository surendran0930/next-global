"use client";
import React, { useState } from "react";
import { cn } from "@/lib/utils";
import { Label } from "../label";
import { CloseEye, ViewEye } from "../../../../public/assets/icons";
interface Props extends React.ComponentProps<"input"> {
  label: string;
}

const InputPassword = ({
  className,
  type,
  label,

  ...props
}: Props) => {
  const [showPassword, setShowPassword] = useState(false);
  // Toggle function
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="relative   ">
      <Label className="text-base-200 bg-primary-75 px-2  absolute left-4 bottom-[52px] z-10">
        {label}
      </Label>
      <input
        type={showPassword ? "text" : "password"} // Dynamic type based on state
        data-slot="input"
        className={cn(
          "p-4  border border-base-200 rounded-[4px] bg-transparent w-[393px] outline-none focus:outline-none text-base-200 relative text-[16px] ",
          className
        )}
        {...props}
      />
      <button
        onClick={togglePasswordVisibility}
        className="absolute bottom-4 right-4"
        type="button"
      >
        {!showPassword ? <CloseEye /> : <ViewEye />}
      </button>
    </div>
  );
};

export default InputPassword;
