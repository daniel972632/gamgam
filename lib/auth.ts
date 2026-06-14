import { createSupabaseBrowserClient } from "@/lib/supabase";

export async function signInWithEmail(email: string) {
  const supabase = createSupabaseBrowserClient();
  return supabase.auth.signInWithOtp({
    email,
    options: {
      emailRedirectTo: `${process.env.NEXT_PUBLIC_APP_URL ?? "http://localhost:3000"}/auth/callback`
    }
  });
}

export async function signOut() {
  const supabase = createSupabaseBrowserClient();
  return supabase.auth.signOut();
}
