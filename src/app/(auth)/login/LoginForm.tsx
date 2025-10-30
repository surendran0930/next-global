"use client";
import { Button } from "@/components/ui/button";
import InputPassword from "@/components/ui/Inputs/InputPassword";
import LoginInput from "@/components/ui/Inputs/LoginInput";
import React, { useActionState, useState } from "react";
import { loginAction } from "./action";
interface UserData {
  userName: string;
  password: string;
}
const LoginForm = () => {
  const [userData, setUserData] = useState<UserData>({
    userName: "",
    password: "",
  });

  const handleUserData = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    console.log(userData, "userData");
    // const finalRes = loginAction(userData);
  };
  type AuthState = { error?: string };
  const initialState: AuthState = {};
  const [state, formAction, isPending] = useActionState(
    loginAction,
    initialState
  );
  console.log(state);

  return (
    <form action={formAction}>
      <div className=" bg-[#E9D3A4] h-[624px] rounded-[36px] flex justify-center ">
        <div className="flex flex-col justify-center items-center gap-[80px]">
          <div className="text-[#7B5A14] text-[48px] leading-[68px] text-center">
            Login
          </div>
          <div className="flex flex-col gap-[60px]">
            <div className="flex flex-col gap-[40px]">
              <LoginInput
                name="userName"
                label="Username"
                placeholder="Enter the username"
                value={userData?.userName}
                onChange={handleUserData}
              />
              <InputPassword
                name="password"
                placeholder="Enter the password"
                label="Password"
                value={userData?.password}
                onChange={handleUserData}
              />
            </div>
            <div className="flex justify-center">
              <Button type="submit" onClick={handleSubmit}>
                LOGIN
              </Button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default LoginForm;
