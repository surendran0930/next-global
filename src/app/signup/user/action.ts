"use server";

// import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { createClient } from "../../../../utils/supabase/server";
// import type { AuthState } from "./types-or-wherever"; // or inline { error?: string }
export type AuthState = { error?: string };
const toErr = (error: string): AuthState => ({ error });
// const targetForRole = (role: "admin" | "user") =>
//   role === "admin" ? "/admin/dashboard" : "/user/dashboard";
/** USER SIGNUP (username, email, password) */
export async function signupUserAction(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const confirmPassword = String(formData.get("confirmPassword") || "");
  const username = String(formData.get("username") || "").trim();

  if (!email || !password) return toErr("Email and password are required.");
  if (password.length < 6)
    return toErr("Password must be at least 6 characters.");
  if (password !== confirmPassword) return toErr("Passwords do not match.");

  const supabase = await createClient();
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        role: "user",
        username: username || null,
        onboarding_complete: false,
      },
    },
  });
  console.log(data, "data");
  console.log(error, "error");

  if (error) return toErr(error.message);

  if (data.user) {
    await supabase.from("profiles").upsert({
      id: data.user.id,
      full_name: username || null,
      role: "user",
      onboarding_complete: false,
    });
  }
  redirect("/login");
}
