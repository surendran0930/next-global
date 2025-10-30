"use client";
import { useFormState } from "react-dom";
export type AuthState = { error?: string };

import { Button } from "@/components/ui/button";
import LoginInput from "@/components/ui/Inputs/LoginInput";
import InputPassword from "@/components/ui/Inputs/InputPassword";
import { signupAdminAction } from "./action";

const initial: AuthState = {};

export default function AdminSignupForm() {
  const [state, action] = useFormState(signupAdminAction, initial);
  console.log(state, "state");

  return (
    <form
      action={action}
      className="max-w-[420px] mx-auto mt-12 space-y-4 bg-[#E9D3A4] "
    >
      {state?.error && <p className="text-red-600">{state.error}</p>}
      <LoginInput
        name="username"
        label="Admin Name"
        placeholder="admin username"
      />
      <LoginInput name="email" label="Admin Email" type="email" required />
      <InputPassword name="password" label="Password" required />
      <InputPassword name="confirmPassword" label="Confirm Password" required />
      {/* <LoginInput
        name="adminInvite"
        label="Admin Invite Code"
        type="password"
        required
      /> */}
      <Button type="submit" className="w-full">
        Create Admin Account
      </Button>
    </form>
  );
}
