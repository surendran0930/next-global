"use client";
import Card from "@/components/Card";
import { Input } from "@/components/ui/Inputs/input";
import React, { useState } from "react";
interface BankDetails {
  accNo: string;
  accName: string;
  bankName: string;
  rocNo: string;
  swiftCodeNo: string;
}
const AccountPage = () => {
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
  return (
    <div className="flex flex-col gap-6">
      <div className="border border-primary-500 w-[610px] px-6 pt-6 pb-[51px] rounded-[20px] flex flex-col items-center gap-[18px]">
        <div className="flex items-start w-full font-bold text-[28px]">
          My Account
        </div>
        <div className="flex flex-col gap-4">
          <div>
            <div className="text-[#8C89B4] text-[18px]">Total Balance</div>
            <div className="text-[#FFFFFF] font-bold text-[28px]">
              $15,595.015
            </div>
          </div>
          <Card />
        </div>
      </div>
      <div className="flex flex-col gap-12 ">
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
  );
};

export default AccountPage;
