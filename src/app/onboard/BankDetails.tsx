"use client";
import { Input } from "@/components/ui/Inputs/input";
import Image from "next/image";
import React, { useState } from "react";
import { Avatar } from "../../../public/assets/images";
interface BankDetails {
  accNo: string;
  accName: string;
  bankName: string;
  rocNo: string;
  swiftCodeNo: string;
}

const BankDetails = () => {
  const [bankDeatils, setBankDetails] = useState<BankDetails>({
    accNo: "",
    accName: "",
    bankName: "",
    rocNo: "",
    swiftCodeNo: "",
  });

  const handleBankDetails = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setBankDetails((prev) => ({ ...prev, [name]: value }));
  };

  //   const handleSubmit = () => {
  //     console.log(bankDeatils, "userData");
  //   };
  return (
    <div className="w-full flex flex-col items-center gap-[97px]">
      <div className="flex flex-col gap-[48px] items-center ">
        <div>
          <Image alt="avatar" src={Avatar} />
        </div>
        <Input variant="secondary" placeholder="Enter your name" />
      </div>

      <div className="flex flex-col gap-4">
        <div>Bank Details</div>
        <div className="flex flex-col gap-12 overflow-y-scroll">
          <Input
            name="accNo"
            value={bankDeatils?.accNo}
            onChange={handleBankDetails}
            label="Account number"
            placeholder="105-153928-101 (MYR)"
          />
          <Input
            name="accName"
            value={bankDeatils?.accName}
            onChange={handleBankDetails}
            label="Account name"
            placeholder="Ali"
          />
          <Input
            name="bankName"
            value={bankDeatils?.bankName}
            onChange={handleBankDetails}
            label="Bank name"
            placeholder="HSBC BANK MALAYSIA BERHAD"
          />
          <Input
            name="rocNo"
            value={bankDeatils?.rocNo}
            onChange={handleBankDetails}
            label="ROC number"
            placeholder="813160-P"
          />
          <Input
            name="swiftCodeNo"
            value={bankDeatils?.swiftCodeNo}
            onChange={handleBankDetails}
            label="Swift Code number"
            placeholder="HBMBMYKL"
          />
        </div>
      </div>
    </div>
  );
};

export default BankDetails;
