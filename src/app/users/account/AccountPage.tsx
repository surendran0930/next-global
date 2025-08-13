import Card from "@/components/Card";
import React from "react";

const AccountPage = () => {
  return (
    <div>
      <div className="border border-primary-500 w-[610px] px-6 pt-6 pb-[51px] rounded-[20px] flex flex-col items-center">
        <div className="flex items-start w-full">My Account</div>
        <div className="flex flex-col gap-4">
          <div>
            <div>Total Balance</div>
            <div>$15,595.015</div>
          </div>
          <Card />
        </div>
      </div>
    </div>
  );
};

export default AccountPage;
