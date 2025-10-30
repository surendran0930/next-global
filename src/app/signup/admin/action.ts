"use server";

// import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import { createClient } from "../../../../utils/supabase/server";
// import type { AuthState } from "./types-or-wherever"; // or inline { error?: string }
export type AuthState = { error?: string };
const toErr = (error: string): AuthState => ({ error });
const targetForRole = (role: "admin" | "user") =>
  role === "admin" ? "/admin/dashboard" : "/user/dashboard";

/** ADMIN SIGNUP (no invite code) */
export async function signupAdminAction(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const email = String(formData.get("email") || "").trim();
  const password = String(formData.get("password") || "");
  const confirmPassword = String(formData.get("confirmPassword") || "");
  const username = String(formData.get("username") || "").trim();
  const invite = "super-secret-code-2025";
  if (!email || !password) return toErr("Email and password are required.");
  if (password.length < 6)
    return toErr("Password must be at least 6 characters.");
  if (password !== confirmPassword) return toErr("Passwords do not match.");
  if (invite !== process.env.ADMIN_INVITE) {
    return { error: "Invalid or missing admin invite code." };
  }

  const supabase = await createClient();

  // Anyone using this endpoint becomes admin
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        role: "admin",
        username: username || null,
        onboarding_complete: false,
      },
    },
  });
  console.log(data, "data");

  if (error) return toErr(error.message);

  if (data.user) {
    await supabase.from("profiles").upsert({
      id: data.user.id,
      full_name: username || null,
      role: "admin",
      onboarding_complete: false,
    });
  }

  redirect(targetForRole("admin"));
}
