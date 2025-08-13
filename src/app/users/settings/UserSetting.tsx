"use client";
import { Input } from "@/components/ui/Inputs/input";
import Image from "next/image";
import React, { useState } from "react";
import { Avatar } from "../../../../public/assets/images";
// import { Avatar } from "../../../public/assets/images";
interface BankDetails {
  accNo: string;
  accName: string;
  bankName: string;
  rocNo: string;
  swiftCodeNo: string;
}
const UserSetting = () => {
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
    <div className="w-full flex flex-col items-center gap-[80px] mt-6 ">
      <div className="flex flex-col  items-center ">
        <div>
          <Image alt="avatar" src={Avatar} />
        </div>
        <Input readOnly variant="secondary" placeholder="Ali" />
      </div>

      <div className="flex flex-col gap-12 ">
        <Input
          name="accNo"
          value={bankDeatils?.accNo}
          onChange={handleBankDetails}
          label="User ID"
          placeholder="5283 3456 7890 1289"
        />
        <Input
          name="accName"
          value={bankDeatils?.accName}
          onChange={handleBankDetails}
          label="User name"
          placeholder="Ali"
        />
        <Input
          name="bankName"
          value={bankDeatils?.bankName}
          onChange={handleBankDetails}
          label="Password"
          placeholder="***********"
        />
        <Input
          name="rocNo"
          value={bankDeatils?.rocNo}
          onChange={handleBankDetails}
          label="Scheme Name"
          placeholder="Abracada"
        />
      </div>
    </div>
  );
};

export default UserSetting;
