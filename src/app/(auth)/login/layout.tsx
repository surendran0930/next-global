import Image from "next/image";
import React from "react";
import { LoginLogo } from "../../../../public/assets/images";

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="h-dvh flex justify-center items-center gap-[80px]">
      <div className="w-[1210px] flex justify-center items-center gap-[80px]">
        <div className="w-1/2">
          <Image alt="Logo" src={LoginLogo} />
        </div>
        <div className="w-1/2">{children}</div>
      </div>
    </div>
  );
};

export default layout;
