import Card from "@/components/Card";
import { Slider } from "@/components/ui/slider";
import React from "react";

const UserHome = () => {
  return (
    <div className="flex gap-[28px]">
      <div>
        <div className="border-[#7B5A14] border w-[666px] py-[31px] px-6 rounded-[20px]">
          <div>Your Unit of Share</div>
          <Slider className="w-[562px]" defaultValue={[30]} />
          <div className="text-[#89DB91]">3 months to complete the scheme</div>
        </div>
      </div>

      <div className="border border-[#7B5A14] px-[23px] py-[19px] flex flex-col gap-[18px] rounded-[20px]">
        <div>My Account </div>
        <Card />
      </div>
    </div>
  );
};

export default UserHome;
