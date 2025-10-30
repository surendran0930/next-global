// import { NextResponse } from "next/server";
// import type { NextRequest } from "next/server";
// import { createServerClient } from "@supabase/ssr";

// /**
//  * Helpers
//  */
// function isPrefix(pathname: string, base: string) {
//   return pathname === base || pathname.startsWith(`${base}/`);
// }

// export async function middleware(req: NextRequest) {
//   const res = NextResponse.next();

//   const supabase = createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         get(name: string) {
//           return req.cookies.get(name)?.value;
//         },
//         set(name: string, value: string, options: any) {
//           res.cookies.set({ name, value, ...options });
//         },
//         remove(name: string, options: any) {
//           res.cookies.set({ name, value: "", ...options });
//         },
//       },
//     }
//   );

//   const url = req.nextUrl;
//   const path = url.pathname;

//   // Only guard the three route groups; bail early otherwise.
//   const touchesGuard =
//     isPrefix(path, "/admin") ||
//     isPrefix(path, "/user") ||
//     isPrefix(path, "/onboard");
//   if (!touchesGuard) return res;

//   // Fetch user once
//   const {
//     data: { user },
//     error,
//   } = await supabase.auth.getUser();

//   // Unauthenticated → redirect to /login with "redirectedFrom"
//   if (!user || error) {
//     const to = url.clone();
//     to.pathname = "/login";
//     to.searchParams.set("redirectedFrom", path);
//     return NextResponse.redirect(to);
//   }

//   // Read lightweight access flags from user_metadata (no DB call in middleware)
//   const role = (user.user_metadata?.role as string | undefined) ?? "user";
//   const onboardingComplete =
//     (user.user_metadata?.onboarding_complete as boolean | undefined) ?? false;

//   // ADMIN gate
//   if (isPrefix(path, "/admin")) {
//     if (role !== "admin") {
//       // Not an admin → 302 to /dashboard (or a 403 page if you prefer)
//       const to = url.clone();
//       to.pathname = "/dashboard";
//       return NextResponse.redirect(to);
//     }
//     return res; // admin allowed
//   }

//   // USER gate (any authenticated user allowed)
//   if (isPrefix(path, "/user")) {
//     return res;
//   }

//   // ONBOARD gate:
//   // - If onboarding is complete → send to dashboard (don’t let them re-enter onboarding)
//   // - If not complete → allow access to /onboard
//   if (isPrefix(path, "/onboard")) {
//     if (onboardingComplete) {
//       const to = url.clone();
//       to.pathname = "/dashboard";
//       return NextResponse.redirect(to);
//     }
//     return res;
//   }

//   return res;
// }

// // Match only the route groups we care about
// export const config = {
//   matcher: ["/admin/:path*", "/user/:path*", "/onboard/:path*"],
// };
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";

/** Helper to check if path starts with a base prefix */
function isPrefix(pathname: string, base: string) {
  return pathname === base || pathname.startsWith(`${base}/`);
}

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();

  // Supabase SSR client with cookie passthrough
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return req.cookies.get(name)?.value;
        },
        set(name: string, value: string, options: any) {
          res.cookies.set({ name, value, ...options });
        },
        remove(name: string, options: any) {
          res.cookies.set({ name, value: "", ...options });
        },
      },
    }
  );

  const url = req.nextUrl;
  const path = url.pathname;

  // Guard only admin, user, onboard routes
  const touchesGuard =
    isPrefix(path, "/admin") ||
    isPrefix(path, "/user") ||
    isPrefix(path, "/onboard");

  if (!touchesGuard) return res;

  // --- 1) Auth check ---
  const {
    data: { user },
    error: userErr,
  } = await supabase.auth.getUser();

  if (!user || userErr) {
    const to = url.clone();
    to.pathname = "/login";
    to.search = "";
    return NextResponse.redirect(to);
  }

  // --- 2) Authoritative role + onboarding from profiles table ---
  const { data: profile, error: pErr } = await supabase
    .from("profiles")
    .select("role,onboarding_complete")
    .eq("id", user.id)
    .single();

  if (pErr || !profile) {
    const to = url.clone();
    to.pathname = "/login";
    to.search = "";
    return NextResponse.redirect(to);
  }

  const role = profile.role as "admin" | "user";
  const onboardingComplete = !!profile.onboarding_complete;

  // --- 3) ADMIN gate ---
  if (isPrefix(path, "/admin")) {
    if (role !== "admin") {
      const to = url.clone();
      to.pathname = "/user";
      to.search = "";
      return NextResponse.redirect(to);
    }
    return res; // admin allowed
  }

  // --- 4) USER gate ---
  if (isPrefix(path, "/user")) {
    if (role !== "user") {
      const to = url.clone();
      to.pathname = "/admin";
      to.search = "";
      return NextResponse.redirect(to);
    }
    return res;
  }

  // --- 5) ONBOARD gate ---
  if (isPrefix(path, "/onboard")) {
    if (onboardingComplete) {
      const to = url.clone();
      to.pathname = role === "admin" ? "/admin" : "/user";
      to.search = "";
      return NextResponse.redirect(to);
    }
    return res;
  }

  return res;
}

export const config = {
  matcher: ["/admin/:path*", "/user/:path*", "/onboard/:path*"],
};
