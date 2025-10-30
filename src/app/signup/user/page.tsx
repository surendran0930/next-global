"use client";
import { useFormState } from "react-dom";
// import { signupUserAction, type AuthState } from "@/app/(auth)/actions";
import { Button } from "@/components/ui/button";
import LoginInput from "@/components/ui/Inputs/LoginInput";
import InputPassword from "@/components/ui/Inputs/InputPassword";
import { AuthState, signupUserAction } from "./action";

const initial: AuthState = {};

export default function UserSignupForm() {
  const [state, action] = useFormState(signupUserAction, initial);
  console.log(state, "stste");

  return (
    <form
      action={action}
      className="max-w-[420px] mx-auto bg-white mt-12 space-y-4"
    >
      {state?.error && <p className="text-red-600">{state.error}</p>}
      <LoginInput
        name="username"
        label="Username"
        placeholder="your username"
      />
      <LoginInput name="email" label="Email" type="email" required />
      <InputPassword name="password" label="Password" required />
      <InputPassword name="confirmPassword" label="Confirm Password" required />
      <Button type="submit" className="w-full">
        Create User Account
      </Button>
    </form>
  );
}
