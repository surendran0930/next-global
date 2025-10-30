// // "use server";

// // import { redirect } from "next/navigation";
// // import { createClient } from "../../../../utils/supabase/server";

// // // optional helper to shape errors
// // type AuthState = { error?: string };
// // const toErr = (m: string): AuthState => ({ error: m });

// // async function getRole(userId: string) {
// //   const supabase = await createClient();
// //   const { data, error } = await supabase
// //     .from("profiles")
// //     .select("role")
// //     .eq("id", userId)
// //     .single();

// //   if (error || !data) return "user";
// //   return data.role;
// // }

// // export async function loginAction(_prevState: AuthState, formData: FormData) {
// //   const email = String(formData.get("userName") || "").trim(); // form field name = "userName"
// //   const password = String(formData.get("password") || "");

// //   if (!email || !password) return toErr("Email and password are required.");

// //   const supabase = await createClient();

// //   const { data, error } = await supabase.auth.signInWithPassword({
// //     email,
// //     password,
// //   });
// //   console.log(error, "erroir");

// //   if (error) return toErr(error.message);

// //   const user = data.user;
// //   console.log(user, "user");

// //   if (!user) return toErr("Invalid login.");

// //   // ✅ Fetch role from DB (profiles table)
// //   const role = await getRole(user.id);
// //   console.log(role, "role");

// //   // ✅ Supabase automatically sets cookies via createClient()
// //   // You don’t need to store accessToken manually.

// //   // Redirect based on role
// //   if (role === "admin") redirect("/admin");
// //   else redirect("/user");
// // }
// "use server";

// import { redirect } from "next/navigation";
// import { createClient } from "../../../../utils/supabase/server";

// export type AuthState = { error?: string };
// const toErr = (msg: string): AuthState => ({ error: msg });

// export async function loginAction(
//   _prev: AuthState,
//   formData: FormData
// ): Promise<AuthState> {
//   const email = String(formData.get("userName") || "").trim();
//   const password = String(formData.get("password") || "");

//   if (!email || !password) return toErr("Email and password are required.");

//   const supabase = await createClient();
//   const { error: signInErr } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   if (signInErr) return toErr(signInErr.message);

//   // Fetch current user and their role from `profiles`
//   const { data: userRes } = await supabase.auth.getUser();
//   const uid = userRes?.user?.id;
//   if (!uid) return toErr("Unable to fetch user info.");

//   const { data: profile, error: pErr } = await supabase
//     .from("profiles")
//     .select("role")
//     .eq("id", uid)
//     .single();

//   if (pErr || !profile?.role) return toErr("User role not found.");

//   // Redirect based purely on role
//   if (profile.role === "admin") redirect("/admin/dashboard");
//   // else redirect("/user/dashboard");
// }
"use server";

import { redirect } from "next/navigation";
import { createClient } from "../../../../utils/supabase/server";

export type AuthState = { error?: string };
const toErr = (msg: string): AuthState => ({ error: msg });

export async function loginAction(
  _prev: AuthState,
  formData: FormData
): Promise<AuthState> {
  const email = String(formData.get("userName") || "").trim();
  const password = String(formData.get("password") || "");

  if (!email || !password) return toErr("Email and password are required.");

  const supabase = await createClient();

  const { error: signInErr, data } = await supabase.auth.signInWithPassword({
    email,
    password,
  });
  // console.log(data, "signInErr");

  if (signInErr) return toErr(signInErr.message);

  const { data: userRes } = await supabase.auth.getUser();
  console.log(data, "data");

  const uid = userRes?.user?.id;
  console.log(uid);

  if (!uid) return toErr("User not found after login.");

  const { data: profile, error: pErr } = await supabase
    .from("profiles")
    .select("role")
    .eq("id", uid)
    .single();
  console.log(profile?.role, "profile");

  if (pErr) return toErr("Unable to fetch profile. Try again later.");
  if (!profile?.role) return toErr("Account missing role information.");

  // Explicit role handling
  if (profile.role === "admin") {
    redirect("/admin");
  } else if (profile.role === "user") {
    redirect("/users");
  } else {
    // If someone tampered with the role field or DB is inconsistent
    throw new Error(`Invalid role detected: ${profile.role}`);
  }

  // If nothing matched (just a fallback guard)
  throw new Error("Unexpected login state. Please contact support.");
}
