import { cn } from "@/lib/utils";
import React from "react";
type CardDetails = {
  amount?: string; // e.g., "$5,750,20"
  cardNo?: string; // e.g., "5282 3456 7890 1289"
  validDate?: string; // e.g., "09/25"
  class?: string; // class name for styling, e.g., "card-primary"
};
const Card = ({
  amount = "$5,750,20",
  cardNo = "5282 3456 7890 1289",
  validDate = "09/25",
  class: className,
}: CardDetails) => {
  return (
    <div
      className={cn(
        "w-[326px] p-8 rounded-[20px]  flex flex-col gap-[68px] bg-linear-to-r from-[#EFD074] to-[#C3973D]",
        className
      )}
    >
      <div className="flex flex-col gap-1">
        <div className="text-[#ffffff] font-medium">Total Amount</div>
        <div className="text-[#ffffff] font-medium text-[28px]">{amount}</div>
      </div>
      <div className="flex justify-between">
        <div className="text-[#ffffff] font-medium">{cardNo}</div>
        <div className="text-[#ffffff] font-medium">{validDate}</div>
      </div>
    </div>
  );
};

export default Card;
